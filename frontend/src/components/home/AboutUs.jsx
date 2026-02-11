import React from 'react'
import AboutImg from '../../assets/AboutImg.png'

const AboutUs = () => {
  return (
    <>
      <section className='flex max-w-full  h-[65rem] lg:h-[45rem]  items-center  relative'>

        {/* ---------------Container That hold design in same width */}
        <div className='flex  max-w-full w-full h-full lg:h-[43rem] absolute items-center '>
          

          {/* ---------------Container For Left Design */}
          <div className='absolute max-w-[40%] w-full h-[50%] lg:h-[70%] bg-primary-800 rounded-tr-[10rem] rounded-br-[10rem] flex justify-center lg:items-center'>
          </div>

          {/* ---------------Container For Text and Image */}

          <div className='flex justify-between max-w-full w-full h-full  absolute items-center flex-col lg:flex-row'>

            {/* ---------------Image Area */}

            <div
              className='relative  h-full flex justify-center items-center grow-2 lg:w-[65%] w-[90%]' >
              <img
                src={AboutImg}
                alt="Burger"
                className=' 
              absolute
                 w-[90%]
    sm:w-[80%]
    md:w-[75%]
    lg:w-[75%]
    max-w-lg
    
    h-auto
    object-contain
    ZoomInOutWithoutHover ' />
            </div>


            {/* ---------------Text Area */}
            <div className=' border-solid border-2 border-black lg:w-[30%] h-1/2 m-5 p-2 relative grow-1 TransformTopToDown '>
              <h2 className='font-Rouge text-4xl text-primary-800 pb-3'>About Us</h2>
              <h1 className='font-Lora text-4xl bold pb-4'>
                <span className='text-Secondary-800text-primary-800'> From Where Our Food <br /> <span className='text-primary-800'>recipes come</span> </span></h1>
              <p className='mb-5 text-[1.2rem]'>
                Our food recipes come from a blend of traditional Indian kitchens, expert chefs, and passionate home cooks. We carefully curate, test, and share each recipe to bring authentic flavors to your plate.
              </p>
            </div>

          </div>
        </div>
      </section>

    </>
  )
}

export default AboutUs
