import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle } from "@nextui-org/react";
import React, { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";

interface menuItem {
    label: string,
    link: string
}
const menuItems: menuItem[] = [
    {
        label: "Menu",
        link: "/menu"
    },
    {
        label: "Productos",
        link: "/productos"
    },
    {
        label: "Reserva",
        link: "/reserva"
    },
    {
        label: "Nosotros",
        link: "/nosotros"
    }
]
export default function NavBar() {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const { isLogin } = useContext(LoginContext)


    return (
        <Navbar
            classNames={{
                item: [
                    "flex",
                    "relative",
                    "h-full",
                    "items-center",
                    "data-[active=true]:after:content-['']",
                    "data-[active=true]:after:absolute",
                    "data-[active=true]:after:bottom-2",
                    "data-[active=true]:after:left-0",
                    "data-[active=true]:after:right-0",
                    "data-[active=true]:after:h-[2px]",
                    "data-[active=true]:after:rounded-[2px]",
                    "data-[active=true]:after:bg-primary",

                ],
            }}
            position="static" isBlurred={false} onMenuOpenChange={setIsMenuOpen}
            className="bg-transparent shadow-none pt-2"

        >
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <p className="text-inherit text-xl font-FugazOne">Las Tlayudas</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-10" justify="center">
                {menuItems.map((item, index) => (
                    <NavbarItem key={`${item.label}-${index}`} isActive={item.link === window.location.pathname}>
                        <Link className={"text-default text-2xl text-center"} href={item.link}>
                            {item.label}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            {!isLogin ? (
                <NavbarContent justify="end" className="ml-3">
                    <NavbarItem className="hidden lg:flex">
                        <Link className="text-primary" href="login">
                            Iniciar sesión
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Button as={Link} color="primary" href="register" variant="solid">
                            Registrarse
                        </Button>
                    </NavbarItem>
                </NavbarContent>
            ) : null}
        </Navbar>
    );
}
