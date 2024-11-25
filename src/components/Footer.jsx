import React from 'react'
import assets from ".//../assets/admin_assets/lifestylelogo.png"

function Footer() {
    return (
        <div>
            <div className=' flex flex-col sm:grid sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-20 text-sm'>
                <div>
                    <img className=' mb-5 w-32 ' src={assets} />
                    <p className=' w-full md:2/3 text-gray-600'>
                        Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long.
                    </p>
                </div>
                <div>
                    <p className=' text-xl font-medium mb-5'>Campony</p>
                    <ul className=' flex flex-col gap-1 text-gray-600 '>
                        <li>HOME</li>
                        <li>ABOUT US</li>
                        <li>DELIVERY</li>
                        <li>PRIVACY POLICY</li>
                    </ul>
                </div>
                <div>
                    <p className=' text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+91-3456-6657-34356</li>
                        <li>bisworanjan34@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div>
                <hr />
                <p className=' py-5 text-sm text-center '>
                    copyright 2024 - all right we have - Bisworanjan-Colection ❤️❤️
                </p>
                <p className=' py-5 text-sm text-center '>
                    thanks fror visiting this page.....                </p>
            </div>
        </div>
    )
}

export default Footer