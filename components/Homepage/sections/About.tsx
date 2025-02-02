import React from 'react'

const About = () => {
    return (
        <div id="about" className=' min-h-[100vh] w-full flex flex-col lg:flex-row items-center justify-between bg-green-700 px-[10px] py-5 pt-[80px]'>
            <div className=' w-[90%] m-auto mb-5 lg:w-[30%] bg-orange-400 p-3 rounded-xl'>
                <h1 className=' text-center text-xl font-semibold mb-4'>Empowering Creators and Users</h1>
                <p className=' text-center mb-4'>
                    $EarPlug is designed to empower creators by providing them with the tools and resources necessary to build and monetize their projects effectively. The platform encourages user engagement through various incentives, including rewards for participation and contributions to the community.
                </p>
            </div>

            <div className=' w-[90%] m-auto mb-5 lg:w-[30%] bg-orange-400 p-3 rounded-xl'>
                <h1 className=' text-center text-xl font-semibold mb-4'>About $EarPlug</h1>
                <p className=' text-center'>
                    The $EarPlug project is fueled by the ambition of fostering a dynamic and interactive community built on the Solana network's high-speed and efficient capabilities. By harnessing Solana's robust infrastructure, $EarPlug seeks to provide an exceptional experience for holders, traders, and developers alike. The $EarPlug initiative is dedicated to cultivating a thriving ecosystem that encourages collaboration and innovation among its community members. With Solana's unparalleled transaction speeds and low fees, $EarPlug aims to facilitate seamless interactions and transactions, making it an attractive option for users across the blockchain space.
                </p>
            </div>


            <div className=' w-[90%] m-auto mb-5 lg:w-[30%] bg-orange-400 p-3 rounded-xl'>
                <h1 className=' text-center text-xl font-semibold mb-4'>Building a Strong Community</h1>
                <p className=' text-center'>
                    Community building is at the heart of the $EarPlug vision, with initiatives aimed at fostering connections among users, developers, and stakeholders. Regular events, AMAs, and educational resources will be provided to ensure that community members are well-informed and actively involved in the project's growth.
                </p>
            </div>
        </div>
    )
}

export default About