import React from 'react'

function ConfirmLogout(props) {
    const { closeModal, setLoggedIn, removeCookie } = props;
    
    const handleLogout = () => {
        setLoggedIn(false);
        removeCookie("authToken");
        closeModal(false);
    };

    return (
        <>
        <button className="font-mono fixed z-50 p-2 top-0 right-0 font-bold" onClick={() => closeModal(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        <div className="w-full h-full bg-red-300 fixed top-0 z-40 grid place-items-center">
            <div className="max-w-md p-3 border-2 rounded-md m-3 shadow">
                <div className="font-bold text-xl text-gray-800 text-center p-3 ">Are you sure you want to Log Out of this site?</div>
                <div className="flex justify-center p-2">
                    <button className="bg-green-400 text-gray-700 font-bold text-xl p-2 m-2 rounded" onClick={() => closeModal(false)}>Cancel</button>
                    <button className="bg-red-400 text-gray-700 font-bold text-xl p-2 m-2 rounded" onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default ConfirmLogout
