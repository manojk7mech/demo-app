import React, { useState } from 'react';
import Axios from 'axios';
import { AnimatePresence, motion } from 'framer-motion';
import { XIcon } from '@heroicons/react/solid'

const outerModalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0,
        transition: { delay: 0.4 }
    }
};

const firstModalVariants = {
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

const nextModalVariants = {
    hidden: { y: "-100vh", opacity: 0.5 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { 
            delay: 1,
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

function ConfirmPayment({ closeModal }) {
    const [amount, setAmount] = useState(1);
    const [nextModal, setNextModal] = useState(false);
    
    const handlePayment = async (e) => {
        e.preventDefault();

        const response = await Axios.post('https://my-server-demo.herokuapp.com/razorpay/order', { amount });
        const { data } = response;
        console.log(data);
    
        const options = {
            key: 'rzp_live_QcU1JxrOswzw6K',
            name: "MY Tech",
            description: "A Tech Company",
            order_id: data.id,
            theme: {
                color: "#686CFD",
            },
        };
    
        const razorpay = await new window.Razorpay(options, async (response) => {
            try {
                const paymentId = response.razorpay_payment_id;
                const url = `https://my-server-demo.herokuapp.com/razorpay/capture/${paymentId}`;
                const captureResponse = await Axios.post(url, { amount });
                const successObj = JSON.parse(captureResponse.data);
                const captured = successObj.captured;
                console.log(successObj);
                if (captured) {
                    console.log('success');
                }
            } 
            catch (err) {
                console.log(err);
            }
        });
        razorpay.open();
    };
 
    return (
        <>
            <motion.div
                variants={outerModalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <button className="font-mono fixed z-50 p-2 top-0 right-0 font-bold" onClick={() => closeModal(false)}>
                    <XIcon className="h-6 w-6" fill="white" viewBox="0 0 24 24" stroke="none" />
                </button>
                <div className="w-full h-full bg-red-300 fixed top-0 z-40 grid place-items-center">
                    {/* <AnimatePresence
                        // initial={false}
                        exitBeforeEnter={true}
                        // onExitComplete={() => null}
                    > */}
                    { nextModal ? (
                        <AnimatePresence initial={false} exitBeforeEnter onExitComplete={() => null}>
                        <motion.div 
                            variants={nextModalVariants}
                            className="flex justify-center"
                        >
                            <div className="max-w-md p-3 border-2 rounded-md m-3 shadow">
                                <h1 className="font-bold text-xl text-gray-800 text-center p-3">Payment using Razorpay</h1>
                                <label className="text-center block text-xl my-2" htmlFor="amount">Enter amount!</label>
                                <input className="border-gray-600 m-3 px-2 py-1 w-28 mx-auto text-lg flex items-center my-2 rounded-sm" type="number" name="amount" value={amount} onChange={e => setAmount(e.target.value)} />
                                <div className="flex justify-center p-2">
                                    <button className="bg-red-400 text-gray-700 font-bold text-xl py-2 px-3 m-2 rounded shadow-md"  onClick={e => handlePayment(e)}>Send</button>
                                    <button className="bg-green-400 text-gray-700 font-bold text-xl py-2 px-3 m-2 rounded shadow-md" onClick={() => closeModal(false)}>Cancel</button>
                                </div>
                            </div>
                        </motion.div>
                        </AnimatePresence>
                    )
                    : (
                        <AnimatePresence initial={false} exitBeforeEnter onExitComplete={() => null}>
                    <motion.div 
                        variants={firstModalVariants}
                        className="max-w-md p-3 border-2 rounded-md m-3 shadow"
                    >
                        <div className="font-bold text-xl text-gray-800 text-center p-3 ">Are you sure you want to make a Payment?</div>
                        <div className="flex justify-center p-2">
                            <button className="bg-red-400 text-gray-700 font-bold text-xl py-2 px-3 m-2 rounded shadow-md" onClick={() => setNextModal(true)}>Pay</button>
                            <button className="bg-green-400 text-gray-700 font-bold text-xl py-2 px-3 m-2 rounded shadow-md" onClick={() => closeModal(false)}>Cancel</button>
                        </div>
                    </motion.div>
                    </AnimatePresence>
                    ) }
                    {/* </AnimatePresence> */}
                </div>
            </motion.div>
        </>
    )
}

export default ConfirmPayment;
