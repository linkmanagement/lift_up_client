export default function Home() {
  return (
    <main className="h-screen min-h-[max-content]">
      <div className="relative text-4xl h-[80%] md:h-[80%]  lg:h-[92.5%] min-h-[max-content] bg-white">
        <div className="saturate-[0.9] blur-[0.7px] opacity-[0.9] brightness-90 contrast-[0.9] absolute top-0 left-0 right-0 h-[100%] z-[1] bg-[url('/hero_cropped_mobile.jpg')] md:bg-[url('/hero_cropped_tab.jpg')] lg:bg-[url('/hero_cropped.jpg')] bg-cover bg-center	bg-no-repeat bg-width-[10%]">
          <p className="p">

          </p>
        </div>
        <div className="absolute top-0 left-0 right-0 h-[100%] z-[2] 	text-white">
        </div>
      </div>
      <div className="text-4xl text-center h-screen">
      </div>
    </main>
  );
}
