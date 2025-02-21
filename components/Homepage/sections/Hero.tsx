"use client";
import React, { useState } from 'react'
import { CopyAll } from '@mui/icons-material';
import Link from 'next/link';
import TelegramIcon from '@mui/icons-material/Telegram';
import XIcon from '@mui/icons-material/X';
import { FadeInFromTop } from '@/components/FadeInFromTop';
import { FadeInFromBottom } from '@/components/FadeInFromBottom';

const Hero = () => {
    const [copied, setCopied] = useState(false);

    const textToCopy = `J5ypPWcQUcHv2BxwyTnPyVwjx7BWf3AXxk1iFuAUpump`;

    const handleCopy = () => {
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000); // Reset the copied state after 2 seconds
            })
            .catch(err => {
                console.error("Failed to copy text: ", err);
            });
    };
    return (
        <section id="hero" className="h-screen relative bg-white">
            <video
                src="/ppx-vid.mp4"
                className="absolute inset-0 object-cover w-full h-full opacity-50"
                autoPlay
                loop
                playsInline
                muted
                controls={false}
            ></video>
            <div className="z-[3] relative text-green-700 h-full w-full flex flex-col justify-center items-center gap-7">
                <h1 className="text-center font-light text-4xl lg:text-7xl slab">
                    Building a strong community 💎 <br />
                    Hold, grow & succeed together!
                </h1>
                <p className=" text-sm w-[60%] lg:w-[40%] text-center mx-auto font-semibold">
                    {/* Exciting news for all crypto enthusiasts! Get ready for the launch of CAPTAIN TRENCH. Don't miss out on this chance to be
                    part of a project that prioritizes <i>transparency,</i> <i>security and growth</i>. Buy and hold $CPT and let's build a stronger future
                    for all of us. */}
                </p>
                <div onClick={handleCopy} className=' flex flex-col items-center justify-center bg-green-700 text-yellow-400 py-1 w-[95%] lg:w-fit mx-auto lg:mx-0 px-4 rounded-md'>
                    <FadeInFromBottom>
                        <h1 className=" mr-4 cursor-pointer font-extrabold text-yellow-400 break-words break-all overflow-wrap text-md md:text-xl text-center lg:text-3xl max-w-full">
                            {textToCopy}
                        </h1>
                    </FadeInFromBottom>
                    <h1 className=' cursor-pointer'><CopyAll /> Click to copy CA</h1>
                </div>
                {copied && <span className="text-black">Text copied to clipboard!</span>}

                <div className=" flex flex-col w-[90%] mx-auto items-center justify-center lg:flex-row">
                    <Link
                        href={"https://t.me/OfficialPumpX"}
                        className=' flex items-center justify-center mx-3 mb-4 bg-green-700 text-yellow-400 p-3 rounded-md font-bold hover:shadow-sm hover:shadow-yellow-400 hover:tracking-wide duration-500'
                    >
                        Join Our Telegram <TelegramIcon className=' mx-4' />
                    </Link>

                    {/* <Link
                        href={"https://discord.gg/JaD3jtzB"}
                        className=' mx-3 mb-4 bg-black text-black p-3 rounded-md font-bold hover:shadow-sm hover:shadow-white duration-500'
                    >
                        Join Our Discord
                    </Link> */}

                    <Link
                        href={"https://x.com/officialpumpx?s=11"}
                        className=' flex items-center justify-center mx-3 mb-4 bg-green-700 text-yellow-400 p-3 rounded-md font-bold hover:shadow-sm hover:shadow-yellow-400 hover:tracking-wide duration-500'
                    >
                        Follow Us On X <XIcon className=' mx-4' />
                    </Link>
                </div>

                {/* <div onClick={handleCopy} className=' flex flex-col items-center justify-center bg-black text-black py-1 w-[95%] mx-auto lg:mx-0 px-4 rounded-md'>
                    <h1 className=" mr-4 cursor-pointer font-extrabold text-black break-words break-all overflow-wrap text-md md:text-xl text-center lg:text-3xl max-w-full">
                        {textToCopy}
                    </h1>
                    <h1 className=' cursor-pointer'><CopyAll /> Click to copy CA</h1>
                </div>
                {copied && <span className="text-black">Text copied to clipboard!</span>} */}
            </div>
        </section>
    )
}

export default Hero