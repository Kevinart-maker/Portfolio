'use client';

import logo from './logo.png'
import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from './../ui/ThemeToggle';
import { useState } from 'react';

export default function Navbar() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
    document.body.style.overflow = show ? 'auto' : 'hidden'; // Prevent scrolling when menu is open

    console.log('Menu clicked:', show ? 'Closing' : 'Opening');
  }
  
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
        <div className="w-full h-[10px] bg-[var(--background)] z-[300]"/>
        <div className="flex z-[100]">
            <div className="md:w-fit w-[65%] p-3 py-[1.5rem] px-[3.5rem] text-2xl bg-[var(--background)] rounded-br-[2rem]"><Image src={logo} alt='logo' className='w-[4rem] logo-filter'/></div>

            <svg className="curve svg-corner corner-logo-box-two" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_310_2)"><path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="currentColor"></path></g><defs><clipPath id="clip0_310_2"><rect width="30" height="30" fill="white"></rect></clipPath></defs></svg>
            
            
        </div>
        <div className='flex z-[100]'>
            <div className='w-[2rem] h-full bg-[var(--background)]'/>
            <svg className="curve svg-corner corner-logo-box-one" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_310_2)"><path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="currentColor"></path></g><defs><clipPath id="clip0_310_2"><rect width="30" height="30" fill="white"></rect></clipPath></defs></svg>
        </div>

        <div className='hidden md:flex gap-[1.5rem] p-5 rounded-[2rem] px-[2rem] items-center blurry w-fit absolute left-[12rem] top-[calc(7px+1rem)] primary'>
            <Link href="/">Projects</Link>
            <Link href="/">About</Link>
            <Link href="/">Blog</Link>
            <Link href="/">Contact</Link>
            <ThemeToggle />
        </div>

        <div className='md:hidden w-full absolute top-[10px] px-[2rem] rounded-[2rem]'>

        <div className={`absolute top-[0.8rem] right-[2.8rem] w-fit font-medium border rounded-[2rem] h-fit p-2 px-4 ${show ? 'border-white text-white' : 'border-[var(--background)] bg-[var(--background)]'}`} onClick={handleClick}>{show ? 'Close' : 'Menu'}</div>
          
          <div className={`w-full ${show ? 'h-[80vh] bg-[#5c54f9] rounded-[2rem] flex flex-col items-end p-3' : 'h-0'} overflow-hidden text-white`}>
            {/* <div className={`border rounded-[2rem] h-fit p-2 px-4 ${show ? '' : 'border-[var(--foreground)] bg-[var(--ground)]'}`} onClick={()=> setShow(!show)}>{show ? 'Close' : 'Menu'}</div> */}


            <div className='flex flex-col w-full gap-3 mt-[10rem] text-2xl font-medium'>
              <div>Projects</div>
              <div className='w-full h-[0.1px] bg-white'/>
              <div>About</div>
              <div className='w-full h-[0.1px] bg-white'/>
              <div>Blog</div>
              <div className='w-full h-[0.1px] bg-white'/>
              <div>Contact</div>
              <div className='w-full h-[0.1px] bg-white'/>
            </div>

            <ThemeToggle/>
          </div>
        </div>
    </nav>
  );
}