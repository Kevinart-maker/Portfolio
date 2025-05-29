import Image from "next/image";
import Iridescence from "./Iridescence";

export default function Header() {
  return (
  <div className='overflow-hidden w-full h-[80vh] rounded-[2rem] relative'>
    <img src="/texture.png" alt="" className='absolute max-w-[200%] bottom-0 top-0'/>
    <header className="absolute bottom-0 left-0">
        <svg className="curve svg-corner corner-content-box-two rotate-[-90deg]" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_310_2)"><path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="currentColor"></path></g><defs><clipPath id="clip0_310_2"><rect width="30" height="30" fill="white"></rect></clipPath></defs></svg>
        <div className="flex items-end">
        <h1 className="p-4 bg-[var(--background)] rounded-tr-[2rem] text-xl md:text-[3rem] font-semibold w-[60%] text-[var(--text)]">Creative Developer. Strategic Builder.</h1>
        <svg className="curve rotate-[-90deg] svg-corner corner-content-box-two" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_310_2)"><path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="currentColor"></path></g><defs><clipPath id="clip0_310_2"><rect width="30" height="30" fill="white"></rect></clipPath></defs></svg>
        </div>
    </header>
    
    <Iridescence />
    </div>
  );
}