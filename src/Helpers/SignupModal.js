import { useState } from "react";
import { useDispatch } from "react-redux";
import { setLoggedIn } from "../features/loggedInSlice";

function SignupModal({ setSignupModal, setCookie }) {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [nameError, setNameError] = useState(null);
    const [emailError, setEmailError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    
    const handleSignup = async (e) => {
        e.preventDefault();

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

                window.location ='/';
            }
        }
        catch (err) {
            dispatch(setLoggedIn(false));
        }
    }

    return (
        <>
            <button className="font-mono fixed z-50 p-2 top-0 right-0 font-bold" onClick={() => setSignupModal(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <div className="w-full h-full bg-red-300 fixed top-0 z-30 grid place-items-center">
                <div className="md:w-80 p-3 border-2 rounded-md m-3 shadow">
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
                        <button className="focus:ring-2 focus:ring-opacity-50 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-blue-600 block p-2 mt-3 m-2 mx-auto w-full text-xl font-bold rounded-md text-blue-700 dark:text-green-600 bg-gray-200 focus:outline-none tracking-wide" type="submit">Sign Up</button>
                    </form>
                </div>
            </div>
        </>
    );
}
 
export default SignupModal;