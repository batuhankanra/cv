import { FaLocationDot } from "react-icons/fa6";
import { FaGithub,FaLinkedin ,FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="w-full   flex flex-col gap-y-3  sm:flex-row  border-t border-zinc-300 dark:border-zinc-700 mt-5">
      <div className=" w-[280px] sm:w-[250px] gap-y-2 mr-4 mx-auto mt-10 flex flex-col  text-zinc-700 dark:text-zinc-300     ">
        <h2 className="text-2xl font-semibold text-green-700 dark:text-green-500 ">Batuhan Kanra</h2>
        <p>A Web Developer Portfolio</p>
        <a href="https://www.google.com.tr/maps/place/Milas,+Mu%C4%9Fla/@37.3090142,27.7595019,14z/data=!3m1!4b1!4m6!3m5!1s0x14befa4a47c5a25b:0xcc63f19e9e810b80!8m2!3d37.311638!4d27.780795!16zL20vMDl4XzNn?hl=tr&entry=ttu&g_ep=EgoyMDI1MDEyNy4wIKXMDSoASAFQAw%3D%3D" className="flex items-center "><FaLocationDot /> Mugla/Milas </a>
        <p>© 2025 Batuhan - All rights reserved.</p>
      </div>
      <div className="sm:w-3/5  flex flex-col items-center justify-center gap-x-3 ">
      <h2 className="text-2xl font-semibold text-green-700 dark:text-green-500 ">Follow Me</h2>
       <div className="flex items-center gap-x-3 ">
        <a href="https://github.com/batuhankanra"><FaGithub size={30} /></a>
        <a href="https://www.linkedin.com/in/batuhan-kanra-064204250/"><FaLinkedin size={30}/></a>
        
        <a href="https://x.com/KanraBatuhan" className="hover:scale-105"><FaTwitter  size={30}/></a>
       </div>
      </div>
    </div>
  )
}

