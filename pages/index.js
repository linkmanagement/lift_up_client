import Head from 'next/head';

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
          <div className="p-16">
            <img src="/logo.png" alt="logo" className="cursor-pointer h-[20px] md:h-[30px] lg:h-[40px]" />
          </div>
        </div>
      </div>
      <div className="text-4xl text-center h-screen">
      </div>
    </main>
  );
}
