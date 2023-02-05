import Image from "next/image";
import Hello from "../data/hello.mdx";
import { getAllFilesFrontMatter } from "@/util/mdx";
import { formatLong, stringToDate } from "@/util/date";
import { parseISO, toDate } from "date-fns";
import Link from "next/link";

interface Post {
  title: string;
  date: string;
  tags: string[];
  draft: boolean;
  summary: string;
  slug: string;
}

export default async function Home() {
  const posts: Post[] = await getAllFilesFrontMatter("menu");
  const mutatedPosts = posts.filter((post: any) => post.date !== null);
  // console.log(posts.filter((post: any) => post.date !== null));
  return (
    <main className={"divide-y divide-gray-200 dark:divide-gray-700"}>
      <div className='pt-6 pb-8 space-y-2 md:space-y-5'>
        <h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14'>
          Latest
        </h1>
        <p className='text-lg leading-7 text-textMuted'>
          학습한것을 정리하는 블로그
        </p>
      </div>
      <ul className='divide-y divide-gray-200 dark:divide-gray-700'>
        {mutatedPosts.map(({ slug, date, title, summary, tags }) => (
          <li className='py-12' key={slug}>
            <article>
              <div className='space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline'>
                <dl>
                  <dt className='sr-only'>Published on</dt>
                  <dd className='text-base font-medium leading-6 text-textMuted'>
                    <time dateTime='2022-01-28T00:00:00.000Z'>
                      {formatLong(new Date(date))}
                    </time>
                  </dd>
                </dl>
                <div className='space-y-5 xl:col-span-3'>
                  <div className='space-y-6'>
                    <div>
                      <h2 className='text-2xl font-bold leading-8 tracking-tight'>
                        <Link
                          className='text-gray-900 dark:text-gray-100'
                          href={`blog/${slug}`}
                        >
                          {title}
                        </Link>
                      </h2>
                      <div className='flex flex-wrap'>
                        {tags.map((tag) => (
                          <a
                            key={tag}
                            className='mr-3 text-sm font-medium uppercase text-inlineTitle'
                            href='#'
                          >
                            {tag}
                          </a>
                        ))}
                      </div>
                    </div>
                    <div className='prose text-gray-500 max-w-none dark:text-gray-400'></div>
                    <a
                      className='prose text-gray-500 max-w-none dark:text-gray-400'
                      aria-label='Read "최대공약수와 최소공배수"'
                      href='#'
                    >
                      <div className='prose text-textMuted max-w-none'>
                        {summary}
                      </div>
                    </a>
                  </div>
                  <div className='text-base font-medium leading-6'></div>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </main>
  );
}
