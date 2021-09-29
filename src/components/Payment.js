import { useState } from 'react';
import Axios from 'axios';



const Payment = () => {
    const [amount, setAmount] = useState(1);

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
    
        const rzp1 = await new window.Razorpay(options, async (response) => {
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
        rzp1.open();
    };

    return (
        <div className="flex justify-center">
            <div className="max-w-md my-5 mx-5 border-gray-500 bg-gray-300 ">
                <h1 className="p-3 font-bold text-blue-900 text-center text-2xl m-4">Payment using Razorpay</h1>
                <label className="text-center block text-xl my-2" htmlFor="amount">Enter amount!</label>
                <input className="border-gray-600 m-3 p-2 w-28 mx-auto text-xl flex items-center my-2" type="number" name="amount" value={amount} onChange={e => setAmount(e.target.value)} />
                <button className="p-4 bg-blue-400 text-pink-600 text-xl block w-40 mx-auto my-3" type="submit" onClick={e => handlePayment(e)}>Send Money</button>
            </div>
        </div>
    );
};
 
export default Payment;