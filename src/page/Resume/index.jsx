import { useState } from "react"
import { resumeMenu } from "../../utils/resumeMenu"
import { skills } from "../../utils/skils"


export default function Resume() {
  const [menu,setMenu]=useState('About Me')
  console.log(menu)
  return (
    <div className='flex flex-col md:flex-row items-center justify-center my-20 gap-x-10'>
      <aside className="flex flex-2 flex-col gap-y-5">
        {resumeMenu.map(item=>(
          <button className={`${menu===item.title &&
          
          'text-zinc-900 dark:text-zinc-200'} text-3xl text-center font-semibold text-zinc-600 hover:text-zinc-200 duration-200 cursor-pointer`}  onClick={()=>setMenu(item.title)} key={item.id}>
            {item.title}
          </button>
        ))}
      </aside>
      <div className="flex-2 text-xl font-medium ease-in-out transition-all mt-10 duration-300">
      {menu==='About Me' && (
        <div className="  w-[200px] md:w-[350px] ">
          I am a passionate Web Developer focused on creating modern, responsive, and user-friendly applications.
          I believe in the power of technology to provide solutions that make people is lives easier, and I approach every project with this belief and care.
          Pushing the boundaries of technology ,  into solutions motivates me. I experiment with technologies like React-Vite and Node.js
        </div>
      )}
      {menu === 'Education' && (
        <div className="">
          <span className='w-full flex md:items-center text-center flex-col md:flex-row py-2  md:gap-x-10'>Location: <p> BURDUR MEHMET AKİF ERSOY ÜNİVERSİTESİ</p> </span>
          <span className='w-full flex md:items-center text-center flex-col md:flex-row py-2  md:gap-x-13'>Section: <p> BİLİŞİM GÜVENLİĞİ TEKNOLOJİSİ</p> </span>
          <span className='w-full flex md:items-center text-center flex-col md:flex-row py-2  md:gap-x-19'>Date: <p> 19.10.2022</p> </span>
          
        </div>
      )}
      {menu ==='Skills' && (
        <section className="">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4  hover:text-green">
            {skills.map(item=>(
              <div key={item.id} className="flex flex-col items-center ">
                <item.element size={40} className={`hover:text-[${item.color}]  `} />
                <h2 className="text-2xl font-semibold ">{item.title}</h2>
              </div>
            ))}
          </div>
        </section>
      )}
      </div>
    </div>
  )
}
