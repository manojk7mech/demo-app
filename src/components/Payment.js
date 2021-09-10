const pass = 'W84rBcNcKskCFgyHY1t0wqEA';

const Payment = () => {

    const showRazorpay = () => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js'
        document.body.appendChild(script);
    };

    return (
        <div>

        </div>
    );
}
 
export default Payment;