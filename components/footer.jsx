import Link from "next/link";
import Image from "next/image";
import { RxLinkedinLogo, RxGithubLogo, RxTwitterLogo } from "react-icons/rx";
import { BsWhatsapp } from "react-icons/bs";

export function Footer(){

  return (
    <footer className="bg-neutral-900 w-full h-auto">
      <div className="grid grid-cols-3 text-white">
      <div className="sm:border-b-2 ml-3 h-1/2"></div>
      <div className="w-full flex items-center justify-center">
        <Link href="https://www.linkedin.com/in/tvalverdes/" target="_blank">
        <RxLinkedinLogo className="text-3xl my-5 mx-4 socials" />
        </Link>
        <Link href="https://github.com/tvalverdes" target="_blank">
        <RxGithubLogo className="text-3xl my-5 mx-4 socials" />
        </Link>
        <Link href="https://wa.me/51936071037?text=Hola,%20vengo%20desde%20GameNext.%20Me%20gustaría%20conversar%20contigo" target="_blank">
        <BsWhatsapp className="text-3xl my-5 mx-4 socials" />
        </Link>
      </div>
      <div className="sm:border-b-2 mr-3 h-1/2"></div>
      </div>
      <div>
      <div className="w-full flex items-center justify-center select-none mt-4">
        <Image src="/img/logo-tvs.png" width={100} height={100} alt="Logo TVS"/>
      </div>
      
      <div><p className="w-full flex items-center text-center text-white justify-center mt-4 pb-4 px-4 select-none">Copyright © 2023 Tyrone Valverde Soriano</p></div>
      </div>
      
      

    </footer>
  );
}