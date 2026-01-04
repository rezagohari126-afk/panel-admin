import React from 'react'

export default function todayBox({src,count,productName,inventory}) {
  return (
    <>
        <div className="w-37.5 h-37.5 bg-white flex flex-col justify-center items-start rounded-xl pl-2">

              <img src={src} alt="img" className='w-12.5 h-12.5 rounded-lg' />
              <h1 className='font-bold text-[18px]'>{count}</h1>
              <h2 className='text-[14px]'>{productName}</h2>
              <p className='text-[12px] text-sky-500'><span>{inventory}</span> in stock</p>
        </div>
    
    </>
  )
}
