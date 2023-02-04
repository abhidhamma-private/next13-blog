export async function generateStaticParams() {
  const posts = [{ slug: "213" }, { slug: "123" }];

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function Page({ params }: any) {
  console.log(params);
  return <div>My Post</div>;
}
