import React from 'react'
import Navbar from '../components/Navbar'

const Internet = () => {
  return (
    <>

      <div className='flex flex-row w-screen h-screen'>
        <div className="w-[15%]" >
          <Navbar page="internet" />
        </div>

        <div className='w-[85%] py-4 pr-2 h-full '><div className='bg-gray-50 shadow border border-gray-200 rounded-sm items-center justify-center flex w-full h-full'>

          <h1 className="text-3xl font-bold underline">
            Internet
          </h1>

        </div></div>
      </div>

    </>
  )
}

export default Internet