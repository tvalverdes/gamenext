import Link from "next/link";
import Image from "next/image";
import { use, useState } from "react";
import Head from 'next/head';
import { useRouter } from "next/router";
import { SlGameController } from "react-icons/sl";
import { HiMagnifyingGlassCircle } from "react-icons/hi2";

export function Navbar({ title, description }) {
  const {asPath} = useRouter();
  const [navbar, setNavbar] = useState(false);
  const router = useRouter();
  
  const validateSeachedGame = () =>{    
  let textSearched = document.getElementById("search").value.trim().toLowerCase();  
  router.push({
    pathname: `/search/${textSearched}`,
  })
  if (document.getElementById("closeBtn") != null) {
    document.getElementById("closeBtn").click();
  }
}

const searchByEnter = () =>{
    const inputBtn = document.getElementById("search");
    if (inputBtn.value != "") {
      inputBtn.addEventListener("keyup",(e)=>{
        if (e.key === "Enter") {
          validateSeachedGame();
        }}) 
      }     
    }
  return (
    <>
  <Head>
    <title>{ title }</title>
    <meta name="description" content={description} />
    <meta name="author" content="Tyrone Valverde Soriano" />
  </Head>  
      <nav className="w-full sticky bg-neutral-900 top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div className="w-full justify-between md:w-1/3">
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/"><SlGameController className="ml-10  xl:ml-0 text-white text-3xl"/></Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image id="closeBtn" src="/close.svg" width={30} height={30} alt="logo" />
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
              <ul className="h-screen md:h-auto text-center md:gap-5 lg:gap-20 items-center justify-start md:flex">
                <li className="border-white border-b-2 pb-4 md:pb-0 text-md text-white md:border-none py-2 md:py-0    md:hover:bg-transparent">
                  <Link href="/" className={asPath === "/" ? "text-purple-600" : "hover:text-purple-600"} onClick={() => setNavbar(!navbar)}>
                    Home
                  </Link>
                </li>
                <li className="border-white border-b-2 pb-4 md:pb-0 text-md text-white md:border-none py-2 md:py-0   md:hover:bg-transparent">
                  <Link href="/categories" className={asPath === "/categories" ? "text-purple-600" : "hover:text-purple-600"} onClick={() => setNavbar(!navbar)}>
                    Categories
                  </Link>
                </li>
                <li className="border-white border-b-2 pb-4 md:pb-0 text-md text-white md:border-none py-2 md:py-0   md:hover:bg-transparent">
                  <Link href="/contact" className={asPath === "/contact" ? "text-purple-600" : "hover:text-purple-600"} onClick={() => setNavbar(!navbar)}>
                    Contact
                  </Link>
                </li>
                <li className="pb-4 md:pb-0 text-3xl text-white md:border-none py-2 mt-5 md:mt-0 md:py-0   md:hover:bg-transparent">
                  <div className="relative flex justify-center items-center">
                  <input id="search" name="search" onKeyDown={searchByEnter} type="text" className="rounded-lg flex-row focus:outline-purple-700 w-full text-neutral-900 pl-3 text-[22px] md:text-lg" required/>
                  <button id="searchBtn" type="submit" onClick={validateSeachedGame}>
                  <HiMagnifyingGlassCircle className="absolute text-white top-0 -right-8"/>
                  </button>
                  </div>
                </li>
                {/*<li className="border-white border-b-2 pb-4 text-lg text-white md:border-none py-2 md:px-10   md:hover:bg-transparent">
                  <Link href="/games" className={asPath === "/games" ? "text-purple-600" : "hover:text-purple-600"} onClick={() => setNavbar(!navbar)}>
                    Games
                  </Link>
            </li>*/}
              </ul>
            </div>
          </div>
        </div>
      </nav>
      
      </>
      
  );
  
}