import React, { useState } from 'react'
import LogoSVG from './ui/LogoSVG'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import withRipple from "./ui/RippleButton";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const Button = withRipple("a");
    return (
        <>
            {/* Top Bar */}
            <header className="w-full bg-red-300 backdrop-blur sticky top-0 z-40">

                <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between ">
                    {/* Logo */}
                    <a href="#home" className="flex items-center transform transition-transform duration-300 hover:scale-110">
                        <LogoSVG />
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                        <a href="#services" className="hover:text-rose-600 font-bold">Services</a>
                        <a href="#packages" className="hover:text-rose-600 font-bold">Packages</a>
                        <a href="#gallery" className="hover:text-rose-600 font-bold">Gallery</a>
                        <a href="#testimonials" className="hover:text-rose-600 font-bold">Testimonials</a>
                        <a href="#faq" className="hover:text-rose-600 font-bold">FAQ</a>
                        <Button
                            as="a"
                            href="#contact"
                            className="px-4 py-2 rounded-full bg-rose-600 text-white"
                        >
                            Book Now
                        </Button>
                    </nav>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2  rounded-md hover:bg-rose-100 bg-gradient-to-br from-rose-500 to-fuchsia-500 transform transition-transform duration-300 hover:scale-110"
                    >
                        {isOpen ? (
                            <XMarkIcon className="w-6 h-4" />
                        ) : (
                            <Bars3Icon className="w-6 h-4" />
                        )}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Dropdown */}
            <div
                className={`md:hidden sticky top-12 absolute left-0 w-full bg-rose-300 shadow-md
              overflow-hidden transition-all duration-500 ease-in-out z-50
              ${isOpen ? "max-h-[500px] scale-y-100 opacity-100" : "max-h-0 scale-y-0 opacity-0"}`}
            >
                <nav className="flex flex-col items-center gap-5 py-6 font-bold">
                    {[
                        { label: "Services", href: "#services" },
                        { label: "Packages", href: "#packages" },
                        { label: "Gallery", href: "#gallery" },
                        { label: "Testimonials", href: "#testimonials" },
                        { label: "FAQ", href: "#faq" },
                    ].map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="transition text-gray-800 hover:text-transparent 
                   hover:bg-clip-text hover:bg-gradient-to-r 
                   hover:from-rose-500 hover:to-fuchsia-500"
                        >
                            {item.label}
                        </a>
                    ))}

                    <Button
                        as="a"
                        href="#contact"
                        onClick={() => setIsOpen(false)}
                        className="px-5 py-2 rounded-full bg-rose-600 text-white hover:bg-rose-700 transition"
                    >
                        Book Now
                    </Button>
                </nav>
            </div>
        </>
    )
}

export default Navbar