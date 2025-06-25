import { getBlogPosts, getAllTags } from "@/services/blog";
import BlogList from "@/components/blog-list";

export const metadata = {
  title: "Blog",
  description: "My blogs on software development, life, and more.",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();
  const allTags = await getAllTags();

  return <BlogList initialPosts={posts} allTags={allTags} />;
}
