import { useState, useEffect, type JSX } from 'react';
import { FaLinkedin, FaWhatsapp, FaDownload, FaHome, FaBriefcase, FaCode, FaProjectDiagram, FaAddressCard, FaBars, FaPhone, FaEnvelope, FaMapMarkerAlt, FaTimes } from 'react-icons/fa';
import resume from '../assets/resume.pdf';
import { Link } from 'react-router-dom';
import profileimg from '../assets/profileImg.jpeg';

export interface NavItem {
  showText: string;
  url: string;
  icon: JSX.Element;
}

const navItems: NavItem[] = [
  { showText: 'Home', url: '/', icon: <FaHome /> },
  { showText: 'Work & Internships', url: '/work', icon: <FaBriefcase /> },
  { showText: 'Skills', url: '/skills', icon: <FaCode /> },
  { showText: 'Projects', url: '/projects', icon: <FaProjectDiagram /> },
  { showText: 'Contact', url: '/aboutme', icon: <FaAddressCard /> },
];

const user = {
  name: 'Prince Yadav',
  title: 'Full-Stack .NET & Azure Developer',
  email: 'yaduvanshiprince2007@gmail.com',
  phone: '+91 7004571707',
  location: 'Bangalore, India',
  imageUrl: profileimg,
  resumeUrl: resume,
  linkedIn: 'https://www.linkedin.com/in/prince-yadav-340b99134',
  whatsapp: 'https://wa.me/917004571707',
};

export const TopNavBar = () => {
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCall = () => {
    window.open(`tel:${user.phone.replace(/\D/g, '')}`);
  };

  const handleWhatsApp = () => {
    window.open(user.whatsapp, '_blank');
  };

  const handleEmail = () => {
    window.open(`mailto:${user.email}`);
  };

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-4">
      <div className="bg-white/80 backdrop-blur-lg shadow-lg rounded-xl px-4 py-2 flex justify-between items-center border border-gray-200">
        {/* Mobile menu button */}
        {isMobile && (
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <FaBars size={20} />
          </button>
        )}

        {/* Default navigation items (unchanged size) */}
        {!isMobile && (
          <div className="flex space-x-2">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.url}
                className="text-gray-700 hover:text-red-600 text-sm font-medium px-3 py-1.5 rounded-lg transition-colors duration-200 flex items-center hover:bg-gray-100/50"
              >
                <span className="mr-2 text-base">{item.icon}</span>
                {item.showText}
              </Link>
            ))}
          </div>
        )}

        {/* Mobile menu */}
        {isMobile && showMobileMenu && (
          <div className="absolute top-12 left-0 w-full bg-white/95 backdrop-blur-lg rounded-xl shadow-xl py-3 z-50 border border-gray-100">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.url}
                className="flex items-center text-gray-700 hover:text-red-600 text-base font-medium px-4 py-2.5 transition-colors duration-200 hover:bg-gray-50"
                onClick={() => setShowMobileMenu(false)}
              >
                <span className="mr-3 text-lg">{item.icon}</span>
                {item.showText}
              </Link>
            ))}
          </div>
        )}

        {/* Profile section with seamless transition */}
        <div className="relative">
          <div className="relative">
            {/* Profile image button */}
            <button
              onClick={() => setShowUserDetails(!showUserDetails)}
              onMouseEnter={() => !isMobile && setShowUserDetails(true)}
              className={`w-10 h-10 rounded-xl border-2 ${showUserDetails ? 'border-red-500' : 'border-gray-300 hover:border-red-500'} transition-all duration-300 overflow-hidden`}
              aria-label="User profile"
            >
              <img
                src={user.imageUrl}
                alt="User profile"
                className="w-full h-full object-cover"
              />
            </button>

            {/* Profile details panel */}
            <div 
              className={`absolute right-0 top-0 w-75 bg-white rounded-lg shadow-xl  overflow-hidden transition-all duration-800 ${showUserDetails ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
              onMouseLeave={() => !isMobile && setShowUserDetails(false)}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowUserDetails(false)}
                className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-lg bg-red-100 hover:bg-red-200 transition-colors z-10"
                aria-label="Close profile"
              >
                <FaTimes className="text-red-500" />
              </button>

              {/* Profile Header */}
              <div className="flex items-center space-x-4 p-4 border-b border-gray-100">
                <img
                  src={user.imageUrl}
                  alt="User Detail"
                  className="w-14 h-14 rounded-xl border-2 border-white shadow-sm object-cover"
                />
                <div>
                  <h3 className="font-bold text-gray-900">{user.name}</h3>
                  <p className="text-gray-600 text-xs">{user.title}</p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="p-4 space-y-3">
                <div className="flex items-center text-gray-700">
                  <FaEnvelope className="text-red-400 mr-3 min-w-[16px]" />
                  <span className="text-sm truncate">{user.email}</span>
                </div>
                
                <div className="flex items-center text-gray-700">
                  <FaPhone className="text-red-400 mr-3 min-w-[16px]" />
                  <span className="text-sm">{user.phone}</span>
                </div>
                
                <div className="flex items-center text-gray-700">
                  <FaMapMarkerAlt className="text-red-400 mr-3 min-w-[16px]" />
                  <span className="text-sm">{user.location}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2 p-4 border-t border-gray-100">
                <button
                  onClick={handleCall}
                  className="flex items-center justify-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-3 rounded-lg text-sm transition-colors"
                >
                  <FaPhone className="text-green-500" />
                  <span>Call</span>
                </button>
                
                <button
                  onClick={handleWhatsApp}
                  className="flex items-center justify-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-3 rounded-lg text-sm transition-colors"
                >
                  <FaWhatsapp className="text-green-500" />
                  <span>WhatsApp</span>
                </button>
              </div>

              {/* Social & Resume */}
              <div className="flex justify-between items-center p-4">
                <a
                  href={user.resumeUrl}
                  download
                  className="flex items-center space-x-2 text-gray-700 hover:text-red-600 transition text-sm font-medium"
                >
                  <FaDownload />
                  <span>Resume</span>
                </a>
                
                <div className="flex space-x-3">
                  <a
                    href={user.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-700 transition"
                    title="LinkedIn"
                  >
                    <FaLinkedin size={18} />
                  </a>
                  <button
                    onClick={handleEmail}
                    className="text-gray-600 hover:text-red-500 transition"
                    title="Email"
                  >
                    <FaEnvelope size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};