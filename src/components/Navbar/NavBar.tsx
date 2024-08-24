import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import React, { useContext, useEffect } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare, FaPhoneAlt } from "react-icons/fa";
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
        link: "/menu"
    },
    {
        label: "Reserva",
        link: "/menu"
    },
    {
        label: "Nosotros",
        link: "/menu"
    }
]
export default function NavBar() {


    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const { isLogin } = useContext(LoginContext)

    useEffect(() => {
        console.log(isLogin);

    }, [isLogin])

    const SiszeIcon = 21

    return (
        <Navbar className="bg-transparent shadow-none " position="static" isBlurred={false} onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent >
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <p className=" text-inherit text-xl font-FugazOne">Las Tlayudas</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-10" justify="center">
                {menuItems.map((item, index) => (
                    <NavbarItem key={`${item.label}-${index}`}>
                        <Link className="text-white text-2xl text-center" href={item.link}>
                            {item.label}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>
            <NavbarContent className="hidden sm:flex gap-2" justify="end">
                <NavbarItem >
                    <FaFacebookSquare to={"/home"} size={SiszeIcon} />
                </NavbarItem>
                <NavbarItem >
                    <AiFillInstagram to={"/#"} size={SiszeIcon} />
                </NavbarItem>
                <NavbarItem >
                    <FaPhoneAlt to={"/#"} size={SiszeIcon} />
                </NavbarItem>
            </NavbarContent>

            {!isLogin ? <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="login">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="register" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent> : null}
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item.label}-${index}`}>
                        <Link
                            color={
                                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            className="w-full font-Roboto font-bold"
                            href={item.link}
                            size="lg"
                        >
                            {item.label}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
