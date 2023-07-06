import React from 'react'
import haha from '../images/blackonwhite.png'

const Services = () => {
    return (
        <div className='container m-0 p-0 box-border '>
            <div className="container w-full h-full m-5 p-5">
                <h1 className=' text-center pt-3 mb-16 font-semibold relative after:bg-blue-800 after:w-24 h-1 after:absolute after:-bottom-1 after:left-1/2 after:translate-x-full after:content-normal'>
                    Our Services</h1>
                <div className="row grid grid-cols-3 gap-4 px-40">
                    <div className="service text-center py-6 px-3 rounded-md text-sm bg-transparent transition-all hover:bg-blue-600 hover:transform">
                        <div className='flex items-center justify-center'>
                            <img className=' text-4xl mb-3 h-40 items-center' src={haha} alt='' />
                        </div>
                        <h2 className=' font-semibold mb-2 pt-3'>Fast Delivery</h2>
                        <p>This is a paragraph</p>
                    </div>
                    <div className="service text-center py-6 px-3 rounded-md text-sm bg-transparent transition-all hover:bg-blue-600 hover:transform">
                        <div className='flex items-center justify-center'>
                            <img className=' text-4xl mb-3 h-40 items-center' src={haha} alt='' />
                        </div>
                        <h2 className=' font-semibold mb-2 pt-3'>Daily Offers</h2>
                        <p>This is a paragraph</p>
                    </div>
                    <div className="service text-center py-6 px-3 rounded-md text-sm bg-transparent transition-all hover:bg-blue-600 hover:transform">
                        <div className='flex items-center justify-center'>
                            <img className=' text-4xl mb-3 h-40 items-center' src={haha} alt='' />
                        </div>
                        <h2 className=' font-semibold mb-2 pt-3'>WARRANTY</h2>
                        <p>This is a paragraph</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Services