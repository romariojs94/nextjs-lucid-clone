import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className='bg-[#DBD4C5] py-10 px-5 sm:py-24 sm:px-40'>
        <div className='grid gap-5 grid-cols-1 sm:grid-cols-2 justify-center sm:items-center sm:justify-between'>
            <h2 className='font-serif text-4xl sm:text-6xl text-[#101010] sm:text-left text-center sm:max-w-[15ch]'>Stay up to Speed on the latest at Lucid.</h2>
            <form className='flex flex-col :justify-center sm:justify-between sm:items-end'>
              <input type="email" className='w-2/3 self-center sm:w-3/4 py-5 px-3 text-[#101010] placeholder:text-[#111] focus:[#d7d7d7]' placeholder='jsmith@example.com' />
            </form>
        </div>
      </footer>
      <div>
        <div className='bg-[#101010] text-[#DBD4C5] py-8 text-center'>
          <p className='text-sm sm:text-lg md:text-2xl'>&copy; 2021 Lucid Motors. All Rights Reserved.</p>
        </div>
      </div>
    </>
  )
}

export default Footer;