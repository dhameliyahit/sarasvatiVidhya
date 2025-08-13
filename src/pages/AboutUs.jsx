import { useContext } from "react";
import Layout from "../Layout/Layout";
import ThemeContext from "../context/ThemeContext";

const AboutUs = () => {
    return (
        <div className="bg-gray-50 text-gray-800">
            <Layout>
                <HeroSection />
                <VisionSection />
                <MissionSection />
                <FounderSection />
                <GallerySection />
            </Layout>
        </div>
    );
};

const HeroSection = () => {
    const { theme } = useContext(ThemeContext);
    const isDark = theme === "dark";

    return (
        <section
            className={`text-center py-16 ${isDark ? "bg-gray-900 text-gray-100" : "bg-blue-900 text-white"
                }`}
        >
            <div className="max-w-4xl mx-auto px-4">
                <h1
                    className={`text-4xl sm:text-5xl font-bold mb-4 ${isDark ? "text-white" : "text-white"
                        }`}
                >
                    About Saraswati Vidhyalay
                </h1>
                <p
                    className={`text-lg sm:text-xl ${isDark ? "text-gray-300" : "text-white/90"
                        }`}
                >
                    A place where education is not just a goal but a journey of transformation.
                </p>
            </div>
        </section>
    );
};



const VisionSection = () => {
    const { theme } = useContext(ThemeContext);
    const isDark = theme === "dark";

    return (
        <section className={`py-16 px-6 md:px-12 ${isDark ? "bg-gray-900" : "bg-white"}`}>
            <div
                data-aos="fade-left"
                className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center"
            >
                <img
                    src={"./asset/our_vision.avif" || "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"}
                    alt="Vision"
                    className="rounded-2xl shadow-lg"
                />
                <div data-aos="fade-right">
                    <h2
                        className={`text-3xl font-bold mb-4 ${isDark ? "text-white" : "text-blue-900"
                            }`}
                    >
                        Our Vision
                    </h2>
                    <p
                        className={`text-lg leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"
                            }`}
                    >
                        At Saraswati Vidhyalay , our vision is to foster a generation of learners who are
                        not only academically accomplished but are also emotionally intelligent, socially
                        responsible, and future-ready.
                    </p>
                </div>
            </div>
        </section>
    );
};



const MissionSection = () => {
    const { theme } = useContext(ThemeContext);
    const isDark = theme === "dark";

    return (
        <section
            data-aos="fade-down"
            className={`py-16 px-6 md:px-12 ${isDark ? "bg-gray-900" : "bg-white"}`}
        >
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <h2
                        className={`text-3xl font-bold mb-4 ${isDark ? "text-white" : "text-blue-900"
                            }`}
                    >
                        Our Mission
                    </h2>
                    <p
                        className={`text-lg leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"
                            }`}
                    >
                        To provide a nurturing environment where students are encouraged to explore their
                        full potential. We aim to integrate values with academics to create holistic
                        development that prepares students for life and leadership.
                    </p>
                </div>
                <img
                    src={"./asset/our_mission.avif" || "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80"}
                    alt="Mission"
                    className="rounded-2xl shadow-lg"
                />
            </div>
        </section>
    );
};

const FounderSection = () => {
    const { theme } = useContext(ThemeContext);
    const isDark = theme === "dark";

    const founders = [
        {
            image: "./asset/Kelvin_togadiya.jpg",
            name: "Kenil Togadiya",
            message: `We don't just build teams; we build legacies. Every challenge is an opportunity to redefine what's possible. With bold vision and relentless execution, we create impact that lasts beyond us.\n\nIf you’re ready to rise above average and create meaningful change, we’re excited to meet you.`,
        },
        {
            image: "./asset/pratik.jpg",
            name: "Pratik Bhimani",
            message: `Success is born from curiosity and the courage to act. At our core, we foster a culture where learning never stops and every voice matters. Together, we break barriers and shape the future.\n\nIf you thrive in innovation and value true collaboration, this is your place.`,
        },
        {
            image: "./asset/KT.jpg",
            name: "Kevin Tarpara",
            message: `Dreams don’t work unless you do — but with purpose and passion, nothing is out of reach. We believe in pushing limits, empowering individuals, and leading with heart.\n\nIf you’re someone who leads by example and learns by doing, let’s create the future together.`,
        },
    ];

    return (
        <section
            className={`py-12 px-4 sm:px-6 lg:px-16 transition duration-500 ${isDark ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
                }`}
        >
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 leading-tight">
                Meet the Visionaries Behind{" "}
                <span className="text-blue-600 dark:text-cyan-400 font-extrabold">
                    Saraswati Vidhyalay
                </span>
            </h1>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {founders.map((founder, index) => (
                    <div
                        key={index}
                        className={`rounded-2xl p-6 shadow-lg border-l-4 ${isDark
                            ? "bg-gradient-to-br from-blue-900 to-blue-700 border-cyan-400"
                            : "bg-gradient-to-br from-blue-100 to-blue-200 border-blue-600"
                            }`}
                    >
                        {/* Conditionally render image if available */}
                        {founder.image && (
                            <div className="flex justify-center mb-4">
                                <img
                                    src={founder.image}
                                    alt={founder.name}
                                    className="w-20 h-20 rounded-full object-cover border-2 border-white shadow-md"
                                />
                            </div>
                        )}

                        <div className="text-5xl text-cyan-300 mb-4">“</div>
                        <p className="whitespace-pre-line text-base sm:text-sm md:text-base leading-relaxed mb-6">
                            {founder.message}
                        </p>
                        <div className="text-right text-sm sm:text-base font-semibold uppercase tracking-wide">
                            — {founder.name}
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
};







const GallerySection = () => {
    const { theme } = useContext(ThemeContext);
    const isDark = theme === "dark";

    const images = [
        "./asset/a_g_1.avif",
        "./asset/a_g_2.avif",
        "./asset/a_g_3.avif",
        "./asset/a_g_4.avif",
    ];

    return (
        <section
            className={`py-16 px-6 md:px-12 transition duration-500 ${isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900"
                }`}
        >
            <div className="max-w-6xl mx-auto text-center">
                <h2
                    className={`text-3xl font-bold mb-6 ${isDark ? "text-white" : "text-blue-900"
                        }`}
                >
                    Campus Gallery
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {images.map((src, i) => (
                        <img
                            key={i}
                            src={src}
                            alt={`Campus ${i + 1}`}
                            loading="lazy"
                            className="rounded-lg shadow-md hover:scale-105 transition duration-300 ease-in-out"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};




export default AboutUs;