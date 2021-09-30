import { useState } from "react";
import { AnimatePresence } from 'framer-motion';
import ConfirmPayment from "../Helpers/ConfirmPayment";

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [nameError, setNameError] = useState(null);
    const [emailError, setEmailError] = useState(null);
    const [messageError, setMessageError] = useState(null);

    const [openPaymentModal, setOpenPaymentModal] = useState(false)

    const openModal = (e) => {
        e.preventDefault();
        setOpenPaymentModal(true);
    }

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
        <>
            <AnimatePresence
                initial={false}
                exitBeforeEnter={true}
                onExitComplete={() => null}
            >
                { openPaymentModal && <ConfirmPayment closeModal={setOpenPaymentModal} />}
            </AnimatePresence>
        <div className="dark:bg-gray-700 pb-4">
            <h1 className="text-center pt-6 pb-4 text-2xl font-bold uppercase text-blue-500 dark:text-green-600">Contact us!</h1>
            <h3 className="text-center text-lg text-blue-400 dark:text-green-700 font-semibold block pb-3">Give suggestions. Help us improve...</h3>
            <form className="w-full flex-col my-2 rounded-md mx-auto bg-gradient-to-r to-pink-300 from-purple-300 max-w-xs p-2 pt-1 mb-3 shadow-md"
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
            <div className=" m-2 p-3 bg-yellow-200 font-serif text-sm text-gray-700 rounded">
                <span className="text-xl font-bold text-pink-900">Note: </span>
                <span className="text-lg text-gray-900">I never want you to send/credit me any money!</span>
                <br />But if at all you want to support me by giving me any money, I very much appreciate it...
                <br />You can also check if it works, just by sending minimum amount (It's 1 Rupee by the way)
                <br />Thank you anyway...
            </div>
            <button className="flex justify-center p-2 m-3 mx-auto border-gray-600 bg-pink-700 hover:bg-pink-500 text-pink-50 font-bold shadow-lg rounded ring-2 ring-purple-600 ring-offset-2" onClick={e => openModal(e)}>Make a payment!</button>
        </div>
        </>
    );
}
 
export default Contact;