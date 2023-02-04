import fs from "fs";
import "./globals.css";
import logo from "../asset/logo.png";
import Image from "next/image";
import { HamburgerIcon } from "@/asset/svg/HamburgerIcon";
import path from "path";
import { getMenuList } from "@/util/files";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const menuList = getMenuList();
  return (
    <html lang='en'>
      <head />
      <body className='antialiased text-black bg-white dark:bg-backgroundPrimary dark:text-textNormal'>
        {/* 가운데 */}
        <div className='max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0 h-screen'>
          {/* 헤더 */}
          <div className='grid items-center pt-10'>
            <div className='h-10 text-2xl font-semibold grid grid-flow-col items-center grid-cols-[1fr_2fr]'>
              {/* 로고 */}
              <div className='sm:grid justify-start grid-flow-col items-center gap-1'>
                <Image className='w-7' src={logo} alt='' />
                <div className='hidden sm:grid'>지속가능한개발</div>
              </div>
              {/* 메뉴 */}
              <div className='hidden text-textMuted sm:grid grid-flow-col justify-between'>
                {[menuList[1], menuList[3], menuList[2], menuList[0]].map(
                  (menuName: string) => (
                    <div key={menuName}>{menuName}</div>
                  )
                )}
              </div>
              <div className='grid sm:hidden justify-end'>
                <button className='sm:grid w-8 h-8 rounded'>
                  <HamburgerIcon />
                </button>
              </div>
            </div>
          </div>
          {children}
          <footer>
            <div className='flex flex-col items-center mt-16'>
              <div className='flex mb-3 space-x-4'>
                <a
                  className='text-sm text-textNormal transition'
                  target='_blank'
                  rel='noopener noreferrer'
                  href='#'
                >
                  <span className='sr-only'>mail</span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    className='fill-textNormal h-6 w-6'
                  >
                    <path d='M2.003 5.884 10 9.882l7.997-3.998A2 2 0 0 0 16 4H4a2 2 0 0 0-1.997 1.884z'></path>
                    <path d='m18 8.118-8 4-8-4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.118z'></path>
                  </svg>
                </a>
                <a
                  className='text-sm text-textNormal transition'
                  target='_blank'
                  rel='noopener noreferrer'
                  href='#'
                >
                  <span className='sr-only'>github</span>
                  <svg
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                    className='h-6 w-6 fill-textNormal'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z'
                    ></path>
                  </svg>
                </a>
              </div>
              <div className='flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400'>
                <div>104.28</div>
                <div> • </div>
                <div>© 2023</div>
                <div> • </div>
                <a href='#'>지속가능한개발</a>
              </div>
              <div className='mb-8 text-sm text-gray-500 dark:text-gray-400'></div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
