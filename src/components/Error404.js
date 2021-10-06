import Snackbar from "../Helpers/Snackbar";

const Error404 = () => {
    return (
        <>
            <div className="dark:bg-gray-700 pb-6">
                <h1 className="text-lg text-pink-800 dark:text-pink-500 font-bold text-center uppercase py-5">Error 404</h1>
                <h2 className="text-pink-700 dark:text-pink-600 text-center">The page you are looking for is not available...</h2>
            </div>
        </>
    );
}
 
export default Error404;