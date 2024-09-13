import Image from 'next/image'
import React from 'react'

const Skill = () => {
    return (
        <div className='w-full bg-white'>
            <div className='w-full px-[8%] py-20' id='skill'>
                <h1 className='text-4xl mb-16 font-extrabold bg-gradient-to-r from-indigo-600 to-indigo-950 bg-clip-text text-transparent text-center'>My Skills</h1>
                <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-10">
                    {/* Skill Item: React */}
                    <div className="flex flex-col items-center">
                        <div className="w-40 h-40 rounded-3xl flex justify-center items-center mb-3 bg-gray-100 transition-all duration-300 hover:bg-blue-900 hover:scale-105 shadow-md">
                            <Image
                                src="/nextjs.png"
                                alt="NextJs"
                                width={80}
                                height={80}
                                className="transition-all duration-300 hover:scale-110 md:grayscale hover:grayscale-0"
                            />
                        </div>
                        <h1 className="text-center text-blue-700 text-xl font-semibold">NextJs</h1>
                    </div>


                    <div className="flex flex-col items-center">
                        <div className="w-40 h-40 rounded-3xl flex justify-center items-center mb-3 bg-gray-100 transition-all duration-300 hover:bg-blue-900 hover:scale-105 shadow-md">
                            <Image
                                src="/node.png"
                                alt="NodeJs"
                                width={110}
                                height={110}
                                className="transition-all duration-300 hover:scale-110 md:grayscale hover:grayscale-0"
                            />
                        </div>
                        <h1 className="text-center text-blue-700 text-xl font-semibold">NodeJs</h1>
                    </div>


                    <div className="flex flex-col items-center">
                        <div className="w-40 h-40 rounded-3xl flex justify-center items-center mb-3 bg-gray-100 transition-all duration-300 hover:bg-blue-900 hover:scale-105 shadow-md">
                            <Image
                                src="/express.png"
                                alt="express"
                                width={100}
                                height={100}
                                className="transition-all duration-300 hover:scale-110 md:grayscale hover:grayscale-0"
                            />
                        </div>
                        <h1 className="text-center text-blue-700 text-xl font-semibold">ExpressJs</h1>
                    </div>


                    <div className="flex flex-col items-center">
                        <div className="w-40 h-40 rounded-3xl flex justify-center items-center mb-3 bg-gray-100 transition-all duration-300 hover:bg-blue-900 hover:scale-105 shadow-md">
                            <Image
                                src="/react.png"
                                alt="React"
                                width={80}
                                height={80}
                                className="transition-all duration-300 hover:scale-110 md:grayscale hover:grayscale-0"
                            />
                        </div>
                        <h1 className="text-center text-blue-700 text-xl font-semibold">React</h1>
                    </div>


                    <div className="flex flex-col items-center">
                        <div className="w-40 h-40 rounded-3xl flex justify-center items-center mb-3 bg-gray-100 transition-all duration-300 hover:bg-blue-900 hover:scale-105 shadow-md">
                            <Image
                                src="/mongo db.png"
                                alt="React"
                                width={100}
                                height={100}
                                className="transition-all duration-300 hover:scale-110 md:grayscale hover:grayscale-0"
                            />
                        </div>
                        <h1 className="text-center text-blue-700 text-xl font-semibold">Mongo DB</h1>
                    </div>


                    <div className="flex flex-col items-center">
                        <div className="w-40 h-40 rounded-3xl flex justify-center items-center mb-3 bg-gray-100 transition-all duration-300 hover:bg-blue-900 hover:scale-105 shadow-md">
                            <Image
                                src="/js.png"
                                alt="js"
                                width={80}
                                height={80}
                                className="transition-all duration-300 hover:scale-110 md:grayscale hover:grayscale-0"
                            />
                        </div>
                        <h1 className="text-center text-blue-700 text-xl font-semibold">JavaScript</h1>
                    </div>


                    {/* Skill Item: Aws */}
                    <div className="flex flex-col items-center">
                        <div className="w-40 h-40 rounded-3xl flex justify-center items-center mb-3 bg-gray-100 transition-all duration-300 hover:bg-blue-900 hover:scale-105 shadow-md">
                            <Image
                                src="/aws.png"
                                alt="aws"
                                width={80}
                                height={80}
                                className="transition-all duration-300 hover:scale-110 md:grayscale hover:grayscale-0"
                            />
                        </div>
                        <h1 className="text-center text-blue-700 text-xl font-semibold">AWS</h1>
                    </div>


                    <div className="flex flex-col items-center">
                        <div className="w-40 h-40 rounded-3xl flex justify-center items-center mb-3 bg-gray-100 transition-all duration-300 hover:bg-blue-900 hover:scale-105 shadow-md">
                            <Image
                                src="/docker.png"
                                alt="docker"
                                width={110}
                                height={110}
                                className="transition-all duration-300 hover:scale-110 md:grayscale hover:grayscale-0"
                            />
                        </div>
                        <h1 className="text-center text-blue-700 text-xl font-semibold">Docker</h1>
                    </div>


                    <div className="flex flex-col items-center">
                        <div className="w-40 h-40 rounded-3xl flex justify-center items-center mb-3 bg-gray-100 transition-all duration-300 hover:bg-blue-900 hover:scale-105 shadow-md">
                            <Image
                                src="/git.png"
                                alt="git"
                                width={120}
                                height={120}
                                className="transition-all duration-300 hover:scale-110 md:grayscale hover:grayscale-0"
                            />
                        </div>
                        <h1 className="text-center text-blue-700 text-xl font-semibold">Git</h1>
                    </div>


                    <div className="flex flex-col items-center">
                        <div className="w-40 h-40 rounded-3xl flex justify-center items-center mb-3 bg-gray-100 transition-all duration-300 hover:bg-blue-900 hover:scale-105 shadow-md">
                            <Image
                                src="/jira.png"
                                alt="jira"
                                width={100}
                                height={100}
                                className="transition-all duration-300 hover:scale-110 md:grayscale hover:grayscale-0"
                            />
                        </div>
                        <h1 className="text-center text-blue-700 text-xl font-semibold">Jira</h1>
                    </div>


                    <div className="flex flex-col items-center">
                        <div className="w-40 h-40 rounded-3xl flex justify-center items-center mb-3 bg-gray-100 transition-all duration-300 hover:bg-blue-900 hover:scale-105 shadow-md">
                            <Image
                                src="/redis.png"
                                alt="redis"
                                width={100}
                                height={100}
                                className="transition-all duration-300 hover:scale-110 md:grayscale hover:grayscale-0"
                            />
                        </div>
                        <h1 className="text-center text-blue-700 text-xl font-semibold">Redis</h1>
                    </div>


                    <div className="flex flex-col items-center">
                        <div className="w-40 h-40 rounded-3xl flex justify-center items-center mb-3 bg-gray-100 transition-all duration-300 hover:bg-blue-900 hover:scale-105 shadow-md">
                            <Image
                                src="/tailwind.png"
                                alt="tailwind css"
                                width={80}
                                height={80}
                                className="transition-all duration-300 hover:scale-110 md:grayscale hover:grayscale-0"
                            />
                        </div>
                        <h1 className="text-center text-blue-700 text-xl font-semibold">Tailwind Css</h1>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Skill