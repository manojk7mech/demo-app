import React, { useEffect, useState } from 'react';
import { XIcon } from '@heroicons/react/solid';
import { motion, AnimatePresence } from 'framer-motion'
import { useDispatch } from 'react-redux';
import { setAddToCart } from '../features/addToCartSlice'
import { setLoginSuccess } from '../features/loginSuccessSlice'; 
import { setLogoutSuccess } from '../features/logoutSuccessSlice'; 
import { setSignupSuccess } from '../features/signupSuccessSlice';
import { setWishlistFail } from '../features/wishlistFailSlice';

const innerModalVariants = {
    hidden: { y: "50vh", opacity: 0.5 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { 
            delay: 0.2,
            duration: 0.3,
            type: "tween",
            ease: "easeInOut"
        }
    },
    exit: { 
        y: "50vh", 
        opacity: 0.5,
        transition: { 
            duration: 0.3,
            type: "tween",
            ease: "easeInOut"
        }
    }
};

const Snackbar = ({ message, theme }) => {
    const [isOpen, setIsOpen] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        const dispatchAll = () => {
            dispatch(setAddToCart(false));
            dispatch(setLoginSuccess(false));
            dispatch(setLogoutSuccess(false));
            dispatch(setSignupSuccess(false));
            dispatch(setWishlistFail(false));
        };

        const timer1 = setTimeout(() => {
            setIsOpen(false);
        }, 4000);

        const timer2 = setTimeout(() => {
            dispatchAll();
        }, 4300);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        }

    }, [isOpen]);

    return (
        <AnimatePresence
            // initial={false}
            exitBeforeEnter
            onExitComplete={() => null}
        >
            { isOpen && (
                
                <motion.div 
                    variants={innerModalVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className={`fixed z-40 bottom-0 sm:max-w-lg w-full mx-auto ${theme === "error" ? "bg-gray-400" : "bg-gray-300"} rounded-t-lg flex justify-between items-center shadow-2xl`}
                >
                    <div className={`py-2 px-4 ${theme === "error" ? "text-red-500" : "text-green-600"} text-center font-semibold text-lg justify-self-center`}>
                        { message }
                    </div>
                    <XIcon className={`m-2 h-6 w-6 cursor-pointer ${theme === "error" ? "text-white" : "text-gray-500"} text-white`} onClick={() => setIsOpen(false)} fill="currentColor" viewBox="0 0 20 20" stroke="none" />
                </motion.div>
            ) }
        </AnimatePresence>
    )
}

export default Snackbar;
