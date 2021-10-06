import { useState } from "react";
import { useDispatch } from "react-redux";
import { BanIcon, ChevronDoubleRightIcon, XIcon } from '@heroicons/react/solid'
import { setLoggedIn } from "../features/loggedInSlice";
import { setSignupSuccess } from "../features/signupSuccessSlice";
import { motion } from 'framer-motion';

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

function SignupModal({ setSignupModal, setCookie }) {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [nameError, setNameError] = useState(null);
    const [emailError, setEmailError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);

    const [signupPressed, setSignupPressed] = useState(false);
    
    const handleSignup = async (e) => {
        e.preventDefault();

        setSignupPressed(true);
        setNameError(null);
        setEmailError(null);
        setPasswordError(null);

        try {
            const res = await fetch('https://my-server-demo.herokuapp.com/user/register', {
                method: 'POST',
                body: JSON.stringify({ name, email, password }),
                headers: { 'Content-Type': 'application/json' }
            });
            const data = await res.json();
            console.log(data);
            setSignupPressed(false);

            if (data.errors) {
                setNameError(data.errors.name);
                setPasswordError(data.errors.password);
                setEmailError(data.errors.email);
            }
            if (data.token) {
                setCookie("authToken", data.token, {
                    path: "/"
                });

                dispatch(setLoggedIn(true));
                setSignupModal(false);
                dispatch(setSignupSuccess(true));
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
            <button className="font-mono fixed z-50 p-2 top-0 right-0 font-bold" onClick={() => setSignupModal(false)}>
            <XIcon className="h-6 w-6" fill="white" viewBox="0 0 24 24" stroke="none" />
            </button>
            <div className="w-full h-full bg-red-300 fixed top-0 z-30 grid place-items-center">
                <motion.div
                    variants={innerModalVariants}
                    className="md:w-80 p-3 border-2 rounded-md m-3 shadow-lg"
                >
                    <div className="font-bold text-xl text-gray-800 text-center p-3 ">Sign Up...</div>
                    <form className="w-full flex-col mt-2 rounded-md mx-auto bg-gradient-to-r to-pink-300 from-purple-300 max-w-xs p-2 pt-1 mb-3 shadow-md"
                        onSubmit={e => handleSignup(e)}
                    >
                        <label htmlFor="name">Name</label>
                        <input type="text" className="focus:ring-2 focus:ring-opacity-50 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-blue-600 block pl-3 pr-2 py-1 m-2 w-full mx-auto outline-none rounded-md" required name="name"
                            onChange={(e) => setName(e.target.value)}
                        />
                        { nameError && <div className="mb-2 text-xs text-red-600">{nameError}</div> }
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
                        
                        { signupPressed ? (
                            <button className="cursor-not-allowed focus:ring-2 focus:ring-opacity-50 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-blue-600 block p-2 mt-3 m-2 mx-auto w-full text-xl font-bold rounded-md text-blue-400 bg-pink-500 focus:outline-none tracking-wide dark:text-green-400 shadow-md"
                            >
                                <span>Signing Up</span>
                                <BanIcon className="inline h-6 w-6 ml-2" fill="currentColor" viewBox="0 0 24 24" stroke="none" />
                            </button>
                        ) : (
                            <button className="focus:ring-2 focus:ring-opacity-50 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-blue-600 block p-2 mt-3 m-2 mx-auto w-full text-xl font-bold rounded-md text-blue-700 bg-gray-200 focus:outline-none tracking-wide dark:text-green-600 shadow-md" type="submit"
                            >
                                <span>Signup</span>
                                <ChevronDoubleRightIcon className="inline h-6 w-6 ml-2" fill="currentColor" viewBox="0 0 24 24" stroke="none" />
                            </button>
                        ) }
                        
                    </form>
                </motion.div>
            </div>
            </motion.div>
        </>
    );
}
 
export default SignupModal;