import React from 'react'

const About = () => {
    return (
        // <div id="about" className=' min-h-[100vh] w-full flex flex-col lg:flex-row items-center justify-center bg-black px-[10px] py-5 pt-[80px]'>
        // <div className=' w-full flex flex-col h-[600px] lg:flex-row items-center justify-center'>
        //     <div className=' animation-bg w-[90%] m-auto mb-5 lg:w-[30%] h-[300px] bg-white text-slate-700 p-3 rounded-xl animate-pulse duration-[10000]'>
        //         {/* <h1 className=' text-center text-xl font-semibold mb-4'>Empowering Creators and Users</h1>
        //     <p className=' text-center mb-4'>
        //         $EarPlug is designed to empower creators by providing them with the tools and resources necessary to build and monetize their projects effectively. The platform encourages user engagement through various incentives, including rewards for participation and contributions to the community. 
        //     </p> */}
        //     </div>

        //         <div className=' w-[90%] m-auto mb-5 lg:w-[30%] bg-white text-slate-800 p-3 rounded-xl'>
        //             <h1 className=' text-center text-xl font-semibold mb-4'>About $EarPlug</h1>
        //             <p className=' text-center'>
        //                 Hostage In Crypto ($CPT) is a token designed specially for individuals who have been burned by rug pulls in the past and are tired of falling victim to scams in their quest for financial success. With $CPT, we aim to create a community where we can all thrive together.
        //             </p>
        //         </div>


        //         <div className=' animation-bg w-[90%] m-auto mb-5 h-[300px] lg:w-[30%] bg-white text-slate-700 p-3 rounded-xl animate-pulse duration-[10000]'>
        //             {/* <h1 className=' text-center text-xl font-semibold mb-4'>Building a Strong Community</h1>
        //         <p className=' text-center'>
        //             Community building is at the heart of the $EarPlug vision, with initiatives aimed at fostering connections among users, developers, and stakeholders. Regular events, AMAs, and educational resources will be provided to ensure that community members are well-informed and actively involved in the project's growth.
        //         </p> */}
        //         </div>
        //     </div>
        // </div>
        <div id='about' className=' w-full pt-[80px] lg:h-[100vh] flex flex-col lg:flex-row items-center justify-between bg-black py-5 px-[10px]'>




            <div className=' w-[90%] mx-auto mb-5 lg:w-[30%] bg-white text-slate-800 p-3 rounded-xl border-2 border-slate-800'>
                <h1 className=' text-center text-xl font-semibold mb-4'>$CPT Origin Story</h1>
                <p className=' text-center'>
                    At Captain Trench, our journey began deep in the crypto trenches. We were a diverse team of experts, united by on thing: a fierce disdain for the endless scams, rug pulls and empty promises that have decimated promising projects. We watched as communities were left holding worthless tokens, their hopes reduced to ashes on the memecoin battlefield. <br />
                    We decided to do things differently. We set out to create not just another memecoin, but a movement or a revolution built on <i>authenticity, trust and real value.</i>
                </p>
            </div>

            <div className=' banner relative w-[90%] mx-auto mb-5 lg:w-[30%] h-[300px] bg-white text-slate-700 p-3 rounded-xl'>
                {/* <video
                    src="/flag-vid.MP4"
                    className="absolute inset-0 object-cover w-full h-full opacity-50 rounded-xl"
                    autoPlay
                    loop
                    playsInline
                    muted
                    controls={false}
                ></video> */}
            </div>

            <div className=' w-[90%] mx-auto mb-5 lg:w-[30%] bg-white text-slate-800 p-3 rounded-xl border-2 border-slate-800'>
                <h1 className=' text-center text-xl font-semibold mb-4'>$CPT Vision</h1>
                <p className=' text-center'>
                    <b>Our vision</b> is to forge an army of true trench warriors, a community where every member stands up against deceit and champions genuine innovation. <br />
                    This is how we reclaim the battleground, turning our shared passion into a powerful force for change.
                </p>
            </div>
        </div>
    )
}

export default About