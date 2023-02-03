import Image from "next/image";
import { Inter } from "@next/font/google";
import Hello from "../data/hello.mdx";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={"divide-y divide-gray-200 dark:divide-gray-700"}>
      <div className='pt-6 pb-8 space-y-2 md:space-y-5'>
        <h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14'>
          Latest
        </h1>
        <p className='text-lg leading-7 text-textMuted'>
          React, TIL등을 작성하는 기술블로그
        </p>
      </div>
      <ul className='divide-y divide-gray-200 dark:divide-gray-700'>
        <li className='py-12'>
          <article>
            <div className='space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline'>
              <dl>
                <dt className='sr-only'>Published on</dt>
                <dd className='text-base font-medium leading-6 text-textMuted'>
                  <time dateTime='2022-01-28T00:00:00.000Z'>
                    2023년 2월 3일
                  </time>
                </dd>
              </dl>
              <div className='space-y-5 xl:col-span-3'>
                <div className='space-y-6'>
                  <div>
                    <h2 className='text-2xl font-bold leading-8 tracking-tight'>
                      <a className='text-gray-900 dark:text-gray-100' href='#'>
                        최대공약수와 최소공배수
                      </a>
                    </h2>
                    <div className='flex flex-wrap'>
                      <a
                        className='mr-3 text-sm font-medium uppercase text-inlineTitle'
                        href='#'
                      >
                        algorithm
                      </a>
                      <a
                        className='mr-3 text-sm font-medium uppercase text-inlineTitle'
                        href='#'
                      >
                        math
                      </a>
                      <a
                        className='mr-3 text-sm font-medium uppercase text-inlineTitle'
                        href='#'
                      >
                        programmers
                      </a>
                    </div>
                  </div>
                  <div className='prose text-gray-500 max-w-none dark:text-gray-400'></div>
                  <a
                    className='prose text-gray-500 max-w-none dark:text-gray-400'
                    aria-label='Read "최대공약수와 최소공배수"'
                    href='#'
                  >
                    <div className='prose text-textMuted max-w-none'>
                      최대공약수와 최소공배수
                    </div>
                  </a>
                </div>
                <div className='text-base font-medium leading-6'></div>
              </div>
            </div>
          </article>
        </li>
        <li className='py-12'>
          <article>
            <div className='space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline'>
              <dl>
                <dt className='sr-only'>Published on</dt>
                <dd className='text-base font-medium leading-6 text-textMuted'>
                  <time dateTime='2022-01-28T00:00:00.000Z'>
                    2023년 2월 3일
                  </time>
                </dd>
              </dl>
              <div className='space-y-5 xl:col-span-3'>
                <div className='space-y-6'>
                  <div>
                    <h2 className='text-2xl font-bold leading-8 tracking-tight'>
                      <a className='text-gray-900 dark:text-gray-100' href='#'>
                        피보나치수열
                      </a>
                    </h2>
                    <div className='flex flex-wrap'>
                      <a
                        className='mr-3 text-sm font-medium uppercase text-inlineTitle'
                        href='#'
                      >
                        algorithm
                      </a>
                      <a
                        className='mr-3 text-sm font-medium uppercase text-inlineTitle'
                        href='#'
                      >
                        math
                      </a>
                      <a
                        className='mr-3 text-sm font-medium uppercase text-inlineTitle'
                        href='#'
                      >
                        programmers
                      </a>
                    </div>
                  </div>
                  <div className='prose text-gray-500 max-w-none dark:text-gray-400'></div>
                  <a
                    className='prose text-gray-500 max-w-none dark:text-gray-400'
                    aria-label='Read "최대공약수와 최소공배수"'
                    href='#'
                  >
                    <div className='prose text-textMuted max-w-none'>
                      피보나치수열
                    </div>
                  </a>
                </div>
                <div className='text-base font-medium leading-6'></div>
              </div>
            </div>
          </article>
        </li>
      </ul>
    </main>
  );
}
