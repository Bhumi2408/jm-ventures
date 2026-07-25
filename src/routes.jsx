import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import IconicNest from "./pages/IconicNest";
import LondonMart from "./pages/LondonMart";
import AceEdit from "./pages/AceEdit";
import Galaxy from "./pages/Galaxy";
import GaurCity from "./pages/GaurCity";
import AceEstate from "./pages/AceEstate";
import Privacy from "./pages/Privacy";
import Termsconditions from "./pages/Termsconditions";
import ThankYou from "./pages/ThankYou";
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";

export const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/services", component: Services },
  { path: "/projects", component: Projects },
  { path: "/contact", component: Contact },
  { path: "/dholera-plots", component: IconicNest },
  { path: "/london-mart", component: LondonMart },
  { path: "/ace-edit", component: AceEdit },
  { path: "/galaxy", component: Galaxy },
  { path: "/gaur-city", component: GaurCity },
  { path: "/ace-estate", component: AceEstate },
  { path: "/privacy-policy", component: Privacy },
  { path: "/terms-and-conditions", component: Termsconditions },
  { path: "/blog", component: BlogPage },
  { path: "/blog/:slug", component: BlogDetailPage },

  { path: "/thank-you", component: ThankYou },
];