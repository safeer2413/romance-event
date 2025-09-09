// import React from 'react'
// import { motion } from "framer-motion";

// function Services() {
//     return (
//         <section id="services" className="py-20 bg-rose-200 overflow-hidden">
//             <div className="max-w-7xl mx-auto px-4">
//                 <h2 className="text-4xl md:text-5xl font-extrabold text-center tracking-tight mb-12">
//                     Our <span className="text-rose-600 italic">Core</span> Services
//                 </h2>
//                 <p className="text-center text-gray-600 max-w-2xl mx-auto italic mb-12">End‑to‑end planning with curated vendors and in‑house production. Pick individual services or complete packages.</p>
//                 <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                     {[
//                         { t: "Decoration", d: "Stage, mandap, themed décor, floral, lighting.", img: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format&fit=crop" },
//                         { t: "Catering & Food", d: "Multi‑cuisine menus, live counters, hygiene first.", img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop" },
//                         { t: "Planning & Coordination", d: "Budgeting, timelines, vendor mgmt, on‑day execution.", img: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop" },
//                         { t: "Photography & Videography", d: "Candid photo, cinematic film, drone.", img: "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?q=80&w=800&auto=format&fit=crop" },
//                         { t: "Entertainment", d: "Live music, DJ, MCs, cultural acts.", img: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?q=80&w=800&auto=format&fit=crop" },
//                         { t: "Venue & Logistics", d: "Venue scouting, travel, stays, permissions.", img: "https://images.unsplash.com/photo-1485322551133-3a4c27a9d925?q=80&w=800&auto=format&fit=crop" },
//                         { t: "Invites & Gifting", d: "E‑invites, welcome hampers, return gifts.", img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop" },
//                         { t: "Corporate Events", d: "Conferences, launches, MICE, annual days.", img: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop" },
//                     ].map((s) => (
//                         <motion.div data-aos="flip-down" key={s.t} whileHover={{ y: -6 }} className="bg-gradient-to-r from-rose-300 to-white rounded-2xl overflow-hidden bg-white shadow">
//                             <div className="h-40 overflow-hidden">
//                                 <img src={s.img} alt={s.t} className="w-full h-full object-cover" />
//                             </div>
//                             <div className="p-5">
//                                 <h3 className="text-lg font-bold text-gray-900">{s.t}</h3>
//                                 <p className="mt-2 text-sm text-gray-600 italic">{s.d}</p>
//                             </div>
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Services

import React from 'react'

function Services() {
    return (
        <section id="services" className="py-20 bg-rose-200 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-extrabold text-center tracking-tight mb-12">
                    Our <span className="text-rose-600 italic">Core</span> Services
                </h2>
                <p className="text-center text-gray-600 max-w-2xl mx-auto italic mb-12">
                    End-to-end planning with curated vendors and in-house production. 
                    Pick individual services or complete packages.
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { t: "Decoration", d: "Stage, mandap, themed décor, floral, lighting.", img: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format&fit=crop" },
                        { t: "Catering & Food", d: "Multi-cuisine menus, live counters, hygiene first.", img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop" },
                        { t: "Planning & Coordination", d: "Budgeting, timelines, vendor mgmt, on-day execution.", img: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop" },
                        { t: "Photography & Videography", d: "Candid photo, cinematic film, drone.", img: "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?q=80&w=800&auto=format&fit=crop" },
                        { t: "Entertainment", d: "Live music, DJ, MCs, cultural acts.", img: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?q=80&w=800&auto=format&fit=crop" },
                        { t: "Venue & Logistics", d: "Venue scouting, travel, stays, permissions.", img: "https://images.unsplash.com/photo-1485322551133-3a4c27a9d925?q=80&w=800&auto=format&fit=crop" },
                        { t: "Invites & Gifting", d: "E-invites, welcome hampers, return gifts.", img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop" },
                        { t: "Corporate Events", d: "Conferences, launches, MICE, annual days.", img: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop" },
                    ].map((s, i) => (
                        <div
                            key={s.t}
                            data-aos="flip-down"
                            data-aos-delay={i * 100}
                            className="bg-gradient-to-r from-rose-300 to-white rounded-2xl overflow-hidden shadow 
                                       transform transition-transform duration-300 hover:-translate-y-2"
                        >
                            <div className="h-40 overflow-hidden">
                                <img
                                    src={s.img}
                                    alt={s.t}
                                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                />
                            </div>
                            <div className="p-5">
                                <h3 className="text-lg font-bold text-gray-900">{s.t}</h3>
                                <p className="mt-2 text-sm text-gray-600 italic">{s.d}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
