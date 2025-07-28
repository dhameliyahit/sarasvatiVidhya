import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { FaUser, FaEnvelope, FaPhone, FaCheck, FaCommentDots } from "react-icons/fa";
import { FaClipboardUser } from "react-icons/fa6";
import Layout from "../Layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import LoadingSpinner from "../components/LoadingSpinner";
import ThemeContext from "../context/ThemeContext";


const Admission = ({ isLayout = true }) => {
    const [loading, setLoading] = useState(false);
    const { theme } = useContext(ThemeContext);
    const isDark = theme === "dark";

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const VITE_API_URL = import.meta.env.VITE_API_URL;

    const onSubmit = async (data) => {
        try {
            setLoading(true);
            const res = await axios.post(`${VITE_API_URL}/api/admission`, { data });
            if (res.data.message) {
                toast.success("Admission Inquiry Successfully Sent");
                setLoading(false);
            }
        } catch (error) {
            console.error("Error while submitting:", error);
            toast.error("Form submission failed.");
            setLoading(false);
        }
    };

    const content = (
        <section className={`${isDark ? "bg-slate-900" : "bg-gray-100"} py-20 px-4`} id="contact">
            <div className="max-w-6xl mx-auto text-center relative z-10">
                <p className="text-blue-700 dark:text-blue-400 font-semibold italic mb-3 text-lg sm:text-xl">
                    If You Have Any Query then Contact Us 👋
                </p>
                <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
                    Admission{" "}
                    <span className="inline-block transform transition-transform duration-300 hover:scale-105">
                        Inquiry
                    </span>
                </h2>
                <div className="h-1.5 w-36 mx-auto bg-gradient-to-r from-green-400 via-green-600 to-green-400 rounded-full mb-12 animate-pulse-slow shadow-lg"></div>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className={`rounded-4xl px-8 py-12 grid gap-8 md:grid-cols-2 border shadow-3xl backdrop-blur-lg transform transition-transform duration-500 ease-out hover:scale-[1.01] relative z-10
          ${isDark ? "bg-slate-800/90 border-slate-600 text-white" : "bg-white/95 border-blue-100 text-gray-800"}`}
                >
                    {/* Name */}
                    <div className="flex flex-col relative group">
                        <label className="text-sm mb-1 flex items-center gap-2 font-medium">
                            <FaUser className="text-blue-500" /> Name
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Your Full Name"
                                {...register("name", { required: "Name is required" })}
                                className={`w-full px-4 py-3 pl-11 border rounded-lg outline-none transition-all duration-200
                ${isDark ? "bg-slate-700 border-slate-500 text-white placeholder-gray-300" : "bg-white/80 border-gray-300 text-gray-700 placeholder-gray-400"}
                focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                            />
                            <FaUser className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${isDark ? "text-gray-300" : "text-gray-400"}`} />
                        </div>
                        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col relative group">
                        <label className="text-sm mb-1 flex items-center gap-2 font-medium">
                            <FaEnvelope className="text-blue-500" /> Email Address
                        </label>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="example@email.com"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^\S+@\S+$/i,
                                        message: "Invalid email address",
                                    },
                                })}
                                className={`w-full px-4 py-3 pl-11 border rounded-lg outline-none transition-all duration-200
                ${isDark ? "bg-slate-700 border-slate-500 text-white placeholder-gray-300" : "bg-white/80 border-gray-300 text-gray-700 placeholder-gray-400"}
                focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                            />
                            <FaEnvelope className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${isDark ? "text-gray-300" : "text-gray-400"}`} />
                        </div>
                        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col relative group">
                        <label className="text-sm mb-1 flex items-center gap-2 font-medium">
                            <FaPhone className="text-blue-500" /> Phone
                        </label>
                        <div className="relative">
                            <input
                                type="tel"
                                placeholder="1234567890"
                                {...register("phone", {
                                    required: "Phone is required",
                                    pattern: {
                                        value: /^[0-9]{10}$/,
                                        message: "Enter valid 10-digit number",
                                    },
                                })}
                                className={`w-full px-4 py-3 pl-11 border rounded-lg outline-none transition-all duration-200
                ${isDark ? "bg-slate-700 border-slate-500 text-white placeholder-gray-300" : "bg-white/80 border-gray-300 text-gray-700 placeholder-gray-400"}
                focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                            />
                            <FaPhone className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${isDark ? "text-gray-300" : "text-gray-400"}`} />
                        </div>
                        {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
                    </div>

                    {/* Standard */}
                    <div className="flex flex-col relative group">
                        <label className="text-sm mb-1 flex items-center gap-2 font-medium">
                            <FaClipboardUser className="text-blue-500" /> Standard
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Ex: 1st to 12th"
                                {...register("standard", {
                                    min: 1,
                                    max: 12,
                                    required: "Standard is required"
                                })}
                                className={`w-full px-4 py-3 pl-11 border rounded-lg outline-none transition-all duration-200
                ${isDark ? "bg-slate-700 border-slate-500 text-white placeholder-gray-300" : "bg-white/80 border-gray-300 text-gray-700 placeholder-gray-400"}
                focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                            />
                            <FaClipboardUser className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${isDark ? "text-gray-300" : "text-gray-400"}`} />
                        </div>
                        {errors.standard && <p className="mt-1 text-sm text-red-600">
                            {errors.standard.type === 'min' && 'value must me have 1 not 0'}
                            {errors.standard.type === 'max' && 'value must me max 12 not more'}
                            {errors.message.type === 'required' && '\nStandard must me Enter'}
                        </p>
                        }
                    </div>

                    {/* Message */}
                    <div className="md:col-span-2 flex flex-col relative group">
                        <label className="text-sm mb-1 flex items-center gap-2 font-medium">
                            <FaCommentDots className="text-blue-500" /> Message
                        </label>
                        <div className="relative">
                            <textarea
                                placeholder="How can we help you?"
                                rows={5}
                                {...register("message", { required: "Message is required" })}
                                className={`w-full px-4 py-3 pl-11 border rounded-lg outline-none transition-all duration-200 resize-y min-h-[120px]
                ${isDark ? "bg-slate-700 border-slate-500 text-white placeholder-gray-300" : "bg-white/80 border-gray-300 text-gray-700 placeholder-gray-400"}
                focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                            ></textarea>
                            <FaCommentDots className={`absolute left-3 top-4 ${isDark ? "text-gray-300" : "text-gray-400"}`} />
                        </div>
                        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
                    </div>

                    {/* Agreement + Submit */}
                    <div className="md:col-span-2 flex flex-col sm:flex-row justify-between items-start sm:items-center mt-6 gap-6">
                        <div className="flex flex-col">
                            <label className={`flex items-start gap-2 text-sm ${isDark ? "text-gray-300" : "text-gray-600"} cursor-pointer`}>
                                <input
                                    type="checkbox"
                                    {...register("agree", { required: "You must agree before submitting." })}
                                    className="mt-1 w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2"
                                />
                                <span className="select-none">I agree that my submitted data is being collected and stored.</span>
                            </label>
                            {errors.agree && <p className="mt-1 text-sm text-red-600">{errors.agree.message}</p>}
                        </div>

                        <button
                            type="submit"
                            className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-900 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                            <FaCheck className="text-xl" /> Get In Touch
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );

    return (
        <>
            {loading && <LoadingSpinner />}
            {isLayout ? <Layout>{content}</Layout> : content}
        </>
    );
};


export default Admission;