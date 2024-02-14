"use client";
import React from "react";
import {
  Image,
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  DropdownTrigger,
  //   Link,
  Button,
} from "@nextui-org/react";
import Link from "next/link";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Profile", "About", "Community"];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="h-24 text-black md:px-4"
    >
      {/* Hamburger Menu */}
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      {/* mobile */}
      <NavbarContent className="pr-3 sm:hidden" justify="center">
        <Link href="/">
          <NavbarBrand>
            <Image
              width={32}
              height={32}
              src="/assets/images/Logo.png"
              alt="Logo"
            />
            <Image
              className="h-6 min-h-6"
              src="/assets/images/Logo_Typo.png"
              alt=" Logo"
            />
          </NavbarBrand>
        </Link>
      </NavbarContent>

      {/* desktop */}
      <NavbarContent className="hidden gap-4 sm:flex">
        <Link href="/">
          <NavbarBrand justify="start">
            <Image
              width={30}
              height={30}
              src="/assets/images/Logo.png"
              alt="Logo"
            />
            <Image
              style={{ maxHeight: "24px" }}
              src="/assets/images/Logo_Typo.png"
              alt="Brand"
              className=""
            />
          </NavbarBrand>
        </Link>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex">
          <Link
            href="#"
            className="font-medium tracking-wide text-neutral-500 hover:text-neutral-700"
          >
            About
          </Link>
        </NavbarItem>
        <NavbarItem className="mr-8 hidden sm:flex">
          <Link
            href="#"
            aria-current="page"
            className="font-medium tracking-wide text-neutral-500 hover:text-neutral-700"
          >
            Community
          </Link>
        </NavbarItem>

        <Dropdown placement="bottom-end" className="text-black">
          <DropdownTrigger>
            <Image
              width={32}
              height={32}
              className="min-w-8"
              alt=""
              src="/assets/images/useravatar.png"
            />
          </DropdownTrigger>

          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">happyUser@email.com</p>
            </DropdownItem>
            <DropdownItem key="settings">Profile</DropdownItem>
            <DropdownItem key="logout" color="default">
              Logout
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem className="hidden sm:flex">
          <Button
            as={Link}
            href="#"
            size="sm"
            variant="ghost"
            className="font-semibold text-neutral-400 hover:text-neutral-600"
          >
            LogOut
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full text-base font-medium tracking-wide text-neutral-500 hover:text-neutral-700"
              //   color={
              //     index === 2
              //       ? "warning"
              //       : index === menuItems.length - 1
              //         ? "danger"
              //         : "foreground"
              //   }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
