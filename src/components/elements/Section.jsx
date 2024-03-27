import React from 'react'

function Section({ img, mainHeading,para,style,bg }) {
  return (
    <>
      <div className={`${bg} py-16 px-4 w-full`} >
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 '>
          <img src={img} alt="img" />
          <div className='flex flex-col px-8 item-center justify-center'>
            <h1 className='font-bold text-4xl  py-2'>{mainHeading}</h1>
            <p className={`${style} font-mono`}>
              {para}
            </p>
          </div>
        </div>

      </div>
    </>
  )
}

export default Section;