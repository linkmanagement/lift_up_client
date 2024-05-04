import { CrossIcon, MenuIcon, XIcon } from 'lucide-react';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

const SeoContentHead = () => (
  <Head>
    <title>Unlock Your OnlyFans Potential | Premier Management Agency</title>
    <meta name="description" content="Join the leading OnlyFans Management Agency and maximize your earning potential today." />
    <meta name="keywords" content="OnlyFans, management agency, maximize earnings, potential, join" />
    {/* Add more SEO-related meta tags here */}
  </Head>
);

const NavSlider = ({ openNavbar, setOpenNavbar }) => {

  return (
    <div
      className={
        'fixed flex flex-col md:hidden bg-white transition-all duration-600 h-screen w-[100vw] fixed z-[3] ' +
        (openNavbar ? 'left-0' : 'left-[100vw]')
      }
    >
      <div className="p-8 lg:p-16 flex items-center justify-end">
        {
          openNavbar &&
          <button onClick={() => setOpenNavbar(!openNavbar)} className="block md:hidden rounded-none">
            <XIcon color='#000000' size={32} strokeWidth={1.5} />
          </button>
        }

      </div>

      <div className='flex-[0.8] p-8 pt-32 flex flex-col justify-between items-center'>
        <img src="/apply.png" alt="logo" className="display-block mx-auto cursor-pointer w-[80%]" />

        <Link href="/apply">
          <button className='bg-black text-white p-4 text-sm w-[80vw]'>
            Apply Now
          </button>
        </Link>
      </div>

    </div>
  )
}

function HeroSection({ openNavbar, setOpenNavbar }) {

  return (
    <div className="relative text-4xl h-[80%] md:h-[80%]  lg:h-[92.5%] min-h-[max-content] bg-white">
      <div className="saturate-[0.9] blur-[0.7px] opacity-[0.9] brightness-90 contrast-[0.9] absolute top-0 left-0 right-0 h-[100%] z-[1] bg-[url('/hero_cropped_mobile.jpg')] md:bg-[url('/hero_cropped_tab.jpg')] lg:bg-[url('/hero_cropped.jpg')] bg-cover bg-center	bg-no-repeat" />
      <div className="absolute top-0 left-0 right-0 h-[100%] z-[2] 	text-white">
        <div className="p-8 lg:p-16 flex space-between items-center">
          <img src="/logo.png" alt="logo" className="display-block mr-auto cursor-pointer h-[20px] md:h-[30px] lg:h-[40px]" />

          <Link href="/apply">
            <button className="hidden md:block rounded-none bg-[#BFB1C4] text-black text-[13px] px-6 py-2 rounded-lg font-medium hover:bg-[#A498A7] hover:opacity-[0.95] transition duration-200 ease-in-out">
              Apply To Lift Up
            </button>
          </Link>

          {
            !openNavbar &&
            <button onClick={() => setOpenNavbar(!openNavbar)} className="block md:hidden rounded-none">
              <MenuIcon color='#ffffff' size={32} strokeWidth={1.5} />
            </button>

          }

        </div>
      </div>
      <NavSlider openNavbar={openNavbar} setOpenNavbar={setOpenNavbar} />
    </div>
  )
}


export default function Home() {

  const [openNavbar, setOpenNavbar] = useState(false);

  return (
    <main className={`h-screen min-h-[max-content] bg-[#1b1b1b] ${openNavbar ? 'overflow-y-hidden' : 'overflow-y-auto'} `}>
      <SeoContentHead />
      <HeroSection openNavbar={openNavbar} setOpenNavbar={setOpenNavbar} />
      <div className="text-4xl text-center h-screen bg-red-100">

      </div>
    </main>
  );
}
