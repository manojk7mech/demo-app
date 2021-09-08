import { Link } from "react-router-dom";

const TopNavbar = ({ darkEnabled, setDarkEnabled, loggedIn, setLoggedIn, theUser, removeCookie }) => {

    const handleLogout = () => {
        setLoggedIn(false);
        removeCookie("authToken");
    };

    return (
        <div className="flex justify-center items-center md:justify-between max-w-screen-lg mx-auto transform duration-300 ease-in">
            <div className="mx-3 my-1 flex items-center text-center cursor-pointer">
                <Link to="/">
                    <img className="h-14 m-2" src="/images/company-logo.png" alt="Logo" />
                </Link>
                <div className="flex-col items-center justify-center">
                    <span className="font-black mx-2 my-2 pb-2 block text-3xl hover:text-blue-800 dark:hover:text-blue-100 hover:text-3xl bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text border-b-2 border-gray-300 dark:hover:border-gray-300 hover:border-gray-800">MY Tech</span>
                    <span className="font-semibold font-desc text-lg text-blue-400 mx-2 my-1 block hover:text-blue-600 dark:hover:text-blue-100">A Tech Company</span>
                </div>
            </div>
            <div className="flex-col justify-center p-2">
                { loggedIn ? 
                    <div className="mx-3 flex flex-col md:flex-row">
                        <div className="text-center text-blue-800 dark:text-blue-200 border-b-2 font-semibold border-blue-800 dark:border-blue-200 px-2 py-1 my-1 cursor-pointer dark:hover:bg-blue-200 hover:bg-blue-800 dark:hover:text-blue-800 hover:text-blue-50 transform duration-300 ease-out mx-1 uppercase">{theUser}</div>
                        <button className="text-center text-blue-800 dark:text-blue-200 border-2 rounded-lg font-semibold border-blue-800 dark:border-blue-200 px-2 py-1 my-1 cursor-pointer dark:hover:bg-blue-200 hover:bg-blue-800 dark:hover:text-blue-800 hover:text-blue-50 transform duration-300 ease-out mx-1" onClick={() => handleLogout()}>Logout</button>
                    </div> : 
                    <div className="mx-3 flex flex-col md:flex-row">
                        <Link to="/signup" className="text-center text-blue-800 dark:text-blue-200 border-2 rounded-lg font-semibold border-blue-800 dark:border-blue-200 px-2 py-1 my-1 cursor-pointer dark:hover:bg-blue-200 hover:bg-blue-800 dark:hover:text-blue-800 hover:text-blue-50 transform duration-300 ease-out mx-1">Signup</Link>
                        <Link to="/login" className="text-center text-blue-800 dark:text-blue-200 border-2 rounded-lg font-semibold border-blue-800 dark:border-blue-200 px-2 py-1 my-1 cursor-pointer dark:hover:bg-blue-200 hover:bg-blue-800 dark:hover:text-blue-800 hover:text-blue-50 transform duration-300 ease-out mx-1">Login</Link>
                    </div>
                }
                <div onClick={() => setDarkEnabled(!darkEnabled)} className={`mx-auto my-2 hidden md:flex h-5 w-11 bg-gray-300 dark:bg-gray-600 ring-2 ring-green-400 rounded-full cursor-pointer transform transition-transform duration-200 ease-in-out `}>
                    <div className={`h-5 w-5 rounded-full ${darkEnabled ? "bg-green-400 dark:bg-green-100 translate-x-6" : "bg-gray-500 translate-x-0"} transform transition-transform duration-200 ease-in-out `}></div>
                </div>
            </div>
        </div>
    );
}
 
export default TopNavbar;