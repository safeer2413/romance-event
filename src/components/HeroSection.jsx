"use client";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";
import withRipple from "./ui/RippleButton";

function Counter({ end }) {
    const controls = useAnimationControls();
    const [count, setCount] = useState(0);

    useEffect(() => {
        controls.start({
            val: end,
            transition: { duration: 2, ease: "easeOut" },
        });
    }, [controls, end]);

    return (
        <motion.span
            animate={controls}
            initial={{ val: 0 }}
            onUpdate={(latest) => setCount(latest.val.toFixed(0))}
        >
            {count}+
        </motion.span>
    );
}

export default function HeroSection() {
    const Button = withRipple("a");

    return (
        <section data-aos="zoom-out" id="home" className="relative overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-100 via-white to-white" />
            <div className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">

                {/* 👉 Left Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
                        We Design <span className="text-rose-600 italic">Unforgettable</span> Moments
                    </h1>

                    <p className="mt-4 text-lg text-gray-600 italic">
                        Full-service weddings, corporate events, birthdays & destination
                        celebrations across Kerala. Premium decoration, catering,
                        entertainment, photography – all under one roof.
                    </p>

                    {/* 👉 Ripple Buttons */}
                    <div className="mt-6 flex flex-wrap gap-3">
                        <Button
                            href="#contact"
                            rippleColor="rgba(244, 63, 94, 0.6)"
                            className="inline-block rounded-xl text-center px-5 py-3 bg-rose-600 text-white font-medium shadow-lg"
                        >
                            Get Free Consultation
                        </Button>

                        <Button
                            href="#gallery"
                            rippleColor="rgba(236, 72, 153, 0.4)"
                            className="text-center px-5 py-3 rounded-full bg-rose-200 border border-pink-400 hover:border-rose-600 text-rose-500 font-medium shadow"
                        >
                            View Gallery
                        </Button>
                    </div>
                    ``
                    {/* 👉 Animated Counters */}
                    <div className="mt-8 grid grid-cols-3 gap-6 text-center">
                        {[
                            { k: "Happy Clients", v: 1200 },
                            { k: "Events Planned", v: 1800 },
                            { k: "Years Experience", v: 10 },
                        ].map(({ k, v }) => (
                            <div
                                key={k}
                                className="rounded-2xl p-5 bg-rose-200 shadow flex flex-col items-center"
                            >
                                <div className="text-2xl font-extrabold text-gray-900">
                                    <Counter end={v} />
                                </div>
                                <div className="text-sm text-gray-500">{k}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* 👉 Right Side Images */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="relative"
                >
                    <img
                        src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/373c7d84094683.5d51ab0f24bb9.png"
                        alt="Wedding stage"
                        loading="lazy"
                        className="rounded-3xl shadow-xl object-cover w-full h-[460px]"
                    />
                    <img
                        src="https://www.wedding-spot.com/blog/sites/wsblog/files/images/migrated/196-affordable%2Boutdoor%2Bwedding%2Bvenue%2Boverlooking%2Bwater.jpg"
                        alt="Banquet"
                        loading="lazy"
                        className="absolute -bottom-4 -left-2 w-48 h-48 object-cover rounded-2xl shadow-lg border-4 border-white"
                    />
                    <img
                        src="https://en.idei.club/uploads/posts/2023-06/1686470907_en-idei-club-p-luxurious-banquet-hall-dizain-8.jpg"
                        alt="Decor"
                        loading="lazy"
                        className="absolute -top-4 -right-2 w-48 h-48 object-cover rounded-2xl shadow-lg border-4 border-white"
                    />
                </motion.div>
            </div>
        </section>
    );
}