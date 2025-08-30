import React from 'react'
import Navbar from '../components/Navbar'

const Processes = () => {
  return (
    <>

      <div className='flex flex-row w-screen h-screen'>
        <div className="w-[15%]" >
          <Navbar page="processes" />
        </div>

        <div className='w-[85%] py-4 pr-2 h-full '><div className='bg-gray-50 shadow border border-gray-200 rounded-sm items-center justify-center flex w-full h-full'>

          <h1 className="text-3xl font-bold underline">
            Processes
          </h1>

        </div></div>
      </div>

    </>
  )
}
''
export default Processes