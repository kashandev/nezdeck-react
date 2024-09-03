import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import Button from '../Button';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Image from '../Image';
import { setDocumentTitle } from '../../utils/utils';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);
    const { pathname } = useLocation();

    const handleClick = () => {
        setIsActive(prev => !prev);
    };

    useEffect(() => {
        if (isActive) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isActive]);

    useEffect(() => {
        document.title = setDocumentTitle(pathname);
    }, [pathname]);

    return (
        <header className="h-[73px] bg-white fixed w-full border-b border-zinc-400 z-20">
            <div className="h-full m-auto w-full xl:w-[80%] flex justify-between items-center px-7 xl:px-0">
                <div className="flex items-center gap-10">
                    <div id="headerlogo" className="text-primary font-bold text-xl">
                        <NavLink className="flex gap-2 items-center" to="/">
                            <Image className="h-12" src="public/dist/img/logo/logo-425x425.png" alt="Logo" />
                            NEZDECK
                        </NavLink>
                    </div>
                    <ul id="header-collapsed-content"
                        className={`transition-all hidden lg:flex justify-center items-center gap-7 text-sm font-medium rounded-sm ${isActive ? 'active bg-white text-black py-10' : 'text-primary'}`}>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About Us</NavLink></li>
                        <li><NavLink to="/products">Products</NavLink></li>
                        <li><NavLink to="/contact">Contact Us</NavLink></li>
                        {/* <li><NavLink to="/services">Services</NavLink></li> */}
                    </ul>
                </div>
                <div>
                    <div id="headerButtons" className="flex items-center hidden lg:flex gap-2">
                    <Link to="/contact" target='_blank'><Button variant="styled">Let's Connect Us</Button></Link>
                    </div>
                    <button
                        onClick={handleClick}
                        className="transition-all bg-white text-primary w-10 h-10 flex justify-center items-center rounded-sm lg:hidden hover:bg-zinc-200"
                    >
                        {isActive ? <X /> : <Menu />}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
