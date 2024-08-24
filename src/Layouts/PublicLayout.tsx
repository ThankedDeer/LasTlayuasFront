import { Outlet } from "react-router-dom"
import NavBar from "../components/Navbar/NavBar"
import Hero from "../components/Hero/Hero"
import './publicLayout.scss'

const PublicLayout = () => {



    return (
        <>
            <div className=" flex flex-col h-screen header text-white bg-center bg-cover bg-blend-overlay bg-fixed bg-black/75 div">
                <NavBar />
                <Hero />
            </div>
            <Outlet />
        </>
    )
}

export default PublicLayout