import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../contaxt/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LetestCollection = () => {
    const { products } = useContext(ShopContext);
    const [latestProduct, setLatestProduct] = useState([])

    useEffect(() => {
        setLatestProduct(products.slice(0, 10))
    }, [])


    return (
        <div className=" text-center py-8 text-3xl">
            <Title text1={"LATEST"} text2={'COLLECTION'} />
            <p className=" w-3/4 m-auto text-xs sm:text-xs md:text-base text-gray-600 mb-10">
                A paragraph is a group of sentences that support a main idea  of writing.
            </p>
            <div>
                {/* rendring products  */}
                <div className=" grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-6">
                    {
                        latestProduct.map((item, index) => {
                            return (
                                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                            )
                        })
                    }

                </div>
            </div>
        </div>)
};

export default LetestCollection;
