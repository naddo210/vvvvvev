// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect } from "react"
import { Link, Links } from 'react-router-dom';
import alis from './assets/alis.jpg';
import logo from './assets/Preview.png';

import roshan from './assets/roshan.jpg';
import samsu from './assets/samsu.jpg';
const App: React.FC = () => {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: entry.isIntersecting,
            }));
          }
        });
      },
      { threshold: 0.1 },
    );
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    hour: "",
    minute: "",
    ampm: "AM",
    service: "",
    stylist: "",
    message: "",
    access_key: "e03f5214-9427-40c2-b397-49efb28c780c", // Replace with actual key
  });
  
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const time = `${formData.hour}:${formData.minute} ${formData.ampm}`;
  
    const data = new FormData();
    data.append("access_key", formData.access_key);
    data.append("name", formData.name);
    data.append("phone", formData.phone);
    data.append("email", formData.email);
    data.append("date", formData.date);
    data.append("time", time);
    data.append("service", formData.service);
    data.append("stylist", formData.stylist);
    data.append("message", formData.message);
  
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
  
      const result = await response.json();
      if (result.success) {
        alert("Thank you! Your appointment has been booked.");
        setFormData({
          name: "",
          phone: "",
          email: "",
          date: "",
          hour: "",
          minute: "",
          ampm: "AM",
          service: "",
          stylist: "",
          message: "",
          access_key: formData.access_key,
        });
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header & Navigation */}
      <header className="bg-black/90 shadow-md fixed w-full z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className=" flex items-center">
            <Link to="/">
           
          <h1 className="logo text-xl md:text-2xl font-bold text-white">
             
            
              Roshan's Salon 

           
            </h1>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a
              href="#home"
              className="text-gray-300 hover:text-white font-medium cursor-pointer"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-gray-300 hover:text-white font-medium cursor-pointer"
            >
              Services
            </a>
            <a
              href="#stylists"
              className="text-gray-300 hover:text-white font-medium cursor-pointer"
            >
              Our Stylists
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white font-medium cursor-pointer"
            >
              About Us
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white font-medium cursor-pointer"
            >
              Contact
            </a>
          </nav>
          <a href="#booking">
          <button  className="hidden md:block bg-gradient-to-r from-gray-800 to-black text-white px-4 py-2 rounded-lg shadow-md hover:from-black hover:to-gray-800 transition duration-300 !rounded-button whitespace-nowrap cursor-pointer">
            Book Appointment
          </button>
          </a>
          
          
       
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white"
          >
            <i
              className={`fas ${mobileMenuOpen ? "fa-times" : "fa-bars"} text-xl`}
            ></i>
          </button>
        </div>
        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-black/95 ${mobileMenuOpen ? "block" : "hidden"}`}
        >
          <nav className="px-4 py-3 space-y-3">
            <a
              href="#home"
              className="block text-gray-300 hover:text-white font-medium cursor-pointer"
            >
              Home
            </a>
            <a
              href="#services"
              className="block text-gray-300 hover:text-white font-medium cursor-pointer"
            >
              Services
            </a>
            <a
              href="#stylists"
              className="block text-gray-300 hover:text-white font-medium cursor-pointer"
            >
              Our Stylists
            </a>
            <a
              href="#about"
              className="block text-gray-300 hover:text-white font-medium cursor-pointer"
            >
              About Us
            </a>
            <a
              href="#contact"
              className="block text-gray-300 hover:text-white font-medium cursor-pointer"
            >
              Contact
            </a>
            <a href="#booking">
            <button className="w-full bg-gradient-to-r from-gray-800 to-black text-white px-4 py-2 rounded-lg shadow-md hover:from-black hover:to-gray-800 transition duration-300 mt-3 !rounded-button whitespace-nowrap cursor-pointer">
              Book Appointment
            </button>
            </a>
          </nav>
        </div>
      </header>
      {/* Hero Section */}
      <section
        id="home"
        className="pt-24 relative overflow-hidden"
        style={{ minHeight: "600px" }}
      >
        <div className="absolute inset-0 z-0">
          <img
            src="https://readdy.ai/api/search-image?query=Modern%20monochrome%20luxury%20hair%20salon%20interior%20with%20elegant%20styling%20stations%2C%20dramatic%20black%20and%20white%20contrast%2C%20sleek%20minimalist%20design.%20The%20space%20features%20leather%20chairs%2C%20large%20mirrors%2C%20and%20a%20sophisticated%20atmosphere%20with%20geometric%20elements%20and%20modern%20lighting&width=1440&height=600&seq=1&orientation=landscape"
            alt="Salon Interior"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Welcome to The roshan's Salon
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Where style meets expertise. Experience premium hair care and
              styling services tailored to enhance your unique beauty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+919773266230"
                className="bg-gradient-to-r from-gray-800 to-black text-white px-6 py-3 rounded-lg shadow-md hover:from-black hover:to-gray-800 transition duration-300 text-center font-medium !rounded-button whitespace-nowrap cursor-pointer"
              >
                <i className="fas fa-phone-alt mr-2"></i> Call Now
              </a>
              <a
                href="#booking"
                className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-6 py-3 rounded-lg shadow-md hover:bg-white/20 transition duration-300 text-center font-medium !rounded-button whitespace-nowrap cursor-pointer"
              >
                <i className="fas fa-calendar-alt mr-2"></i> Book Online
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Our Services Section */}
      <section
        id="services"
        className={`py-16 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white transform transition-all duration-1000 ${isVisible["services"] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">Our Services</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Discover our comprehensive range of premium hair services designed
              to transform your look and boost your confidence.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {/* Service Card 1 */}
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1588771930296-88c2cb03f386?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM0fHxoYWlyZHJlc3NlcnxlbnwwfDB8MHx8fDA%3D"
                  alt="Haircut Services"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-800 mb-2">
                  Haircuts & Styling
                </h3>
                <p className="text-gray-600 mb-4">
                  Expert cuts and styling for all hair types and preferences,
                  from classic to contemporary looks.
                </p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>
                    <i className="fas fa-clock mr-1"></i> 30-60 min
                  </span>
                  <span>
                    <i className="fas fa-tag mr-1"></i> From ₹150-₹200
                  </span>
                </div>
              </div>
            </div>
            {/* Service Card 2 */}
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Hair%20coloring%20service%20in%20upscale%20salon%20with%20stylist%20applying%20color%20to%20client%20hair%2C%20professional%20salon%20equipment%2C%20color%20swatches%20visible%2C%20elegant%20interior%20with%20modern%20design%20elements%20and%20soft%20lighting&width=400&height=250&seq=3&orientation=landscape"
                  alt="Color Services"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-800 mb-2">
                  Color & Highlights
                </h3>
                <p className="text-gray-600 mb-4">
                  Premium color services including full color, highlights,
                  balayage, and ombre techniques.
                </p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>
                    <i className="fas fa-clock mr-1"></i> 60-180 min
                  </span>
                  <span>
                    <i className="fas fa-tag mr-1"></i> From ₹250-₹750
                  </span>
                </div>
              </div>
            </div>
            {/* Service Card 3 */}
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Hair%20treatment%20service%20in%20luxury%20salon%20with%20client%20receiving%20conditioning%20treatment%2C%20premium%20hair%20products%20visible%2C%20elegant%20salon%20interior%20with%20modern%20equipment%2C%20soft%20lighting%2C%20and%20relaxing%20atmosphere&width=400&height=250&seq=4&orientation=landscape"
                  alt="Treatment Services"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-800 mb-2">
                  Treatments & Straightenning
                </h3>
                <p className="text-gray-600 mb-4">
                  Restorative treatments including deep conditioning, keratin
                  treatments, and scalp therapies.
                </p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>
                    <i className="fas fa-clock mr-1"></i> 45-90 min
                  </span>
                  <span>
                    <i className="fas fa-tag mr-1"></i> From ₹800-₹2000
                  </span>
                </div>
              </div>
            </div>
            {/* Service Card 4 - Beard Trimming */}
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20beard%20trimming%20service%20in%20luxury%20barbershop%2C%20expert%20barber%20working%20on%20clients%20beard%2C%20elegant%20interior%20with%20leather%20chairs%2C%20modern%20grooming%20equipment%2C%20and%20premium%20beard%20care%20products%20visible%20in%20background&width=400&height=250&seq=12&orientation=landscape"
                  alt="Beard Trimming Services"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-800 mb-2">
                  Beard Trimming
                </h3>
                <p className="text-gray-600 mb-4">
                  Expert beard grooming and styling services to help you
                  maintain the perfect facial hair look.
                </p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>
                    <i className="fas fa-clock mr-1"></i> 20-30 min
                  </span>
                  <span>
                    <i className="fas fa-tag mr-1"></i> From ₹80
                  </span>
                </div>
              </div>
            </div>
            {/* Service Card 5 - Facial */}
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Luxury%20facial%20treatment%20in%20upscale%20salon%20spa%2C%20professional%20esthetician%20performing%20facial%20on%20client%2C%20elegant%20treatment%20room%20with%20soft%20lighting%2C%20premium%20skincare%20products%2C%20and%20modern%20facial%20equipment%20visible&width=400&height=250&seq=13&orientation=landscape"
                  alt="Facial Services"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-800 mb-2">
                  Facial Treatment
                </h3>
                <p className="text-gray-600 mb-4">
                  Rejuvenating facial treatments customized to your skin type
                  and concerns for a radiant complexion.
                </p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>
                    <i className="fas fa-clock mr-1"></i> 45-60 min
                  </span>
                  <span>
                    <i className="fas fa-tag mr-1"></i> From ₹400-₹2000
                  </span>
                </div>
              </div>
            </div>
            {/* Service Card 6 - Head Massage */}
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Relaxing%20head%20massage%20service%20in%20luxury%20salon%20spa%2C%20professional%20therapist%20performing%20scalp%20massage%2C%20elegant%20treatment%20room%20with%20ambient%20lighting%2C%20aromatherapy%20elements%2C%20and%20premium%20massage%20oils%20visible&width=400&height=250&seq=14&orientation=landscape"
                  alt="Head Massage Services"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-800 mb-2">
                  Head Massage
                </h3>
                <p className="text-gray-600 mb-4">
                  Relaxing scalp and head massage therapy to reduce stress and
                  promote healthy hair growth.
                </p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>
                    <i className="fas fa-clock mr-1"></i> 30 min
                  </span>
                  <span>
                    <i className="fas fa-tag mr-1"></i> From ₹100-₹120
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <a
              href="#booking"
              className="inline-block bg-amber-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-amber-700 transition duration-300 font-medium !rounded-button whitespace-nowrap cursor-pointer"
            >
              View All Services
            </a>
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section
        id="pricing"
        className="py-16 bg-gradient-to-b from-gray-900 to-black text-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">
              Service Menu & Pricing
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Transparent pricing for all our premium salon services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Haircut & Styling Services */}
            <div className="bg-gradient-to-b from-gray-800 to-black p-8 rounded-lg shadow-xl">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <i className="fas fa-cut mr-3 text-amber-500"></i>
                Haircut & Styling
              </h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center text-gray-300 pb-2 border-b border-gray-700">
                  <span>Normal Haircut & Style</span>
                  <span className="font-semibold">₹120</span>
                </li>
                <li className="flex justify-between items-center text-gray-300 pb-2 border-b border-gray-700">
                  <span>Men's Haircut & Style</span>
                  <span className="font-semibold">₹150</span>
                </li>
                <li className="flex justify-between items-center text-gray-300 pb-2 border-b border-gray-700">
                  <span>Children's Haircut (Under 12)</span>
                  <span className="font-semibold">₹100</span>
                </li>
                <li className="flex justify-between items-center text-gray-300 pb-2 border-b border-gray-700">
                  <span>Style Hair Cut</span>
                  <span className="font-semibold">₹150-₹200</span>
                </li>
                <li className="flex justify-between items-center text-gray-300 pb-2 border-b border-gray-700">
                  <span>Hair Cut With Hair Wash</span>
                  <span className="font-semibold">₹200</span>
                </li>
               
              </ul>
            </div>
            {/* Color Services */}
            <div className="bg-gradient-to-b from-gray-800 to-black p-8 rounded-lg shadow-xl">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <i className="fas fa-palette mr-3 text-amber-500"></i>
                Color Services
              </h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center text-gray-300 pb-2 border-b border-gray-700">
                  <span>Mehndi Heena</span>
                  <span className="font-semibold">₹250</span>
                </li>
                <li className="flex justify-between items-center text-gray-300 pb-2 border-b border-gray-700">
                  <span>Partial Highlights</span>
                  <span className="font-semibold">₹1000</span>
                </li>
                <li className="flex justify-between items-center text-gray-300 pb-2 border-b border-gray-700">
                  <span>Full Highlights</span>
                  <span className="font-semibold">₹2000</span>
                </li>
                <li className="flex justify-between items-center text-gray-300 pb-2 border-b border-gray-700">
                  <span>Indica with Wash</span>
                  <span className="font-semibold">₹120</span>
                </li>
                <li className="flex justify-between items-center text-gray-300 pb-2 border-b border-gray-700">
                  <span>Garnier with Wash</span>
                  <span className="font-semibold">₹300-₹350</span>
                </li>
                <li className="flex justify-between items-center text-gray-300">
                  <span>L'oreal</span>
                  <span className="font-semibold">₹700-₹750</span>
                </li>
              </ul>
            </div>
            {/* Treatment Services */}
            <div className="bg-gradient-to-b from-gray-800 to-black p-8 rounded-lg shadow-xl">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <i className="fas fa-spa mr-3 text-amber-500"></i>
          Shaving & Facial
              </h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center text-gray-300 pb-2 border-b border-gray-700">
                  <span>Clean Shave Vijohn</span>
                  <span className="font-semibold">₹60</span>
                </li>
                <li className="flex justify-between items-center text-gray-300 pb-2 border-b border-gray-700">
                  <span>Denim/axe</span>
                  <span className="font-semibold">₹70</span>
                </li>
                <li className="flex justify-between items-center text-gray-300 pb-2 border-b border-gray-700">
                  <span>Gillete Foam</span>
                  <span className="font-semibold">₹80</span>
                </li>
                <li className="flex justify-between items-center text-gray-300 pb-2 border-b border-gray-700">
                  <span>Beard Trimming</span>
                  <span className="font-semibold">₹80</span>
                </li>
                <li className="flex justify-between items-center text-gray-300 pb-2 border-b border-gray-700">
                  <span>Normal Facial</span>
                  <span className="font-semibold">₹400-₹450-₹500</span>
                </li>
                <li className="flex justify-between items-center text-gray-300 pb-2 border-b border-gray-700">
                  <span>Rich Feel</span>
                  <span className="font-semibold">₹700</span>
                </li>
                <li className="flex justify-between items-center text-gray-300 pb-2 border-b border-gray-700">
                  <span>Oxy Bleach</span>
                  <span className="font-semibold">₹1500</span>
                </li>
                <li className="flex justify-between items-center text-gray-300">
                  <span>Gold Facial</span>
                  <span className="font-semibold">₹1500-₹2000</span>
                </li>
              </ul>
            </div>
            {/* Additional Services */}
            <div className="bg-gradient-to-b from-gray-800 to-black p-8 rounded-lg shadow-xl">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <i className="fas fa-plus-circle mr-3 text-amber-500"></i>
         New  Offers
              </h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center text-gray-300 pb-2 border-b border-gray-700">
                  <span>Hair Cut+ Shave+ D-Tan</span>
                  <span className="font-semibold">₹550</span>
                </li>
                <li className="flex justify-between items-center text-gray-300 pb-2 border-b border-gray-700">
                  <span>Hair Cut+ Shave+ Rich Feel</span>
                  <span className="font-semibold">₹850</span>
                </li>
                <li className="flex justify-between items-center text-gray-300 pb-2 border-b border-gray-700">
                  <span>Hair Cut+ Shave+ Facial+ Garnier</span>
                  <span className="font-semibold">₹999</span>
                </li>
                <li className="flex justify-between items-center text-gray-300 pb-2 border-b border-gray-700">
                  <span>Grooming Package - Basic</span>
                  <span className="font-semibold">₹2000</span>
                </li>
                <li className="flex justify-between items-center text-gray-300">
                  <span>Grooming Package - Standard</span>
                  <span className="font-semibold">₹3000</span>
                </li>
                <li className="flex justify-between items-center text-gray-300">
                  <span>Grooming Package - Premium</span>
                  <span className="font-semibold">₹5000</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">
              All services include a complimentary consultation. Prices may vary
              based on hair length, thickness, and complexity.
            </p>
            <a
              href="#booking"
              className="inline-block bg-gradient-to-r from-gray-800 to-black text-white px-8 py-3 rounded-lg shadow-md hover:from-black hover:to-gray-800 transition-all duration-300 hover:scale-[1.05] border border-gray-700 !rounded-button whitespace-nowrap cursor-pointer"
            >
              Book Your Appointment
            </a>
          </div>
        </div>
      </section>
      {/* Meet Our Stylists */}
      <section
        id="stylists"
        className={`py-16 bg-gray-50 transform transition-all duration-1000 ${isVisible["stylists"] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-800 mb-2">
              Meet Our Stylists
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our team of professional stylists brings years of experience and
              passion to every service.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
  {/* Stylist 1 */}
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
    <div className="h-[400px] w-full overflow-hidden flex justify-center items-center">
      <img
        src={alis}
        alt="Ali"
        className="h-full w-auto object-cover"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-amber-800 mb-1">Ali</h3>
      <p className="text-amber-600 font-medium mb-2">Hair Dresser</p>
      <p className="text-gray-600 mb-3">
        Specializing in precision cuts and color transformations with
        12+ years of experience.
      </p>
      <div className="flex items-center text-amber-500">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <span className="ml-2 text-gray-600 text-sm">(48 reviews)</span>
      </div>
    </div>
  </div>

  {/* Repeat same structure for Stylist 2 & 3 */}
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
    <div className="h-[400px] w-full overflow-hidden flex justify-center items-center">
      <img
        src={samsu}
        alt="Samsu"
        className="h-full w-auto object-cover"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-amber-800 mb-1">Samsu</h3>
      <p className="text-amber-600 font-medium mb-2">Creative Stylist</p>
      <p className="text-gray-600 mb-3">
        Focuses on modern style and has more than 10+ years of experience.
      </p>
      <div className="flex items-center text-amber-500">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star-half-alt"></i>
        <span className="ml-2 text-gray-600 text-sm">(36 reviews)</span>
      </div>
    </div>
  </div>

  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
    <div className="h-[400px] w-full overflow-hidden flex justify-center items-center">
      <img
        src={roshan}
        alt="roshan"
        className="h-full w-auto object-cover"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-amber-800 mb-1">Roshan</h3>
      <p className="text-amber-600 font-medium mb-2">Hair Stylist / Owner</p>
      <p className="text-gray-600 mb-3">
        Expert in Stylish haur, highlights and creative color techniques with 10+
        years of experience.
      </p>
      <div className="flex items-center text-amber-500">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <span className="ml-2 text-gray-600 text-sm">(52 reviews)</span>
      </div>
    </div>
  </div>
</div>

        </div>
      </section>
      {/* Appointment Booking Section */}
      <section id="booking" className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-800 mb-2">
              Book Your Appointment
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Schedule your visit with our expert stylists and experience
              premium hair care services.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Call Us Option */}
              <div className="p-8 bg-amber-800 text-white flex flex-col justify-center items-center text-center">
                <i className="fas fa-phone-alt text-5xl mb-4"></i>
                <h3 className="text-2xl font-bold mb-4">Prefer to Call?</h3>
                <p className="mb-6">
                  Speak directly with our reception team to find the perfect
                  appointment time.
                </p>
                <a
                href="tel:+919773266230"
                  className="bg-white text-amber-800 px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition duration-300 font-medium text-lg !rounded-button whitespace-nowrap cursor-pointer"
                >
                +91 9773266230
         
                </a>
                <p className="mt-6 text-amber-200">
                  <span className="block mb-1">
                    <i className="fas fa-clock mr-2"></i>Tuesday - Saturday: 9am -
                    11:00pm
                  </span>
                  <span className="block">
                    <i className="fas fa-clock mr-2"></i>Monday: Close
                  </span>
                </p>
              </div>
              {/* Booking Form */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-amber-800 mb-4">
                  Book Online
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-gray-700 mb-1"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500 text-sm"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-gray-700 mb-1"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500 text-sm"
                        placeholder="Your phone"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500 text-sm"
                      placeholder="Your email"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label
                        htmlFor="date"
                        className="block text-gray-700 mb-1"
                      >
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500 text-sm"
                        required
                      />
                    </div>
                 <div>
  <label htmlFor="time" className="block text-gray-700 mb-1">
    Preferred Time
  </label>
  <div className="flex space-x-2">
    <select
      name="hour"
      value={formData.hour}
      onChange={handleChange}
      className="w-1/3 px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500 text-sm"
      required
    >
      <option value="">HH</option>
      {[...Array(12)].map((_, i) => (
        <option key={i + 1} value={i + 1}>
          {i + 1}
        </option>
      ))}
    </select>

    <select
      name="minute"
      value={formData.minute}
      onChange={handleChange}
      className="w-1/3 px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500 text-sm"
      required
    >
      <option value="">MM</option>
      {[...Array(60)].map((_, i) => (
        <option key={i} value={String(i).padStart(2, '0')}>
          {String(i).padStart(2, '0')}
        </option>
      ))}
    </select>

    <select
      name="ampm"
      value={formData.ampm}
      onChange={handleChange}
      className="w-1/3 px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500 text-sm"
      required
    >
      <option value="AM">AM</option>
      <option value="PM">PM</option>
    </select>
  </div>
</div>

                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-gray-700 mb-1"
                      >
                        Service
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500 text-sm"
                        required
                      >
                        <option value="">Select a service</option>
                        <option value="haircut">Haircut & Styling</option>
                        <option value="color">Color & Highlights</option>
                       
                        <option value="Hairwash">Hair Wash</option>
                        <option value="updo">Special Occasion Styling</option>
                        <option value="beard">Beard Trimming & Styling</option>
                        <option value="massage">Head Massage</option>
                        <option value="facial">Facial Treatment</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="stylist"
                        className="block text-gray-700 mb-1"
                      >
                        Preferred Stylist
                      </label>
                      <select
                        id="stylist"
                        name="stylist"
                        value={formData.stylist}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500 text-sm"
                      >
                        <option value="">Any stylist</option>
                        <option value="Ali">Ali</option>
                        <option value="samsu">samsu</option>
                        <option value="roshan">Roshan</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="message"
                      className="block text-gray-700 mb-1"
                    >
                      Special Requests
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500 text-sm"
                      placeholder="Any special requests or notes"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-amber-600 text-white py-3 rounded-lg shadow-md hover:bg-amber-700 transition-all duration-300 hover:scale-[1.02] font-medium !rounded-button whitespace-nowrap cursor-pointer"
                  >
                    Book Appointment
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Section */}
      <section
        id="about"
        className={`py-16 bg-white transform transition-all duration-1000 ${isVisible["about"] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-amber-800 mb-4">
                About The Roshan's Salon
              </h2>
              <p className="text-gray-600 mb-4">
                Founded in 1940, The Roshans Salon has been dedicated to
                providing exceptional hair care services in a luxurious and
                welcoming environment. Our mission is to help every client look
                and feel their absolute best.
              </p>
              <p className="text-gray-600 mb-6">
                With a team of highly trained stylists who regularly update
                their skills with the latest techniques and trends, we pride
                ourselves on delivering personalized services that enhance your
                natural beauty.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-start">
                  <i className="fas fa-award text-amber-600 text-xl mt-1 mr-3"></i>
                  <div>
                    <h4 className="font-bold text-gray-800">Award Winning</h4>
                    <p className="text-gray-600 text-sm">
                      Recognized for excellence in styling and customer service
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-leaf text-amber-600 text-xl mt-1 mr-3"></i>
                  <div>
                    <h4 className="font-bold text-gray-800">Eco-Friendly</h4>
                    <p className="text-gray-600 text-sm">
                      Using sustainable products and practices
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-graduation-cap text-amber-600 text-xl mt-1 mr-3"></i>
                  <div>
                    <h4 className="font-bold text-gray-800">
                      Certified Experts
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Continuously trained in latest techniques
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-heart text-amber-600 text-xl mt-1 mr-3"></i>
                  <div>
                    <h4 className="font-bold text-gray-800">Client Focused</h4>
                    <p className="text-gray-600 text-sm">
                      Personalized approach to every client
                    </p>
                  </div>
                </div>
              </div>
              {/* Testimonial */}
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-amber-600">
                <p className="italic text-gray-600 mb-4">
                  "The team at The Roshans Salon transformed not just my hair,
                  but my confidence. Their attention to detail and personalized
                  approach makes them stand out from any salon I've visited."
                </p>
                <p className="font-bold text-gray-800">
                  — Nadeem S. , Loyal Client
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <img
                src="https://readdy.ai/api/search-image?query=Elegant%20salon%20interior%20with%20stylish%20decor%2C%20comfortable%20styling%20chairs%2C%20modern%20equipment%2C%20warm%20lighting%2C%20and%20premium%20products%20displayed.%20The%20space%20features%20wood%20accents%2C%20large%20mirrors%2C%20and%20a%20sophisticated%20atmosphere&width=300&height=400&seq=8&orientation=portrait"
                alt="Salon Interior"
                className="rounded-lg shadow-md h-full object-cover object-top"
              />
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20hair%20stylist%20working%20with%20client%20in%20luxury%20salon%2C%20focused%20on%20styling%20with%20modern%20equipment%2C%20elegant%20interior%20visible%20with%20soft%20lighting%20and%20premium%20styling%20products&width=300&height=200&seq=9&orientation=landscape"
                alt="Stylist at Work"
                className="rounded-lg shadow-md h-48 object-cover object-top"
              />
              <img
                src="https://readdy.ai/api/search-image?query=Close-up%20of%20hair%20styling%20process%20in%20upscale%20salon%2C%20showing%20detailed%20work%20on%20clients%20hair%2C%20professional%20equipment%2C%20elegant%20salon%20environment%20with%20soft%20lighting%20and%20premium%20products%20visible&width=300&height=200&seq=10&orientation=landscape"
                alt="Styling Process"
                className="rounded-lg shadow-md h-48 object-cover object-top"
              />
              <img
                src="https://readdy.ai/api/search-image?query=Salon%20reception%20area%20with%20elegant%20desk%2C%20comfortable%20waiting%20area%2C%20stylish%20decor%2C%20product%20display%20shelves%20with%20premium%20hair%20care%20items%2C%20warm%20lighting%2C%20and%20sophisticated%20design%20elements&width=300&height=400&seq=11&orientation=portrait"
                alt="Salon Reception"
                className="rounded-lg shadow-md h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Contact Information */}
      <section
        id="contact"
        className={`py-16 bg-gray-50 transform transition-all duration-1000 ${isVisible["contact"] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-800 mb-2">
              Contact Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have questions or need assistance? Reach out to our team through
              any of the methods below.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold text-amber-800 mb-4">
                Salon Information
              </h3>
              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-2">Business Hours</h4>
                <ul className="text-gray-600">
                  <li className="flex justify-between mb-1">
                    <span>Tuesday - Saturday</span>
                    <span>9:00 AM - 11:00 PM</span>
                  </li>
                  
                  <li className="flex justify-between">
                    <span>Monday</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-2">
                  Contact Details
                </h4>
                <ul className="text-gray-600">
                  <li className="flex items-start mb-3">
                    <i className="fas fa-map-marker-alt text-amber-600 mt-1 mr-3"></i>
                    <span>Shop no. 3, crescent exotic, Hanuman Mandir Rd, Bori Colony, Marol, Andheri East, Mumbai, Maharashtra 400059</span>
                  </li>
                  <li className="flex items-center mb-3">
                    <i className="fas fa-phone-alt text-amber-600 mr-3"></i>
                    <a
                      href="tel:+1234567890"
                      className="hover:text-amber-600 cursor-pointer"
                    >
                     +91 9773266230
                    </a>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-envelope text-amber-600 mr-3"></i>
                    <a
                      href="mailto:info@roshanssalon.com"
                      className="hover:text-amber-600 cursor-pointer"
                    >
                      shaikh.roshan88@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-2">Follow Us</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-gray-600 hover:text-amber-600 text-xl cursor-pointer"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-amber-600 text-xl cursor-pointer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-amber-600 text-xl cursor-pointer"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-amber-600 text-xl cursor-pointer"
                  >
                    <i className="fab fa-pinterest"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* Map */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-96 lg:h-auto lg:col-span-2">
            <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.957781267967!2d72.87582807503976!3d19.112601482088985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c815cb1e0aa5%3A0xe3e25b3664f4bf3e!2sRoshans%20salon!5e0!3m2!1sen!2sin!4v1717483634896!5m2!1sen!2sin"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Roshans Salon Location"
/>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">The  Salon</h3>
              <p className="mb-4">
                Where style meets expertise. Experience premium hair care and
                styling services tailored to enhance your unique beauty.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-amber-200 hover:text-white cursor-pointer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="text-amber-200 hover:text-white cursor-pointer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="#"
                  className="text-amber-200 hover:text-white cursor-pointer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="text-amber-200 hover:text-white cursor-pointer"
                >
                  <i className="fab fa-pinterest"></i>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className="text-amber-200 hover:text-white cursor-pointer"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-amber-200 hover:text-white cursor-pointer"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#stylists"
                    className="text-amber-200 hover:text-white cursor-pointer"
                  >
                    Our Stylists
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-amber-200 hover:text-white cursor-pointer"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-amber-200 hover:text-white cursor-pointer"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-amber-200 hover:text-white cursor-pointer"
                  >
                    Haircuts & Styling
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-amber-200 hover:text-white cursor-pointer"
                  >
                    Color & Highlights
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-amber-200 hover:text-white cursor-pointer"
                  >
                    Treatments & Therapies
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-amber-200 hover:text-white cursor-pointer"
                  >
                    Blowouts
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-amber-200 hover:text-white cursor-pointer"
                  >
                    Special Occasion Styling
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-5">
              <img 
              className="w-[120px] h-[120px]" 
              src={logo} alt="" />
            </div>
          
          </div>
          <div className="pt-8 border-t border-amber-700 text-center md:flex md:justify-between md:items-center">
            <p>
              &copy; {new Date().getFullYear()} The Roshan's Salon. All rights
              reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <a
                href="#"
                className="text-amber-200 hover:text-white mx-2 text-sm cursor-pointer"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-amber-200 hover:text-white mx-2 text-sm cursor-pointer"
              >
                Terms of Service
              </a>
            </div>
            <p>⊕ Website Design by <a href="https://www.linkedin.com/in/nadeem-salmani-42913934a"><span className="text-blue-800 underline"> Nadeem Slamani</span></a></p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default App;
