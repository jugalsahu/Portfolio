import Image from 'next/image'
import React from 'react'
import { Button } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'

const Hero = () => {
    return (
        <div className='flex flex-col-reverse lg:flex-row mt-0 lg:mt-6 items-center lg:items-start' id='home'>
            {/* Left Section */}
            <div className='w-full mt-10 lg:mt-0 lg:w-1/2 lg:pr-8 mb-12 lg:mb-0'>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-blue-950 font-extrabold mb-5 text-center lg:text-left">
                    I am Jugal
                </h1>
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-8 font-bold bg-gradient-to-r from-indigo-600 to-indigo-950 bg-clip-text text-transparent text-center lg:text-left">
                    Web Developer + UX Designer
                </h1>

                <p className='text-sm sm:text-base lg:text-lg text-slate-600 lg:text-left text-justify'>
                    Detail-oriented and driven by a passion for technology, consistently seeking to enhance skills through ongoing education and hands-on experience. Excels in fast-paced environments, adapting to new challenges and technologies with ease. Recognized for excellent communication skills, enabling effective collaboration with cross-functional teams, stakeholders, and clients to deliver impactful, user-focused digital solutions.
                </p>

                <div className='mt-8 flex justify-center lg:justify-start'>
                    <a href="/JUGAL_KISHORE_SAHU_MERN_STACK_RESUME.pdf" download="JUGAL_KISHORE_SAHU_MERN_STACK_RESUME.pdf">
                        <Button
                            style={{
                                height: '50px',
                                lineHeight: '50px',
                                padding: '0 60px',
                                color: '#453DC5',
                                fontWeight: 'bold',
                                border: '2px solid #ccc',
                            }}
                            shape="round"
                            icon={<DownloadOutlined />}
                            size="large"
                        >
                            Download CV
                        </Button>
                    </a>
                </div>
            </div>

            {/* Right Section */}
            <div className='w-full lg:w-1/2 flex justify-center lg:justify-end lg:pr-10'>
                <div className="bg-slate-950 rounded-full lg:rounded-3xl w-[200px] sm:w-[350px] md:w-[400px] lg:w-[430px] h-[200px] sm:h-[400px] md:h-[450px] transform lg:rotate-6 hover:rotate-0 transition-transform duration-500 overflow-hidden shadow-none md:shadow-xl md:shadow-blue-900">
                    <Image
                        src="/jugal2.png"
                        layout="fill"
                        alt="Background Image"
                    />
                </div>

            </div>
        </div>
    )
}

export default Hero
