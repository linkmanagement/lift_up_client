import Head from 'next/head';
import Link from 'next/link';

const Header = () => (
  <Head>
    <title>Unlock Your OnlyFans Potential | Premier Management Agency</title>
    <meta name="description" content="Join the leading OnlyFans Management Agency and maximize your earning potential today." />
    <meta name="keywords" content="OnlyFans, management agency, maximize earnings, potential, join" />
    {/* Add more SEO-related meta tags here */}
  </Head>
);

export default function Home() {
  return (
    <main className="h-screen min-h-[max-content]">
      <Header />
      <div className="relative text-4xl h-[80%] md:h-[80%]  lg:h-[92.5%] min-h-[max-content] bg-white">
        <div className="saturate-[0.9] blur-[0.7px] opacity-[0.9] brightness-90 contrast-[0.9] absolute top-0 left-0 right-0 h-[100%] z-[1] bg-[url('/hero_cropped_mobile.jpg')] md:bg-[url('/hero_cropped_tab.jpg')] lg:bg-[url('/hero_cropped.jpg')] bg-cover bg-center	bg-no-repeat" />
        <div className="absolute top-0 left-0 right-0 h-[100%] z-[2] 	text-white">
          <div className="p-8 lg:p-16 flex space-between items-center">
            <img src="/logo.png" alt="logo" className="display-block mr-auto cursor-pointer h-[20px] md:h-[30px] lg:h-[40px]" />

            <Link href="/contact">
              <button className="rounded-none bg-[#BFB1C4] text-black text-[13px] px-6 py-2 rounded-lg font-medium hover:bg-[#A498A7] hover:opacity-[0.95] transition duration-200 ease-in-out">
                Apply To Lift Up
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="text-4xl text-center h-screen">
      </div>
    </main>
  );
}
