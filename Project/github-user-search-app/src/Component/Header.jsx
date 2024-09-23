import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { Input } from "@nextui-org/react";

export default function Header() {
  return (
    <Navbar className=" bg-[#141e30] text-white">
      <NavbarBrand>
        <p className="text-3xl font-black text-inherit">GitFinder</p>
      </NavbarBrand>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Input
          className="bg-[#1a243d] text-black"
            type="text"
            placeholder="Search by username"
            labelPlacement="outside"
            radius="full"
            startContent={
              <i className="ri-search-line text-xl mr-2 text-default-400 pointer-events-none flex-shrink-0"></i>
            }
          />
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" radius="full" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
