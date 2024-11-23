// @flow strict
import Link from "next/link";
import { CgGitFork } from "react-icons/cg";
import { IoStar } from "react-icons/io5";

function Footer() {
  return (
    <div className="relative border-t bg-[#0d1224] mx-auto my-auto  border-[#353951] text-white">
      <div className="mx-auto px-6 sm:px-12 my-auto   lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2 my-auto mx-auto  bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
        <div className="flex flex-col md:flex-row my-auto mx-auto items-center justify-between">
          <p className="text-sm text-center">
            © Developer Portfolio by{" "}
            <Link
              target="_blank"
              href="https://linkedin.com/in/ritik-jain-77a863225/"
              className="text-[#16f2b3]"
            >
              Ritik Jain
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
