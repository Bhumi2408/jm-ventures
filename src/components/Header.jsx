import { useEffect, useState } from "react";
import { Link, useLocation } from "../router";
import logo from "../assets/jmlogo.png";
import { MapPin, Menu, X } from "lucide-react";
import { FaAngleDown } from "react-icons/fa";
import acelogo from "../assets/aceeditlogo.png";
import aceestatelogo from "../assets/aceestatelogo.png";
import gclogo from "../assets/gclogo.jpeg";
import iconiclogo from "../assets/iconicnestlogo.png";
import lmlogo from "../assets/lmlogo.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = () => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const location = useLocation();

  const projectLogos = {
    "/dholera-plots": iconiclogo,
    "/ace-estate": aceestatelogo,
    "/ace-edit": acelogo,
    "/london-mart": lmlogo,
    "/gaur-city": gclogo,
  };

  const currentProjectLogo = projectLogos[location.pathname];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-border py-2"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-10 flex items-center justify-between">
        <div className="flex items-center">
          {/* Main Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="logo" className="w-20" />
          </Link>

          {/* Project Logo */}
          {currentProjectLogo && (
            <>
              <div
                className={`mx-4 w-px transition-all duration-300 ${
                  scrolled ? "bg-black/10 h-8" : "bg-white/20 h-10"
                }`}
              />

              <img
                src={currentProjectLogo}
                alt="project-logo"
                className="w-14 lg:w-16 h-auto object-contain transition-all duration-300"
              />
            </>
          )}
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            <Link to="/">
              <button
                className={`text-sm font-medium hover:text-primary transition-colors ${
                  scrolled
                    ? "text-foreground"
                    : "text-white/90 hover:text-white"
                }`}
              >
                Home
              </button>
            </Link>
            <Link to="/about">
              <button
                className={`text-sm font-medium hover:text-primary transition-colors ${
                  scrolled
                    ? "text-foreground"
                    : "text-white/90 hover:text-white"
                }`}
              >
                About Us
              </button>
            </Link>
            <Link to="/services">
              <button
                className={`text-sm font-medium hover:text-primary transition-colors ${
                  scrolled
                    ? "text-foreground"
                    : "text-white/90 hover:text-white"
                }`}
              >
                Services
              </button>
            </Link>
            <div className="relative group">
              <Link to="/projects">
                <button
                  className={`text-sm font-medium flex items-center gap-2 transition-colors ${
                    scrolled
                      ? "text-foreground"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  Projects
                  <FaAngleDown className="transition-transform duration-300 group-hover:rotate-180" />
                </button>
              </Link>

              {/* Dropdown */}
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 pt-3
opacity-0 translate-y-2 scale-95 pointer-events-none
group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 group-hover:pointer-events-auto
transition-all duration-300 ease-out w-56"
              >
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 py-3">
                  {/* Item */}
                  <Link to="/dholera-plots">
                    <div className="px-5 py-3 hover:bg-[#1A1414] group/item transition rounded-lg">
                      <p className="text-sm font-semibold text-gray-900 group-hover/item:text-white">
                        Iconic Nest
                      </p>
                      <p className="text-xs text-gray-500 flex gap-1 items-center font-semibold group-hover/item:text-gray-400">
                        <MapPin className="w-3 h-3" /> Dholera SIR, Gujarat
                      </p>
                    </div>
                  </Link>

                  <Link to="/ace-estate">
                    <div className="px-5 py-3 hover:bg-[#1A1414] group/item transition rounded-lg">
                      <p className="text-sm font-semibold text-gray-900 group-hover/item:text-white">
                        Ace Estate
                      </p>
                      <p className="text-xs text-gray-500 flex gap-1 items-center font-semibold group-hover/item:text-gray-400">
                        <MapPin className="w-3 h-3" />
                        Yamuna Expressway
                      </p>
                    </div>
                  </Link>

                  <Link to="/ace-edit">
                    <div className="px-5 py-3 hover:bg-[#1A1414] group/item transition rounded-lg">
                      <p className="text-sm font-semibold text-gray-900 group-hover/item:text-white">
                        Ace Edit
                      </p>
                      <p className="text-xs text-gray-500 flex gap-1 items-center font-semibold group-hover/item:text-gray-400">
                        <MapPin className="w-3 h-3" />
                        Yamuna Expressway
                      </p>
                    </div>
                  </Link>

                  <Link to="/london-mart">
                    <div className="px-5 py-3 hover:bg-[#1A1414] group/item transition rounded-lg">
                      <p className="text-sm font-semibold text-gray-900 group-hover/item:text-white">
                        London Mart
                      </p>
                      <p className="text-xs text-gray-500 flex gap-1 items-center font-semibold group-hover/item:text-gray-400">
                        <MapPin className="w-3 h-3" />
                        Greater Noida West
                      </p>
                    </div>
                  </Link>

                  <Link to="/gaur-city">
                    <div className="px-5 py-3 hover:bg-[#1A1414] group/item transition rounded-lg">
                      <p className="text-sm font-semibold text-gray-900 group-hover/item:text-white">
                        Galaxy North Avenue
                      </p>
                      <p className="text-xs text-gray-500 flex gap-1 items-center font-semibold group-hover/item:text-gray-400">
                        <MapPin className="w-3 h-3" /> GC-3 Gaur City
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <Link to="/blog">
              <button
                className={`text-sm font-medium hover:text-primary transition-colors ${
                  scrolled
                    ? "text-foreground"
                    : "text-white/90 hover:text-white"
                }`}
              >
                Blog
              </button>
            </Link>
            <Link to="/contact">
              <button
                className={`text-sm font-medium hover:text-primary transition-colors ${
                  scrolled
                    ? "text-foreground"
                    : "text-white/90 hover:text-white"
                }`}
              >
                Contact Us
              </button>
            </Link>
          </ul>
          <Link
            to="/contact"
            variant={scrolled ? "default" : "outline"}
            className={
              scrolled
                ? "text-white py-2 px-3 bg-primary rounded-lg text-sm"
                : "bg-white/10 text-white text-sm font-medium hover:bg-white/20 border-[1px] border-white py-2 px-4 rounded-lg"
            }
          >
            Schedule Consultation
          </Link>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className={`lg:hidden ${scrolled ? "text-foreground" : "text-white"}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-border shadow-2xl rounded-b-3xl overflow-hidden">
          <div className="px-6 py-6 flex flex-col gap-6">
            {/* Links */}
            <ul className="flex flex-col gap-2">
              <Link
                to="/"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setMobileDropdownOpen(false);
                }}
              >
                <div className="px-4 py-4 rounded-2xl hover:bg-primary/5 transition-all duration-300">
                  <p className="text-base font-semibold text-foreground">
                    Home
                  </p>
                </div>
              </Link>

              <Link
                to="/about"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setMobileDropdownOpen(false);
                }}
              >
                <div className="px-4 py-4 rounded-2xl hover:bg-primary/5 transition-all duration-300">
                  <p className="text-base font-semibold text-foreground">
                    About Us
                  </p>
                </div>
              </Link>

              <Link
                to="/services"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setMobileDropdownOpen(false);
                }}
              >
                <div className="px-4 py-4 rounded-2xl hover:bg-primary/5 transition-all duration-300">
                  <p className="text-base font-semibold text-foreground">
                    Services
                  </p>
                </div>
              </Link>

              {/* Projects Dropdown */}
              {/* Projects Dropdown */}
              <div className="rounded-2xl border border-border overflow-hidden">
                {/* Top Row */}
                <div className="flex items-center justify-between px-4 py-4 bg-secondary/20">
                  <Link
                    to="/projects"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileDropdownOpen(false);
                    }}
                    className="text-base font-semibold text-foreground"
                  >
                    Projects
                  </Link>

                  <button
                    onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                    className="text-foreground p-1"
                  >
                    <FaAngleDown
                      className={`transition-transform duration-300 ${
                        mobileDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                {/* Dropdown Items */}
                {mobileDropdownOpen && (
                  <div className="flex flex-col p-3 gap-2 bg-white">
                    <Link
                      to="/dholera-plots"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileDropdownOpen(false);
                      }}
                    >
                      <div className="rounded-xl p-3 hover:bg-primary/5 transition-all duration-300">
                        <p className="font-semibold text-sm text-foreground">
                          Iconic Nest
                        </p>
                        <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                          <MapPin className="w-3 h-3" />
                          Dholera SIR, Gujarat
                        </p>
                      </div>
                    </Link>

                    <Link
                      to="/ace-estate"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileDropdownOpen(false);
                      }}
                    >
                      <div className="rounded-xl p-3 hover:bg-primary/5 transition-all duration-300">
                        <p className="font-semibold text-sm text-foreground">
                          Ace Estate
                        </p>
                        <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                          <MapPin className="w-3 h-3" />
                          Yamuna Expressway
                        </p>
                      </div>
                    </Link>

                    <Link
                      to="/ace-edit"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileDropdownOpen(false);
                      }}
                    >
                      <div className="rounded-xl p-3 hover:bg-primary/5 transition-all duration-300">
                        <p className="font-semibold text-sm text-foreground">
                          Ace Edit
                        </p>
                        <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                          <MapPin className="w-3 h-3" />
                          Yamuna Expressway
                        </p>
                      </div>
                    </Link>

                    <Link
                      to="/london-mart"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileDropdownOpen(false);
                      }}
                    >
                      <div className="rounded-xl p-3 hover:bg-primary/5 transition-all duration-300">
                        <p className="font-semibold text-sm text-foreground">
                          London Mart
                        </p>
                        <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                          <MapPin className="w-3 h-3" />
                          Greater Noida West
                        </p>
                      </div>
                    </Link>

                    <Link
                      to="/gaur-city"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileDropdownOpen(false);
                      }}
                    >
                      <div className="rounded-xl p-3 hover:bg-primary/5 transition-all duration-300">
                        <p className="font-semibold text-sm text-foreground">
                         Galaxy North Avenue
                        </p>
                        <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                          <MapPin className="w-3 h-3" />
                          GC-3 Gaur City
                        </p>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/blog"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setMobileDropdownOpen(false);
                }}
              >
                <div className="px-4 py-4 rounded-2xl hover:bg-primary/5 transition-all duration-300">
                  <p className="text-base font-semibold text-foreground">
                   Blog
                  </p>
                </div>
              </Link>

              <Link
                to="/contact"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setMobileDropdownOpen(false);
                }}
              >
                <div className="px-4 py-4 rounded-2xl hover:bg-primary/5 transition-all duration-300">
                  <p className="text-base font-semibold text-foreground">
                    Contact Us
                  </p>
                </div>
              </Link>
            </ul>

            {/* CTA */}
            <Link
              to="/contact"
              onClick={() => {
                setMobileMenuOpen(false);
                setMobileDropdownOpen(false);
              }}
              className="w-full"
            >
              <div className="bg-primary hover:bg-deep-burgundy transition-all duration-300 text-white text-center py-4 rounded-2xl font-medium shadow-lg">
                Schedule Consultation
              </div>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
