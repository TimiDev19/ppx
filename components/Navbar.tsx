"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Logo from '@/assets/PPX-logo.jpg'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Link from 'next/link';
import TelegramIcon from '@mui/icons-material/Telegram';
import XIcon from '@mui/icons-material/X';
// import Discord from "@mui/icons-material/discord"
import { Instagram } from "@mui/icons-material";
import { motion } from "framer-motion";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { FadeInFromTop } from './FadeInFromTop';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className=' w-[100vw] h-[80px] z-50 fixed'>
            <FadeInFromTop>
                <div className=' w-[100vw] h-[80px] z-50 fixed'>
                    <div className=' w-full h-[80px] bg-green-600 flex items-center justify-between px-[10px]'>
                        <div className=' flex items-center justify-center h-full'>
                            <Image
                                src={Logo}
                                alt='logo'
                                className=' h-[90%] w-auto rounded-full border-2 border-green-700'
                            />

                            <h1 className=' text-3xl font-semibold mx-3 text-yellow-400'>$PPX</h1>
                        </div>

                        <div className=' lg:hidden'>
                            {/* Button to toggle the sidebar */}
                            <button
                                onClick={toggleSidebar}
                                style={{ margin: '0px', padding: '10px', cursor: 'pointer' }}
                            >
                                {isOpen ? <CloseOutlinedIcon className='text-3xl text-yellow-400' /> : <MenuOutlinedIcon className=' height-[400px] text-3xl text-yellow-400' />}
                            </button>

                            {/* Sidebar motion component */}
                            <motion.div
                                initial={{ width: 0 }} // Initial width of sidebar when closed
                                animate={{ width: isOpen ? 300 : 0 }} // Animate to width 300px when open
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 20,
                                    duration: 0.5,
                                }} // Smooth transition
                                style={{
                                    height: "100vh",
                                    backgroundColor: "",
                                    color: "black",
                                    overflow: "hidden",
                                    position: "fixed",
                                    top: 0,
                                    left: 0,
                                }}
                                className=' shadow-md shadow-black bg-green-600 text-yellow-400'
                            >
                                {/* Sidebar content */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: isOpen ? 1 : 0 }}
                                    transition={{ delay: 0.2 }}
                                    style={{ padding: "20px" }}
                                >
                                    <div className=' flex w-full items-center justify-between mb-8'>
                                        <h3 className=' text-xl text-yellow-400 font-bold'>$PPX</h3>
                                        <button
                                            onClick={toggleSidebar}
                                            style={{ margin: '0px', padding: '10px', cursor: 'pointer' }}
                                        >
                                            {isOpen ? <CloseOutlinedIcon className='text-3xl text-yellow-400' /> : " "}
                                        </button>
                                    </div>
                                    <ul style={{ listStyle: "none", padding: 0 }}>
                                        <Link onClick={toggleSidebar} href={'/#hero'} className=" mb-4 w-fit rounded-full text-yellow-400 flex items-center justify-center  hover:tracking-wide duration-500">Home 🏠</Link>
                                        <Link onClick={toggleSidebar} href={'/#about'} className=" mb-4 w-fit rounded-full text-yellow-400 flex items-center justify-center  hover:tracking-wide duration-500">About 📝</Link>
                                        <Link onClick={toggleSidebar} href={'/#roadmap'} className=" mb-4 w-fit rounded-full text-yellow-400 flex items-center justify-center  hover:tracking-wide duration-500">Roadmap 🗺️</Link>
                                        <Link target='blank' onClick={toggleSidebar} href={'https://dexscreener.com/solana/7HufZHX3KMNLFtEYMNNFLsjnynNojimoU2tFkPnxghVu'} className=" mb-4 w-fit rounded-full text-yellow-400 flex items-center justify-center  hover:tracking-wide duration-500">DEXScreen</Link>
                                        <div className=" w-full flex items-center justify-between">
                                            <Link target="blank" href={'https://t.me/OfficialPumpX'} className=" p-3 bg-green-700 rounded-full text-yellow-400 hover:text-green-700 flex items-center justify-center border-2 border-yellow-400 hover:border-yellow-400 hover:bg-transparent duration-500"><TelegramIcon /></Link>
                                            <Link onClick={toggleSidebar} href={'/#home'} className=" bg-green-700 rounded-full text-yellow-400 hover:text-green-700 flex items-center justify-center border-2 border-yellow-400 hover:border-yellow-400 hover:bg-transparent duration-500 ">
                                                <Image
                                                    src={Logo}
                                                    alt='logo'
                                                    className=' h-[60px] w-auto rounded-full'
                                                />
                                            </Link>
                                            <Link target="blank" href={'https://x.com/officialpumpx?s=11'} className=" p-3 bg-green-700 rounded-full text-yellow-400 hover:text-green-700 flex items-center justify-center border-2 border-yellow-400 hover:border-yellow-400 hover:bg-transparent duration-500 "><XIcon /></Link>
                                            {/* <Link target="blank" href={'https://x.com/megaldonsui?igsh=NzdzYXRrcnBjMm5p&utm_source=qr'} className=" p-3 bg-white rounded-full text-green-700 flex items-center justify-center border-white border-2 hover:border-green-700 hover:bg-transparent duration-500 mx-4"><Instagram /></Link> */}
                                        </div>
                                    </ul>
                                </motion.div>
                            </motion.div>
                        </div>

                        <div className=' hidden lg:flex items-center justify-center'>
                            <Link onClick={toggleSidebar} href={'/#hero'} className=" w-fit rounded-full text-yellow-400 flex items-center justify-center  hover:tracking-wide duration-500 mx-4">Home</Link>
                            <Link onClick={toggleSidebar} href={'/#about'} className=" w-fit rounded-full text-yellow-400 flex items-center justify-center  hover:tracking-wide duration-500 mx-4">About</Link>
                            <Link onClick={toggleSidebar} href={'/#roadmap'} className=" w-fit rounded-full text-yellow-400 flex items-center justify-center  hover:tracking-wide duration-500 mx-4">Roadmap</Link>
                            <Link target='blank' onClick={toggleSidebar} href={'https://dexscreener.com/solana/7HufZHX3KMNLFtEYMNNFLsjnynNojimoU2tFkPnxghVu'} className=" w-fit rounded-full text-yellow-400 flex items-center justify-center  hover:tracking-wide duration-500 mx-4">DEXScreen</Link>
                            <div className=" w-full flex items-center justify-between">
                                <Link target="blank" href={'https://t.me/OfficialPumpX'} className=" p-3 bg-green-700 rounded-full text-yellow-400 hover:text-green-700 flex items-center justify-center border-2 border-yellow-400 hover:border-yellow-400 hover:bg-transparent duration-500 mx-4"><TelegramIcon /></Link>
                                <Link target="blank" href={'https://x.com/officialpumpx?s=11'} className=" p-3 bg-green-700 rounded-full text-yellow-400 hover:text-green-700 flex items-center justify-center border-2 border-yellow-400 hover:border-yellow-400 hover:bg-transparent duration-500 mx-4"><XIcon /></Link>
                            </div>
                        </div>
                    </div>
                    {/* {
                sidebarOpen && <div className=' w-full bg-orange-400 px-[10px] py-2'>
                <ul>
                <li>
                <Link href={''}>
                Home
                </Link>
                </li>
                </ul>
                </div>
            } */}
                </div>
            </FadeInFromTop>
        </div>
    )
}

export default Navbar