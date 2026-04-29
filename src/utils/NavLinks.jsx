"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = ({ href, children }) => {
  const pathName = usePathname();
  const isActive = pathName === href;

  return (
    <Link
      className={`${isActive ? "text-[#3B82F6] border-b-[#3B82F6] border-b-2" : ""} text-sm md:text-base  font-semibold font-epi `}
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavLinks;
