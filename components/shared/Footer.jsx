"use client";
import React from "react";
import { Link, Image } from "@nextui-org/react";

export default function Footer() {
  return (
    <footer className="flex justify-between space-x-4 bg-gray-50 p-16">
      <div className="flex space-x-4">
        <span>©HappyFood 2024</span>
        <Link href="#">Impressum</Link>
        <Link href="#">Datenschutz</Link>
      </div>
      <div className="flex space-x-4">
        <Link href="http://www.facebook.com">
          <Image
            width={28}
            height={28}
            src="/assets/icons/FB_schwarz.png"
            alt="fb"
            style={{ opacity: 0.4 }}
          />
        </Link>

        <Link href="http://www.instagram.com">
          <Image
            width={28}
            height={28}
            src="/assets/icons/Insta_schwarz.png"
            alt="fb"
            style={{ opacity: 0.4 }}
          />
        </Link>
      </div>
    </footer>
  );
}
