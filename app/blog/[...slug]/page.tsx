import { getAllFilesFrontMatter } from "@/util/mdx";

export async function generateStaticParams() {
  const posts = await getAllFilesFrontMatter("menu");

  return posts.map((post: any) => ({
    slug: ["blog", post.slug],
    data: post.slug,
  }));
}

export default async function Page({ params }: any) {
  console.log("blog ...slug Page : ", params);
  console.log(params.slug.join("/"));
  // const post = await getFileBySlug("blog", params.slug.join("/"));
  // console.log(post);
  return <div>My Post</div>;
}
