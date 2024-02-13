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

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className=" bg-gray-50"
    >
      <NavbarContent
        className="mx-auto max-w-screen-xl sm:hidden"
        justify="start"
      >
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="pr-3 sm:hidden" justify="center">
        <NavbarBrand>
          <Image width={30} height={30} src="/assets/images/Logo.png" alt="" />
          <Image
            style={{ maxHeight: "34px" }}
            src="/assets/images/Logo_Typo.png"
            alt=""
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 sm:flex">
        <NavbarBrand justify="start">
          <Image width={30} height={30} src="/assets/images/Logo.png" alt="" />
          <Image
            style={{ maxHeight: "34px" }}
            src="/assets/images/Logo_Typo.png"
            alt=""
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Link color="foreground" href="#">
            About
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Community
          </Link>
        </NavbarItem>
        <NavbarItem className="ml-8">
          <Button as={Link} href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>

        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Image
              width={38}
              height={38}
              alt=""
              src="/assets/icons/useravatar.png"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">happyUser@email.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
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
