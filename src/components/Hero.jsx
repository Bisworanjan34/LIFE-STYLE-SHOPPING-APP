import React from 'react'

function Hero() {
    return (
        <div className=' flex flex-col sm:flex-row border shadow-emerald-900 shadow-sm'>
            {/* hero left side  */}
            <div className=' w-full sm:w-1/2 flex items-center justify-center py-10 sm:py- 0 '>
                <div className=' text-[#414141]'>
                    <div className=' flex items-center gap-2'>
                        <p className=' w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                        <p className=' font-medium text-sm md:text-base'>Our Best Sellers</p>
                    </div>
                    <h1 className=' prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Letest Arival</h1>
                    <div className=' flex items-center gap-2'>
                        <p className=' font-semibold text-sm md:text-base '> Shop Now</p>
                        <p className=' w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                    </div>
                </div>
            </div>
            {/* hero right side  */}

            <img className=' w-full sm:w-1/2 ' src="https://d1fufvy4xao6k9.cloudfront.net/images/blog/posts/2023/12/hockerty_woman_in_front_of_a_mansion_5a2d6bb7_15cb_41ae_a40e_19ed0d55d8d3.jpg" />

        </div>
    )
}

export default Hero