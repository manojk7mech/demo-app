import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const outerModalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0,
        transition: { delay: 0.4 }
    }
};

const innerModalVariants = {
    hidden: { y: "-100vh", opacity: 0.5 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { 
            delay: 0.2,
            duration: 0.3,
            type: "spring",
            damping: 25,
            stiffness: 500
        }
    },
    exit: { 
        y: "100vh", 
        opacity: 0.5,
        transition: { 
            duration: 0.2,
            type: "spring",
            damping: 25,
            stiffness: 500
        }
    }
};

function ImageModal({ setOpenImageModal, myImage }) {
    return (
        <>
            <motion.div
                variants={outerModalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <button className="font-mono fixed z-50 p-2 top-0 right-0 font-bold" onClick={() => setOpenImageModal(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="w-full h-full bg-red-300 fixed top-0 left-0 z-30 grid place-items-center">
                    <motion.div
                        variants={innerModalVariants}
                        className="w-full h-full p-2 shadow bg-opacity-40 grid place-items-center">
                        <img className="rounded-md overflow-hidden object-contain bg-opacity-40 shadow-lg" src={myImage.imgSrc} alt={myImage.alt} />
                    </motion.div>
                </div>
            </motion.div>
        </>
    );
}

export default ImageModal;
