import { Mail, MapPin, PhoneCall } from 'lucide-react';
import React from 'react';

const Resume = () => {
    return (
        <div className='w-full bg-white py-16' id='resume'>
            <h1 className='text-4xl mb-16 font-extrabold bg-gradient-to-r from-indigo-600 to-indigo-950 bg-clip-text text-transparent text-center'>Resume</h1>
            <div className="px-[8%] py-8 w-full space-y-3">
                <div className='flex flex-col md:flex-row w-full gap-3'>
                    {/* Profile Image Section */}
                    <div className='w-full md:w-4/12 border border-blue-700 flex justify-center rounded-3xl p-8 overflow-hidden shadow-lg hover:shadow-2xl'>
                        <div className='bg-gradient-to-r from-indigo-600 to-indigo-950 rounded-full w-64 h-64 md:w-80 md:h-96 flex items-center justify-center'>
                            <img src='/jugal_resume.png' className="rounded-full object-cover w-full h-full" alt="Profile" />
                        </div>
                    </div>

                    {/* Profile Details Section */}
                    <div className='w-full md:w-8/12 border border-blue-700 rounded-3xl p-8 shadow-lg hover:shadow-2xl'>
                        <h1 className='text-4xl mb-3 font-extrabold bg-gradient-to-r from-indigo-600 to-indigo-950 bg-clip-text text-transparent'>JUGAL KISHORE SAHU</h1>
                        <h2 className='text-slate-400 mb-7 text-xl font-semibold'>Full Stack Web Developer</h2>
                        <p className='text-sm sm:text-base lg:text-lg text-slate-600 text-justify'>
                            Detail-oriented and driven by a passion for technology, consistently seeking to enhance skills through ongoing education and hands-on experience. Excels in fast-paced environments, adapting to new challenges and technologies with ease. Recognized for excellent communication skills, enabling effective collaboration with cross-functional teams, stakeholders, and clients to deliver impactful, user-focused digital solutions.
                        </p>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row w-full gap-3'>
                    {/* Contact Information Section */}
                    <div className="w-full md:w-4/12 border border-blue-700 rounded-3xl p-8 overflow-hidden shadow-lg hover:shadow-2xl">
                        <h1 className="text-xl font-extrabold bg-gradient-to-r from-indigo-600 to-indigo-950 bg-clip-text text-transparent text-center">CONTACT</h1>
                        <div className="flex flex-col p-4 gap-y-4 mt-6">
                            {/* Phone Contact */}
                            <div className="flex items-center gap-4">
                                <PhoneCall className="text-blue-900" />
                                <p className="text-blue-700 font-semibold">+91 7873841779</p>
                            </div>
                            {/* Email Contact */}
                            <div className="flex items-center gap-4">
                                <Mail className="text-blue-900" />
                                <p className="text-blue-700 font-semibold">jugal7662techsunset@gmail.com</p>
                            </div>
                            {/* Address Contact */}
                            <div className="flex items-center gap-4">
                                <MapPin className="text-blue-900" />
                                <p className="text-blue-700 font-semibold">
                                Ameerpet,Hyderabad,Telengana PIN-500016
                                </p>
                            </div>
                        </div>

                        <div className="w-full mt-10 overflow-hidden">
                            <h1 className="text-xl font-extrabold bg-gradient-to-r from-indigo-600 to-indigo-950 bg-clip-text text-transparent text-center">SKILLS</h1>
                            <div className="grid grid-cols-2 sm:grid-cols-3  gap-4 mt-6">
                                {['NextJs', 'NodeJs', 'ExpressJs', 'React', 'Mongo DB', 'JavaScript', 'AWS', 'Docker', 'Git', 'Jira', 'Redis', 'Tailwind Css'].map((skill, index) => (
                                    <div key={index} className="flex items-center justify-center border border-blue-700 rounded-full py-2 px-4 text-sm font-semibold text-blue-800 bg-white shadow-md hover:shadow-lg">
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Work Experience and Projects Section */}
                    <div className="w-full md:w-8/12 border border-blue-700 rounded-3xl p-8 bg-white shadow-lg hover:shadow-2xl">
                        {/* Work Experience */}
                        <h1 className="text-2xl mb-6 font-extrabold bg-gradient-to-r from-indigo-600 to-indigo-950 bg-clip-text text-transparent">WORK EXPERIENCE</h1>
                        <div className="mb-6">
                            <h2 className="text-slate-700 mb-1 text-lg font-bold flex items-center">
                                <span className="mr-2">🚀</span> Full-Stack Developer
                            </h2>
                            <p className="text-slate-400 text-md font-medium">Techsunset, Bengaluru</p>
                            <p className="text-slate-500 mb-4 text-sm">June 2021 – Present</p>
                            <hr className="border-t border-blue-200 mb-6" />
                            <ul className="list-disc list-inside text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed pl-5">
                                <li className="mb-3">Spearheaded the development of dynamic user interfaces and robust RESTful APIs, utilizing React and Next.js for front-end development, and Node.js with Express for back-end services.</li>
                                <li className="mb-3">Architected and implemented scalable web and mobile applications, ensuring seamless integration with MongoDB for efficient data management and retrieval.</li>
                                <li className="mb-3">Collaborated with cross-functional teams to deliver high-quality software solutions, addressing both client and business requirements.</li>
                                <li>Contributed to the entire software development lifecycle, including planning, design, coding, testing, and deployment, while adhering to best practices and industry standards.</li>
                            </ul>
                        </div>

                        {/* Projects Section */}
                        <h1 className="text-2xl mb-6 font-extrabold bg-gradient-to-r from-indigo-600 to-indigo-950 bg-clip-text text-transparent">PROJECTS</h1>
                        <ul className="space-y-6 pl-5">
                            {[
                                { href: "https://www.igp.com/", title: "IGP", description: "An online platform for gifting and personalized items. Offers a wide range of gifts for various occasions, along with customization options." },
                                { href: "https://www.showmaqers.com/", title: "ShowMaqers", description: "A digital marketing and creative agency providing solutions for branding, SEO, content creation, and web development." },
                                { href: "https://www.bangalorehotels.org/", title: "Bangalore Hotels", description: "A hotel booking website focused on Bangalore, India. Provides a comprehensive list of hotels, reviews, and booking options." },
                                { href: "https://www.zieeinterior.com/", title: "Ziee Interior", description: "An interior design firm offering services for both residential and commercial spaces. Specializes in modern and creative interior solutions." },
                                { href: "https://www.guarented.com/", title: "Guarented", description: "A rental platform for furniture, appliances, and electronics. Offers both renting and buying options with maintenance and relocation services." },
                            ].map((project, index) => (
                                <li key={index} className="flex flex-col">
                                    <a
                                        href={project.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-md font-bold text-blue-800 hover:underline flex items-center"
                                    >
                                        <span className="mr-2">🌐</span> {project.title}
                                    </a>
                                    <p className="text-xs sm:text-sm text-slate-600 mt-2">{project.description}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;
