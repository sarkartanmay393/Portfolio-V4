import fs from "fs";
import matter from "gray-matter";
import path from "path";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import { URLSearchParams } from "url";

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  tags?: string[];
};

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

export async function markdownToHTML(markdown: string) {
  const p = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      theme: {
        light: "min-light",
        dark: "min-dark",
      },
      keepBackground: false,
    })
    .use(rehypeStringify)
    .process(markdown);

  return p.toString();
}

export async function getPost(slug: string) {
  const filePath = path.join("content", `${slug}.mdx`);
  let source = fs.readFileSync(filePath, "utf-8");
  const { content: rawContent, data: metadata } = matter(source);
  const content = await markdownToHTML(rawContent);
  return {
    source: content,
    metadata,
    slug,
  };
}

async function getAllPosts(dir: string) {
  let mdxFiles = getMDXFiles(dir);
  return Promise.all(
    mdxFiles.map(async (file) => {
      let slug = path.basename(file, path.extname(file));
      let { metadata, source } = await getPost(slug);
      return {
        metadata,
        slug,
        source,
      };
    })
  );
}

async function _getHashnodeBlogs() {
  const queryBlogs = async (endCursor: string) => {
    const hashnodeApi = "https://gql.hashnode.com";
  
    try {
      const resp = await fetch(hashnodeApi, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_HASHNODE_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
            query ($endCursor: String) {
              publication(host: "tanmaysarkar.hashnode.dev") {
                posts(first: 12, after: $endCursor) {
                  totalDocuments
                  pageInfo {
                    hasNextPage
                    endCursor
                  }
                  edges {
                    node {
                      id
                      title
                      brief
                      publishedAt
                      url
                      readTimeInMinutes
                      views
                      coverImage {
                        url
                      }
                    }
                  }
                }
              }
            }
          `,
          variables: {
            endCursor: endCursor,
          },
        }),
      });
  
      const json = await resp.json();
  
      if (!resp.ok) {
        throw new Error("Error");
      }
  
      return json;
    } catch (err) {
      console.error(err);
      return null;
    }
  };
  const searchParams = new URLSearchParams();

  const endCursor = searchParams.get('endCursor');
  const hashnodeResp = await queryBlogs(endCursor ?? '');
  const posts = hashnodeResp.data.publication.posts as {
    totalDocuments: number;
    pageInfo: {
      hasNextPage: boolean;
      endCursor: string;
    };
    edges: [
      {
        node: {
          id: string;
          title: string;
          brief: string;
          publishedAt: string;
          url: string;
          readTimeInMinutes: number;
          views: number;
          coverImage: {
            url: string;
          };
        };
      }
    ];
  };
  const format = {
    blogs: posts.edges.map((n) => ({
      metadata: {
        publishedAt: n.node.publishedAt.split('T')[0] || '1900-12-12',
        title: n.node.title,
        url: n.node.url,
      },
      id: n.node.id,
      description: n.node.brief,
      slug: '',
      readTimeInMinutes: n.node.readTimeInMinutes,
      views: n.node.views,
      image: n.node.coverImage.url,
      source: '',
    })),
    total: posts.totalDocuments,
    hasNext: posts.pageInfo.hasNextPage,
    endCursor: posts.pageInfo.endCursor,
  };

  // console.log('form', format);
  return format.blogs;
}

export async function getAllTags() {
  const posts = await getAllPosts(path.join(process.cwd(), "content"));
  const allTags = new Set<string>();
  
  posts.forEach(post => {
    if (post.metadata.tags) {
      post.metadata.tags.forEach((tag: string) => allTags.add(tag));
    }
  });
  
  return Array.from(allTags).sort();
}

export async function getBlogPosts(searchQuery?: string, selectedTags?: string[]) {
  const allPosts = await getAllPosts(path.join(process.cwd(), "content"));
  
  let filteredPosts = allPosts.filter((post) => 
    post.source !== '' && post.metadata.publishedAt
  );

  // Filter by search query
  if (searchQuery && searchQuery.trim()) {
    const query = searchQuery.toLowerCase();
    filteredPosts = filteredPosts.filter(post => 
      post.metadata.title.toLowerCase().includes(query) ||
      (post.metadata.summary && post.metadata.summary.toLowerCase().includes(query)) ||
      (post.metadata.tags && post.metadata.tags.some((tag: string) => tag.toLowerCase().includes(query)))
    );
  }

  // Filter by selected tags
  if (selectedTags && selectedTags.length > 0) {
    filteredPosts = filteredPosts.filter(post => 
      post.metadata.tags && 
      selectedTags.every(selectedTag => 
        post.metadata.tags!.includes(selectedTag)
      )
    );
  }

  return filteredPosts.sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1;
    }
    return 1;
  });
}
