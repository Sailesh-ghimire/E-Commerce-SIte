import React from 'react'

export default function Landing() {
    return (
        <div>
            <prod className="product">

                <div className="grid grid-cols-3 gap-2 bg-blue-400">
                    <div>
                        <div className="product-1 text-center">
                            <img src="images/Cat-PNG-14.png" className="h-80" alt="cat" />
                            product-1

                        </div>
                    </div>
                    <div className="text-center">
                        <img src="images/Cat-PNG-14.png" className="h-80" alt="cat" />
                        product-2
                    </div>
                    <div className="text-center">
                        <img src="images/Cat-PNG-14.png" className="h-80" alt="cat" />
                        product-3
                    </div>
                </div>
            </prod>
        </div>
    )
}
