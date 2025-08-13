import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import Layout from "../../Layout/Layout";
import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { IoIosEyeOff } from "react-icons/io";

// Sample users
const users = [
    { email: "pratik@gmail.com", password: "Pratik" },
    { email: "demo2@example.com", password: "123456" },
    {email:"test@gmail.com",password:"test"}
];

const Login = () => {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = ({ email, password }) => {
        const isValid = users.some(
            (user) => user.email === email && user.password === password
        );
        if (isValid) {
            localStorage.setItem("isAuthenticated", "true");
            navigate("/admin/dashboard");
        } else {
            toast.error("Invalid credentials");
        }
    };

    useEffect(() => {
        window.scrollTo({ top: window.innerHeight / 4, behavior: "smooth" });
    }, []);

    return (
        <Layout>
            <section
                className="min-h-screen flex items-center justify-center px-4"
                style={{
                    backgroundImage: "url('https://plus.unsplash.com/premium_photo-1671229454899-3ba177f87592?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHB1cnBsZSUyMGdyYWRpZW50JTIwbGFuZHNjYXBlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }}
            >
                <div className="w-full max-w-md backdrop-blur-sm border border-white rounded-lg shadow-lg overflow-hidden">

                    {/* Form content */}
                    <div className="p-8">
                        <h2 className="text-2xl font-bold text-center text-white mb-6">Login</h2>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            {/* Username */}
                            <div>
                                <label htmlFor="email" className=" text-white block text-sm font-medium  mb-1">
                                    Username
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^\S+@\S+$/i,
                                            message: "Invalid email",
                                        },
                                    })}
                                    className="w-full text-white px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                                {errors.email && (
                                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                                )}
                            </div>

                            {/* Password */}
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-white mb-1">
                                    Password
                                </label>
                                <div className="flex items-center w-full text-white border border-gray-300 rounded-md">
                                    <input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        {...register("password", {
                                            required: "Password is required",
                                            minLength: { value: 4, message: "Min 4 characters" },
                                        })}
                                        className="flex-1 rounded-tl-md rounded-bl-md  bg-transparent py-2 px-2 outline-none focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    />
                                    <button onClick={() => setShowPassword(!showPassword)} className="px-2 text-xl cursor-pointer">
                                        {showPassword ? <IoIosEyeOff /> : <FaEye />}

                                    </button>
                                </div>
                                {errors.password && (
                                    <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
                                )}

                            </div>

                            {/* Remember me & Forgot password */}
                            {/* <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                                    />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                                        Remember me
                                    </label>
                                </div>

                                <div className="text-sm">
                                    <a href="#" className="font-medium text-purple-600 hover:text-purple-500">
                                        Forgot password?
                                    </a>
                                </div>
                            </div> */}

                            {/* Login Button */}
                            <div>
                                <button
                                    type="submit"
                                    className="w-full border hover:text-black    border-white py-3 rounded-t-full rounded-b-full  relative overflow-hidden group cursor-pointer flex justify-center px-4 shadow-sm text-sm font-medium text-white bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                                >
                                    <span className="relative z-10 hover:text-black font-bold ">Login</span>
                                    <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out z-0 hover:text-black"></span>
                                </button>

                            </div>
                        </form>

                        {/* Register link */}
                        {/* <div className="mt-6 text-center text-sm">
                            <span className="text-gray-600">Don't have an account? </span>
                            <a href="#" className="font-medium text-purple-600 hover:text-purple-500">
                                Register
                            </a>
                        </div> */}
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Login;