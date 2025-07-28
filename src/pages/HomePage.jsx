import { useState, useEffect, useContext } from 'react'
import Layout from './../Layout/Layout';
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaUser, FaEnvelope, FaPhone, FaPen, FaCheck } from "react-icons/fa";
import Addmission from './Addmission';
import { Modal, Input, Form, Button } from 'antd';
import toast from 'react-hot-toast';
import axios from 'axios';
import LoadingSpinner from '../components/LoadingSpinner';
import { FaBookOpen, FaUserGraduate } from "react-icons/fa";
import '../App.css'
import ThemeContext from '../context/ThemeContext';


const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <MarqueeBanner />
      <ShowCase />
      <AboutSection />
      <SalientFeatures />
      <Addmission isLayout={false} />
      <AutoPopupModal />
    </Layout>
  )
}

const HeroSection = () => {
  const { theme } = useContext(ThemeContext);

  const messages = [
    "Nurturing Young Minds for a Brighter Tomorrow.",
    "Where Knowledge Meets Imagination.",
    "Empowering Every Student to Succeed.",
  ];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index >= messages.length) return;
    const currentMessage = messages[index];
    const delay = deleting ? 50 : 100;

    const timeout = setTimeout(() => {
      setText(currentMessage.substring(0, subIndex));
      if (!deleting && subIndex === currentMessage.length) {
        setTimeout(() => setDeleting(true), 1500);
      } else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % messages.length);
      } else {
        setSubIndex((prev) => prev + (deleting ? -1 : 1));
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  return (
    <section
      className={`relative bg-black/80 w-full h-[70vh] sm:h-[85vh] bg-center bg-no-repeat bg-cover flex items-center justify-center text-center transition-colors duration-500`}
      style={{
        backgroundImage: "url('/asset/school.png')",
      }}
    >
      {/* Dark/Light Overlay */}
      <div
        className={`absolute inset-0 ${theme === "dark" ? "bg-black/60" : "bg-black/60"
          } z-0 transition-all duration-300`}
      ></div>

      {/* Text Content */}
      <div data-aos="fade-up" className={`relative z-10 max-w-3xl text-shadow-2xs px-4 sm:px-8 ${theme === "dark" ? "text-gray-200" : "text-gray-800"}`}>
        <h1 className="text-3xl text-white sm:text-4xl md:text-5xl font-bold drop-shadow-xl">
          Welcome to{" "}
          <span className={`${theme === "dark" ? "text-blue-700" : "text-blue-600"}`}>
            Saraswati Vidhyalay
          </span>
        </h1>
        <p className="mt-4 text-white text-lg sm:text-xl md:text-2xl font-medium h-[3rem] sm:h-[3.5rem]">
          <span>{text}</span>
          <span className={`${theme === "dark" ? "text-green-400 animate-pulse" : "text-red-500 animate-pulse"}`}>
            |
          </span>
        </p>
      </div>

    </section>
  );
};



const MarqueeBanner = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`w-full py-2 shadow-md transition-colors duration-300 ${theme === "dark" ? "bg-yellow-900" : "bg-yellow-100"
        }`}
    >
      <marquee
        behavior="scroll"
        direction="left"
        scrollAmount="6"
        className={`font-semibold text-base sm:text-lg ${theme === "dark" ? "text-yellow-100" : "text-yellow-900"
          }`}
      >
        🎓 You deserve better — and we will prove it. &nbsp;&nbsp;&nbsp;
        🚀 Unlock your potential at Dharti Vidhya Mandir. &nbsp;&nbsp;&nbsp;
        🌟 We build futures, not just report cards.
      </marquee>
    </div>
  );
};



