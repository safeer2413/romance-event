import React from 'react'
import { motion } from "framer-motion";
import withRipple from './ui/RippleButton';

function Pricing() {
    const Button = withRipple("a");
    return (
        <section id="packages" className="py-20 bg-gradient-to-b from-white to-rose-300">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-extrabold text-center tracking-tight mb-12">
                    <span className="text-black">Pop</span><span className="text-red-600 italic">ular </span><span className="text-red-600 italic">Pack</span><span className="text-black">age</span>
                </h2>
                <p className="text-center text-gray-600 max-w-2xl italic mx-auto mb-12">Transparent bundles that can be tailored to your guest count and theme.</p>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { name: "Blossom (Starter)", price: "₹49,999", feats: ["Basic décor & lighting", "Photography (4 hrs)", "Sound & DJ (2 hrs)", "Coordinator (on day)"] },
                        { name: "Euphoria (Standard)", price: "₹1,39,999", tag: "Most Popular", feats: ["Theme décor & florals", "Catering (veg/non‑veg)", "Full‑day photo + highlight film", "Emcee + DJ + Dance floor"] },
                        { name: "Grandeur (Premium)", price: "₹2,49,999", feats: ["Luxury décor & truss lighting", "Multi‑cuisine buffet", "Cinematic film + drone", "Hospitality & logistics"] },
                    ].map((p) => (
                        <motion.div
                            data-aos="flip-left"
                            key={p.name}
                            whileHover={{ y: -6 }} // Hover effect (Framer Motion)
                            transition={{ type: "spring", stiffness: 200, damping: 12 }} // smooth hover
                            className={`rounded-2xl border shadow-md p-6 bg-gradient-to-b from-rose-300 to-white ${p.tag ? "bg-rose-50 border-rose-200" : "bg-white"
                                }`}
                        >
                            {p.tag && <div className="inline-block text-xs px-3 py-1 mb-3 rounded-full bg-rose-600 text-white">{p.tag}</div>}
                            <h3 className="text-xl font-bold">{p.name}</h3>
                            <div className="mt-2 text-3xl font-extrabold text-gray-900">{p.price}</div>
                            <ul className="mt-4 space-y-2 text-sm">
                                {p.feats.map(f => (<li key={f} className="flex items-start gap-2"><span className="mt-1 inline-block w-2 h-2 rounded-full bg-rose-500" /> {f}</li>))}
                            </ul>
                            <Button as="a" href="#contact" className="mt-6 inline-block w-full text-center px-5 py-3 rounded-xl bg-rose-600 text-white hover:bg-rose-700">Enquire Now</Button>

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Pricing