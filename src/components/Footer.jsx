import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDribbbleSquare } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row gap-10">
        <div className="text-center md:text-left mb-10">
          <h2 className="text-3xl font-bold text-green-400">DATALY.</h2>
          <p className="mt-4 max-w-md mx-auto md:mx-0">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
            ullam iste repellat consequatur libero reiciendis, blanditiis
            accusantium.
          </p>

          <div className="flex flex-row space-x-10 py-6 text-white ">
            <FaFacebookSquare size={24} />
            <FaInstagramSquare size={24} />
            <FaTwitterSquare size={24} />
            <FaGithub size={24} />
            <FaDribbbleSquare size={24}/>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-20 text-sm md:w-[65%] ">
          <div> 
            <h3 className="font-semibold mb-3">Solutions</h3>
            <ul className="space-y-2">
              <li>Analytics</li>
              <li>Marketing</li>
              <li>Commerce</li>
              <li>Insights</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Support</h3>
            <ul className="space-y-2">
              <li>Pricing</li>
              <li>Documentation</li>
              <li>Guides</li>
              <li>API Status</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2">
              <li>About</li>
              <li>Blog</li>
              <li>Jobs</li>
              <li>Press</li>
              <li>Career</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Legal</h3>
            <ul className="space-y-2">
              <li>Claim</li>
              <li>Policy</li>
              <li>Terms</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
