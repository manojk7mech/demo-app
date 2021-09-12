import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import { motion } from 'framer-motion';

const MenuItems = () => {
    const { pathname } = useLocation();
    console.log(pathname);
    const [activeTab, setActiveTab] = useState(pathname);

    return (
        <div>
            <ul className="md:flex items-center text-center justify-center border-t border-b border-gray-700 dark:border-gray-200">
                <li className={`${activeTab === '/' ? 'nav-item-active' : 'nav-item'}`}
                    onClick={() => setActiveTab('/')}
                >
                    <Link to="/" className="cursor-pointer flex justify-center items-center hover:scale-125">
                        <svg className="h-6 w-6 mx-1.5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                        <span className="">Home</span>
                    </Link>
                </li>
                <li className={`${activeTab === '/products' ? 'nav-item-active' : 'nav-item'}`}
                    onClick={() => setActiveTab('/products')}

                >
                    <Link to="/products" className="cursor-pointer flex justify-center items-center">
                        <svg className="h-6 w-6 mx-1.5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                        </svg>
                        <span>Products</span>
                    </Link>
                </li>
                <li className={`${activeTab === '/services' ? 'nav-item-active' : 'nav-item'}`}
                    onClick={() => setActiveTab('/services')}
                >
                    <Link to="/services" className="cursor-pointer flex justify-center items-center">
                        <svg className="h-6 w-6 mx-1.5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9 3a1 1 0 012 0v5.5a.5.5 0 001 0V4a1 1 0 112 0v4.5a.5.5 0 001 0V6a1 1 0 112 0v5a7 7 0 11-14 0V9a1 1 0 012 0v2.5a.5.5 0 001 0V4a1 1 0 012 0v4.5a.5.5 0 001 0V3z" clipRule="evenodd" />
                        </svg>
                        <span>Services</span>
                    </Link>
                </li>
                <li className={`${activeTab === '/about' ? 'nav-item-active' : 'nav-item'}`}
                    onClick={() => setActiveTab('/about')}
                >
                    <Link to="/about" className="cursor-pointer flex justify-center items-center">
                        <svg className="h-6 w-6 mx-1.5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                        </svg>
                        <span>About Us</span>
                    </Link>
                </li>
                <li className={`${activeTab === '/contact' ? 'nav-item-active' : 'nav-item'}`}
                    onClick={() => setActiveTab('/contact')}
                >
                    <Link to="/contact" className="cursor-pointer flex justify-center items-center">
                        <svg className="h-6 w-6 mx-1.5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        <span>Contact</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}
 
export default MenuItems;