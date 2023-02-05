import Tag from "@/components/Tags";
import { formatLong } from "@/util/date";
import { getMenuList } from "@/util/files";
import { getAllFilesFrontMatter } from "@/util/mdx";
import Link from "next/link";
import path from "path";

export async function generateStaticParams() {
  const menuList = getMenuList();

  return menuList.map((menu: string) => ({
    slug: menu,
  }));
}
export default async function Page({ params }: any) {
  const { slug: subject } = params;
  const posts = await getAllFilesFrontMatter(path.join("menu", subject));
  console.log("blog Page : ", params, posts);
  return (
    <>
      <div className='divide-y divide-gray-200 dark:divide-gray-700'>
        <div className='space-y-2 pt-6 pb-8 md:space-y-5'>
          <h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14'>
            {subject}
          </h1>
          <div className='relative max-w-lg'>
            <input
              aria-label='Search articles'
              type='text'
              // onChange={(e) => {
              //   console.log(e.target.value);
              // }}
              placeholder='Search articles'
              className='block w-full rounded-md border border-gray-300 bg-[#2a2a2a] px-4 py-2 text-textNormal focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100'
            />
            <svg
              className='absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              />
            </svg>
          </div>
        </div>
        <ul>
          {!posts.length && "No posts found."}
          {posts.map(({ slug, date, title, summary, tags }: any) => {
            return (
              <li key={slug} className='py-4'>
                <article className='space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0'>
                  <dl>
                    <dt className='sr-only'>Published on</dt>
                    <dd className='text-base font-medium leading-6 text-gray-500 dark:text-gray-400'>
                      <time dateTime={date}> {formatLong(new Date(date))}</time>
                    </dd>
                  </dl>
                  <div className='space-y-3 xl:col-span-3'>
                    <div>
                      <h3 className='text-2xl font-bold leading-8 tracking-tight'>
                        <Link
                          href={`/blog/${subject}/${slug}`}
                          className='text-gray-900 dark:text-gray-100'
                        >
                          {title}
                        </Link>
                      </h3>
                      <div className='flex flex-wrap'>
                        {tags.map((tag: string) => (
                          <Tag key={tag} text={tag} />
                        ))}
                      </div>
                    </div>
                    <div className='prose max-w-none text-gray-500 dark:text-gray-400'>
                      {summary}
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
