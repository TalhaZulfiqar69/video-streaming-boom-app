import React from "react";
import Link from "next/link";
import Image from "next/image";
import MobileNav from "./MobileNav";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href={"/"} className="flex items-center gap-1">
        {/* Navbar */}
        <Image
          src="/icons/logo.svg"
          width={32}
          height={32}
          alt="Boom logo"
          className="max-sm:size-10"
        />
        <p className="text-[26px] font-extrabold text-white max-sm:hidden">
          Boom
        </p>
      </Link>

      <div className="flex-between gap-5">
        {/* Clerk user management */}
        <SignedIn>
          <UserButton />
        </SignedIn>

        {/* <SignedOut>
          <UserButton />
        </SignedOut> */}

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
