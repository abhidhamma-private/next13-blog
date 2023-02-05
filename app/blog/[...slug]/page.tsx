import { getAllFilesFrontMatter, getFileBySlug } from "@/util/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Suspense } from "react";

const MDXRemotes: any = MDXRemote;

export async function generateStaticParams() {
  console.log("generateStaticParams");
  const posts = await getAllFilesFrontMatter("menu");

  console.log(
    posts.map((post: any) => ({
      slug: ["blog", post.slug],
    }))
  );
  return posts.map((post: any) => ({
    slug: ["blog", post.slug],
  }));
}

export default async function Page({ params }: any) {
  console.log("blog ...slug Page : ", params);
  console.log(decodeURIComponent(params.slug.join("/")));

  const post = await getFileBySlug(
    "menu",
    decodeURIComponent(
      params.slug.filter((item: any) => item !== "blog").join("/")
    )
  );
  console.log(post);

  return (
    <Suspense fallback={<>Loading...</>}>
      <MDXRemotes source={post} />
    </Suspense>
  );
}
