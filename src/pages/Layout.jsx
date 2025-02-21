import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet /> {/* This renders the current route’s component */}
    </>
  );
};

export default Layout;
