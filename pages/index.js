import { CrossIcon, MenuIcon, XIcon } from 'lucide-react';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

const services = [
  {
    serviceName: "content  management & marketing",
    content: "Looking to elevate your onlyfans page to the next level of excitement? Our team crafts a seamless content schedule, allowing you to indulge in your passions while we handle the details. From crafting engaging copy to scheduling, editing, and distribution, we take care of it all. Just share your content, and leave the rest to us.",
    image: "/service_1.jpg"
  },
  {
    serviceName: "Leave the talking to us.",
    content: "We handle fan interactions 24/7, ensuring you can focus on content creation while we keep your audience engaged and satisfied.",
    image: "/service_2.jpg"
  },
  {
    serviceName: "Expand your fanbase.",
    content: "Seeking to attract new fans? Our dedicated team works tirelessly to drive traffic to your page. We manage your social media accounts and dating apps, expanding your reach and converting followers into paying subscribers.",
    image: "/service_3.jpg"
  },
  {
    serviceName: "Uniquely captivating",
    content: "Your personal brand is as unique as it is enticing. We collaborate with you to refine your brand and pinpoint the essentials that breathe life into your profile.",
    image: "/service_4.jpg"
  }
]

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

function Nav({ openNavbar, setOpenNavbar }) {
  return (
    <div className="p-8 lg:p-16 flex space-between items-center flex-wrap">
      <img src="/logo.png" alt="logo" className="display-block mr-auto cursor-pointer h-[20px] md:h-[30px] lg:h-[40px]" />

      <Link href="/apply">
        <button className="hidden md:block rounded-none bg-[#BFD8AF] text-black text-[13px] px-6 py-2 rounded-lg font-medium hover:bg-[#E0FFCC] hover:opacity-[0.95] transition duration-200 ease-in-out">
          Apply Now
        </button>
      </Link>

      {
        !openNavbar &&
        <button onClick={() => setOpenNavbar(!openNavbar)} className="block md:hidden rounded-none">
          <MenuIcon color='#ffffff' size={32} strokeWidth={1.5} />
        </button>

      }

    </div>
  )
}

function HeroContent() {
  return (
    <div className="p-6 md:p-8 lg:p-16 flex flex-col w-[90%] md:max-w-[40vw] gap-4 min-h-[max-content] mb-[40px] md:mb-[100px] lg:mb-[150px]">
      <p className="text-[54px] font-bold leading-[1.1]">
        {`Unlocking your complete potential on OnlyFans begins `}
        <span className='text-[#BFD8AF]'>
          {`now.`}
        </span>
      </p>
      <p className="text-[16px] font-semibold leading-[1.5]">
        {`Become part of the premier OnlyFans Management Agency.`}
      </p>

      <Link href="/apply">
        <button className="rounded-none bg-[#BFD8AF] text-black text-[13px] px-6 py-2 rounded-lg font-medium hover:bg-[#E0FFCC] hover:opacity-[0.95] transition duration-200 ease-in-out">
          Apply Now
        </button>
      </Link>
    </div>
  )
}

function HeroSection({ openNavbar, setOpenNavbar }) {

  return (
    <div className="relative text-4xl h-[90%] md:h-[90%] lg:h-[92.5%] bg-white">
      <div className="saturate-[0.9] blur-[0.7px] opacity-[0.9] brightness-90 contrast-[0.9] absolute top-0 left-0 right-0 h-[100%] z-[1] bg-[url('/services_alt_1_phone.jpg')] md:bg-[url('/services_alt_1_tab.jpg')] lg:bg-[url('/services_alt_1_hero.jpg')] bg-cover bg-center	bg-no-repeat" />
      <div className="absolute flex flex-col justify-between top-0 left-0 right-0 h-[100%] z-[2] text-white">
        <Nav openNavbar={openNavbar} setOpenNavbar={setOpenNavbar} />
        <HeroContent />
      </div>
      <NavSlider openNavbar={openNavbar} setOpenNavbar={setOpenNavbar} />
    </div>
  )
}

function SecondarySection() {
  return (
    <div className="min-h-[60vh] text-center flex items-center justify-center bg-white">
      <div className='w-[100%] md:w-[85%] lg:w-[55%] m-[40px] md:m-[64px] lg:m-[128px]'>
        <p className="text-[54px] font-bold leading-[1.1] text-black">
          Let us guide you to the top 0.1% of content creators.
        </p>
      </div>
    </div>
  )
}

function LeftImageServices({
  serviceName,
  content,
  image
}) {

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-16 w-[100%] md:w-[80%]">
      <div className='w-[100%] md:w-[50%] flex-1'>
        {/* image */}
        <img src={image} alt={serviceName} className='w-full' />
      </div>
      <div className='flex-1 flex flex-col gap-8 mg:gap-16'>
        {/* service content */}
        <p className="text-[40px] md:text-[54px] font-bold leading-[1.1] text-black">
          {serviceName}
        </p>
        <p>
          {content}
        </p>
        <Link href="/apply">
          <button className="w-[max-content] rounded-none bg-[#000000] text-white text-[13px] px-6 py-4 rounded-lg font-medium hover:bg-[#1b1b1b] hover:opacity-[0.95] transition duration-200 ease-in-out">
            Apply Now
          </button>
        </Link>
      </div>
    </div>
  )
}

