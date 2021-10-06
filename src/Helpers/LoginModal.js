import { useState } from "react";
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { ChevronDoubleRightIcon, XIcon, BanIcon } from '@heroicons/react/solid'
import { setLoggedIn } from '../features/loggedInSlice';
import { setLoginSuccess } from "../features/loginSuccessSlice";

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

function LoginModal({ setLoginModal, setCookie }) {
    const dispatch = useDispatch();

    const [emailError, setEmailError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [loginPressed, setLoginPressed] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();

        setLoginPressed(true);
        setPasswordError(null);
        setEmailError(null);

        try {
            const res = await fetch('https://my-server-demo.herokuapp.com/user/login', {
                method: 'POST',
                body: JSON.stringify({ email, password }),
                headers: { 'Content-Type': 'application/json' }
            });
            const data = await res.json();
            console.log(data);
            setLoginPressed(false);

            if (data.password) {
                setPasswordError(data.password);
            }
            if (data.email) {
                setEmailError(data.email);
            }
            if (data.token) {
                setCookie("authToken", data.token, {
                    path: "/"
                });

                dispatch(setLoggedIn(true));
                setLoginModal(false);
                dispatch(setLoginSuccess(true));
                // window.location ='/';
            }
        }
        catch (err) {
            dispatch(setLoggedIn(false));
        }

    }

    return (

        <>
            <motion.div
                variants={outerModalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
            <button className="font-mono fixed z-50 p-2 top-0 right-0 font-bold" onClick={() => setLoginModal(false)}>
                <XIcon className="h-6 w-6" fill="white" viewBox="0 0 24 24" stroke="none" />
            </button>
            <div className="w-full h-full bg-red-300 fixed top-0 z-30 grid place-items-center">
                
                <motion.div
                    variants={innerModalVariants}
                    className="md:w-80 p-3 border-2 rounded-md m-3 shadow-lg"
                >
                    <div className="font-bold text-xl text-gray-800 text-center p-3 ">Login...</div>
                    <form className="w-full flex-col mt-2 rounded-md mx-auto bg-gradient-to-r to-pink-300 from-purple-300 p-2 pt-1 mb-3 shadow-md" 
                        onSubmit={e => handleLogin(e)}>
                        <label htmlFor="email">Email</label>
                        <input type="text" className="focus:ring-2 focus:ring-opacity-50 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-blue-600 block pl-3 pr-2 py-1 m-2 w-full mx-auto outline-none rounded-md" required name="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        { emailError && <div className="mb-2 text-xs text-red-600">{emailError}</div> }
                        <label htmlFor="password">Password</label>
                        <input type="password" className="focus:ring-2 focus:ring-opacity-50 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-blue-600 block pl-3 pr-2 py-1 m-2 w-full mx-auto outline-none rounded-md" required name="password" 
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        { passwordError && <div className="mb-2 text-xs text-red-600">{passwordError}</div> }
                        { loginPressed ? (
                            <button className="cursor-not-allowed focus:ring-2 focus:ring-opacity-50 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-blue-600 block p-2 mt-3 m-2 mx-auto w-full text-xl font-bold rounded-md text-blue-400 bg-pink-500 focus:outline-none tracking-wide dark:text-green-400 shadow-md"
                            >
                                <span>Logging In</span>
                                <BanIcon className="inline h-6 w-6 ml-2" fill="currentColor" viewBox="0 0 24 24" stroke="none" />
                            </button>
                        ) : (
                            <button className="focus:ring-2 focus:ring-opacity-50 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-blue-600 block p-2 mt-3 m-2 mx-auto w-full text-xl font-bold rounded-md text-blue-700 bg-gray-200 focus:outline-none tracking-wide dark:text-green-600 shadow-md" type="submit"
                            >
                                <span>Login</span>
                                <ChevronDoubleRightIcon className="inline h-6 w-6 ml-2" fill="currentColor" viewBox="0 0 24 24" stroke="none" />
                            </button>
                        ) }
                        
                    </form>
                </motion.div>
            </div>
        </motion.div>
        </>
    )
}

export default LoginModal
