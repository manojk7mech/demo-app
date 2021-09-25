import { useState } from "react";
import { Link } from 'react-router-dom';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [nameError, setNameError] = useState(null);
    const [emailError, setEmailError] = useState(null);
    const [messageError, setMessageError] = useState(null);

    const handleSuggestion = async (e) => {
        e.preventDefault();

        setNameError(null);
        setEmailError(null);
        setMessageError(null);

        try {
            const res = await fetch('https://my-server-demo.herokuapp.com/user/suggestion', {
                method: 'POST',
                body: JSON.stringify({ name, email, message }),
                headers: { 'Content-Type': 'application/json' }
            });
            const data = await res.json();
            console.log(data);
            if (data.errors) {
                setNameError(data.errors.name);
                setMessageError(data.errors.message);
                setEmailError(data.errors.email);
            }
            if (data.id) {
                console.log(data);
                window.location ='/';
            }
        }
        catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="dark:bg-gray-700 pb-4">
            <h1 className="text-center pt-6 pb-4 text-2xl font-bold uppercase text-blue-500 dark:text-green-600">Contact us!</h1>
            <h3 className="text-center text-lg text-blue-400 dark:text-green-700 font-semibold block pb-3">Give suggestions. Help us improve...</h3>
            <form className="w-full flex-col mt-2 rounded-md mx-auto bg-gradient-to-r to-pink-300 from-purple-300 max-w-xs p-2 pt-1 mb-3 shadow-md"
                onSubmit={e => handleSuggestion(e)}
            >
                <label htmlFor="name">Name</label>
                <input type="text" className="focus:ring-2 focus:ring-opacity-50 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-blue-600 block pl-3 pr-2 py-1 m-2 w-full mx-auto outline-none rounded-md" name="name"
                    onChange={(e) => setName(e.target.value)}
                />
                { nameError && <div className="mb-2 text-xs text-red-600">{nameError}</div> }
                <label htmlFor="email">Email</label>
                <input type="text" className="focus:ring-2 focus:ring-opacity-50 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-blue-600 block pl-3 pr-2 py-1 m-2 w-full mx-auto outline-none rounded-md" name="email" 
                    onChange={(e) => setEmail(e.target.value)}
                />
                { emailError && <div className="mb-2 text-xs text-red-600">{emailError}</div> }
                <label htmlFor="message">Suggestions...</label>
                <textarea type="text" className="focus:ring-2 focus:ring-opacity-50 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-blue-600 block pl-3 pr-2 py-1 m-2 w-full mx-auto h-20 outline-none rounded-md resize-none" name="message" 
                    onChange={(e) => setMessage(e.target.value)}
                />
                { messageError && <div className="mb-2 text-xs text-red-600">{messageError}</div> }
                <button className="focus:ring-2 focus:ring-opacity-50 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-blue-600 block p-2 mt-3 m-2 mx-auto w-full text-xl font-bold rounded-md text-blue-700 dark:text-green-600 bg-gray-200 focus:outline-none tracking-wide" type="submit">Submit</button>
            </form>
            {/* <Link to="/payment" className="flex justify-center p-2 my-3 w-auto border-gray-600 bg-pink-700 text-pink-50 font-bold">Make a payment!</Link> */}
        </div>
    );
}
 
export default Contact;