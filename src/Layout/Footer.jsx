import { Link } from "react-router-dom";
import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaEnvelope,
    FaWhatsapp,
    FaArrowUp,
} from "react-icons/fa";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Footer = () => {

    const { theme } = useContext(ThemeContext)
    const isDark = theme === "dark";

    const quickLinks = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Gallery", path: "/Gallery" },
        { name: "Facility", path: "/facility" },
        { name: "Addmission Inquiry", path: "/addmission-inquiry" },
    ];

    const socialLinks = [
        { icon: <FaFacebookF />, name: "Facebook", url: "https://www.facebook.com/" },
        { icon: <FaInstagram />, name: "Instagram", url: "https://www.instagram.com/" },
        { icon: <FaYoutube />, name: "Youtube", url: "https://youtube.com" },
    ];

    const schoolHours = [
        {
            title: "Pre-Primary (Eng)",
            time: "01:00 PM - 04:00 PM",
        },
        {
            title: "Pre-Primary (Guj)",
            time: "08:00 AM - 11:00 AM",
        },
        {
            title: "Primary (Eng)",
            time: "12:15 PM - 05:15 PM",
        },
        {
            title: "Primary (Guj)",
            time: "07:00 AM - 12:00 PM",
        },
        {
            title: "Secondary (Guj)",
            time: "07:00 AM - 12:00 PM",
        }
    ];

    return (
        <footer className="relative text-white">
            <div className="bg-gradient-to-b from-[#0e4ca1] to-[#0059aa] relative z-20 px-4 sm:px-6 py-12">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-xl mb-4 after:block after:w-10 after:h-[2px] after:bg-white after:mt-1">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="hover:translate-x-1 transition-all inline-block hover:text-white/90"
                                    >
                                        ➤ {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Follow Us */}
                    <div>
                        <h3 className="font-bold text-xl mb-4 after:block after:w-10 after:h-[2px] after:bg-white after:mt-1">
                            Follow Us
                        </h3>
                        <ul className="space-y-3">
                            {socialLinks.map(({ icon, name, url }) => (
                                <li key={name}>
                                    <a
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 hover:scale-105 transition-all"
                                    >
                                        {icon} {name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* School Hours */}
                    <div>
                        <h3 className="font-bold text-xl mb-4 after:block after:w-10 after:h-[2px] after:bg-white after:mt-1">
                            School Hours
                        </h3>
                        <ul className="space-y-3">
                            {schoolHours.map(({ title, time }, index) => (
                                <li key={index} className="flex justify-between text-white/90 border-b border-white/20 pb-1">
                                    <span>{title}</span>
                                    <span>{time}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-bold text-xl mb-4 after:block after:w-10 after:h-[2px] after:bg-white after:mt-1">
                            Information
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2">
                                <FaMapMarkerAlt className="mt-1 text-2xl" />
                                Surat, Gujarat 395007
                            </li>
                            <li className="flex items-center gap-2">
                                <FaPhoneAlt /> +91 99047 71049
                            </li>
                            <li className="flex items-center gap-2">
                                <FaPhoneAlt /> +91 96388 69235
                            </li>
                            <li className="flex items-center gap-2">
                                <FaPhoneAlt /> +91 91068 03818
                            </li>
                            <li className="flex items-center gap-2">
                                <FaEnvelope /> info@dhartividhyamandir.com
                            </li>
                            <li className="flex items-center gap-2">
                                <Link onClick={() => window.scrollTo({ behavior: "smooth", top: 0 })} to="/login">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
            </div>
            <div className={`${isDark ? "text-white" : ""} text-center text-black text-md md:text-md py-2 `}>
                © 2025, Saraswati Vidhyalay. All rights reserved.
            </div>

            {/* WhatsApp Floating Button */}
            <a
                href="https://wa.me/919904771049"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-4 left-4 bg-[#25D366] hover:bg-[#1ebd5b] p-3 sm:p-4 rounded-full shadow-lg z-50 transition-all duration-300 hover:scale-110"
            >
                <FaWhatsapp className="text-white text-xl sm:text-2xl" />
            </a>

            {/* Scroll to Top Button */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="fixed bottom-4 right-4 bg-[#222] hover:bg-[#444] p-3 sm:p-4 rounded-full text-white shadow-lg z-50 transition-all duration-300 hover:scale-110"
            >
                <FaArrowUp className="text-lg sm:text-xl" />
            </button>
        </footer>
    );
};

export default Footer;
