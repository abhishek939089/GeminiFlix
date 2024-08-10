import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const links = [
  "FAQ",
  "Help Center",
  "Investor Relations",
  "Privacy Policy",
  "Account",
  "Terms of Use",
  "Ways to Watch",
  "Only on Netflix",
  "Legal Notices",
  "Cookie Preferences",
  "Contact Us",
  "Ways to Watch",
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h3 className="text-lg font-semibold mb-2">
            Call Support: 900-000-0000
          </h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-8">
          {links.map((link, index) => (
            <a
              href="https://www.linkedin.com/in/sharma--abhishek/"
              key={index}
              className="hover:text-red-500 transition-colors duration-300 text-center"
            >
              {link}
            </a>
          ))}
        </div>
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://www.linkedin.com/in/sharma--abhishek/"
            aria-label="Facebook"
          >
            <FaFacebook className="text-2xl hover:text-red-500 transition-colors duration-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/sharma--abhishek/"
            aria-label="Twitter"
          >
            <FaTwitter className="text-2xl hover:text-red-500 transition-colors duration-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/sharma--abhishek/"
            aria-label="Instagram"
          >
            <FaInstagram className="text-2xl hover:text-red-500 transition-colors duration-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/sharma--abhishek/"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-2xl hover:text-red-500 transition-colors duration-300" />
          </a>
        </div>
        <p className="text-center text-sm">
          &copy; 2024 GeminiFlix. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
