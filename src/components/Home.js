import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import ImgList from '../Helpers/ImgList';

const Home = () => {
    const [imgNo, setImgNo] = useState(0);

    const handleLeft = () => {
        (imgNo > 0) ? setImgNo(imgNo-1) : setImgNo(2);
    };

    const handleRight = () => {
        (imgNo >= 2) ? setImgNo(0) : setImgNo(imgNo+1);
    };

    return (
        <div className="flex justify-center dark:bg-gray-700 p-2 md:p-3">
            <div className="max-w-xl h-2/3 relative rounded-md shadow-md overflow-hidden">
                <img
                    className="w-full object-cover" 
                    src={ImgList[imgNo].imgSrc} 
                    alt="Tech Company"
                />
                <div className="text-base text-center font-semibold absolute bottom-0 w-full bg-gray-600 p-1 bg-opacity-70 text-white">
                    { ImgList[imgNo].description }
                </div> 
                <div className="absolute left-0 rounded-full bg-gray-600 p-1 m-1 bottom-1/2 cursor-pointer bg-opacity-50 hover:bg-opacity-70 grid place-items-center" onClick={handleLeft}>
                    <ChevronLeftIcon className="h-6 w-6" fill="white" viewBox="0 0 20 20" stroke="none" />
                </div>
                <div className="absolute right-0 rounded-full bg-gray-600 p-1 m-1 bottom-1/2 cursor-pointer bg-opacity-50 hover:bg-opacity-70 grid place-items-center" onClick={handleRight}>
                    <ChevronRightIcon className="h-6 w-6" fill="white" viewBox="0 0 20 20" stroke="none" />
                </div>
            </div>
        </div>
    );
};
 
export default Home;