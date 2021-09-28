import React from 'react';
import { useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { XIcon } from '@heroicons/react/solid'
import { setLoggedIn } from '../features/loggedInSlice';

const outerModalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { 
        opacity: 0,
        transition: { delay: 0.5 }
    }
};

const innerModalVariants = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { delay: 0.5 }
    },
    exit: { y: "100vh", opacity: 0 }
};

function ConfirmLogout(props) {
    const dispatch = useDispatch();

    const { closeModal, removeCookie } = props;
    
    const handleLogout = () => {
        dispatch(setLoggedIn(false));
        removeCookie("authToken");
        closeModal(false);
    };
 
    return (
        <AnimatePresence>
            <motion.div
                variants={outerModalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <button className="font-mono fixed z-50 p-2 top-0 right-0 font-bold" onClick={() => closeModal(false)}>
                    <XIcon className="h-6 w-6" fill="white" viewBox="0 0 24 24" stroke="none" />
                </button>
                <div className="w-full h-full bg-red-300 fixed top-0 z-40 grid place-items-center">
                    <motion.div 
                        variants={innerModalVariants}
                        className="max-w-md p-3 border-2 rounded-md m-3 shadow"
                    >
                        <div className="font-bold text-xl text-gray-800 text-center p-3 ">Are you sure you want to Log Out of this site?</div>
                        <div className="flex justify-center p-2">
                            <button className="bg-green-400 text-gray-700 font-bold text-xl p-2 m-2 rounded" onClick={() => closeModal(false)}>Cancel</button>
                            <button className="bg-red-400 text-gray-700 font-bold text-xl p-2 m-2 rounded" onClick={handleLogout}>Logout</button>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default ConfirmLogout
