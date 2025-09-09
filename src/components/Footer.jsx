import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'
import React from 'react'
import LogoSVG from './ui/LogoSVG'

function Footer() {
    return (
        <>
            <footer className="bg-gray-900 text-pink-400 text-center md:text-start">

                <div data-aos="flip-up" className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols3 gap-8 items-start justify-around">

                    {/* Logo + Description */}
                    <div className="flex flex-col items-center md:items-start">
                        <div className="flex gap-2 mb-3">
                            <span className="font-extrabold text-2xl italic flex items-center transform transition-transform duration-300 hover:scale-110"><LogoSVG /></span>
                        </div>
                        <p className="text-sm italic text-rose-300">
                            ISO-style service quality • End-to-end planning • Kerala wide coverage.
                        </p>
                    </div>

                    <div className="flex gap-8 md:gap-16 justify-around md:justify-between">

                        {/* Services (right on small, stacked on md+) */}
                        <div className="mb-6 md:mb-0 text-left">
                            <h4 className="font-bold uppercase tracking-wide mb-3 text-rose-200">
                                Services
                            </h4>
                            <ul className="space-y-2 text-sm text-rose-300 font-bold">
                                <li><a href="#services" className="hover:text-rose-400 hover:italic transition-colors">Decoration & Lighting</a></li>
                                <li><a href="#services" className="hover:text-rose-400 hover:italic transition-colors">Catering & Food</a></li>
                                <li><a href="#services" className="hover:text-rose-400 hover:italic transition-colors">Photography & Film</a></li>
                                <li><a href="#services" className="hover:text-rose-400 hover:italic transition-colors">Entertainment</a></li>
                            </ul>
                        </div>

                        {/* Company (left on small, stacked on md+) */}
                        <div className="mb-6 md:mb-0 text-left">
                            <h4 className="font-bold uppercase tracking-wide mb-3 text-rose-200">
                                Company
                            </h4>
                            <ul className="space-y-2 text-sm text-rose-300 font-bold">
                                <li><a href="#about" className="hover:text-rose-400 hover:italic transition-colors">About</a></li>
                                <li><a href="#careers" className="hover:text-rose-400 hover:italic transition-colors">Careers</a></li>
                                <li><a href="#blog" className="hover:text-rose-400 hover:italic transition-colors">Blog</a></li>
                                <li><a href="#contact" className="hover:text-rose-400 hover:italic transition-colors">Contact</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Social */}
                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="font-bold uppercase tracking-wide mb-3 text-rose-200 ">
                            Follow
                        </h4>
                        <div className="flex gap-5 text-2xl justify-center md:justify-start">
                            <a href="https://instagram.com" target="_blank" rel="noreferrer"
                                className="transition-transform hover:scale-110 text-pink-400 sm:text-pink-400 
                                           hover:text-pink-500 sm:hover:text-pink-500
                                           max-sm:text-pink-500">
                                <Instagram />
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noreferrer"
                                className="transition-transform hover:scale-110 text-pink-400 sm:text-pink-400 
                                           hover:text-red-500 sm:hover:text-red-500
                                           max-sm:text-red-500">
                                <Youtube />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noreferrer"
                                className="transition-transform hover:scale-110 text-pink-400 sm:text-pink-400 
                                           hover:text-blue-500 sm:hover:text-blue-500
                                           max-sm:text-blue-500">
                                <Facebook />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer"
                                className="transition-transform hover:scale-110 text-pink-400 sm:text-pink-400 
                                           hover:text-sky-600 sm:hover:text-sky-600
                                           max-sm:text-sky-600">
                                <Linkedin />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer"
                                className="transition-transform hover:scale-110 text-pink-400 sm:text-pink-400 
                                           hover:text-sky-400 sm:hover:text-sky-400
                                           max-sm:text-sky-400">
                                <Twitter />
                            </a>
                        </div>

                    </div>
                    <p className="text-xs text-gray-500 mt-6 italic font-bold text-center md:col-span-3">
                        © {new Date().getFullYear()} SafeerKhan. All projects in this portfolio are my own work. All rights reserved.
                    </p>

                </div>
            </footer>
        </>
    )
}

export default Footer