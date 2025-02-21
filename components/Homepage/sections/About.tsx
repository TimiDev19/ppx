import { FadeInFromBottom } from '@/components/FadeInFromBottom'
import React from 'react'

const About = () => {
    return (
        <div id='about' className=' w-full pt-[80px] lg:h-[100vh] flex flex-col lg:flex-row items-center justify-between bg-yellow-400 py-5 px-[10px]'>
            <div className=' banner animate-pulse  lg:vertical-bounce relative w-[90%] mx-auto mb-5 lg:w-[30%] h-[300px] bg-white text-slate-700 p-3 rounded-xl'>
            </div>

            <div className=' w-[90%] mx-auto mb-5 lg:w-[30%]'>
                <FadeInFromBottom>
                    <div className=' bg-green-700 text-yellow-400 p-3 rounded-xl border-2 border-slate-800'>
                        <h1 className=' text-center text-xl font-semibold mb-4'>About $PPX</h1>
                        <p className=' text-center'>
                            OfficialPumpX is more than just a token, it’s a movement. We’re building a powerful community of investors who see the future before it happens. Will you be one of them?
                        </p>
                    </div>
                </FadeInFromBottom>
            </div>

            <div className=' banner2 animate-pulse  lg:vertical-bounce relative w-[90%] mx-auto mb-5 lg:w-[30%] h-[300px] bg-white text-slate-700 p-3 rounded-xl'>
            </div>

            {/* <div className=' w-[90%] mx-auto mb-5 lg:w-[30%] bg-white text-slate-800 p-3 rounded-xl border-2 border-slate-800'>
                <h1 className=' text-center text-xl font-semibold mb-4'>$CPT Vision</h1>
                <p className=' text-center'>
                    <b>Our vision</b> is to forge an army of true trench warriors, a community where every member stands up against deceit and champions genuine innovation. <br />
                    This is how we reclaim the battleground, turning our shared passion into a powerful force for change.
                </p>
            </div> */}
        </div>
    )
}

export default About