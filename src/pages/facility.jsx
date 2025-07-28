import React, { useContext } from "react";
import Layout from "../Layout/Layout";
import ThemeContext from "../context/ThemeContext";

const facultyMembers = [
  {
    name: "Mr. Ramesh Patel",
    position: "Principal",
    subject: "Administration",
    image: "./asset/f_1.svg",
  },
  {
    name: "Ms. Nidhi Shah",
    position: "Vice Principal",
    subject: "English & Moral Science",
    image: "./asset/f_2.svg",
  },
  {
    name: "Mr. Kunal Mehta",
    position: "Senior Teacher",
    subject: "Mathematics (Std. 9-10)",
    image: "./asset/f_3.svg",
  },
  {
    name: "Ms. Ritu Parmar",
    position: "Science Teacher",
    subject: "Physics & Chemistry (Std. 8-10)",
    image: "./asset/f_4.svg",
  },
  {
    name: "Mr. Ajay Chauhan",
    position: "Sports Instructor",
    subject: "Physical Education",
    image: "./asset/f_5.svg",
  },
  {
    name: "Ms. Komal Dave",
    position: "Computer Faculty",
    subject: "Computer Science (Std. 6-10)",
    image: "./asset/f_6.svg",
  },
];

const Facility = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <Layout>
      <section
        className={`py-16 px-4 transition-colors duration-300 ${isDark
          ? "bg-gradient-to-b from-[#0e1b2a] to-[#1c2d45]"
          : "bg-gradient-to-b from-[#e3edff] to-white"
          }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className={`text-4xl sm:text-5xl font-extrabold ${isDark ? "text-white" : "text-blue-900"
                }`}
            >
              Meet Our Faculty
            </h2>
            <p
              className={`mt-4 text-lg ${isDark ? "text-gray-300" : "text-gray-600"
                }`}
            >
              Passionate educators guiding the journey of learning and growth.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {facultyMembers.map((faculty, index) => (
              <div
                key={index}
                data-aos="zoom-out-right"
                className={`p-6 rounded-2xl transition-all duration-300 transform border 
                  hover:-translate-y-1 hover:scale-105
                  ${isDark
                    ? "bg-[#142437] border-blue-900 text-white shadow-md hover:shadow-blue-900"
                    : "bg-white border-blue-100 shadow-lg hover:shadow-2xl"
                  }`}
              >
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-blue-200"
                />
                <h3
                  className={`text-xl font-bold mb-1 ${isDark ? "text-white" : "text-blue-800"
                    }`}
                >
                  {faculty.name}
                </h3>
                <p
                  className={`text-sm font-medium ${isDark ? "text-blue-400" : "text-blue-600"
                    }`}
                >
                  {faculty.position}
                </p>
                <p
                  className={`mt-2 text-sm ${isDark ? "text-gray-300" : "text-gray-500"
                    }`}
                >
                  {faculty.subject}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};


export default Facility;
