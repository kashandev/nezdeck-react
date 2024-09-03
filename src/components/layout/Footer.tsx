import { Facebook, Instagram, Twitter } from "lucide-react"
import { Link, NavLink } from "react-router-dom"
import Image from "../Image"

const Footer = () => {

    return (<footer className="bg-primary w-full  text-white flex flex-col justify-end">
        <div
            className="w-full px-7 lg:px-0 lg:w-[85%] m-auto py-20 grid grid-cols-1 gap-10 sm:gap-4 md:gap-10 md:grid-cols-5 xl:grid-cols-6 font-light text-sm">
            <div className="col-span-2 sm:col-span-3 md:col-span-2">
                <Link className="font-medium mb-3 text-2xl flex gap-2 items-center" to="/"><Image className="h-12"
                    src="public/dist/img/logo/logo-white.png" alt="Footer Logo" /> NEZDECK</Link>
                <p className="w-72">Nezdeck Systems: Empowering Businesses with Premium IT Solutions for Growth, Innovation, and Creative Freedom.</p>
            </div>
            <div className="flex flex-col gap-4">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About Us</NavLink>
                <NavLink to="/products">Products</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
            </div>
            <div className="flex flex-col gap-4 ">
                <Link to="/products">School Management</Link>
                <Link to="/products">Inventory Management</Link>
                <Link to="/products">Restuarant POS(Point of Sale)</Link>
                <Link to="/products">Retail POS(Point of Sale)</Link>
                <Link to="/products">B2B E-commerce Website</Link>
                <Link to="/products">Email Software</Link>
                <Link to="/products">PDF Reports</Link>
                <Link to="/products">Excel Reports</Link>
            </div>
            <div className="flex flex-col gap-4 ">
                <Link to="/">Help Desk</Link>
                <Link to="tel:+923700120814">+92 3700 120814</Link>
                <Link to="mailto:nezdeck.tech@gmail.com">nezdeck.tech@gmail.com</Link>
                <Link to="mailto:nezdeck.support@gmail.com">nezdeck.support@gmail.com</Link>
            </div>
            <div className="flex gap-2">
                <Link to="/" className="w-10 h-10 flex items-center justify-center bg-zinc-100/10 rounded-sm p-2.5"><Facebook /></Link>
                <Link to="/" className="w-10 h-10 flex items-center justify-center bg-zinc-100/10 rounded-sm p-2.5"><Twitter /></Link>
                <Link to="/" className="w-10 h-10 flex items-center justify-center bg-zinc-100/10 rounded-sm p-2.5"><Instagram /></Link>
            </div>
        </div>
        <div
            className="border-t border-zinc-100/20 w-[85%] m-auto py-8 text-sm font-light flex items-center justify-between  flex-col sm:flex-row">
            <p className="mb-2 sm:mb-0">© NEZDECK. All Rights Reserved.</p>
            <div className="flex gap-5">
                <Link to="/terms" className="transition-all border-b-2 border-primary hover:border-white">Term &
                    Conditions</Link>|<Link to="/policy"
                        className="transition-all border-b-2 border-primary hover:border-white">Privacy Policy</Link>
            </div>
        </div>
    </footer>)
}

export default Footer