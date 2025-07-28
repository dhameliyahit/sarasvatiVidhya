import React, { useContext, useState } from "react";
import Layout from "../Layout/Layout";
import ThemeContext from "../context/ThemeContext";

const images = [
    { id: 1, url: "./asset/G_1.avif" },
    { id: 2, url: "./asset/G_2.avif" },
    { id: 4, url: "./asset/G_3.avif" },
    { id: 3, url: "./asset/G_4.avif" },
    { id: 5, url: "./asset/G_5.avif" },
    { id: 6, url: "./asset/G_6.avif" },
    { id: 7, url: "./asset/G_7.avif" },
    { id: 8, url: "./asset/G_8.avif" },
    { id: 9, url: "./asset/G_9.avif" },
    { id: 10, url: "./asset/G_10.avif" },
    { id: 11, url: "./asset/G_11.avif" },
    { id: 12, url: "./asset/G_12.avif" },
    // Add more images as needed
];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const { theme } = useContext(ThemeContext);
    const isDark = theme === "dark";

    return (
        <Layout>
            <section className={`${isDark ? "bg-[#0D1B2A] text-white" : "bg-[#173a94] text-white"} py-16 border-b-2 border-white`}>
                <div className="text-center max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-2">
                        Gallery
                    </h2>
                    <p className="text-lg">
                        Explore glimpses of activities, achievements, and moments that define the spirit of Dharti Vidhya Mandir.
                    </p>
                </div>
            </section>

            <div className={`p-4 ${isDark ? "bg-[#0a182f]" : "bg-white"} transition`}>
                <style jsx>{`
          .masonry-grid {
              column-count: 1;
              column-gap: 1rem;
          }
          @media (min-width: 640px) {
              .masonry-grid {
                  column-count: 2;
              }
          }
          @media (min-width: 768px) {
              .masonry-grid {
                  column-count: 3;
              }
          }
          @media (min-width: 1024px) {
              .masonry-grid {
                  column-count: 4;
              }
          }
          .masonry-item {
              break-inside: avoid;
              margin-bottom: 1rem;
          }
          .masonry-item img {
              width: 100%;
              height: auto;
              display: block;
          }
        `}</style>

                <div className="masonry-grid">
                    {images.map((img) => (
                        <div
                            key={img.id}
                            data-aos="zoom-in-down"
                            data-aos-delay="300"
                            data-aos-easing="ease-out-cubic"
                            className={`masonry-item w-full overflow-hidden cursor-pointer rounded-lg 
              ${isDark ? "hover:brightness-110" : "hover:scale-[1.02]"} 
              transition-transform duration-200`}
                            onClick={() => setSelectedImage(img.url)}
                        >
                            <img
                                src={img.url}
                                alt={`Gallery ${img.id}`}
                                className="w-full h-auto object-cover rounded-lg"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>

                {/* Modal */}
                {selectedImage && (
                    <div
                        className={`fixed inset-0 ${isDark ? "bg-black/90" : "bg-black/70"} flex justify-center items-center z-50 p-4`}
                        onClick={() => setSelectedImage(null)}
                    >
                        <img
                            src={selectedImage}
                            alt="Zoomed"
                            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg object-contain"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                )}
            </div>
        </Layout>
    );
};



export default Gallery;
