import { createSwapy } from 'swapy'
import { useEffect, useRef } from 'react'
import Navbar from '../components/Navbar'
  
const Index = () => {

  const swapy = useRef(null)
  const container = useRef(null)

   useEffect(() => {
    // If container element is loaded
    if (container.current) {
      swapy.current = createSwapy(container.current)

      // Your event listeners
      swapy.current.onSwap((event) => {
        console.log('swap', event);
      })
    }

    return () => {
      // Destroy the swapy instance on component destroy
      swapy.current?.destroy()
    }
  }, [])



  return (
    <>

      <div className='flex flex-row w-screen h-screen'>
        <div className="w-[15%]" >
          <Navbar page="index" />
        </div>

        <div className='w-[85%] py-4 pr-2 h-full'>

          <div className='h-[75%] pb-1'><div className='bg-gray-200 rounded h-full w-full items-center justify-center flex'>

             <div ref={container} className='w-full h-full flex flex-wrap items-center justify-center gap-2'>

                <div data-swapy-slot="1" className='w-[47.5%] h-[45%] bg-gray-400 rounded'>
                  <div data-swapy-item="1" className='w-full h-full flex items-center justify-center'>
                    <div>1</div>
                  </div>
                </div>

                <div data-swapy-slot="2" className='w-[23.5%] h-[45%] bg-gray-400 rounded'>
                  <div data-swapy-item="2" className='w-full h-full flex items-center justify-center'>
                    <div>2</div>
                  </div>
                </div>

                <div data-swapy-slot="3" className='w-[23.5%] h-[45%] bg-gray-400 rounded'>
                  <div data-swapy-item="3" className='w-full h-full flex items-center justify-center'>
                    <div>3</div>
                  </div>
                </div>

                <div data-swapy-slot="4" className='w-[47.5%] h-[45%] bg-gray-400 rounded'>
                  <div data-swapy-item="4" className='w-full h-full flex items-center justify-center'>
                    <div>4</div>
                  </div>
                </div>

                <div data-swapy-slot="5" className='w-[47.5%] h-[45%] bg-gray-400 rounded'>
                  <div data-swapy-item="5" className='w-full h-full flex items-center justify-center'>
                    <div>5</div>
                  </div>
                </div>

            </div>

          </div></div>

          <div className='h-[25%] pt-1'><div className='bg-gray-200 rounded h-full'>
            </div></div>

        </div>
      </div>

    </>
  )
}

export default Index