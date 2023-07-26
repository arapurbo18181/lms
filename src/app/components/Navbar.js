"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/app/images/softtech.png";
import Link from "next/link";

const Navbar = () => {
  const navbar = [
    {
      menu: "মূল পাতা",
      slug: "/",
    },
    {
      menu: "আমাদের সম্পর্কে",
      slug: "/about",
    },
    {
      menu: "সকল কোর্স",
      slug: "/courses",
    },
    {
      menu: "সাপোর্ট",
      slug: "/support",
    },
    {
      menu: "যোগাযোগ",
      slug: "/contact",
    },
  ];

  return (
    <div className="flex justify-center items-center">
      <nav className="flex justify-between items-center container">
        <div className="w-52">
          <Image src={logo} alt="logo" />
        </div>
        <div className="flex justify-center items-center space-x-6 text-lg font-semibold">
          {navbar.map((item, i) => {
            return (
              <Link href={item.slug} key={i} className="hover:text-red-600 transition-all duration-300">
                {item.menu}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
