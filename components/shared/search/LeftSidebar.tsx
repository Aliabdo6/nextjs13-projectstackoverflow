"use client";

import { sidebarLinks } from "@/constants";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
// import { Item } from "@radix-ui/react-menubar";
import { Button } from "@/components/ui/button";
import { SignedOut } from "@clerk/nextjs";

const LeftSidebar = () => {
  const pathname = usePathname();
  return (
    <section
      // eslint-disable-next-line tailwindcss/classnames-order
      className="background-light900_dark200 light-border sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px] custom-scrollbar"
    >
      <div className="flex flex-1 flex-col gap-6">
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) &&
              link.route.length > 1) ||
            pathname === link.route;
          return (
            <Link
              key={link.id} // Assuming link has a unique identifier like 'id'
              href={link.route}
              className={`${
                isActive
                  ? "primary-gradient rounded-lg text-light-900"
                  : "text-dark300_light900"
              } flex items-center justify-start gap-4 bg-transparent p-4`}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                height={20}
                width={20}
                className={
                  isActive ? "" : "invert-colors"
                }
              />
              <p
                className={
                  isActive
                    ? "base-bold"
                    : "base-medium max-lg:hidden"
                }
              >
                {link.label}
              </p>
            </Link>
          );
        })}
      </div>
      <SignedOut>
        <div className="flex flex-col gap-3">
          <Link href="/sign-in">
            <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
              <Image
                alt="login"
                width={20}
                height={20}
                className="invert-colors lg:hidden"
                src="/assets/icons/account.svg"
              />
              <span className="primary-text-gradient max-lg:hidden">
                Log In
              </span>
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
              <Image
                alt="sign up"
                width={20}
                height={20}
                className="invert-colors lg:hidden"
                src="/assets/icons/sign-up.svg"
              />
              <span className="max-lg:hidden">
                Sign up
              </span>
            </Button>
          </Link>
        </div>
      </SignedOut>
    </section>
  );
};

export default LeftSidebar;
