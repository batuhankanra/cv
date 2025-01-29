

export default function Card({cv,text,rotate}) {
  return (
    <div className={`max-w-xs shadow-zinc-700  ${rotate} hover:rotate-0 hover:shadow-lg group perspective-distant dark:shadow-zinc-300 w-full p-3
    bg-[#FAFAFA] rounded-lg transition-all duration-300 overflow-hidden relative
    `}>
      <div className='transform  group-hover:rotate-0 origin-[60%_bottom] transition-all duration-500 ease-out '>
        <div className=' aspect-square relative z-10 '>
          <img src={cv} className='w-full h-full object-cover rounded-lg border-4 border-white shadow-lg grayscale-20 
          group-hover:grayscale-0 transition-all -skew-2 group-hover:skew-0' />
        </div>
        <div className="p-4 mt-2">
      <p className="text-center text-gray-800 text-lg font-medium truncate transform -skew-x-6 group-hover:skew-x-0 transition-all">
        {text}
      </p>
    </div>
      </div>
    </div>
  )
}
