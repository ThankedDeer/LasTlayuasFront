import "./publicLayout.scss";

import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar/NavBar";

const PublicLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default PublicLayout;
