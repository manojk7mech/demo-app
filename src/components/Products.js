import TrendingList from "../Helpers/TrendingList";
import ProductList from "../Helpers/ProductList";
import ImageModal from "../Helpers/ImageModal";
import { useEffect, useState } from "react";
import Axios from 'axios';
import { BadgeCheckIcon, CurrencyRupeeIcon, HeartIcon, ShoppingCartIcon } from "@heroicons/react/solid";
import { CheckCircleIcon } from '@heroicons/react/outline';
import { AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from 'react-redux';
import { setWishlistFail } from "../features/wishlistFailSlice";
import { setAddToCart } from "../features/addToCartSlice";
// import { motion, useViewportScroll } from 'framer-motion';

const Products = () => {
    const theUser = useSelector(state => state.theUser.value);

    const dispatch = useDispatch();
    // const wishlistFail = useSelector(state => state.wishlistFail.value);

    const [openImageModal, setOpenImageModal] = useState(false);
    const [myImage, setMyImage] = useState({});
    // const [productList, setProductList] = useState(ProductList);
    const [renderNow, setRenderNow] = useState(false);
    const [colorList, setColorList] = useState(["text-gray-100", "text-gray-100", "text-gray-100", "text-gray-100", "text-gray-100", "text-gray-100", "text-gray-100", "text-gray-100", "text-gray-100"]);

    useEffect(() => {
        const getColorList = async () => {
            try {
                const colors = await Axios.get(`https://my-server-demo.herokuapp.com/user/product/${theUser.id}`);
                console.log(colors.data.colorList);
                setColorList(colors.data.colorList);
            } catch (err) {
                console.log(err);
            }
        };
        getColorList();
    }, [theUser.id]);

    useEffect(() => {
        const postColorList = async () => {
            try {
                await Axios.patch(`https://my-server-demo.herokuapp.com/user/product/${theUser.id}`, { colorList });
            } catch (err) {
                console.log(err);
            }
        };
        postColorList();
    }, [colorList, renderNow]);
 
    const toggleColor = (product) => {
        colorList[product.index] === "text-gray-100" ? colorList[product.index] = "text-red-600" :  colorList[product.index] = "text-gray-100";
        setColorList(colorList);
        setRenderNow(!renderNow);
        if (!theUser.id) {
            dispatch(setWishlistFail(true));
        }
    };

    // const { scrollYProgress } = useViewportScroll();

    const openImg = (image) => {
        setOpenImageModal(true);
        setMyImage(image);
    };

    const addToCart = (e) => {
        e.preventDefault();
        dispatch(setAddToCart(true));
    }

    return ( 
        <>
            {/* <motion.div
                className="fixed top-0 left-0 z-20 p-3 border-t-2"
                // d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"

                style={{ width:  }}
            /> */}
            <AnimatePresence
                initial={false}
                exitBeforeEnter
                onExitComplete={() => null}
            >
                { openImageModal && <ImageModal setOpenImageModal={setOpenImageModal} myImage={myImage} /> }
            </AnimatePresence>
            <div className="md:grid md:grid-cols-4 md:gap-4 p dark:bg-gray-700">
                {/* insatgram like stories */}
                <div className="md:flex-col md:justify-start items-center col-start-4 ">
                    <div className="text-center pt-3 pb-4 font-bold text-xl text-gray-800 dark:text-gray-200">
                        Trending...
                    </div>
                    <ul className="md:flex-col md:space-x-0 md:space-y-4 md:items-center justify-center flex space-x-6"> 
                        { TrendingList.map(image => (
                            <li key={image.imgSrc} >
                                <div onClick={() => openImg(image)} className="cursor-pointer rounded-full bg-pink-500 sm:p-1 p-0.5">
                                    <div className="bg-white dark:bg-gray-200 sm:p-1 p-0.5 rounded-full transform transition hover:-rotate-6">
                                        <img className="h-16 w-16 lg:h-20 lg:w-20 rounded-full object-cover "
                                            src={image.imgSrc}
                                            alt={image.alt}
                                        />
                                    </div>
                                </div>
                                <div className="cursor-pointer text-center text-blue-500 dark:text-green-600 flex justify-center items-center">
                                    {image.company}
                                    <BadgeCheckIcon className="h-5 w-5 ml-1 text-blue-500 dark:text-green-600" viewBox="0 0 20 20" fill="currentColor" />
                                </div>
                            </li>
                        )) }
                    </ul>
                </div>
                {/* What is covered */}
                <div className=" col-start-1 col-span-3 row-start-1 place-self-center">
                    <h1 className="text-2xl font-bold text-center uppercase py-6 text-blue-500 dark:text-green-600">Select from the world class products of ours!</h1>
                    <h3 className="text-center font-semibold text-xl m-1.5 dark:text-gray-300 text-gray-700">Why should you buy from us ?????</h3>
                    <h3 className="text-center font-semibold text-xl m-1.5 dark:text-gray-300 text-gray-700">Don't worry, We got you covered...</h3>
                    <div className="flex justify-center">
                        <div className="flex-col mt-3">
                            <div className="flex items-center m-1">
                                <CheckCircleIcon className="h-5 w-5 mr-2 text-blue-500 dark:text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" />
                                <p className="font-serif text-gray-800 dark:text-gray-200">Different varieties of products to choose from...</p>
                            </div>
                            <div className="flex items-center m-1">
                                <CheckCircleIcon className="h-5 w-5 mr-2 text-blue-500 dark:text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" />
                                <p className="font-serif text-gray-800 dark:text-gray-200">Various types of colors...</p>
                            </div>
                            <div className="flex items-center m-1">
                                <CheckCircleIcon className="h-5 w-5 mr-2 text-blue-500 dark:text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" />
                                <p className="font-serif text-gray-800 dark:text-gray-200">Designs that look amazing...</p>
                            </div>
                            <div className="flex items-center m-1">
                                <CheckCircleIcon className="h-5 w-5 mr-2 text-blue-500 dark:text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" />
                                <p className="font-serif text-gray-800 dark:text-gray-200">Thousands of items in each category...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Product List */}
            <div className="dark:bg-gray-700">
                <h5 className="text-center font-semibold text-xl p-3 dark:text-green-600 text-blue-800">Choose from the following products! Okay...</h5>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 pb-3">
                
                    { ProductList.map(product => (
                        <div key={product.index.toString()} className="flex-col items-center m-3 rounded-md overflow-hidden shadow-md hover:shadow-lg bg-gray-200 dark:bg-gray-600 relative">
                            <HeartIcon onClick={() => toggleColor(product)} className={`${colorList[product.index]} h-6 w-6 mr-1 absolute top-1 right-1 cursor-pointer z-10 hover:scale-110 transform transition duration-200 ease-in-out`} viewBox="0 0 20 20" fill="currentColor" stroke="none"/>
                            <div className="flex justify-center" onClick={() => openImg(product)}>
                                <img className="h-48 w-full object-cover cursor-pointer hover:scale-105 transform transition duration-200 ease-in-out" 
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
                                <div className="flex justify-center items-center font-semibold text-gray-700 dark:text-gray-300 mx-2">
                                    <CurrencyRupeeIcon className="h-6 w-6 mr-1 text-gray-800 dark:text-gray-200" viewBox="0 0 20 20" fill="currentColor" />
                                    <span className="font-semibold text-gray-700 dark:text-gray-300">
                                        {product.amount}
                                    </span>
                                </div>
                                <button 
                                    className="flex justify-center items-center my-2 mx-2 py-1 px-2 rounded-md border-blue-800 dark:border-gray-200 border dark:text-blue-100 hover:text-blue-50 dark:hover:bg-gray-800 hover:bg-gray-400 hover:scale-105 transform transition duration-200 ease-in-out" type="submit"
                                    onClick={(e) => addToCart(e)}
                                >
                                    <ShoppingCartIcon className="h-6 w-6 mr-1 text-gray-800 dark:text-gray-200" viewBox="0 0 20 20" fill="currentColor" />
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