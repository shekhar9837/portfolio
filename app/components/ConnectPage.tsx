import Image from 'next/image'
import React from 'react'

const ConnectPage = () => {
  return (
    <div className='relative max-w-7xl flex items-center justify-center '>
        <Image
        src={"/wp4083639-mount-wallpapers.jpg"}
        width={1920}
        height={1080}
        alt='lets connect'
        className='h-[80vh] '
        />

        <div className='absolute left-0 md:top-44 top-20 custom:px-6 px-6 flex custom:flex-row flex-col  custom:items-center items-start justify-between'>
            <h3 className='md:w-1/2 font-semibold text-[3rem] text-white'>Lets connect</h3>

            <div className='md:w-1/2 '>


            <p className='font-semibold text-white'>
            If you're looking for a partner to help you explore new ideas, refine your brand, or simply need someone to bounce ideas off of, I'm here to listen and collaborate.</p>

            <div className="flex items-start justify-start w-full mt-8" >
        <button
          type="submit"
          className="flex  gap-2   font-ptmono text-white  z-10 custom:px-4 py-2 overflow-hidden rounded-md group"
        >
          CONTACT
          <svg
            className="w-7 h-7 justify-end group-hover:rotate-90 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-slate-200 p-2 rotate-45"
            viewBox="0 0 16 19"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
              className="fill-gray-100 group-hover:fill-gray-200"
            />
          </svg>
        </button>
      </div>
      </div>


        </div>

    </div>
  )
}

export default ConnectPage