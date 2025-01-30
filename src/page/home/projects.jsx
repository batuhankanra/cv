import { useSelector } from "react-redux"
import { LuMousePointerClick } from "react-icons/lu";
 






export default function Projects() {
   const {data,status}=useSelector(state=>state.api)
                


    
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-[250px ] md:w-[700px] mx-auto gap-y-5">
        
        <div className="flex flex-col gap-y-1">
            <h3 className=" text-xl md:text-xl font-medium dark:text-green-500 text-green-700 text-center">Projects</h3>
            <p className="text-md text-zinc-500 text-center font-medium pt-0.5 pb-2">Taken from Vercel via Rest API  </p>
            <span className="flex items-center justify-center"><LuMousePointerClick size={35} /></span>
            {status==='Success' && data.map((item,i)=>(
              <div key={i} className="md:w-full w-[300px]">
                  <h4 className="uppercase">{item.name}</h4>
                  <a className=" dark:text-zinc-400 dark:hover:text-zinc-300 transition-all duration-200" href={`http://${item.targets.production.meta.branchAlias}`}>
                    {item.targets.production.meta.branchAlias}
                  </a>
              </div>
            ))}
            {status==='Loading' && 
              <div >
                 <p>Loading</p>
              </div>
            }
            {status==='Fail' && 
              <div  className="text-center text-3xl pt-10">
                <p>Empty</p>
              </div>
            }
        </div>
        <div className="flex flex-col gap-y-1">
        <h3 className=" text-xl md:text-xl font-medium text-green-500 text-center">Projects</h3>
            <p className="text-md text-zinc-500 text-center font-medium pt-0.5 pb-2">Things I've published  </p>
            <span className="flex items-center justify-center"><LuMousePointerClick size={35} /></span>
             
              <div  className="text-center text-3xl pt-10">
                 <p>Empty</p>
              </div>
            
        </div>
    </div>
  )
}
