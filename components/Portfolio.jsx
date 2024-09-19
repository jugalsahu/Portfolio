'use client'
import React, { useEffect } from 'react'; // Correct import of React and useEffect
import Image from 'next/image'; // Ensure this import is correct

const Portfolio = () => { // Use PascalCase for component naming

  useEffect(() => {
    // Path to your PDF file in the public folder
    const pdfUrl = '/JUGAL_KISHORE_SAHU_MERN_STACK_RESUME.pdf';

    // Create a link element and programmatically click it to download the file
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'JUGAL_KISHORE_SAHU_MERN_STACK_RESUME.pdf'; // Specify a custom file name here if needed
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []); // Empty dependency array ensures it runs only once on mount

  return (
    <div className='w-full bg-gray-100 px-[8%] py-16' id='portfolio'>
      <h1 className='text-4xl mb-20 font-extrabold bg-gradient-to-r from-indigo-600 to-indigo-950 bg-clip-text text-transparent text-center'>My Recent Works</h1>

      <div className="mt-10 w-full  grid md:grid-cols-2 gap-6">

        {/* Portfolio Item 1 */}
        <a href="https://www.igp.com/" target="_blank" rel="noopener noreferrer">
          <div className="relative overflow-hidden bg-[#020617] p-6 group w-full h-80 border-2 border-blue-950 rounded-3xl shadow-lg shadow-blue-800">
            <div className="absolute inset-0 transition-transform duration-[6000ms] ease-in-out group-hover:translate-y-[-950%]">
              <img src="/web-1.png" />
            </div>

            <div className="absolute w-full h-200 bottom-0 left-0 bg-gradient-to-r from-indigo-600 to-indigo-950  text-white p-4 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">https://www.igp.com/</h3>
                <p className="text-sm">
                An online platform for gifting and personalized items. Offers a wide range of gifts for various occasions, along with customization options.
                </p>
              </div>
            </div>
          </div>
        </a>

        {/* Portfolio Item 2 */}
        <a href="https://www.showmaqers.com/" target="_blank" rel="noopener noreferrer">
          <div className="relative overflow-hidden bg-[#020617] p-6 group w-full h-80 border-2 border-blue-950 rounded-3xl shadow-lg shadow-blue-800">
            <div className="absolute inset-0 transition-transform duration-[6000ms] ease-in-out group-hover:translate-y-[-950%]">
              <img src="/web-2.png" />
            </div>

            <div className="absolute w-full h-200 bottom-0 left-0 bg-gradient-to-r from-indigo-600 to-indigo-950  text-white p-4 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">https://www.showmaqers.com/</h3>
                <p className="text-sm">
                A digital marketing and creative agency providing solutions for branding, SEO, content creation, and web development.
                </p>
              </div>
            </div>
          </div>
        </a>

        {/* Portfolio Item 3 */}
        <a href="https://www.bangalorehotels.org/" target="_blank" rel="noopener noreferrer">
          <div className="relative overflow-hidden bg-[#020617] p-6 group w-full h-80 border-2 border-blue-950 rounded-3xl shadow-lg shadow-blue-800">
            <div className="absolute inset-0 transition-transform duration-[6000ms] ease-in-out group-hover:translate-y-[-950%]">
              <img src="/web-3.png" />
            </div>

            <div className="absolute w-full h-200 bottom-0 left-0 bg-gradient-to-r from-indigo-600 to-indigo-950  text-white p-4 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">https://www.bangalorehotels.org/</h3>
                <p className="text-sm">
                A hotel booking website focused on Bangalore, India. Provides a comprehensive list of hotels, reviews, and booking options.
                </p>
              </div>
            </div>
          </div>
        </a>

        {/* Portfolio Item 4 */}
        <a href="https://www.zieeinterior.com/" target="_blank" rel="noopener noreferrer">
          <div className="relative overflow-hidden bg-[#020617] p-6 group w-full h-80 border-2 border-blue-950 rounded-3xl shadow-lg shadow-blue-800">
            <div className="absolute inset-0 transition-transform duration-[6000ms] ease-in-out group-hover:translate-y-[-950%]">
              <img src="/web-4.png" />
            </div>

            <div className="absolute w-full h-200 bottom-0 left-0 bg-gradient-to-r from-indigo-600 to-indigo-950  text-white p-4 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">https://www.zieeinterior.com/</h3>
                <p className="text-sm">
                An interior design firm offering services for both residential and commercial spaces. Specializes in modern and creative interior solutions.
                </p>
              </div>
            </div>
          </div>
        </a>

        {/* Portfolio Item 5 */}
        <a href="https://www.guarented.com/" target="_blank" rel="noopener noreferrer">
          <div className="relative overflow-hidden bg-[#020617] p-6 group w-full h-80 border-2 border-blue-950 rounded-3xl shadow-lg shadow-blue-800">
            <div className="absolute inset-0 transition-transform duration-[6000ms] ease-in-out group-hover:translate-y-[-950%]">
              <img src="/web-5.png" />
            </div>

            <div className="absolute w-full h-200 bottom-0 left-0 bg-gradient-to-r from-indigo-600 to-indigo-950  text-white p-4 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">https://www.guarented.com/</h3>
                <p className="text-sm">
                A rental platform for furniture, appliances, and electronics. Offers both renting and buying options with maintenance and relocation services.
                </p>
              </div>
            </div>
          </div>
        </a>

      </div>
    </div>
  )
}

export default Portfolio
