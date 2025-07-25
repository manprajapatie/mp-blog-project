import React from 'react'
import AboutImg from '../../assets/AboutImg.png'

const AboutUs = () => {
  return (
    <>
      <section className='flex max-w-full w-full h-[45rem] border-solid border-2 border-Secondary-100 items-center  relative'>

        {/* ---------------Container For Left Design */}
        <div className='absolute max-w-[40%] w-full h-[70%] bg-primary-800 rounded-tr-[10rem] rounded-br-[10rem] flex justify-center items-center'>
        </div>

        {/* ---------------Container For Text and Image */}

        <div
          className='flex justify-between max-w-full w-full h-[43rem] border-solid border-2 border-black absolute items-center'

        >

          {/* ---------------Image Area */}

          <div
            className='relative  border-solid border-2 border-black h-full flex justify-center items-center grow-2 ' >
            <img
              src={AboutImg}
              alt=""
              className='h-[80%] ZoomInOutWithoutHover  ' />
          </div>


          {/* ---------------Text Area */}
          <div className=' border-solid border-2 border-black w-[30%] h-1/2 m-5 p-2 relative grow-1 TransformTopToDown '>
            <h2 className='font-Rouge text-4xl text-primary-800 pb-3'>About Us</h2>
            <h1 className='font-Lora text-4xl bold pb-4'>
              <span className='text-Secondary-800text-primary-800'> From Where Our Food <br /> <span className='text-primary-800'>recipes come</span> </span></h1>
            <p className='mb-5 text-[1.2rem]'>
              Our food recipes come from a blend of traditional Indian kitchens, expert chefs, and passionate home cooks. We carefully curate, test, and share each recipe to bring authentic flavors to your plate.
            </p>

          </div>



        </div>
      </section>

    </>
  )
}

export default AboutUs
