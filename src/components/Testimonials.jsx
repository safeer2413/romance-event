"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function TestimonialCard({ t }) {
    return (
        <blockquote className="p-6 h-64 rounded-2xl bg-gradient-to-b from-rose-300 to-white  border shadow-md text-center w-full">
            <div className="flex flex-col items-center gap-4 mb-4 p-3">
                <img
                    src={t.img}
                    alt={t.a}
                    
                    className="w-20 h-20 rounded-full object-cover border-2 border-rose-200"
                />
                <footer className="text-sm font-extrabold text-gray-900">{t.a}</footer>
            </div>
            <p className="text-gray-700 italic">“{t.q}”</p>
        </blockquote>
    );
}

export default function Testimonials() {
    const data = [
        { q: "They handled décor, food and coordination flawlessly.", a: "Riyas Khan, Trivandrum", img: "/Images/RiyasKhan.jpg" },
        { q: "Transparent pricing and timely delivery.", a: "Sumeer, Trivandrum", img: "/Images/SumeerNew.jpg" },
        { q: "From invites to after-party, they nailed it.", a: "Safeer Khan, Trivandrum", img: "/Images/Safeerkhan.png" },
        { q: "Professional team with great taste.", a: "Rahul, Bengaluru", img: "https://i.pravatar.cc/150?img=12" },
        { q: "They made our day unforgettable!", a: "Nikhil, Hyderabad", img: "https://i.pravatar.cc/150?img=18" },
    ];

    return (
        <section id="testimonials" data-aos="zoom-out-down" data-aos-offset="200" className="py-12 bg-gradient-to-b from-white to-red-300 relative">
            <div  className="max-w-7xl mx-auto px-4 relative">
                <h2 className="text-4xl md:text-5xl font-extrabold text-center tracking-tight mb-14">
                    What <span className="text-rose-600 italic">Clients</span> Say
                </h2>

                {/* Custom Arrows (TOP, full width) */}
                <div className="absolute inset-1 flex items-center justify-between px-5 z-20">
                    <button className="custom-prev bg-white p-3 rounded-full shadow hover:bg-rose-100">
                        <ChevronLeft className="w-6 h-6 text-rose-500" />
                    </button>
                    <button className="custom-next bg-white p-3 rounded-full shadow hover:bg-rose-100">
                        <ChevronRight className="w-6 h-6 text-rose-500" />
                    </button>
                </div>

                {/* Swiper Carousel */}
                <Swiper
                    modules={[Pagination, Navigation]}
                    spaceBetween={30}
                    slidesPerView={3}
                    loop={true} // 🔥 Loop enabled
                    pagination={{
                        el: ".custom-pagination",
                        clickable: true,
                    }}
                    navigation={{
                        prevEl: ".custom-prev",
                        nextEl: ".custom-next",
                    }}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="pb-12 min-h-[250px]"
                >
                    {data.map((t, i) => (
                        <SwiperSlide key={i} className="h-auto flex" >
                            <TestimonialCard t={t} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* External Pagination Dots */}
                <div className="custom-pagination flex justify-center mt-6 gap-2"></div>
            </div>
        </section>
    );
}
