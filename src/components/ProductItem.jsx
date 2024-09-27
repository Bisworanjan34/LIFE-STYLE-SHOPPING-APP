import React, { useContext } from 'react'
import { ShopContext } from '../contaxt/ShopContext'
import { Link } from 'react-router-dom'


function ProductItem({ id, image, name, price }) {
    const { currency } = useContext(ShopContext)



    return (
        <Link className=' text-gray-700 cursor-pointer' to={`/product/${id}`}>
            <div className=' overflow-hidden'>
                <img className=' hover:scale-110 transition ease-in-out' src={image[0]} />
                <p className=' pt-3 pb-1  text-xs'>{name}</p>
                <p className='text-sm font-medium' >{currency}{price}</p>
            </div>
        </Link>
    )
}

export default ProductItem