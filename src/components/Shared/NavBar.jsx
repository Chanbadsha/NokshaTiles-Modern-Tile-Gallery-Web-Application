"use client";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "@/../public/logo.png";
import NavLinks from "@/utils/NavLinks";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";

const NavBar = () => {
  const {
    data: session,
    isPending, //loading state
    error, //error object
    refetch, //refetch the session
  } = authClient.useSession();
  const user = session?.user;

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
      href: "/dashboard",
      pathName: "My Profile",
    },
  ];

  const handleLogout = async (e) => {
    e.preventDefault();
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success("User Logout");
          refetch();
          redirect("/");
        },
      },
    });
  };

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
              alt="NakshaTiles Logo"
              className="lg:w-10 h-auto hidden lg:flex"
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
        {/* Right side */}
        <div className="flex items-center gap-4">
          {user ? (
            <>
              {/* Avatar */}
              <Link href="/dashboard">
                <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-gray-200 hover:ring-[#3B82F6] transition duration-300 shadow-sm hover:shadow-md">
                  <Image
                    src={user.image || "/default-avatar.png"}
                    alt={user.name || "User"}
                    fill
                    className="object-cover"
                  />

                  {/* Online indicator */}
                  <span className="absolute bottom-1 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
                </div>
              </Link>

              {/* Logout Button */}
              <Button
                onClick={handleLogout}
                className="
          px-4 py-2 rounded-lg font-medium
          bg-gray-100 text-gray-700
          hover:bg-red-50 hover:text-red-600
          transition-all duration-300
        "
              >
                Logout
              </Button>
            </>
          ) : (
            <Link href="/auth/signin">
              <Button
                className="
          px-5 py-2 rounded-lg font-medium
          bg-linear-to-r from-[#3B82F6] to-[#2563eb]
          text-white shadow-sm
          hover:shadow-md hover:scale-[1.02]
          transition-all duration-300
        "
              >
                Sign In
              </Button>
            </Link>
          )}
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
