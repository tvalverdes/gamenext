import Link from "next/link";
import Image from "next/image";
import { use, useState } from "react";
import Head from 'next/head';

export function Navbar({ title, description }) {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
  <Head>
    <title>{ title }</title>
    <meta name="description" content={description} />
    <meta name="author" content="Tyrone Valverde Soriano" />
  </Head>
  
  
      <nav className="w-full bg-neutral-900 top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div className="w-full justify-between md:w-1/3">
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Image className="rounded-lg" src="/img/hutt.png" width={50} height={50} alt="Logo">
              </Image>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/close.svg" width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src="/hamburger-menu.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-start md:flex">
                <li className="border-white border-b-2 pb-4 text-lg text-white md:border-none py-2  md:pr-10 text-center md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link>
                </li>
                <li className="border-white border-b-2 pb-4 text-lg text-white md:border-none py-2 md:px-10 text-center  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#blog" onClick={() => setNavbar(!navbar)}>
                    Blogs
                  </Link>
                </li>
                <li className="border-white border-b-2 pb-4 text-lg text-white md:border-none py-2 md:px-10 text-center  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                    Contact
                  </Link>
                </li>
                <li className="border-white border-b-2 pb-4 text-lg text-white md:border-none py-2 md:px-10 text-center   md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                    Projects
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      </>
  );
}