import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'
import React from 'react'
import LogoSVG from './ui/LogoSVG'

function Footer() {
    return (
        <>
            <footer className="bg-gray-900 text-pink-400">
                <div data-aos="flip-up" className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">

                    {/* Logo + Description */}
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <span className="font-extrabold text-2xl italic flex items-center transform transition-transform duration-300 hover:scale-110"><LogoSVG /></span>
                        </div>
                        <p className="text-sm italic text-rose-300">
                            ISO-style service quality • End-to-end planning • Kerala wide coverage.
                        </p>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-bold uppercase tracking-wide mb-3 text-rose-200">
                            Services
                        </h4>
                        <ul className="space-y-2 text-sm text-rose-300">
                            <li><a href="#services" className="hover:text-rose-400 hover:italic transition-colors">Decoration & Lighting</a></li>
                            <li><a href="#services" className="hover:text-rose-400 hover:italic transition-colors">Catering & Food</a></li>
                            <li><a href="#services" className="hover:text-rose-400 hover:italic transition-colors">Photography & Film</a></li>
                            <li><a href="#services" className="hover:text-rose-400 hover:italic transition-colors">Entertainment</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-bold uppercase tracking-wide mb-3 text-rose-200">
                            Company
                        </h4>
                        <ul className="space-y-2 text-sm text-rose-300">
                            <li><a href="#about" className="hover:text-rose-400 hover:italic transition-colors">About</a></li>
                            <li><a href="#careers" className="hover:text-rose-400 hover:italic transition-colors">Careers</a></li>
                            <li><a href="#blog" className="hover:text-rose-400 hover:italic transition-colors">Blog</a></li>
                            <li><a href="#contact" className="hover:text-rose-400 hover:italic transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="font-bold uppercase tracking-wide mb-3 text-rose-200">
                            Follow
                        </h4>
                        <div className="flex gap-4 text-2xl">
                            <a href="https://instagram.com" target="_blank" rel="noreferrer"
                                className="hover:text-pink-500 hover:scale-110 transition-transform"><Instagram /></a>
                            <a href="https://youtube.com" target="_blank" rel="noreferrer"
                                className="hover:text-red-500 hover:scale-110 transition-transform"><Youtube /></a>
                            <a href="https://facebook.com" target="_blank" rel="noreferrer"
                                className="hover:text-blue-500 hover:scale-110 transition-transform"><Facebook /></a>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer"
                                className="hover:text-sky-600 hover:scale-110 transition-transform"><Linkedin /></a>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer"
                                className="hover:text-sky-400 hover:scale-110 transition-transform"><Twitter /></a>
                        </div>
                        <p className="text-xs text-gray-500 mt-4 italic">
                            © {new Date().getFullYear()} SafeerKhan. All projects in this portfolio are my own work. All rights reserved.
                        </p>

                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer