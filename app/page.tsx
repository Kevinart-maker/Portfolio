import Image from "next/image";
import Navbar from "./components/layout/Navbar";
import Iridescence from "./components/layout/Iridescence";
import Header from "./components/layout/Header";
import Awards from "./components/layout/Awards";
import Works from "./components/layout/Works";

export default function Home() {
  return (
    <main className="bg-[var(--background)] px-[2rem]">
      <div className="w-full h-[10px] bg-[var(--background)]"/>
      <Navbar />

      <div className='flex flex-col xl:flex-row gap-4'>
        <Header />

        <div className="flex flex-col gap-4">
          <Awards />
          <Works />
        </div>
      </div>


    </main>
  );
}