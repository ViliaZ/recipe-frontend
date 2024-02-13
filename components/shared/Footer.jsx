"use client";
import React from "react";
import { Link, Image } from "@nextui-org/react";

export default function Footer() {
  return (
    <footer className="flex justify-between space-x-4 bg-gray-50 p-16 align-middle ">
      <div className="flex space-x-4 align-middle">
        <span style={{ color: "black" }}>©2024 HappyFood</span>
        <div>
          <Link style={{ color: "black" }} href="#" target="blank">
            Impressum
          </Link>
        </div>
        <div>
          <Link style={{ color: "black" }} href="#" target="blank">
            Datenschutz
          </Link>
        </div>
      </div>
      <div className="flex space-x-4">
        <Link href="http://www.facebook.com" target="blank">
          <Image
            width={28}
            height={28}
            src="/assets/icons/FB_schwarz.png"
            alt="fb"
            style={{ opacity: 0.4 }}
          />
        </Link>

        <Link href="http://www.instagram.com" target="blank">
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
