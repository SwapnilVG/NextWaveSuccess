import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, User, FileText, Key, Inbox, Users, Home, LogOut } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // For demo purposes
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <span className="text-2xl font-bold">
              <span className="text-mlm-gold">NextWave</span>
              <span className="text-white">Success</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            {isLoggedIn ? (
              <>
                <NavItem 
                  to="/dashboard" 
                  icon={<Home size={18} />} 
                  text="Dashboard" 
                  isActive={location.pathname === '/dashboard'}
                />
                <NavDropdown 
                  text="E-Pins" 
                  icon={<Key size={18} />}
                  items={[
                    { to: "/unused-pins", text: "Unused Pins" },
                    { to: "/pin-request", text: "Pin Request" },
                  ]} 
                />
                <NavDropdown 
                  text="Personal" 
                  icon={<User size={18} />}
                  items={[
                    { to: "/my-kyc", text: "My KYC" },
                    { to: "/edit-profile", text: "Edit Profile" },
                    { to: "/welcome-letter", text: "Welcome Letter" },
                    { to: "/i-card", text: "I-Card" },
                  ]} 
                />
                <NavDropdown 
                  text="Downline" 
                  icon={<Users size={18} />}
                  items={[
                    { to: "/my-downline", text: "My Downline" },
                  ]} 
                />
              </>
            ) : (
              <>
                <NavItem 
                  to="/" 
                  text="Home" 
                  isActive={location.pathname === '/'}
                />
                <NavItem 
                  to="/dashboard" 
                  text="Dashboard" 
                  isActive={location.pathname === '/dashboard'}
                />
              </>
            )}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <div className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm">
                  <span className="text-sm font-medium text-white">FW2655423</span>
                </div>
                <button className="bg-white text-blue-900 px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-medium flex items-center">
                  <LogOut size={16} className="mr-2" />
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/login" className="bg-white text-blue-900 px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-medium">
                Login / Register
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none transition-transform duration-200 hover:scale-110"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white py-4 px-4 shadow-xl rounded-b-xl border-t border-gray-100 max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col space-y-4">
            {isLoggedIn ? (
              <>
                <MobileNavItem to="/dashboard" text="Dashboard" icon={<Home size={18} />} isActive={location.pathname === '/dashboard'} />
                <p className="text-sm font-medium text-gray-500 px-3 pt-4 pb-1 border-t border-gray-100">E-Pins</p>
                <MobileNavItem to="/unused-pins" text="Unused Pins" icon={<Key size={18} />} isActive={location.pathname === '/unused-pins'} />
                <MobileNavItem to="/pin-request" text="Pin Request" icon={<Key size={18} />} isActive={location.pathname === '/pin-request'} />
                
                <p className="text-sm font-medium text-gray-500 px-3 pt-4 pb-1 border-t border-gray-100">Personal</p>
                <MobileNavItem to="/my-kyc" text="My KYC" icon={<FileText size={18} />} isActive={location.pathname === '/my-kyc'} />
                <MobileNavItem to="/edit-profile" text="Edit Profile" icon={<User size={18} />} isActive={location.pathname === '/edit-profile'} />
                <MobileNavItem to="/welcome-letter" text="Welcome Letter" icon={<FileText size={18} />} isActive={location.pathname === '/welcome-letter'} />
                <MobileNavItem to="/i-card" text="I-Card" icon={<FileText size={18} />} isActive={location.pathname === '/i-card'} />
                
                <p className="text-sm font-medium text-gray-500 px-3 pt-4 pb-1 border-t border-gray-100">Downline</p>
                <MobileNavItem to="/my-downline" text="My Downline" icon={<Users size={18} />} isActive={location.pathname === '/my-downline'} />
                
                <div className="pt-4 border-t border-gray-100 mt-2">
                  <div className="flex items-center justify-between px-3 py-2 bg-gray-50 rounded-lg mb-4">
                    <span className="text-sm font-medium text-gray-700">FW2655423</span>
                    <span className="text-xs font-medium bg-green-100 text-green-600 px-2 py-1 rounded-full">Active</span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-3 py-3 rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-medium shadow-md flex items-center justify-center">
                    <LogOut size={16} className="mr-2" />
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <>
                <MobileNavItem to="/" text="Home" icon={<Home size={18} />} isActive={location.pathname === '/'} />
                <MobileNavItem to="/dashboard" text="Dashboard" icon={<Home size={18} />} isActive={location.pathname === '/dashboard'} />
                <div className="pt-4 border-t border-gray-100 mt-2">
                  <Link to="/login" className="block w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-3 py-3 rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-medium text-center shadow-md">
                    Login / Register
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

// NavItem component for desktop
const NavItem = ({ to, text, icon, isActive }: { to: string; text: string; icon?: React.ReactNode; isActive?: boolean }) => (
  <Link
    to={to}
    className={`px-3 py-2 rounded-lg text-sm font-medium transition duration-300 ease-in-out flex items-center ${
      isActive 
        ? 'bg-white/10 text-white font-bold' 
        : 'hover:bg-white/10 text-white'
    }`}
  >
    {icon && <span className="mr-1">{icon}</span>}
    {text}
  </Link>
);

// NavDropdown component for desktop
const NavDropdown = ({ text, icon, items }: { text: string; icon?: React.ReactNode; items: { to: string; text: string }[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className="px-3 py-2 rounded-lg text-sm font-medium transition duration-300 ease-in-out flex items-center hover:bg-white/10 text-white">
        {icon && <span className="mr-1">{icon}</span>}
        {text}
        <ChevronDown size={16} className="ml-1" />
      </button>
      
      {isOpen && (
        <div className="absolute z-10 mt-1 w-56 rounded-xl shadow-xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden">
          <div className="py-1">
            {items.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 border-l-2 border-transparent hover:border-blue-600"
              >
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Mobile nav item with improved styling
const MobileNavItem = ({ to, text, icon, isActive }: { to: string; text: string; icon?: React.ReactNode; isActive?: boolean }) => (
  <Link
    to={to}
    className={`px-3 py-2.5 rounded-lg text-sm font-medium transition duration-300 ease-in-out flex items-center ${
      isActive ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50 text-gray-700'
    }`}
  >
    {icon && <span className="mr-3 text-gray-500">{icon}</span>}
    {text}
  </Link>
);

export default Header;
