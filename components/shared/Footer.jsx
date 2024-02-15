"use client";
import React from "react";
import { Link, Image } from "@nextui-org/react";

export default function Footer() {
  return (
    <footer className="sm:just flex flex-col items-center  justify-center gap-4  py-10 sm:flex-row sm:justify-between">
      <div>
        <span style={{ color: "black" }} className="text-sm">
          ©2024 HappyFood
        </span>
      </div>

      <div className="flex flex-col items-center gap-6 sm:flex sm:flex-row ">
        <div className="flex items-center justify-center  gap-4 ">
          <Link className="text-sm text-black" href="#" target="blank">
            Impressum
          </Link>

          <Link className="text-sm text-black" href="#" target="blank">
            Datenschutz
          </Link>
        </div>

        <div className="flex  items-center gap-4 ">
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
      </div>
    </footer>
  );
}
