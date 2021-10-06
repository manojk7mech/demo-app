import React from 'react';
import { useSelector } from 'react-redux';
import Snackbar from '../Helpers/Snackbar';

function Footer() {
    const loginSuccess = useSelector(state => state.loginSuccess.value);
    const logoutSuccess = useSelector(state => state.logoutSuccess.value);
    const signupSuccess = useSelector(state => state.signupSuccess.value);
    const wishlistFail = useSelector(state => state.wishlistFail.value);
    const addToCart = useSelector(state => state.addToCart.value);

    return (
        <>
            { logoutSuccess && (
                <div className="grid justify-items-center">
                    <Snackbar message="You are successfully logged out!" theme="error" />
                </div> 
            ) }
            { loginSuccess && (
                <div className="grid justify-items-center">
                    <Snackbar message="You are successfully logged in!" theme="success" />
                </div> 
            ) }
            { signupSuccess && (
                <div className="grid justify-items-center">
                    <Snackbar message="You are signed up and logged in!" theme="success" />
                </div> 
            ) }
            { wishlistFail && (
                <div className="grid justify-items-center">
                    <Snackbar message="You must sign in to wishlist  items!" theme="error" />
                </div> 
            ) }
            { addToCart && (
                <div className="grid justify-items-center">
                    <Snackbar message="Successfully added to cart!" theme="success" />
                </div> 
            ) }

            <div className="w-full bg-indigo-600">
                <div className="">

                </div>
                <div className="w-full p-3 text-center font-semibold text-gray-300">
                    MY Tech Technologies<br />Private limited &copy; 2021
                </div>
            </div>
        </>
    )
}

export default Footer;
