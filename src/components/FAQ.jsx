import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

export default function FAQ() {
    const faqs = [
        { q: "How early should we book?", a: "Ideally 2–3 months for small events and 4–6 months for weddings, especially during peak season.", },
        { q: "Do you customize packages?", a: "Absolutely. We tailor décor, menu, entertainment and logistics based on your theme and budget.", },
        { q: "Which cities do you cover?", a: "Kochi, Thrissur, Calicut, Trivandrum and destination venues across Kerala.", },
        { q: "Payment terms?", a: "30% to block the date, 50% one week prior, 20% after the event (adjustable as per contract).", },
    ];

    return (
        <section id="faq" className="scroll-mt-20 py-20 bg-rose-200">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-4xl font-extrabold text-center mb-14">
                    Frequently <span className="text-red-600 italic">Asked</span> Questions
                </h2>

                <div className="space-y-4" data-aos="fade-down">
                    {faqs.map((f, i) => (
                        <FAQItem key={i} f={f} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function FAQItem({ f }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="border rounded-2xl p-5 bg-rose-100 shadow-md">
            <button
                onClick={() => setOpen(!open)}
                className="cursor-pointer flex items-center justify-between w-full"
            >
                <span className="font-semibold">{f.q}</span>
                <span
                    className={`ml-3 w-7 h-7 flex items-center justify-center
                      bg-white rounded-full shadow-lg transition-transform duration-300 ${open ? "rotate-45" : ""
                        }`}
                >
                    <Plus className="w-6 h-6 text-rose-600" strokeWidth={3} />
                </span>
            </button>

            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="mt-3 text-gray-600 italic">{f.a}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
