"use client";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "@/../public/logo.png";
import NavLinks from "@/utils/NavLinks";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    {
      href: "/",
      pathName: "Home",
    },
    {
      href: "/all-tiles",
      pathName: "All Tiles",
    },
    {
      href: "/profile",
      pathName: "My Profile",
    },
  ];

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-transparent backdrop-blur-xl">
      <header className="mx-auto flex h-16 container  items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <Link href={"/"} className="flex items-center gap-1">
            <Image
              src={logo}
              height={40}
              width={40}
              alt="NakshaTiles Logo"
              className="lg:w-10 h-auto hidden md:flex"
            ></Image>{" "}
            <h1 className="font-semibold font-epi text-2xl lg:text-3xl text-[#2e3038]">
              <span className="font-bold text-[#191b23]">Naksha</span>Tiles
            </h1>
          </Link>
        </div>
        <ul className="hidden items-center gap-4 md:flex">
          {navLinks.map((link, ind) => (
            <li key={ind}>
              <NavLinks href={link.href}>{link.pathName}</NavLinks>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4 ">
          <Link href={"/auth/signup"}>
            <Button className="text-white">Sign In</Button>
          </Link>
        </div>
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            {navLinks.map((link, ind) => (
              <li key={ind}>
                <NavLinks href={link.href}>{link.pathName}</NavLinks>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
