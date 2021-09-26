import { useState } from "react";
import LoginModal from "../Helpers/LoginModal";

const About = ({ loggedIn, setLoggedIn, setCookie }) => {
    const [loginModal, setLoginModal] = useState(false)

    return (
        <>
            { loginModal && 
            <LoginModal loggedIn={loggedIn} setLoggedIn={setLoggedIn} setCookie={setCookie} setLoginModal={setLoginModal} /> }

            { loggedIn ? (
                <div className="dark:bg-gray-700 pb-4">
                    <h1 className="text-center pt-6 pb-4 text-2xl font-bold uppercase text-blue-500 dark:text-green-500">It is actually 'about me' (For now atleast)!</h1>
                    <h3 className="text-center text-lg text-gray-900 dark:text-gray-300 font-semibold block pb-3">
                    Hi, I am <span className="text-black dark:text-white font-bold">Manoj Kumar</span><br />Mechanical Engineer by Degree...<br /><code>WebDev</code> by Passion...</h3>
                </div>
            ) : (
                <div className="flex-col items-center p-2 dark:bg-gray-700">
                    <h1 className="text-center pt-6 pb-4 text-2xl font-bold uppercase text-blue-500 dark:text-green-500">Please login to view this page!</h1>
                    <div className="grid place-items-center">
                        <button className="mx-auto bg-green-400 text-gray-700 font-bold text-xl p-2 m-2 rounded" onClick={() => setLoginModal(true)}>Login Now!</button>
                    </div>
                </div>
            ) }
        </>
    );
}

export default About;