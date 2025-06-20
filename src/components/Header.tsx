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
    },
    {
      title: 'CONTACT',
      href: '/contact',
      subItems: []
    }
  ];

  const isActivePath = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <header className={`sticky top-0 z-50 w-full transition-colors duration-300 ${darkOnLight ? 'bg-white shadow-sm' : 'bg-black/25 backdrop-blur-sm'}`}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img className="h-[7rem] w-auto" src="/lovable-uploads/logo.png" alt="Company Logo" style={{ transform: 'translateY(10%)' }} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-bold transition-colors duration-200
                    ${darkOnLight
                      ? isActivePath(item.href) ? 'text-[#0074c1]' : 'text-gray-700 hover:bg-gray-100'
                      : isActivePath(item.href) ? 'text-blue-300' : 'text-white hover:bg-white/10'
                    }
                  `}
                  style={{
                    letterSpacing: '0.04em',
                    textShadow: darkOnLight ? 'none' : '0 1px 4px rgba(0,0,0,0.5)',
                    textTransform: 'uppercase',
                  }}
                >
                  <span>{item.title}</span>
                  {item.subItems.length > 0 && <ChevronDown className="w-4 h-4 ml-1" />}
                </Link>

                {item.subItems.length > 0 && activeDropdown === item.title && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 z-50">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.title}
                        to={subItem.href}
                        className={`block px-4 py-2 text-sm transition-colors duration-200 text-gray-700 hover:bg-gray-100 ${location.pathname === subItem.href ? 'font-bold text-[#0074c1]' : ''}`}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors duration-200 ${darkOnLight ? 'text-gray-600 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className={`lg:hidden absolute top-full left-0 w-full ${darkOnLight ? 'bg-white shadow-lg' : 'bg-gray-900/95'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <div key={item.title}>
                <Link
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${darkOnLight ? 'text-gray-700' : 'text-white'} ${isActivePath(item.href) ? (darkOnLight ? 'bg-gray-100' : 'bg-white/10') : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
                {item.subItems.length > 0 && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.title}
                        to={subItem.href}
                        className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${darkOnLight ? 'text-gray-600' : 'text-gray-300'} ${location.pathname === subItem.href ? 'font-bold' : ''}`}
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
    </header>
  );
};

export default Header;
