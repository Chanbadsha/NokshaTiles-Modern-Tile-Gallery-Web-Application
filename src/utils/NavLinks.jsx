"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = ({ href, children }) => {
  const pathName = usePathname();
  const isActive = pathName === href;

  return (
    <Link
      href={href}
      className={`
    relative text-sm md:text-base font-semibold font-epi
    transition-colors duration-300
    hover:text-[#3B82F6]
    ${isActive ? "text-[#3B82F6]" : "text-gray-700"}
    after:content-[''] after:absolute after:left-0 after:-bottom-1
    after:h-0.5 after:w-0 after:bg-[#3B82F6]
    hover:after:w-full after:transition-all after:duration-300
    ${isActive ? "after:w-full" : ""}
  `}
    >
      {children}
    </Link>
  );
};

export default NavLinks;
