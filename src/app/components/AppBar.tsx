"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  Button,
} from "@nextui-org/react";
import { ReactNode, useState } from "react";
import { HomeModernIcon } from "@heroicons/react/16/solid";
import Link from "next/link";


interface Props {
  children: ReactNode;
}

export default function App({children}: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="shadow-md">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link
            href="/"
            className="flex items-center text-green-800 hover:text-green-600 transition-colors">
            <HomeModernIcon className="w-16" />
            <p className="font-bold text-inherit">GP Real Estate</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-4"
        justify="center"></NavbarContent>
      <NavbarContent justify="end">
        {children}
      </NavbarContent>
      <NavbarMenu></NavbarMenu>
    </Navbar>
  );
}
