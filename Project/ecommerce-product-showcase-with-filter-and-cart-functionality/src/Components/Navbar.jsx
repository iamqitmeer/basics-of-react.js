import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Badge,
  Avatar,
} from "@nextui-org/react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Home", "Products", "About", "Contact"];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-black text-inherit text-2xl cursor-pointer">
            <span className="text-blue-600">Sa</span>dny
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link aria-current="page">
            <NavLink color="foreground" to="/">
              Home
            </NavLink>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground">
            <NavLink to="/about">About</NavLink>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground">
            <NavLink to="/products">Products</NavLink>
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link color="foreground">
            <NavLink to="/contact">Contact</NavLink>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem className="hidden lg:flex">
          <NavbarItem className="hidden lg:flex">
            <Badge
              content="5"
              className="text-sm"
              classNames="bg-blue-200"
              variant="solid"
            >
              <Button
                isIconOnly
                color="primary"
                variant="flat"
                aria-label="Like"
              >
                <i class="ri-shopping-cart-fill text-lg"></i>
              </Button>
            </Badge>
          </NavbarItem>
        </NavbarItem>
        <NavbarItem>
          <NavLink to="/register">
            <Button color="primary" variant="shadow">
              Sign Up
            </Button>
          </NavLink>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link color="foreground" className="w-full" size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem className="flex gap-4">
          <Badge
            content="5"
            className="text-sm"
            classNames="bg-blue-200"
            variant="solid"
          >
            <Button isIconOnly color="primary" variant="flat" aria-label="Like">
              <i class="ri-shopping-cart-fill text-lg"></i>
            </Button>
          </Badge>
          <NavLink to="/register">
            <Button className="w-full" color="primary" variant="shadow">
              Sign Up
            </Button>
          </NavLink>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
