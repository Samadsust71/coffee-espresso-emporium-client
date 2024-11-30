import React from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import logo from "../assets/logo1.png";
const Footer = () => {
  return (
    <div>
      <section className="bg-footer-form bg-cover bg-center bg-no-repeat py-16 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Left Section */}
          <div>
            <img src={logo} className="h-20 w-20 object-cover" alt="logo" />
            <h2 className="mt-4 text-2xl font-bold text-[#331A15]">
              Espresso Emporium
            </h2>
            <p className="mt-4 text-[#1B1A1A]">
              Always ready to serve you the finest Coffee. Contact us to share
              your memorable moments and learn about your best companions.
            </p>
            {/* Social Icons */}
            <div className="flex mt-6 space-x-4 text-[#331A15]">
              <a
                href="#"
                className="hover:text-[#331A15]"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="hover:text-[#331A15]"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-[#331A15]" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a
                href="#"
                className="hover:text-[#331A15]"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>

            {/* Contact Information */}
            <div className="mt-6 text-[#1B1A1A]">
              <p className="flex items-center space-x-2">
                <FaPhoneAlt className="text-[#331A15]" />
                <span>+88 01748-307587</span>
              </p>
              <p className="flex items-center space-x-2 mt-2">
                <FaEnvelope className="text-[#331A15]" />
                <span>samadsust71@gmail.com</span>
              </p>
              <p className="flex items-center space-x-2 mt-2">
                <FaMapMarkerAlt className="text-[#331A15]" />
                <span>66/1 East Pirmoholla, Sylhet</span>
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="rounded-lg lg:p-6">
            <h3 className="text-xl font-bold text-[#1B1A1A]">
              Connect with Us
            </h3>
            <form className="mt-4 space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="input w-full focus:border-[#1B1A1A] focus:ring-[#1B1A1A]"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="input w-full focus:border-[#1B1A1A] focus:ring-[#1B1A1A]"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  className="textarea  w-full focus:border-[#1B1A1A] focus:ring-[#1B1A1A]"
                  rows="4"
                ></textarea>
              </div>
              <button
                type="button"
                className="btn rounded-full border-2 border-[#331A15] hover:bg-[#331A15] hover:text-white bg-transparent"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      <aside className="text-center bg-footer-copyright bg-cover bg-center bg-no-repeat text-white">
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Samad Reza
        </p>
      </aside>
    </div>
  );
};

export default Footer;
