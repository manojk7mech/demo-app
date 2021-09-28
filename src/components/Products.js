import TrendingList from "../Helpers/TrendingList";
import ProductList from "../Helpers/ProductList";
import ImageModal from "../Helpers/ImageModal";
import { useState } from "react";

const Products = () => {
    const [openImageModal, setOpenImageModal] = useState(false);
    const [myImage, setMyImage] = useState({});

    const openImg = (image) => {
        setOpenImageModal(true);
        setMyImage(image);
    };

    return ( 
        <>
            { openImageModal && <ImageModal setOpenImageModal={setOpenImageModal} myImage={myImage} /> }
            <div className="md:grid md:grid-cols-4 md:gap-4 p dark:bg-gray-700">
                {/* insatgram like stories */}
                <div className="md:flex-col md:justify-start items-center col-start-4 ">
                    <div className="text-center pt-3 pb-4 font-bold text-xl text-gray-800 dark:text-gray-200">
                        Trending...
                    </div>
                    <ul className="md:flex-col md:space-x-0 md:space-y-4 md:items-center justify-center flex space-x-6"> 
                        { TrendingList.map(image => (
                            <li key={image.imgSrc} >
                                <div onClick={() => openImg(image)} className="cursor-pointer rounded-full bg-pink-500 dark:bg-green-400 sm:p-1 p-0.5">
                                    <div className="bg-white dark:bg-gray-200 sm:p-1 p-0.5 rounded-full transform transition hover:-rotate-6">
                                        <img className="h-16 w-16 lg:h-20 lg:w-20 rounded-full object-cover "
                                            src={image.imgSrc}
                                            alt={image.alt}
                                        />
                                    </div>
                                </div>
                                <div className="cursor-pointer text-center text-gray-800 dark:text-gray-100">Robot</div>
                            </li>
                        )) }
                    </ul>
                </div>

                <div className=" col-start-1 col-span-3 row-start-1 place-self-center">
                    <h1 className="text-2xl font-bold text-center uppercase py-6 text-blue-500 dark:text-green-600">Select from the world class products of ours!</h1>
                    <h3 className="text-center font-semibold text-xl m-1.5 dark:text-gray-300 text-gray-700">Why should you buy from us ?????</h3>
                    <h3 className="text-center font-semibold text-xl m-1.5 dark:text-gray-300 text-gray-700">Don't worry, We got you covered...</h3>
                    <div className="flex justify-center">
                        <div className="flex-col mt-3">
                            <div className="flex items-center m-1">
                                <svg className="h-5 w-5 mr-2 text-blue-500 dark:text-green-600" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                </svg>
                                <p className="font-serif text-gray-800 dark:text-gray-200">Different varieties of products to choose from...</p>
                            </div>
                            <div className="flex items-center m-1">
                                <svg className="h-5 w-5 mr-2 text-blue-500 dark:text-green-600" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                </svg>
                                <p className="font-serif text-gray-800 dark:text-gray-200">Various types of colors...</p>
                            </div>
                            <div className="flex items-center m-1">
                                <svg className="h-5 w-5 mr-2 text-blue-500 dark:text-green-600" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                </svg>
                                <p className="font-serif text-gray-800 dark:text-gray-200">Designs that look amazing...</p>
                            </div>
                            <div className="flex items-center m-1">
                                <svg className="h-5 w-5 mr-2 text-blue-500 dark:text-green-600" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                </svg>
                                <p className="font-serif text-gray-800 dark:text-gray-200">Thousands of items in each category...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dark:bg-gray-700">
                <h5 className="text-center font-semibold text-xl p-3 dark:text-green-600 text-blue-800">Choose from the following products! Okay...</h5>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 pb-3">
                
                    { ProductList.map(product => (

                        <div className="flex-col items-center m-3 rounded-md overflow-hidden shadow-md hover:shadow-lg bg-gray-200 dark:bg-gray-600 cursor-pointer">
                            <div className="flex justify-center" onClick={() => openImg(product)}>
                                <img className="h-48 w-full object-cover" 
                                src={product.imgSrc} 
                                alt={product.alt} 
                            />
                            </div>
                            <div className="flex justify-center mt-2">
                                <span className="text-blue-800 dark:text-green-300 font-semibold ">
                                    {product.description}
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="font-semibold text-gray-700 dark:text-gray-300 mx-2">Rs. {product.amount}</span>
                                <button className="flex justify-center items-center my-2 mx-2 py-1 px-2 rounded-md border-blue-800 dark:border-gray-200 border dark:text-blue-100 hover:text-blue-50 dark:hover:bg-gray-600 hover:bg-gray-400" type="submit">

                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1 text-gray-800 dark:text-gray-200" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                    </svg>
                                    <span className="font-semibold text-gray-700 dark:text-gray-300">Add To Cart</span>
                                </button>
                            </div>
                        </div>
                    )) }
                </div>
            </div>
        </>
    );
};
 
export default Products;