import { useState } from 'react';
import ImgList from '../Helpers/ImgList';

// import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
// import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

const Home = () => {
    const [imgNo, setImgNo] = useState(0);

    const handleLeft = () => {
        (imgNo > 0) ? setImgNo(imgNo-1) : setImgNo(2);
    };

    const handleRight = () => {
        (imgNo >= 2) ? setImgNo(0) : setImgNo(imgNo+1);
    };

    return (
        <div className="flex justify-center dark:bg-gray-700 p-3">
            <div className="max-w-xl h-2/3 relative">
                <img className="w-full object-cover" src={`${ImgList[imgNo].img}`} alt="Tech Company"/>
                <div className="text-base text-center font-semibold absolute bottom-0 w-full bg-gray-600 p-1 bg-opacity-70 text-white">
                    { ImgList[imgNo].description }
                </div> 
                <div className="absolute left-0 flex items-center rounded-full bg-gray-600 p-1 m-1 bottom-1/2 cursor-pointer bg-opacity-50" onClick={handleLeft}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </div>
                <div className="absolute right-0 flex items-center rounded-full bg-gray-600 p-1 m-1 bottom-1/2 cursor-pointer bg-opacity-50" onClick={handleRight}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
        </div>
    );
};
 
export default Home;