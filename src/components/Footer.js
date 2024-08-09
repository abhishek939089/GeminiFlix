import React from "react";

const links = [
  "FAQ",
  "Help Center",
  "Investor Relations",
  "Privacy Policy",
  "Account",
  "Terms of use",
  "Ways to Watch",
  "Only on Netflix",
  "Legal Notices",
  "Cookie Preferences",
  "Contact Us",
  "Ways to watch",
];

const Footer = () => {
  return (
    <div className="w-screen mt-20 pb-8 pl-10 bg-gray-800 relative bottom-0 left-0">
      <h3 className="pt-6">Call Support: 900-000-0000</h3> <br />
      <div className="grid grid-cols-2 md:grid-cols-4 pb-4 pointer text-red-800 ">
        {links.map((link, index) => (
          <h4 key={index} className="hover:text-red-600">
            {link}
          </h4>
        ))}
      </div>
      <h3>GeminiFlix</h3>
    </div>
  );
};

export default Footer;
