import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HomeIcon, ShoppingBagIcon, HandIcon, QuestionMarkCircleIcon, MailIcon } from '@heroicons/react/solid';
import { AnimatePresence, motion } from 'framer-motion';

const menuVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "auto", opacity: 1,
        transition: { 
            duration: 0.2 
        } 
    },
    exit: { 
        height: 0, opacity: 0,
        transition: { 
            duration: 0.2 
        } 
    }
}

const MenuItems = () => {
    const { pathname } = useLocation();
    const [activeTab, setActiveTab] = useState(pathname);

    return (
        
        <>
            <motion.ul
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="md:flex items-center text-center justify-center border-t border-gray-300 dark:border-gray-200 shadow"
            >
                <li className={`${activeTab === '/' ? 'nav-item-active' : 'nav-item'}`}
                    onClick={() => setActiveTab('/')}
                >
                    <Link to="/" className="cursor-pointer flex justify-center items-center hover:scale-125">
                        <HomeIcon fill="currentColor" className="h-6 w-6 mx-1.5" viewBox="0 0 20 20" />
                        <span className="">Home</span>
                    </Link>
                </li>
                <li className={`${activeTab === '/products' ? 'nav-item-active' : 'nav-item'}`}
                    onClick={() => setActiveTab('/products')}
                >
                    <Link to="/products" className="cursor-pointer flex justify-center items-center">
                        <ShoppingBagIcon fill="currentColor" className="h-6 w-6 mx-1.5" viewBox="0 0 20 20" />
                        <span>Products</span>
                    </Link>
                </li>
                <li className={`${activeTab === '/services' ? 'nav-item-active' : 'nav-item'}`}
                    onClick={() => setActiveTab('/services')}
                >
                    <Link to="/services" className="cursor-pointer flex justify-center items-center">
                        <HandIcon fill="currentColor" className="h-6 w-6 mx-1.5" viewBox="0 0 20 20" />
                        <span>Services</span>
                    </Link>
                </li>
                <li className={`${activeTab === '/about' ? 'nav-item-active' : 'nav-item'}`}
                    onClick={() => setActiveTab('/about')}
                >
                    <Link to="/about" className="cursor-pointer flex justify-center items-center">
                        <QuestionMarkCircleIcon fill="currentColor" className="h-6 w-6 mx-1.5" viewBox="0 0 20 20" />
                        <span>About Us</span>
                    </Link>
                </li>
                <li className={`${activeTab === '/contact' ? 'nav-item-active' : 'nav-item'}`}
                    onClick={() => setActiveTab('/contact')}
                >
                    <Link to="/contact" className="cursor-pointer flex justify-center items-center">
                        <MailIcon fill="currentColor" className="h-6 w-6 mx-1.5" viewBox="0 0 20 20" />
                        <span>Contact</span>
                    </Link>
                </li>
            </motion.ul>
        </>
    );
}
 
export default MenuItems;