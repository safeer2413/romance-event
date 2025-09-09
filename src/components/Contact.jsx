import withRipple from "./ui/RippleButton";
import { Mail, MapPin, Phone, ChevronDown } from 'lucide-react';

function Contact() {
    const Button = withRipple("a");
    const RButton = withRipple("button");
    return (
        <>
            <section id="contact" className="py-20 bg-gradient-to-b from-white to-rose-300 overflow-x-hidden">
                <div data-aos="flip-down" className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center overflow-x-hidden">

                    {/* Left: Info */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
                            Let’s <span className="text-rose-600 italic">Plan</span> Your Event
                        </h2>
                        <p className="text-gray-600 italic mb-6 text-lg">
                            Tell us about your date, venue, guest count and theme.
                            Our planner will call within <span className="font-semibold">24 hours</span>.
                        </p>

                        <ul className="space-y-3 text-base">
                            <li className="flex items-center gap-2">
                                <Phone className="w-5 h-5 text-rose-500" />
                                <span className="font-medium">+91 98XX-XXX-XXX</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="w-5 h-5 text-rose-500" />
                                <span className="font-medium">hello@romanceevents.in</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-rose-500" />
                                <span className="font-medium">Kochi • Thrissur • Trivandrum <i>(Available Internationally)</i></span>
                            </li>
                        </ul>

                        <div className="mt-8 flex gap-4 flex-wrap">
                            <Button href="https://wa.me/919895632413"
                                className="px-5 py-3 rounded-xl bg-gradient-to-r from-green-500 to-green-600 
                     text-white font-semibold shadow hover:from-green-600 hover:to-green-700">
                                WhatsApp
                            </Button>
                            <Button href="#"
                                className="bg-rose-200 px-6 py-3 rounded-full border border-pink-400 hover:border-rose-600 
                     text-rose-500 font-semibold">
                                Download Brochure
                            </Button>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <form data-aos="zoom-in" className="rounded-2xl bg-gradient-to-b from-rose-300 to-white p-6 shadow-lg grid grid-cols-1 gap-4 overflow-x-hidden">
                        <input className="p-3 border rounded-xl focus:outline-rose-300 
                        bg-rose-50 text-gray-700 placeholder:italic" type="text"
                            placeholder="Full Name" />

                        <div className="grid sm:grid-cols-2 gap-4">
                            <input className="p-3 border rounded-xl focus:outline-rose-300 
                          bg-rose-50 text-gray-700 placeholder:italic" type="email"
                                placeholder="Email" />
                            <input className="p-3 border rounded-xl focus:outline-rose-300 
                          bg-rose-50  placeholder:italic" type="tel" placeholder="Phone" pattern="[0-9]{10}"
                            />
                        </div>

                        <div className="relative overflow-fix">
                            <select
                                className="p-3 border rounded-xl focus:outline-rose-300 
                                bg-rose-50 text-rose-600 w-full appearance-none overflow-fix"
                            >
                                <option>Event Type</option>
                                <option>Wedding</option>
                                <option>Reception</option>
                                <option>Birthday</option>
                                <option>House Warming</option>
                                <option>Corporate</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-rose-600 pointer-events-none" size={18} />

                        </div>
                        <input type="date"
                            className="p-3 border rounded-xl focus:outline-rose-300 
                          bg-rose-50 text-rose-600"/>

                        <textarea rows={4}
                            className="p-3 border rounded-xl focus:outline-rose-300 
                     bg-rose-50 text-gray-700 placeholder:italic"
                            placeholder="Tell us your theme / requirements" />

                        <RButton
                            className="px-6 py-3 text-center rounded-xl bg-rose-600 text-white font-semibold 
                     hover:bg-rose-700 shadow">
                            Send Enquiry
                        </RButton>

                        <p className="text-xs text-gray-500 italic">
                            By submitting, you agree to our <span className="underline">Terms</span> & <span className="underline">Privacy Policy</span>.
                        </p>
                    </form>

                </div>
            </section>
        </>
    )
}

export default Contact