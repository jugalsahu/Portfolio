import React from 'react'

const Experience = () => {
  return (
    <div className="px-[8%] pt-0 pb-8 md:py-12">
        <h1 className='text-4xl mb-16 font-extrabold bg-gradient-to-r from-indigo-600 to-indigo-950 bg-clip-text text-transparent text-center lg:hidden'>My Experience</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Experience Item 1 */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <h1 className="text-5xl md:text-7xl text-blue-800 font-bold">3+</h1>
          <h1 className="text-blue-800 text-center font-semibold">
            Years of
            <br />
            Experience
          </h1>
        </div>

        {/* Experience Item 2 */}
        <div className="flex flex-col md:flex-row  gap-4 justify-center items-center">
          <h1 className="text-5xl md:text-7xl text-blue-800 font-bold">100+</h1>
          <h1 className="text-blue-800 text-center font-semibold">
            Projects
            <br />
            Completed
          </h1>
        </div>

        {/* Experience Item 3 */}
        <div className="flex flex-col md:flex-row  gap-4 justify-center items-center">
          <h1 className="text-5xl md:text-7xl text-blue-800 font-bold">1K</h1>
          <h1 className="text-blue-800 text-center font-semibold">
            Happy
            <br />
            Clients
          </h1>
        </div>

        {/* Experience Item 4 */}
        <div className="flex flex-col md:flex-row  gap-4 justify-center items-center">
          <h1 className="text-5xl md:text-7xl text-blue-800 font-bold">100</h1>
          <h1 className="text-blue-800 text-center font-semibold">
            %
            <br />
            Success Rate
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Experience
