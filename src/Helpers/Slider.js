import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const imgVariants = {
    hiddenRight: {
        x: "100%",
        opacity: 0.5
    },
    visibleRight: {
        x: 0, 
        opacity: 1, 
        transition: { 
            delay: 0.1 
        }
    },
    exitRight: {
        // x: "-100%", 
        opacity: 0
    },
    hiddenLeft: {
        x: "-100%",
        opacity: 0.5
    },
    visibleLeft: {
        x: 0, 
        opacity: 1, 
        transition: { 
            delay: 0.1 
        }
    },
    exitLeft: {
        // x: "100%", 
        opacity: 0
    }
}

const Slider = ({ image, leftClicked }) => {
    return (
        <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
        >
            <motion.img
                key={image.imgSrc}
                className="w-full object-cover overflow-hidden"
                src={image.imgSrc}
                alt="Tech Company"
                variants={imgVariants}
                initial={leftClicked ? "hiddenLeft" : "hiddenRight"}
                animate={leftClicked ? "visibleLeft" : "visibleRight"}
                exit={leftClicked ? "exitLeft" : "exitRight"}
            />
        </AnimatePresence>
    )
}

export default Slider;
