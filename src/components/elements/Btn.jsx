import React from 'react'

function Btn({text='click ',margin}) {
  return (
    <>
    <button className={`border w-[200px] ${margin} my-6 py-3 bg-orange-300 text-black font-bold rounded-md border-orange-500 uppercase hover:bg-orange-500 hover:border-orange-500 hover:text-white duration-500 ease-in-out `}>
        {text}
    </button>
    </>
  )
}

export default Btn