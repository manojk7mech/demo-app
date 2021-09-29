import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';
import ConfirmLogout from '../Helpers/ConfirmLogout';
import LoginModal from "../Helpers/LoginModal";
import SignupModal from "../Helpers/SignupModal";

import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { setDarkEnabled } from '../features/darkEnabledSlice';

const buttonVariants = {
    hover: {
        scale: 1.1,
        transition: {
            type: 'spring',
            duration: 0.3,
            repeat: Infinity
        }
    }
};

const TopNavbar = (props) => {
    const dispatch = useDispatch();
    const darkEnabled = useSelector(state => state.darkEnabled.value);
    const theUser = useSelector(state => state.theUser.value);

    const loggedIn = useSelector(state => state.loggedIn.value);

    const [openLogoutModal, setOpenLogoutModal] = useState(false);
    const [openLoginModal, setOpenLoginModal] = useState(false);
    const [openSignupModal, setOpenSignupModal] = useState(false);

    const { setCookie, removeCookie } = props;

    return (
        <>
            <AnimatePresence
                initial={false}
                exitBeforeEnter={true}
                onExitComplete={() => null}
            >
                    { openLoginModal && 
                        <LoginModal setLoginModal={setOpenLoginModal} setCookie={setCookie} />
                    }
            </AnimatePresence>
            <AnimatePresence
                initial={false}
                exitBeforeEnter={true}
                onExitComplete={() => null}
            >
                { openSignupModal && 
                    <SignupModal setSignupModal={setOpenSignupModal} setCookie={setCookie} />
                }
            </AnimatePresence>
            <AnimatePresence
                initial={false}
                exitBeforeEnter={true}
                onExitComplete={() => null}
            >
                { openLogoutModal && 
                    <ConfirmLogout closeModal={setOpenLogoutModal} removeCookie={removeCookie} />
                }
            </AnimatePresence>
            <div className="flex justify-center items-center md:justify-between max-w-screen-lg mx-auto transform duration-300 ease-in">
                {/* Company Logo and name */}
                <div className="mx-3 my-1 flex items-center text-center cursor-pointer">
                    <Link to="/">
                        <motion.img className="h-16" src={`/images/logo${darkEnabled ? 'dark' : 'Light'}.png`} alt="Logo" 
                            initial = {{ rotateZ: -120, opacity: 0 }}
                            animate = {{ rotateZ: 0, opacity: 1 }}
                            transition = {{ delay: 0.5, type: 'spring', stiffness: 150, mass: 6, damping: 4 }}
                            whileHover={{ scale: 1.1 }}
                        />
                    </Link>
                    <div className="flex-col items-center justify-center">
                        <motion.span className="font-black mx-2 my-2 pb-2 block text-2xl hover:text-blue-800 dark:hover:text-blue-100 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text border-b-2 border-gray-300 hover:border-opacity-0"
                            whileHover={{ scale: 1.2, originX: 0 }}
                            transition={{ type: 'spring', stiffness: 600 }}
                        >MY Tech</motion.span>
                        <span className="font-semibold font-desc text-lg text-blue-400 mx-2 my-1 block hover:text-blue-600 dark:hover:text-blue-100">A Tech Company</span>
                    </div>
                </div>
                <div className="flex-col justify-center p-2">
                    {/* Login, Logout, Signup Buttonds */}
                    { loggedIn ? 
                        <div className="mx-3 flex flex-col md:flex-row w-auto">
                            <div className="text-center text-blue-800 dark:text-blue-200 border-b-2 font-semibold border-blue-800 dark:border-blue-200 px-2 py-1 my-1 cursor-pointer dark:hover:bg-blue-100 hover:bg-blue-800 dark:hover:text-green-600 hover:text-blue-50 transform duration-300 ease-out mx-1 uppercase w-full">
                                {theUser}
                            </div>
                            <motion.button className="text-center text-blue-800 dark:text-blue-200 border-2 rounded-lg font-semibold border-blue-800 dark:border-blue-200 px-2 py-1 my-1 cursor-pointer dark:hover:bg-blue-100 hover:bg-blue-800 dark:hover:text-green-600 hover:text-blue-50 transform duration-300 ease-out mx-1 w-full" 
                                onClick={() => setOpenLogoutModal(true)}
                                variants={buttonVariants} whileHover="hover"
                            >Logout</motion.button>
                        </div> : 
                        <div className="mx-3 flex flex-col items-center md:flex-row w-auto">
                            <motion.button 
                                variants={buttonVariants}
                                onClick={() => setOpenSignupModal(true)}
                                whileHover="hover" 
                                className="text-center text-blue-800 dark:text-blue-200 border-2 rounded-lg font-semibold border-blue-800 dark:border-green-200 px-2 py-1 my-1 cursor-pointer dark:hover:bg-green-100 hover:bg-blue-800 dark:hover:text-green-600 hover:text-blue-50 transform duration-300 ease-out mx-1 w-full md:w-auto"
                            >Signup</motion.button>
                            <motion.button 
                                variants={buttonVariants}
                                onClick={() => setOpenLoginModal(true)}
                                whileHover="hover"
                                className="text-center text-blue-800 dark:text-blue-200 border-2 rounded-lg font-semibold border-blue-800 dark:border-green-200 px-3 py-1 my-1 cursor-pointer dark:hover:bg-green-100 hover:bg-blue-800 dark:hover:text-green-600 hover:text-blue-50 transform duration-300 ease-out mx-1 w-full md:w-auto"
                            >Login</motion.button>
                        </div>
                    }
                    <div onClick={() => dispatch(setDarkEnabled(!darkEnabled))} className="mx-auto hidden md:flex h-5 w-11 bg-gray-300 dark:bg-gray-600 ring-2 dark:ring-green-400 ring-blue-700 rounded-full cursor-pointer transform transition-transform duration-200 ease-in-out mt-4"> 
                        <div className={`h-5 w-5 rounded-full ${darkEnabled ? "bg-green-400 dark:bg-green-300 translate-x-6" : "bg-gray-500 translate-x-0"} transform transition-transform duration-200 ease-in-out `}></div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default TopNavbar;