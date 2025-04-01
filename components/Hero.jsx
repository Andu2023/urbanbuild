import Button from "./Button"

const Hero = () => {
  return (
    <section className=
    "h-[70vh] bg-[url('/assets/img/hero/bg.jpg')] bg-no-repeat bg-cover bg-center relative">
      {/* overlay */}
      <div className=" absolute inset-0 bg-gradient-to-l from-black/0 via-black/50 to-black/70 z-10"></div>
      <div className="container mx-auto h-full flex items-center">
      <div className="z-20 text-white text-center xl:text-left mx-auto xl:mx-0 flex flex-col items-center xl:items-start max-w-[608px]">
      <h1 className="h1 text-white mb-4"><span className="text-accent">Building</span>robust Lasting solution</h1>
      <p className="mb-9">
      Fromconcept to completion to ensure every detalis is optimazied  ffffffsaaaaaaaa fffff yyyygggggggyyyyyyyyyyyyyyyf  8iyiyiu uigiiiiiiiiisedfui
      </p>
      {/* btn */}
      <div>
        <Button text="see our work" />
        </div>
      </div>
      </div>
    </section>
  )
}

export default Hero