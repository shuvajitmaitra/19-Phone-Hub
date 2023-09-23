import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="max-w-screen-lg mx-auto ">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
