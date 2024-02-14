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
  Link,
  Button,
} from "@nextui-org/react";
// import { AcmeLogo } from "./AcmeLogo.jsx";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Profile", "Deployments", "My Settings", "Log Out"];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="h-24 text-black"
    >
      {/* Hamburger Menu */}
      <NavbarContent
        className="mx-auto max-w-screen-xl sm:hidden"
        justify="start"
      >
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      {/* mobile */}
      <NavbarContent className="pr-3 sm:hidden" justify="center">
        <NavbarBrand>
          <Image width={30} height={30} src="/assets/images/Logo.png" alt="" />
          <Image
            className="h-8 min-h-8"
            src="/assets/images/Logo_Typo.png"
            alt=""
          />
        </NavbarBrand>
      </NavbarContent>

      {/* desktop */}
      <NavbarContent className="hidden gap-4 sm:flex">
        <NavbarBrand justify="start">
          <Image width={30} height={30} src="/assets/images/Logo.png" alt="" />
          <Image
            style={{ maxHeight: "30px" }}
            src="/assets/images/Logo_Typo.png"
            alt=""
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex">
          <Link color="foreground" href="#">
            About
          </Link>
        </NavbarItem>
        <NavbarItem className="mr-8 hidden sm:flex">
          <Link color="foreground" href="#" aria-current="page">
            Community
          </Link>
        </NavbarItem>

        <Dropdown placement="bottom-end" className="text-black">
          <DropdownTrigger>
            <Image
              width={38}
              height={38}
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
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Logout
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem className="hidden sm:flex">
          <Button as={Link} href="#" variant="flat">
            Logout
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
              }
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
