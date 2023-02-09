import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import Link from "next/link";
import { RxLinkedinLogo, RxGithubLogo, RxTwitterLogo } from "react-icons/rx";
import { FiMail } from "react-icons/fi";

export default function Contact() {
  return (
    <>
      <Navbar title="Contact" description="Contact page of GameNext" />
      <div className="w-full py-10 h-screen sm:py-0 sm:h-[65vh] flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">Contact me</h1>
        <h2 className="text-lg w-3/4 sm:w-2/5 text-justify py-5">
          This is a practice project written by Tyrone V. S. in English for
          consistency with the API. If you have any suggestions or want to
          contact me, feel free to use these social networks
        </h2>
        <div className="sm:flex grid grid-cols-2 sm:flex-row gap-2">
          <Link
            href="https://www.linkedin.com/in/tvalverdes/"
            title="LinkedIn"
            target="_blank"
          >
            <RxLinkedinLogo className="text-5xl my-5 mx-4 socials" />
          </Link>
          <Link
            href="https://github.com/tvalverdes"
            title="Github"
            target="_blank"
          >
            <RxGithubLogo className="text-5xl my-5 mx-4 socials" />
          </Link>
          <Link
            href="https://twitter.com/tvalverdes"
            title="Twitter"
            target="_blank"
          >
            <RxTwitterLogo className="text-5xl my-5 mx-4 socials" />
          </Link>
          <a
            href="mailto:tvalverdes9@gmail.com?Subject=Contacto%20desde%20página%20Game%20Next"
            title="Mail me"
          >
            <FiMail className="text-5xl my-5 mx-4 socials" />
          </a>
        </div>
      </div>
      <div className="sm:absolute bottom-0 w-full">
      <Footer />
      </div>
    </>
  );
}
