import { getPost } from "@/services/blog";
import { DATA } from "@/services/resume";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Image from "next/image";

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata | undefined> {
  let post = await getPost(params.slug);

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image ? `${DATA.url}${image}` : `${DATA.url}/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${DATA.url}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  let post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

const getDate = (date: string) => {
  return new Date(date).toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

  return (
    <section id="blog">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${DATA.url}${post.metadata.image}`
              : `${DATA.url}/og?title=${post.metadata.title}`,
            url: `${DATA.url}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: DATA.name,
            },
          }),
        }}
      />
      <h1 className="title font-medium text-2xl tracking-tighter max-w-[650px]">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
        <Suspense fallback={<p className="h-5" />}>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {getDate(post.metadata.publishedAt)}
          </p>
          {post.metadata.readTimeInMinutes && (
            <span className="text-xs text-blue-500/80 dark:text-blue-400/80 tracking-tighter">
              {post.metadata.readTimeInMinutes} min read
            </span>
          )}
        </Suspense>
      </div>
      
      {post.metadata.coverImage?.url && (
        <div className="mb-8 max-w-[650px]">
          <Image
            src={post.metadata.coverImage.url}
            alt={post.metadata.title}
            width={650}
            height={350}
            className="rounded-lg object-cover w-full"
            priority
          />
        </div>
      )}
      
      
      <article
        className="prose dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: post.source }}
      ></article>
      
      {post.metadata.originalPost && (
        <div className="mt-12 text-sm text-center text-gray-500 dark:text-gray-400">
          <p>
            Originally published at{" "}
            <a
              href={post.metadata.originalPost}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {new URL(post.metadata.originalPost).hostname}
            </a>
          </p>
        </div>
      )}

      <div className="mt-12 flex justify-center items-center prose dark:prose-invert opacity-60">
        —x—
      </div>
    </section>
  );
}
