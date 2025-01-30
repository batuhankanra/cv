
import { Outlet } from "react-router";
import SideBar from "./sidebar";
import theme from "../hooks/theme";
import Footer from "./footer";


export default function MainLayaout() {
  
  theme()

  
  return (
    <div className="w-full     transition-all duration-500 font-serif">
      <SideBar />
      <div className="container mx-auto">

      <Outlet />
      </div>
      <Footer /> 
    </div>
  )
}
