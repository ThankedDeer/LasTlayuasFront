import "./Nabvar.scss";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import React, { useMemo } from "react";

import { Link } from "react-router-dom";
import { Logo } from "../Logo/Logo";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = useMemo(
    () => [
      { label: "Menu", link: "/menu" },
      { label: "Productos", link: "/productos" },
      { label: "Reserva", link: "/reserva" },
      { label: "Nosotros", link: "/nosotros" },
    ],
    [],
  );

  const middleIndex = useMemo(
    () => Math.ceil(menuItems.length / 2),
    [menuItems.length],
  );

  return (
    <Navbar
      className="justify-center bg-transparent shadow-none "
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      isBlurred={true}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="pr-3 sm:hidden" justify="center">
        <NavbarBrand>
          <Logo />
          <p className="font-bold text-inherit">LALO</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-8 sm:flex" justify="center">
        {menuItems.map((item, index) => (
          <React.Fragment key={index}>
            {index === middleIndex && (
              <NavbarBrand>
                <p className="font-bold text-inherit">ACME</p>
              </NavbarBrand>
            )}
            <NavbarItem
              isActive={window.location.pathname === item.link}
              className={`nav-item font-primary ${
                window.location.pathname === item.link
                  ? "navbar-active navbar-active-selected"
                  : "navbar-Inactive"
              }`}
            >
              <Link className="text-xl" to={item.link}>
                {item.label}
              </Link>
            </NavbarItem>
          </React.Fragment>
        ))}
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link className="w-full" to={item.link}>
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
