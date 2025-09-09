import React from 'react'

function Gallery() {
    return (
        <section id="gallery" className="py-20 bg-rose-200 min-h-full">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-5xl font-extrabold text-center mb-12">
                    <span>Ga</span><span className="text-red-600 italic">lle</span><span>ry</span>
                </h2>
                <p className="text-center text-gray-600 max-w-2xl italic mx-auto mb-12">
                    A glimpse into our weddings, receptions, sangeets & corporate soirées.
                </p>

                {/* Masonry-style image layout */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
                    {[
                        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1453831362806-3d5577f014a4?q=80&w=1200&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=1200&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1511576661531-b34d7da5d0bb?q=80&w=1200&auto=format&fit=crop",
                    ].map((src, i) => (
                        <img
                            key={src}
                            src={src}
                            alt={`event-${i}`}
                            loading="lazy"
                            data-aos="fade-up"
                            data-aos-delay={i * 100}
                            className="mb-4 w-full rounded-2xl shadow-md break-inside-avoid 
                                       transition-transform duration-500 hover:scale-15"
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Gallery
