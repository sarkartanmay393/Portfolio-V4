"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import BlurFade from "@/components/magicui/blur-fade";
import BlogSearch from "@/components/blog-search";

interface BlogPost {
  metadata: {
    [key: string]: any;
  };
  slug: string;
  source: string;
}

interface BlogListProps {
  initialPosts: BlogPost[];
  allTags: string[];
}

const BLUR_FADE_DELAY = 0.04;

export default function BlogList({ initialPosts, allTags }: BlogListProps) {
  const [filteredPosts, setFilteredPosts] = useState(initialPosts);
  
  const [showAllTags, setShowAllTags] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);

  const getDate = (date: string) => {
    return new Date(date).toLocaleString("en-us", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const handleSearch = useCallback((searchQuery: string, selectedTags: string[]) => {
    let filtered = initialPosts;

    // Filter by search query
    if (searchQuery && searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(post => 
        post.metadata.title.toLowerCase().includes(query) ||
        (post.metadata.summary && post.metadata.summary.toLowerCase().includes(query)) ||
        (post.metadata.tags && post.metadata.tags.some((tag: string) => tag.toLowerCase().includes(query)))
      );
    }

    // Filter by selected tags
    if (selectedTags && selectedTags.length > 0) {
      filtered = filtered.filter(post => 
        post.metadata.tags && 
        selectedTags.every(selectedTag => 
          post.metadata.tags!.includes(selectedTag)
        )
      );
    }

    setFilteredPosts(filtered);
  }, [initialPosts]);

  return (
    <section>
      <div className="flex items-center justify-between gap-8">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <h1 className="font-medium text-2xl mb-8 tracking-tighter">blogs</h1>
        </BlurFade>

        {/* <BlurFade delay={BLUR_FADE_DELAY * 1.5} className="w-1/2">
          <BlogSearch allTags={allTags} onSearch={handleSearch} />
        </BlurFade> */}
      </div>

      {filteredPosts.length === 0 ? (
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <div className="text-center py-8">
            <p className="text-muted-foreground">No blogs found matching your criteria.</p>
          </div>
        </BlurFade>
      ) : (
        filteredPosts.map((post, id) => (
          <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug + id}>
            <Link
              className="flex flex-col space-y-1 mb-4"
              href={post.slug ? `/blogs/${post.slug}` : post.metadata.url || '#'}
            >
              <div className="w-full flex flex-col">
                <p className="tracking-tight">{post.metadata.title}</p>
                <div className="flex items-center gap-2 h-6 text-xs text-muted-foreground">
                  <span>{getDate(post.metadata.publishedAt)}</span>
                  {post.metadata.readTimeInMinutes && (
                    <span className="text-xs text-blue-500/80 dark:text-blue-400/80 tracking-tighter">
                      {post.metadata.readTimeInMinutes} min read
                    </span>
                  )}
                </div>
                {/* {post.metadata.tags && post.metadata.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {post.metadata.tags.map((tag: string) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )} */}
              </div>
            </Link>
          </BlurFade>
        ))
      )}
    </section>
  );
} 