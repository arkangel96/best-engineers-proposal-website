import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

interface HeaderProps {
  darkOnLight?: boolean;
}

const Header: React.FC<HeaderProps> = ({ darkOnLight = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const menuItems = [
    {
      title: 'HOME',
      href: '/',
      subItems: []
    },
    {
      title: 'ABOUT US',
      href: '/about',
      subItems: [
        { title: 'Overview', href: '/about-overview' },
        { title: 'Values', href: '/about-values' },
        { title: 'CEO Message', href: '/about-ceo-message' },
        { title: 'History', href: '/about-history' },
        { title: 'Business Permits', href: '/about-business-permits' },
        { title: 'Location', href: '/about-location' }
      ]
    },
    {
      title: 'SERVICES',
      href: '/key-services',
      subItems: [
        { title: 'Engineering', href: '/key-services-engineering' },
        { title: 'Procurement', href: '/key-services-procurement' },
        { title: 'Construction', href: '/key-services-construction' },
        { title: 'Commissioning', href: '/key-services-commissioning' },
        { title: 'Project Management', href: '/key-services-project-management' },
        { title: 'Technical Consulting', href: '/key-services-technical-consulting' }
      ]
    },
    {
      title: 'PROJECT EXPERIENCE',
      href: '/businesses',
      subItems: [
        { title: 'Petrochemical', href: '/businesses-petrochemical' },
        { title: 'Refinery', href: '/businesses-refinery' },
        { title: 'Power Generation', href: '/businesses-power-generation' }
      ]
    },
    {
      title: 'SUSTAINABILITY',
      href: '/sustainability',
      subItems: [
        { title: 'Quality Management', href: '/sustainability-quality-management' },
        { title: 'Environmental Management', href: '/sustainability-environmental-management' },
        { title: 'Safety/Health Management', href: '/sustainability-safety-health-management' },
        { title: 'Ethics/Compliance Management', href: '/sustainability-ethics-compliance-management' },
        { title: 'Ethics/Compliance Report Center', href: '/sustainability-ethics-compliance-report-center' },
        { title: 'Security Policy', href: '/sustainability-security-policy' },
        { title: 'New Business Partner Registration', href: '/sustainability-new-business-partner-registration' }
      ]
    },
    {
      title: 'RECRUITMENT',
      href: '/recruitment',
      subItems: [
        { title: 'Ideal Talent', href: '/recruitment-ideal-talent' },
        { title: 'Welfare Policy', href: '/recruitment-welfare-policy' },
        { title: 'Recruitment Pool Registration', href: '/recruitment-recruitment-pool-registration' }
      ]
    }
  ];

  const isActivePath = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <>
      {/* Main Navigation Bar */}
      <header className="relative z-50 w-full" style={{ background: 'transparent', boxShadow: 'none', border: 'none' }}>
        <div className="w-full bg-transparent px-8"> {/* Removed max-width constraint, increased padding */}

          <div className="flex justify-center items-center relative bg-transparent"> {/* Changed back to justify-center */}
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center flex-1 justify-center bg-transparent" style={{ background: 'transparent' }}> {/* Changed back to justify-center */}
              <div className="flex items-center justify-center w-full bg-transparent space-x-2"> {/* Increased space-x-2 for better spacing */}
                {menuItems.map((item, index) => (
                  <div
                    key={item.title}
                    className="relative bg-transparent"
                    onMouseEnter={() => setActiveDropdown(item.title)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      to={item.href}
                      className={`flex items-center space-x-1 px-8 py-5 font-extrabold transition-colors duration-200 border-r border-transparent
                        ${darkOnLight
                          ? isActivePath(item.href)
                            ? 'text-[#0074c1] underline underline-offset-8 decoration-2'
                            : 'text-[#222] hover:text-blue-700 hover:bg-gray-100'
                          : isActivePath(item.href)
                            ? 'text-[#0074c1]'
                            : 'text-white hover:text-blue-200'
                        }
                        ${index === menuItems.length - 1 ? 'border-r-0' : ''}
                      `}
                      style={{
                        fontFamily: 'Open Sans, Arial, sans-serif',
                        fontSize: darkOnLight ? '16px' : '13px',
                        fontWeight: 700,
                        letterSpacing: '0.04em',
                        textShadow: darkOnLight ? 'none' : '0 2px 8px rgba(0,0,0,0.45), 0 1px 2px rgba(0,0,0,0.25)',
                        background: 'transparent',
                        textTransform: 'uppercase',
                      }}
                    >
                      <span className="uppercase tracking-wider">{item.title}</span>
                      {item.subItems.length > 0 && <ChevronDown className="w-3 h-3" />}
                    </Link>

                    {item.subItems.length > 0 && activeDropdown === item.title && (
                      <div className="absolute top-full left-0 mt-0 w-64 rounded-b-md shadow-lg border border-gray-200 py-2 z-50" style={{ background: 'rgba(20, 28, 38, 0.85)' }}>
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.title}
                            to={subItem.href}
                            className={`block px-4 py-2 text-sm transition-colors duration-200 ${location.pathname === subItem.href
                              ? 'text-[#1e5aa8] border-l-4 border-[#1e5aa8] bg-transparent'
                              : 'text-white hover:text-[#1e5aa8] bg-transparent'
                              }`}
                            style={{ fontFamily: 'Open Sans, Arial, sans-serif', textShadow: 'none' }}
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </nav>
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors duration-200 mr-4 absolute right-0"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden bg-transparent border-t border-gray-300">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {menuItems.map((item) => (
                  <div key={item.title}>
                    <Link
                      to={item.href}
                      className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${isActivePath(item.href)
                        ? 'text-white bg-transparent'
                        : 'text-white hover:text-blue-200 bg-transparent'
                        }`}
                      style={{ fontFamily: 'Arial, sans-serif', textShadow: '0 2px 8px rgba(0,0,0,0.45)' }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="uppercase tracking-wide">{item.title}</span>
                    </Link>
                    {item.subItems.length > 0 && (
                      <div className="ml-4 mt-1 space-y-1">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.title}
                            to={subItem.href}
                            className={`block px-3 py-2 rounded-md text-sm transition-colors duration-200 ${location.pathname === subItem.href
                              ? 'text-white bg-transparent'
                              : 'text-white hover:text-blue-200 bg-transparent'
                              }`}
                            style={{ fontFamily: 'Arial, sans-serif', textShadow: '0 2px 8px rgba(0,0,0,0.45)' }}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
