"use client";
import React, { useState } from 'react'
import { CopyAll } from '@mui/icons-material';
import Link from 'next/link';

const Hero = () => {
    const [copied, setCopied] = useState(false);

    const textToCopy = `3W9VEPGSZs9A7QgZdYRMLkWU5qw3uZwUFp17Hd2Zpump`;

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
        <section id="hero" className="h-screen relative bg-black bg-logo">
            {/* <video
                src="/bg-vid.mp4"
                className="absolute inset-0 object-cover w-full h-full opacity-50"
                autoPlay
                loop
                playsInline
                muted
                controls={false}
            ></video> */}
            <div className="z-[3] relative text-white h-full w-full flex flex-col justify-center items-center gap-7">
                <h1 className="text-center font-light text-4xl lg:text-7xl slab">
                    Join us on this exciting journey to financial freedom!
                </h1>
                <p className=" text-sm w-[60%] lg:w-[40%] text-center mx-auto font-semibold">
                    Exciting news for all crypto enthusiasts! Get ready for the launch of HOSTAGE IN CRYPTO. Don't miss out on this chance to be
                    part of a project that prioritizes <i>transparency,</i> <i>security and growth</i>. Buy and hold $HIC and let's build a stronger future
                    for all of us.
                </p>

                <div className=" flex flex-col w-[90%] mx-auto items-center justify-center lg:flex-row">
                    <Link
                        href={"https://t.me/+lPULoNfMXy85N2Ex"}
                        className=' mx-3 mb-4 bg-slate-800 text-white p-3 rounded-md font-bold hover:shadow-sm hover:shadow-white duration-500'
                    >
                        Join Our Telegram
                    </Link>

                    <Link
                        href={"https://discord.gg/JaD3jtzB"}
                        className=' mx-3 mb-4 bg-slate-800 text-white p-3 rounded-md font-bold hover:shadow-sm hover:shadow-white duration-500'
                    >
                        Join Our Discord
                    </Link>

                    <Link
                        href={"https://x.com/hostageincrypto?s=21&t=nk5kCymf71qnB1WAw2u8Zg"}
                        className=' mx-3 mb-4 bg-slate-800 text-white p-3 rounded-md font-bold hover:shadow-sm hover:shadow-white duration-500'
                    >
                        Follow Us On X
                    </Link>
                </div>

                <div onClick={handleCopy} className=' flex flex-col items-center justify-center bg-slate-800 text-white py-1 w-[95%] mx-auto lg:mx-0 px-4 rounded-md'>
                    <h1 className=" mr-4 cursor-pointer font-extrabold text-white break-words break-all overflow-wrap text-md md:text-xl text-center lg:text-3xl max-w-full">
                        {textToCopy}
                    </h1>
                    <h1 className=' cursor-pointer'><CopyAll /> Click to copy CA</h1>
                </div>
                {copied && <span className="text-white">Text copied to clipboard!</span>}
            </div>
        </section>
    )
}

export default Hero