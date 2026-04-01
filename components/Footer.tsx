import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Facebook = ({size}: {size: number}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const Instagram = ({size}: {size: number}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>;
const Twitter = ({size}: {size: number}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>;
const Linkedin = ({size}: {size: number}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>;


export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-brand-blue pb-16">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-brand-orange flex items-center justify-center rounded-sm">
                <span className="text-white font-bold text-xl">P&P</span>
              </div>
              <span className="font-bold text-xl tracking-tight">Prabhas & Prem</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Building commercial excellence with trust. We deliver world-class infrastructure and commercial construction solutions across the nation.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded bg-brand-blue flex items-center justify-center hover:bg-brand-orange transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded bg-brand-blue flex items-center justify-center hover:bg-brand-orange transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded bg-brand-blue flex items-center justify-center hover:bg-brand-orange transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded bg-brand-blue flex items-center justify-center hover:bg-brand-orange transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white pb-2 border-b border-brand-blue inline-block">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-gray-400 hover:text-brand-orange transition-colors text-sm">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-brand-orange transition-colors text-sm">Our Services</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-brand-orange transition-colors text-sm">Featured Projects</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-brand-orange transition-colors text-sm">Help & FAQ</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-brand-orange transition-colors text-sm">Contact Us</a></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white pb-2 border-b border-brand-blue inline-block">Core Services</h4>
            <ul className="space-y-4">
              <li className="text-gray-400 text-sm">Commercial Core & Shell</li>
              <li className="text-gray-400 text-sm">Corporate Interiors</li>
              <li className="text-gray-400 text-sm">Retail Build-Outs</li>
              <li className="text-gray-400 text-sm">Infrastructure Projects</li>
              <li className="text-gray-400 text-sm">Pre-construction Planning</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white pb-2 border-b border-brand-blue inline-block">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-orange shrink-0 mt-1" size={18} />
                <span className="text-gray-400 text-sm">123 Corporate Blvd, Business District, Kathmandu, Nepal</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-orange shrink-0" size={18} />
                <span className="text-gray-400 text-sm">+977 1-400-0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-brand-orange shrink-0" size={18} />
                <span className="text-gray-400 text-sm">hello@prabhasprem.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="text-brand-orange shrink-0" size={18} />
                <span className="text-gray-400 text-sm">Sun-Fri: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>

        </div>
        
        {/* Bottom footer */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Prabhas & Prem Commercial Construction Pvt. Ltd. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-brand-orange">Privacy Policy</a>
            <a href="#" className="hover:text-brand-orange">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