function RightImageServices({
  serviceName,
  content,
  image
}) {

  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-4 md:gap-16 w-[100%] md:w-[80%]">
      <div className='flex-1 flex flex-col gap-8 mg:gap-16'>
        {/* service content */}
        <p className="text-[40px] md:text-[54px] font-bold leading-[1.1] text-black">
          {serviceName}
        </p>
        <p>
          {content}
        </p>
        <Link href="/apply">
          <button className="w-[max-content] rounded-none bg-[#000000] text-white text-[13px] px-6 py-4 rounded-lg font-medium hover:bg-[#1b1b1b] hover:opacity-[0.95] transition duration-200 ease-in-out">
            Apply Now
          </button>
        </Link>
      </div>
      <div className='w-[100%] md:w
      -[50%] flex-1'>
        {/* image */}
        <img src={image} alt={serviceName} className='w-full' />
      </div>
    </div>
  )
}

function ServicesSection() {
  return (
    <div className='bg-[#BFD8AF] flex flex-col items-center justify-center min-h-[60vh]  p-8 md:p-16 gap-32'>
      <p className="text-center text-[54px] font-bold leading-[1.1] text-black">
        Our Services
      </p>
      {
        services.map((service, index) => {
          return index % 2 === 0 ? <LeftImageServices {...service} key={index} /> : <RightImageServices {...service} key={index} />
        })
      }
    </div>
  )
}

function QuoteSection() {
  return (
    <div className="min-h-[60vh] text-center flex items-center justify-center bg-white">
      <div className='w-[100%] md:w-[85%] lg:w-[55%] m-[40px] md:m-[64px] lg:m-[128px]'>
        <p className="text-[30px] md:text-[38px] font-regular leading-[1.1] text-black">
            {`"Outstandingly professional and effortless collaboration. Their hands-on approach allowed me to take a step back while they worked wonders, bringing my profile to new heights."`}
        </p>
        <p className='mt-[20px] text-[16px] font-regular leading-[1.5] text-black'>
          — KELLY S.
        </p>
      </div>
    </div>
  )
}

function ApplySection() {
  return (
    <div className="relative min-h-[60vh] text-center flex items-center justify-center gap-4">
      <div className="bg-[url('/apply.jpg')] bg-cover bg-center bg-no-repeat w-[100%] h-[100%] absolute top-0 left-0 right-0 z-[1] saturate-[0.9] blur-[0.7px] opacity-[0.9] brightness-90 contrast-[0.9]" />
      <div className='w-[100%] md:w-[85%] lg:w-[55%] m-[40px] md:m-[64px] lg:m-[128px] z-[2]'>
        <p className="text-[44px] md:text-[54px] font-bold leading-[1.1] text-white">
        Become a part of our team.
        </p>
        <Link href="/apply">
          <button className="mt-[100px] w-full md:w-[max-content] rounded-none bg-[#000000] text-white text-[13px] px-6 py-4 rounded-lg font-medium hover:bg-[#1b1b1b] hover:opacity-[0.95] transition duration-200 ease-in-out">
            Apply Now
          </button>
        </Link>
      </div>
    </div>
  )
}

// function Footer() {
//   return (
//     <div>
//       <div>
//         {/* text */}
//         <p>
//           Join the Lift Up team. ♡
//         </p>
//       </div>
//       <div>
//         <p>
//           Contact
//         </p>
//         {/* contact column 2 links */}
//         {/* email mailto */}
//         <p>
//           <a href="mailto:example@gmail.com">
//             example@gmail.com
//           </a>
//         </p>

//         {/* instagram */}
//         <p>
//           <a href="https://www.instagram.com">
//             Instagram
//           </a>
//         </p>
//       </div>
//       <div>
//         {/* Logo */}
//         <img src="/logo.png" alt="logo" />
//       </div>
//     </div>
//   )
// }

// style the footer
function Footer() {
  return (
    <div className="bg-white flex flex-col md:flex-row items-center justify-between min-h-[20vh] p-8 md:p-16 gap-8 w-[100%] md:w-[80%] ml-auto mr-auto">
      <p className="text-[24px] font-bold leading-[1.1] text-center">
        Join the Lift Up team. ♡
      </p>
      <div className="flex flex-col md:flex-col items-center justify-center gap-4">
        <p className="text-[16px] font-regular leading-[1.5] font-bold">
          Contact
        </p>
        <p className="text-[16px] font-regular leading-[1.5] underline">
          <a href="mailto:example@gmail.com">
            example@gmail.com
          </a>
        </p>
        <p className="text-[16px] font-regular leading-[1.5] underline">
          <a href="https://www.instagram.com" target="_blank">
            @lifupagencyofficial
          </a>
        </p>
      </div>
      <img src="/logo.png" alt="logo" className="w-[150px] md:w-[180px] lg:w-[200px] invert" />
    </div>
  )
}


export default function Home() {

  const [openNavbar, setOpenNavbar] = useState(false);

  return (
    <main className={`h-screen min-h-[max-content] overflow-x-hidden ${openNavbar ? 'overflow-y-hidden' : 'overflow-y-auto'} `}>
      <SeoContentHead />
      <HeroSection openNavbar={openNavbar} setOpenNavbar={setOpenNavbar} />
      <SecondarySection />
      <ServicesSection />
      <QuoteSection />
      <ApplySection />
      <Footer />
    </main>
  );
}
