import React from 'react'

const Hero = () => {
    return (
        <section id="hero" className="h-screen relative bg-black">
            <video
                src="/bg-vid.mp4"
                className="absolute inset-0 object-cover w-full h-full opacity-50"
                autoPlay
                loop
                playsInline
                muted
                controls={false}
            ></video>
            <div className="z-[3] relative text-white h-full w-full flex flex-col justify-center items-center gap-7">
                <h1 className="text-center font-light text-4xl lg:text-7xl slab">
                    The Legendary Journey of EarPlug Begins!
                </h1>
                <p className=" text-sm w-[60%] lg:w-[40%] text-center mx-auto font-semibold">
                    Get ready to silence the noise and bring back the laughter! $EarPlug is here to redefine
                    the meme landscape with simplicity and charm. With this straightforward and powerful roadmap,
                    we’re ushering in the golden age of meme coins—quieter, funnier, and more iconic than ever before!
                </p>
            </div>
        </section>
    )
}

export default Hero