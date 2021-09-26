import React from 'react'

function ConfirmLogout(props) {
    const { closeModal, setLoggedIn, removeCookie } = props;
    
    const handleLogout = () => {
        setLoggedIn(false);
        removeCookie("authToken");
        closeModal(false);
    };

    return (
        <div className="w-full h-full bg-red-300 absolute z-50 grid place-items-center">
            <div className="max-w-md p-3 border-2 rounded-md m-3">
                <div className="font-bold text-xl text-gray-800 text-center p-3 ">Are you sure you want to Log Out of this site?</div>
                <div className="flex justify-center p-2">
                    <button className="bg-green-400 text-gray-700 font-bold text-xl p-2 m-2 rounded" onClick={() => closeModal(false)}>Cancel</button>
                    <button className="bg-red-400 text-gray-700 font-bold text-xl p-2 m-2 rounded" onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmLogout
