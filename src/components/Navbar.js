import { useEffect, useState } from "react";
import MenuItems from "./MenuItems";
import TopNavbar from "./TopNavbar";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { setDarkEnabled } from '../features/darkEnabledSlice';
import { MenuIcon, MoonIcon, SunIcon, XIcon } from "@heroicons/react/solid";
import { AnimatePresence } from "framer-motion";

const Navbar = ({ setCookie, removeCookie }) => {
    const dispatch = useDispatch();
    const darkEnabled = useSelector(state => state.darkEnabled.value);
    // const theUser = useSelector(state => state.theUser.value);

    const [width, setWidth] = useState(window.innerWidth);
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth);
        });

        return () => {
            // window.removeEventListener("resize");
        }
    }, []);

    return (

        <nav className="bg-gray-100 dark:bg-gray-700">
            <TopNavbar setCookie={setCookie} removeCookie={removeCookie} />

            { width > 767 ?
                <MenuItems /> 
                : 
                <div>
                    { isShow ?
                        <>
                            <div className="flex items-center justify-around">
                                <XIcon onClick={() => setIsShow(!isShow)} className="h-7 w-7 cursor-pointer text-gray-800 dark:text-gray-100" fill="currentColor" viewBox="0 0 20 20" stroke="none" />
                                <div className="flex md:hidden justify-center items-center">
                                    <SunIcon className="h-7 w-7 text-yellow-400 dark:text-yellow-100" fill="currentColor" viewBox="0 0 20 20" stroke="none" />
                                    <div onClick={() => dispatch(setDarkEnabled(!darkEnabled))} className=" mx-2 flex h-5 w-11 bg-gray-300 dark:bg-gray-600 ring-2 dark:ring-green-400 ring-blue-700 rounded-full cursor-pointer transform transition-transform duration-200 ease-in-out"> 
                                        <div className={`h-5 w-5 rounded-full ${darkEnabled ? "bg-green-400 dark:bg-green-300 translate-x-6" : "bg-gray-500 translate-x-0"} transform transition-transform duration-200 ease-in-out `}></div>
                                    </div>
                                    <MoonIcon className="h-7 w-7 text-blue-900 dark:text-blue-600" fill="currentColor" viewBox="0 0 20 20" stroke="none" />
                                </div>
                            </div>
                            <AnimatePresence
                                exitBeforeEnter
                                onExitComplete={() => null}
                            >
                                <MenuItems /> 
                            </AnimatePresence>
                        </>
                        :
                        <div className="flex items-center justify-around">
                            <MenuIcon onClick={() => setIsShow(!isShow)} className="h-7 w-7 cursor-pointer text-gray-800 dark:text-gray-100" fill="currentColor" viewBox="0 0 20 20" stroke="none" />
                            <div className="flex justify-center items-center">
                                <SunIcon className="h-7 w-7 text-yellow-400 dark:text-yellow-100" fill="currentColor" viewBox="0 0 20 20" stroke="none" />
                                <div onClick={() => dispatch(setDarkEnabled(!darkEnabled))} className="mx-2 flex h-5 w-11 bg-gray-300 dark:bg-gray-600 ring-2 dark:ring-green-400 ring-blue-700 rounded-full cursor-pointer transform transition-transform duration-200 ease-in-out"> 
                                    <div className={`h-5 w-5 rounded-full ${darkEnabled ? "bg-green-400 dark:bg-green-300 translate-x-6" : "bg-gray-500 translate-x-0"} transform transition-transform duration-200 ease-in-out `}></div>
                                </div>
                                <MoonIcon className="h-7 w-7 text-blue-900 dark:text-blue-600" fill="currentColor" viewBox="0 0 20 20" stroke="none" />
                            </div>
                        </div>
                    }
                <div onClick={() => dispatch(setDarkEnabled(!darkEnabled))} className="mx-auto hidden md:flex h-5 w-11 bg-gray-300 dark:bg-gray-600 ring-2 dark:ring-green-400 ring-blue-700 rounded-full cursor-pointer transform transition-transform duration-200 ease-in-out mt-4 shadow-sm">
                    <div className={`h-5 w-5 rounded-full ${darkEnabled ? "bg-green-400 dark:bg-green-300 translate-x-6" : "bg-gray-500 translate-x-0"} transform transition-transform duration-200 ease-in-out `}></div>
                </div>
            </div>
            }
            
        </nav>
    );
}
 
export default Navbar;