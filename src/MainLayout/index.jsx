
import { Outlet } from "react-router";
import SideBar from "./sidebar";
import theme from "../hooks/theme";
import Footer from "./footer";


export default function MainLayaout() {
  
  theme()

  
  return (
    <div className="w-full  mx-auto mt-3  container transition-all duration-500 font-serif">
      <SideBar />
      <Outlet />
      <Footer /> 
    </div>
  )
}