const ShowCase = () => {
  const navigation = useNavigate();
  const { theme } = useContext(ThemeContext);

  const isDark = theme === "dark";

  return (
    <section
      className={`py-12 px-4 sm:px-8 md:px-16 transition-all duration-300 ${isDark ? "bg-gray-900 text-white" : "bg-blue-50 text-gray-900"
        }`}
    >
      <div className="max-w-7xl mx-auto text-center lg:text-left flex flex-col-reverse lg:flex-row items-center justify-between gap-10">

        {/* Left Content */}
        <div data-aos="fade-right" className="lg:w-1/2 md:pl-10">
          <p className={`italic text-lg ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            Opening Up Your Mind
          </p>

          <h1 className={`text-4xl sm:text-5xl font-bold mt-2 ${isDark ? "text-white" : "text-gray-900"}`}>
            EDUCATION
          </h1>

          <h2 className={`text-3xl sm:text-4xl font-extrabold mt-1 ${isDark ? "text-green-300" : "text-green-700"}`}>
            MATTERS
          </h2>

          <p className={`mt-4 text-base sm:text-lg ${isDark ? "text-gray-300" : "text-gray-700"}`}>
            Saraswati Vidhyalay CAMPUS provides an environment in which every
            student discovers and realizes their inborn potential.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-6 justify-center lg:justify-start flex-wrap">
            <button
              onClick={() => navigation("/addmission-inquiry")}
              className="button-ripple flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold shadow-lg transition"
            >
              <FaUserGraduate />
              Admission
            </button>

            <button
              onClick={() => navigation("/about")}
              className="button-ripple flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold shadow-lg transition"
            >
              <FaBookOpen />
              Our Story
            </button>
          </div>
        </div>

        {/* Right Images */}
        <div data-aos="fade-left" className="lg:w-1/2 flex justify-center items-center gap-6">
          <img
            src={"./asset/our_mission.avif" || "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80"}
            alt="Student Activity 1"
            className="w-40 h-60 object-cover rounded-[100px] shadow-xl"
          />
          <img
            src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=400&q=80"
            alt="Student Activity 2"
            className="w-30 h-50 md:w-50 md:h-80 object-cover rounded-[100px] shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <section className="w-full flex justify-center px-4 py-10 transition-all duration-300">
      <div
        data-aos="fade-left"
        className={`rounded-2xl shadow-xl max-w-6xl w-full flex flex-col md:flex-row items-center overflow-hidden transition-colors duration-300 ${isDark ? "bg-green-700 text-white" : "bg-green-100 text-gray-900"
          }`}
      >
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80"
            alt="Colorful Kids Hands"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div
          data-aos="fade-right"
          className="w-full md:w-1/2 text-center md:text-left p-6 md:p-10"
        >
          <h2
            className={`text-2xl sm:text-3xl font-bold mb-4 ${isDark ? "text-white" : "text-green-900"
              }`}
          >
            About Us
          </h2>

          <p
            className={`mb-6 leading-relaxed ${isDark ? "text-white/90" : "text-gray-800"
              }`}
          >
            We are highly concerned about the overall and all-round development of students
            encompassing their mental, physical, emotional, and spiritual dimensions.
            We encourage our students for scientific thought process with close guidance
            from the teachers.
          </p>

          <Link
            to="/about"
            className={`relative inline-block px-5 py-2 rounded-md font-medium overflow-hidden group border transition duration-300 ${isDark
              ? "text-white border-white"
              : "text-green-900 border-green-700"
              }`}
          >
            <span
              className={`relative z-10 transition-all duration-300 group-hover:text-white`}
            >
              Read More →
            </span>
            <span
              className={`absolute left-0 top-0 h-full w-0 transition-all duration-300 group-hover:w-full z-0 ${isDark ? "bg-blue-700" : "bg-green-600"
                }`}
            ></span>
          </Link>
        </div>
      </div>
    </section>
  );
};



const SalientFeatures = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const features = [
    {
      title: "SMS Facility for Parents",
      lightIcon: "https://img.icons8.com/ios-filled/100/000000/sms.png",
      darkIcon: "https://img.icons8.com/ios-filled/100/ffffff/sms.png",
      hoverIcon: "https://img.icons8.com/color/100/sms.png",
    },
    {
      title: "A.C. Class Room",
      lightIcon: "https://img.icons8.com/ios/100/000000/classroom.png",
      darkIcon: "https://img.icons8.com/ios/100/ffffff/classroom.png",
      hoverIcon: "https://img.icons8.com/color/100/classroom.png",
    },
    {
      title: "Festivals Celebration",
      lightIcon: "https://img.icons8.com/ios-filled/100/000000/confetti.png",
      darkIcon: "https://img.icons8.com/ios-filled/100/ffffff/confetti.png",
      hoverIcon: "https://img.icons8.com/color/96/party-baloons.png",
    },
    {
      title: "Modern Computer Lab",
      lightIcon: "https://img.icons8.com/ios/100/000000/computer.png",
      darkIcon: "https://img.icons8.com/ios/100/ffffff/computer.png",
      hoverIcon: "https://img.icons8.com/color/100/computer.png",
    },
    {
      title: "Indoor & Outdoor Games",
      lightIcon: "https://img.icons8.com/ios/100/000000/football2.png",
      darkIcon: "https://img.icons8.com/ios/100/ffffff/football2.png",
      hoverIcon: "https://img.icons8.com/color/100/football2.png",
    },
    {
      title: "Co-Curricular Activities",
      lightIcon: "https://img.icons8.com/ios/100/000000/puzzle.png",
      darkIcon: "https://img.icons8.com/ios/100/ffffff/puzzle.png",
      hoverIcon: "https://img.icons8.com/color/100/puzzle.png",
    },
    {
      title: "Online Exam At Sunday",
      lightIcon: "https://img.icons8.com/ios/100/000000/exam.png",
      darkIcon: "https://img.icons8.com/ios/100/ffffff/exam.png",
      hoverIcon: "https://img.icons8.com/color/100/exam.png",
    },
    {
      title: "Experienced Teaching Staff",
      lightIcon: "https://img.icons8.com/ios/100/000000/teacher.png",
      darkIcon: "https://img.icons8.com/ios/100/ffffff/teacher.png",
      hoverIcon: "https://img.icons8.com/color/100/teacher.png",
    },
    {
      title: "Vacation Camp",
      lightIcon: "https://img.icons8.com/ios-filled/100/000000/camping-tent.png",
      darkIcon: "https://img.icons8.com/ios-filled/100/ffffff/camping-tent.png",
      hoverIcon: "https://img.icons8.com/color/96/camping-tent.png",
    },
    {
      title: "Digital Smart Class",
      lightIcon: "https://img.icons8.com/ios/100/000000/classroom.png",
      darkIcon: "https://img.icons8.com/ios/100/ffffff/classroom.png",
      hoverIcon: "https://img.icons8.com/color/100/classroom.png",
    },
  ];

  return (
    <section className={`w-full py-10 px-4 transition-all duration-300 ${isDark ? "bg-gray-900" : "bg-white"}`}>
      <div className="text-center mb-10">
        <p
          data-aos="fade-down-right"
          className={`italic ${isDark ? "text-gray-400" : "text-gray-500"}`}
        >
          Why choose us
        </p>
        <h2
          className={`text-3xl sm:text-4xl font-bold ${isDark ? "text-white" : "text-blue-950"
            }`}
        >
          Our Salient Features
        </h2>
        <div className="w-16 h-1 bg-green-500 mx-auto mt-2 rounded-full"></div>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            className={`group cursor-pointer relative p-5 border-2 border-dotted rounded-xl shadow transition-all duration-300 text-center ${isDark
              ? "bg-gray-800 border-gray-600 text-white hover:shadow-lg"
              : "bg-white border-blue-300 text-gray-800 hover:shadow-xl"
              }`}
          >
            <img
              src={isDark ? feature.darkIcon : feature.lightIcon}
              alt={feature.title}
              className="w-16 h-16 mx-auto mb-4 group-hover:hidden"
            />
            <img
              src={feature.hoverIcon}
              alt={`${feature.title} hover`}
              className="w-16 h-16 mx-auto mb-4 hidden group-hover:block"
            />

            <p
              className={`font-semibold text-sm sm:text-base ${isDark ? "text-white" : "text-gray-800"
                }`}
            >
              {feature.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};



const AutoPopupModal = () => {
  const VITE_API_URL = import.meta.env.VITE_API_URL
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const formSubmitted = localStorage.getItem("formSubmitted");
    if (!formSubmitted) {
      const timer = setTimeout(() => {
        setIsModalVisible(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleFinish = async (values) => {
    console.log("Form Submitted:", values);
    localStorage.setItem("formSubmitted", "true");
    setIsModalVisible(false);
    try {
      setLoading(true);
      const res = await axios.post(`${VITE_API_URL}/api/register`, { values });

      if (res.data?.message) {
        toast.success("Register Successful");
      } else {
        toast.error("Unexpected response. Please try again.");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <LoadingSpinner />}
      <Modal
        open={isModalVisible}
        closable={false}
        footer={null}
        maskClosable={false}
        centered
        title="Please fill out the form"
      >
        <Form
          layout="vertical"
          form={form}
          onFinish={handleFinish}
          className="space-y-4"
        >
          <Form.Item
            name="name"
            label="Your Name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input placeholder="Enter your name" />
          </Form.Item>

          <Form.Item
            name="mobile"
            label="Mobile Number"
            rules={[{ required: true, message: "Please enter mobile number" }]}
          >
            <Input placeholder="Enter mobile number" />
          </Form.Item>

          <Form.Item
            name="studentName"
            label="Student Name"
            rules={[{ required: true, message: "Please enter student name" }]}
          >
            <Input placeholder="Enter student name" />
          </Form.Item>

          <Form.Item
            name="parentName"
            label="Parent's Name"
            rules={[{ required: true, message: "Please enter parent's name" }]}
          >
            <Input placeholder="Enter parent's name" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default HomePage
