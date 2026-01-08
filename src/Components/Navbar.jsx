import { useState, useEffect } from "react";
import { FaFacebookF, FaTwitter, FaPhoneAlt } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { MdLockOutline, MdOutlineMailOutline } from "react-icons/md";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [honeymoonOpen, setHoneymoonOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Destinations", href: "/destination" },
    { title: "Packages", href: "/tour-packages" },
    {
      title: "Honeymoon Tours",
      dropdown: [
        { title: "Economics", href: "/honeymoon?type=economics" },
        { title: "Standard", href: "/honeymoon?type=standard" },
        { title: "Luxury", href: "/honeymoon?type=luxury" },
      ],
    },
    { title: "Blog", href: "/blog" },
    { title: "About Us", href: "/about-us" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <div
        className={`transition-all duration-300 md:py-1 py-2 ${
          scrolled ? "bg-black text-white shadow-md" : "bg-black/60 text-white py-5"
        }`}
      >
        {/* Desktop TopBar */}
        {!scrolled && (
          <div className="hidden md:flex justify-between items-center text-sm px-26 py-2">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <FaPhoneAlt className="text-white" /> +92 321 410 6223
              </span>
              <span className="flex items-center gap-2">
                <MdOutlineMailOutline size={18} className="text-white" /> info@pakistantravelplaces.com
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a href="#"><FaFacebookF size={14} /></a>
              <a href="#"><FaTwitter size={15} /></a>
              <a href="#"><IoLogoInstagram size={18} /></a>
              <a href="/login" className="flex items-center gap-1 font-bold">
                <MdLockOutline size={18} /> Login
              </a>
            </div>
          </div>
        )}

        {/* Navbar */}
        <nav className="max-w-7xl mx-auto px-11 relative">
          <div className="flex justify-between items-center h-16 w-full">

            {/* Mobile Top Icons */}
            {!scrolled && (
              <div className="md:hidden flex flex-col items-center w-full">
                <div className="flex items-center gap-3 justify-center w-full text-white mt-5">
                  <FaFacebookF size={14} />
                  <FaTwitter size={14} />
                  <IoLogoInstagram size={16} />
                  <a href="/login" className="flex items-center gap-1 font-bold">
                    <MdLockOutline size={16} /> Login
                  </a>
                </div>
                {/* Mobile Logo */}
                <div className="flex justify-center w-full mt-2">
                  <img src="src/assets/logo-2.png" alt="Logo" className="w-58 h-auto" />
                </div>
              </div>
            )}

            {/* Logo */}
            <div className="flex-1 flex justify-center md:justify-start mt-2 md:mt-0 transition-all duration-300">
              <img src="src/assets/logo-2.png" alt="Logo" className="w-58 md:w-70 h-auto" />
            </div>

            {/* Hamburger */}
            <div className="md:hidden absolute right-4 top-6 z-50">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                      menuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>

            {/* Desktop Links */}
            <ul className="hidden md:flex md:items-center md:gap-1 text-white">
              {navLinks.map((link) => (
                <li key={link.title} className="relative px-4 py-2 font-medium group">
                  {link.dropdown ? (
                    <>
                      <button className="relative flex items-center gap-1">
                        {link.title}
                        <span className="absolute left-0 -bottom-6 h-[3px] w-0 bg-[#528efd] transition-all duration-300 group-hover:w-full"></span>
                        <span className="absolute -bottom-5.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-b-[6px] border-l-transparent border-r-transparent border-b-[#528efd] opacity-0 transition-all duration-300 group-hover:opacity-100"></span>
                      </button>

                      <ul className="absolute left-0 top-full mt-5.5 w-40 ml-2 bg-black text-white shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                        {link.dropdown.map((d) => (
                          <li key={d.title}>
                            <a href={d.href} className="block px-4 py-2 hover:bg-gray-800">
                              {d.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <a href={link.href} className="relative block group px-2 py-2">
                      {link.title}
                      <span className="absolute left-0 -bottom-4 h-[3px] w-0 bg-[#528efd] transition-all duration-300 group-hover:w-full"></span>
                      <span className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-b-[6px] border-l-transparent border-r-transparent border-b-[#528efd] opacity-0 transition-all duration-300 group-hover:opacity-100"></span>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Links*/}
          <div
            className={`md:hidden fixed top-0 right-0 h-screen w-1/2 bg-black transform transition-transform duration-300 ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            } z-40`}
          >
            <ul className="flex flex-col mt-32 items-start px-6 gap-4 text-white">
              {navLinks.map((link) => (
                <li key={link.title} className="relative w-full font-medium group">
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() => setHoneymoonOpen(!honeymoonOpen)}
                        className="w-full text-left flex items-center justify-between"
                      >
                        {link.title}
                      </button>
                      {honeymoonOpen && (
                        <ul className="flex flex-col ml-4 mt-2">
                          {link.dropdown.map((d) => (
                            <li key={d.title}>
                              <a href={d.href} className="block py-2">
                                {d.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <a href={link.href} className="block py-2 w-full">
                      {link.title}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
