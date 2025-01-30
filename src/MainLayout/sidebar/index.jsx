import { Link, useLocation } from "react-router"
import { categories } from "../../utils/categories"
import { MdDarkMode ,MdWbSunny} from "react-icons/md";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";


export default function SideBar() {
  const [active,setActive]=useState(false)
  const params=useLocation()
  const [theme,setTheme]=useState(localStorage.getItem('theme'))
  

  const handleThame=()=>{
    const newTheme=theme==='dark' ? 'light': 'dark'
    localStorage.setItem('theme',newTheme)
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    setTheme(newTheme)

  }
  return (
    <div className="sticky  top-0 z-10  backdrop-blur-3xl bg-[#E8EAF6]/80 dark:bg-zinc-900/80">
      <div className="  w-full flex items-center justify-between md:justify-center md:gap-x-10  py-8 text-zinc-500 font-mono tracking-widest" >
        <div className=" dark:text-zinc-100 px-5 md:p-0 flex md:hidden items-center flex-col gap-x-2">
           <button onClick={()=>setActive(!active)} className="flex "> 
            <CiMenuBurger className="mt-1" />
            Batuhan Kanra 
           </button>
         
            <div className={`absolute p-2  ${active ? '-left-3' : '-left-40'} transition-all duration-200 p-3    text-left   top-[75px]`}>
             <div className=" min-h-screen px-4 gap-y-3 flex flex-col  dark:bg-zinc-900 ">
              {categories.map(item=>(
                <Link 
                to={item.link} 
                key={item.id} 
                className=
                  {`${params.pathname===item.link && 'text-zinc-800 px-2 dark:text-zinc-300'} w-full transition-all duration-200 text-xl font-semibold hover:text-zinc-800 dark:hover:text-zinc-300`}>
                  {item.name}
                </Link>
              ))}
             </div>
            </div>
        
        </div>
        
        <div className="hidden md:flex items-center justify-center gap-x-10">
          {categories.map(item=>(
            <Link 
            to={item.link} 
            key={item.id} 
            className=
              {`${params.pathname===item.link && 'text-zinc-800 px-2 dark:text-zinc-300'} transition-all duration-200 text-xl font-semibold hover:text-zinc-800 dark:hover:text-zinc-300`}>
              {item.name}
            </Link>
          ))}
        </div>
        <button onClick={handleThame} className="hover:text-zinc-300 mb-1.5  px-5 md:p-0 cursor-pointerz flex">
          {theme==='dark' ? (
            <MdDarkMode className=" transition-all duration-400 " />
          ): (
            <MdWbSunny className="transition-all duration-400" />
          )}
          
        </button>
      </div>
    </div>
  )
}
