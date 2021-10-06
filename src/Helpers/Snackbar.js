import React, { useEffect, useState } from 'react';
import { XIcon } from '@heroicons/react/solid';
import { motion, AnimatePresence } from 'framer-motion'

const innerModalVariants = {
    hidden: { x: "-100vw", opacity: 0.5 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { 
            delay: 0.2,
            duration: 0.3,
            type: "tween",
            ease: "easeInOut"
        }
    },
    exit: { 
        x: "100vw", 
        opacity: 0.5,
        transition: { 
            duration: 0.3,
            type: "tween",
            ease: "easeInOut"
        }
    }
};

const Snackbar = ({ message, theme }) => {
    const [isOpen, closeSnackbar] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            closeSnackbar(false);
        }, 5000);
    }, [isOpen]);

    return (
        <AnimatePresence
            // initial={false}
            exitBeforeEnter
            onExitComplete={() => null}
            className="grid justify-items-center"
        >
            { isOpen && (
                
                <motion.div 
                    variants={innerModalVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className={`fixed z-40 bottom-0 max-w-lg mx-auto ${theme === "error" ? "bg-gray-400" : "bg-gray-300"} rounded-t-lg flex justify-between items-center shadow-2xl`}
                >
                    <div className={`py-2 px-4 ${theme === "error" ? "text-red-500" : "text-green-600"} text-center font-semibold text-lg justify-self-center`}>
                        { message }
                    </div>
                    <XIcon className={`m-2 h-6 w-6 cursor-pointer ${theme === "error" ? "text-white" : "text-gray-500"} text-white`} onClick={() => closeSnackbar(false)} fill="currentColor" viewBox="0 0 20 20" stroke="none" />
                </motion.div>
            ) }
        </AnimatePresence>
    )
}

export default Snackbar;
