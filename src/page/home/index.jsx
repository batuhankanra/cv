
import { useDispatch } from "react-redux";
import AboutMe from "./aboutMe";
import Cards from "./cards";
import Projects from "./projects";
import { useEffect } from "react";
import { getVercel } from "../../store/vercelAPi";

export default function Home() {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getVercel())
  })

  return (
   <div className="flex flex-col gap-y-10">
      <AboutMe />
      <Cards />
      <Projects />
      
   </div>
  )
}
