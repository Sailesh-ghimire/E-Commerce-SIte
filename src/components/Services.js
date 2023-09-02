import React from 'react'
import delivery from '../images/delivery.png'
import warranty from '../images/warranty.png'
import service from '../images/service.png'


const Services = () => {
    return (
        <div className='container m-0 p-0 box-border '>
            <div className="container w-full h-full m-5 p-5">
                <h1 className=' text-center pt-3 mb-16 font-semibold relative after:bg-blue-800 after:w-24 h-1 after:absolute after:-bottom-1 after:left-1/2 after:translate-x-full after:content-normal'>
                    Our Services</h1>
                <div className="row grid grid-cols-3 gap-4 px-40">
                    <div className="service text-center py-6 px-3 rounded-md text-sm bg-transparent transition-all hover:bg-blue-600 hover:transform">
                        <div className='flex items-center justify-center'>
                            <img className=' text-4xl mb-3 h-40 items-center' src={delivery} alt='' />
                        </div>
                        <h2 className=' font-semibold mb-2 pt-3'>Fast Delivery</h2>
                        <p>Get your fire extinguisher swiftly with our lightning-fast delivery service.</p>
                    </div>
                    <div className="service text-center py-6 px-3 rounded-md text-sm bg-transparent transition-all hover:bg-blue-600 hover:transform">
                        <div className='flex items-center justify-center'>
                            <img className=' text-4xl mb-3 h-40 items-center' src={warranty} alt='' />
                        </div>
                        <h2 className=' font-semibold mb-2 pt-3'>Hassle-Free Warranty</h2>
                        <p>Enjoy peace of mind with our fire extinguishers backed by a hassle-free warranty.</p>
                    </div>
                    <div className="service text-center py-6 px-3 rounded-md text-sm bg-transparent transition-all hover:bg-blue-600 hover:transform">
                        <div className='flex items-center justify-center'>
                            <img className=' text-4xl mb-3 h-40 items-center' src={service} alt='' />
                        </div>
                        <h2 className=' font-semibold mb-2 pt-3'>Customer Service</h2>
                        <p>Our dedicated support team is here to assist you with any fire safety queries or concerns.</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Services