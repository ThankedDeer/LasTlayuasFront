import "./publicLayout.scss";

import Hero from "../components/Hero/Hero";
import NavBar from "../components/Navbar/NavBar";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <>
      <div className="flex flex-col h-screen text-white bg-fixed bg-center bg-cover header bg-blend-overlay bg-black/80 div">
        <NavBar />
        <Hero />
      </div>
      <Outlet />
    </>
  );
};

export default PublicLayout;
