import { useState } from "react";

const Signup = ({ loggedIn, setLoggedIn, setCookie }) => {

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

                setLoggedIn(true);

                window.location ='/';
            }
        }
        catch (err) {
            setLoggedIn(false);
        }
    }

    return (
        <div className="dark:bg-gray-700 pb-4">
            <h3 className="text-center pt-6 pb-4 text-2xl font-bold uppercase text-blue-500 dark:text-green-600">Sign Up...</h3>
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
    );
}
 
export default Signup;