import { useState, useEffect, type JSX } from 'react';
import { FaLinkedin, FaWhatsapp, FaDownload, FaHome, FaBriefcase, FaCode, FaProjectDiagram, FaAddressCard, FaBars } from 'react-icons/fa';
import resume from '../assets/resume.pdf';
import { Link } from 'react-router-dom';
import profileimg from '../assets/profileImg.jpeg'

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

// Sample user object
const user = {
  name: 'Prince Yadav',
  title: 'Full-Stack .NET & Azure Developer',
  email: 'yaduvanshiprince2007@gmail.com',
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

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-4">
      <div className="bg-white/70 backdrop-blur-md shadow-lg rounded-xl px-4 py-2 flex justify-between items-center border border-gray-200">
        {/* Mobile menu button */}
        {isMobile && (
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="text-gray-700 p-2 rounded-full hover:bg-gray-100"
          >
            <FaBars />
          </button>
        )}

        {/* Regular navigation items (hidden on mobile) */}
        {!isMobile && (
          <div className="flex space-x-4">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.url}
                className="text-gray-700 hover:text-rose-600 text-sm font-medium px-3 py-1 rounded-full transition-colors duration-200 flex items-center"
              >
                <span className="mr-2">{item.icon}</span>
                {item.showText}
              </Link>
            ))}
          </div>
        )}

        {/* Mobile menu (shown when toggled) */}
        {isMobile && showMobileMenu && (
          <div className="absolute top-12 left-0 w-full bg-white/90 backdrop-blur-md rounded-xl shadow-lg py-2 z-50">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.url}
                className="block text-gray-700 hover:text-rose-600 text-sm font-medium px-4 py-2 transition-colors duration-200 items-center"
                onClick={() => setShowMobileMenu(false)}
              >
                <span className="mr-3 text-lg">{item.icon}</span>
                {item.showText}
              </Link>
            ))}
          </div>
        )}

        {/* Icons-only navigation for mobile (when menu not expanded) */}
        {isMobile && !showMobileMenu && (
          <div className="flex space-x-2">
            {navItems.slice(0, 3).map((item, index) => (
              <Link
                key={index}
                to={item.url}
                className="text-gray-700 hover:text-rose-600 p-2 rounded-full transition-colors duration-200"
                title={item.showText}
              >
                {item.icon}
              </Link>
            ))}
          </div>
        )}

        {/* Profile Image with Hover Detail */}
        <div
          className="relative"
          onMouseEnter={() =>setShowUserDetails(true)}
          onClick={() => setShowUserDetails(!showUserDetails)}
        >
          <img
            src={user.imageUrl}
            alt="User"
            className="w-8 h-8 rounded-xl border-2 border-gray-300 cursor-pointer hover:border-rose-500 transition duration-300"
          />

          {showUserDetails && (
            <div className={`absolute ${isMobile ? 'right-0' : 'right-0'} top-10 mt-2 w-64 bg-rose-50 rounded-lg shadow-xl border border-gray-200 p-4 text-sm z-50`}>
              {/* Close Button */}
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-rose-500 text-xs font-bold"
                onClick={() => setShowUserDetails(false)}
                title="Close"
              >
                ✕
              </button>

              <div className="flex items-center space-x-3 mb-3">
                <img
                  src={user.imageUrl}
                  alt="User Detail"
                  className="w-12 h-12 rounded-xl border border-gray-300"
                />
                <div>
                  <p className="font-semibold text-gray-900">{user.name}</p>
                  <p className="text-gray-600 text-xs">{user.title}</p>
                </div>
              </div>

              <p className="text-gray-500 text-sm">{user.email}</p>
              <p className="text-gray-500 text-sm">{user.location}</p>

              {/* Social & Resume Icons */}
              <div className="flex space-x-4 mt-3 items-center">
                <a
                  href={user.resumeUrl}
                  download
                  title="Download Resume"
                  className="text-gray-600 hover:text-rose-600 transition"
                >
                  <FaDownload size={18} />
                </a>
                <a
                  href={user.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Contact on WhatsApp"
                  className="text-gray-600 hover:text-green-600 transition"
                >
                  <FaWhatsapp size={18} />
                </a>
                <a
                  href={user.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn Profile"
                  className="text-gray-600 hover:text-sky-700 transition"
                >
                  <FaLinkedin size={18} />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};