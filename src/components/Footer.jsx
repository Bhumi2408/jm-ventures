import { Link } from "../router";
import logo from "../assets/jmlogo.png";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background pt-20 pb-10 border-t border-border">
      <div className="max-w-8xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-14 mb-16">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="font-serif text-2xl font-bold tracking-tight text-foreground">
                <img src={logo} alt="logo" className="w-20" />
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
              Creating unparalleled value through strategic real estate
              investments in India's most promising corridors.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/people/JM-Ventures/61590489320165/" target="_blank"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white hover:border-primary transition-colors"
              >
                <FaFacebook size={18} />
              </a>
              
              <a
                href="https://www.instagram.com/jm.ventures_?igsh=ZG9ic3JjZDVpbWZy" target="_blank"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white hover:border-primary transition-colors"
              >
                <BsInstagram size={18} />
              </a>
              <a
                href="https://www.youtube.com/@JMVentures-q3j" target="_blank"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white hover:border-primary transition-colors"
              >
                <FaYoutube size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-6 uppercase tracking-wider text-sm">
              Quick Links
            </h4>
            <ul className="space-y-4 text-muted-foreground text-sm">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-primary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="hover:text-primary transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-6 uppercase tracking-wider text-sm">
              Contact Us
            </h4>
            <ul className="space-y-4 text-muted-foreground text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>
                  Mindmill Corporate towers, Film City, Sector 16A, Noida,
                  UP-201301
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <span>+91 98990 53053</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <span>info@jm-ventures.in</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-6 uppercase tracking-wider text-sm">
              Newsletter
            </h4>
            <p className="text-muted-foreground text-sm mb-4">
              Subscribe for the latest investment insights.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-3 sm:gap-0"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Email address"
               className="flex-1 min-w-0 bg-muted border border-border px-4 py-2 sm:rounded-l-md rounded-md focus:outline-none focus:border-primary text-sm"
              />
              <button
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded-r-md font-medium text-sm hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} JM Ventures. All rights reserved |
            Powered by Bharat Bizmart
          </p>
          <div className="flex gap-6">
            <a href="/terms-and-conditions" className="hover:text-foreground transition-colors">
              Terms & Conditions
            </a>
            <a href="/privacy-policy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
