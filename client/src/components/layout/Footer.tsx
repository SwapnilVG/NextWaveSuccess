import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white mt-auto pt-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-mlm-gold">NextWave</span>Success
              </h3>
              <p className="text-blue-200 mb-6">
                Join the NextWaveSuccess Family and start your journey to success.
                We provide exceptional opportunities for growth and financial freedom.
              </p>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300 hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300 hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300 hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300 hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-blue-200 hover:text-white transition duration-300 flex items-center group">
                  <ArrowRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-blue-200 hover:text-white transition duration-300 flex items-center group">
                  <ArrowRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-blue-200 hover:text-white transition duration-300 flex items-center group">
                  <ArrowRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0" />
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-blue-200 hover:text-white transition duration-300 flex items-center group">
                  <ArrowRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0" />
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-blue-200 hover:text-white transition duration-300 flex items-center group">
                  <ArrowRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0" />
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-blue-200 hover:text-white transition duration-300 flex items-center group">
                  <ArrowRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0" />
                  Register
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/faq" className="text-blue-200 hover:text-white transition duration-300 flex items-center group">
                  <ArrowRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0" />
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/compensation" className="text-blue-200 hover:text-white transition duration-300 flex items-center group">
                  <ArrowRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0" />
                  Compensation Plan
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-blue-200 hover:text-white transition duration-300 flex items-center group">
                  <ArrowRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0" />
                  Products
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-blue-200 hover:text-white transition duration-300 flex items-center group">
                  <ArrowRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0" />
                  Success Stories
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-blue-200 hover:text-white transition duration-300 flex items-center group">
                  <ArrowRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0" />
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="mr-3 flex-shrink-0 text-mlm-gold" size={20} />
                <span className="text-blue-200">Office No. 201, XYZ Building, Mumbai-400001, Maharashtra, India</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 flex-shrink-0 text-mlm-gold" size={20} />
                <span className="text-blue-200">+91 9876543210</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 flex-shrink-0 text-mlm-gold" size={20} />
                <a href="mailto:info@nextwavesuccess.com" className="text-blue-200 hover:text-white transition-colors duration-300">info@nextwavesuccess.com</a>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="font-medium text-white mb-3">Subscribe to Newsletter</h4>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-white/10 focus:bg-white/20 border-0 rounded-l-lg px-4 py-2 text-white w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button type="submit" className="bg-mlm-gold text-mlm-navy px-4 py-2 rounded-r-lg hover:bg-amber-400 transition-colors duration-300">
                  <ArrowRight size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-800/50 mt-12 pt-6 pb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-blue-200">&copy; {currentYear} NextWaveSuccess. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-sm text-blue-200 hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-sm text-blue-200 hover:text-white transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-sm text-blue-200 hover:text-white transition-colors duration-300">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
