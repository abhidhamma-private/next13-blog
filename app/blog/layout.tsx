import { getAllFilesFrontMatter } from "@/util/mdx";
// export async function generateStaticParams() {
//   const posts = await getAllFilesFrontMatter("menu");

//   return posts.map((post: any) => ({
//     post: post.slug,
//   }));
// }

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
