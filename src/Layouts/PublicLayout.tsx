import { Outlet } from "react-router-dom"
import NavBar from "../components/Navbar/NavBar"
import Hero from "../components/Hero/Hero"
import './publicLayout.scss'

const PublicLayout = () => {



    return (
        <>
            <header className="flex flex-col h-screen bg-slate-800 text-white bg-center bg-cover bg-blend-overlay bg-fixed bg-black/50 header">
                <NavBar />
                <Hero />
            </header>
            <Outlet />
        </>
    )
}

export default PublicLayout