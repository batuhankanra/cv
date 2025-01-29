import { Link, useLocation } from "react-router"
import { categories } from "../../utils/categories"
import { MdDarkMode ,MdWbSunny} from "react-icons/md";
import { useState } from "react";

export default function SideBar() {
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
    <div className="sticky top-0 z-10  backdrop-blur-3xl dark:bg-zinc-900/80">
      <div className=" flex items-center justify-center gap-x-10 py-8 text-zinc-500 font-mono tracking-widest" >
        {categories.map(item=>(
          <Link 
          to={item.link} 
          key={item.id} 
          className=
            {`${params.pathname===item.link && 'text-zinc-800 px-2 dark:text-zinc-300'} transition-all duration-200 text-xl font-semibold hover:text-zinc-800 dark:hover:text-zinc-300`}>
            {item.name}
          </Link>
        ))}
        <button onClick={handleThame} className="hover:text-zinc-300 mb-1.5 cursor-pointerz">
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
