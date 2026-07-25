import hero from "../assets/home/hero.mp4";
import { motion, useInView } from "framer-motion";
import { Link } from "../router";
import {
  ArrowUpRight,
  Award,
  Boxes,
  Briefcase,
  Building2,
  Calendar,
  CheckCircle2,
  Compass,
  CreditCard,
  Factory,
  FileCheck,
  FileSearch,
  FileSignature,
  Globe2,
  HandCoins,
  History,
  HomeIcon,
  KeyRound,
  Landmark,
  LineChart,
  Map,
  MapPin,
  MapPinned,
  Maximize,
  Plane,
  Quote,
  ScrollText,
  ShieldCheck,
  Store,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import aboutImg from "../assets/home/about-board.jpg";
import dholera from "../assets/home/dholera.jpeg";
import londonmart from "../assets/londonmart/londonmart.jpg";
import aceedit from "../assets/home/ace-edit.png";
import galaxyImg from "../assets/home/galaxy.jpeg";
import gaurImg from "../assets/home/galaxynorth.png";
import aceImg from "../assets/home/ace-estate.jpg";
import g1 from "../assets/ace estate/est1.webp";
import g2 from "../assets/aceedit/ace4.jpeg";
import g3 from "../assets/iconicnest/nest2.jpg";
import g4 from "../assets/ace estate/est5.webp";
import g5 from "../assets/home/gallery2_1.jpg";
import g6 from "../assets/aceedit/ace5.png";
import g7 from "../assets/home/6.webp";
import g8 from "../assets/iconicnest/nest6.png";
import airport from "../assets/home/insight-airport.jpg";
import expressway from "../assets/home/insight-expressway.jpg";
import nri from "../assets/home/insight-nri.jpg";
import smartCity from "../assets/home/smart-city.jpg";
import jatin from "../assets/home/jatin.jpeg";
import mukesh from "../assets/home/mukesh.jpeg";
import yashi from "../assets/home/yashi.jpeg";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import SEO from "../components/SEO";

const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const AnimatedUnderline = () => (
  <motion.span
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    className="block w-12 h-[2px] bg-primary origin-left"
  />
);

const TRUST_ITEMS = [
  { icon: ShieldCheck, text: "RERA Compliant" },
  { icon: FileCheck, text: "Title Clear" },
  { icon: Map, text: "7/12 Verified" },
  { icon: Landmark, text: "Freehold" },
  { icon: History, text: "50+ Years Combined Experience" },
  { icon: Award, text: "NRI-Friendly Investment" },
  { icon: Users, text: "500+ Investors Served" },
];

const STATS = [
  { value: 50, suffix: "+", label: "Years Combined Experience" },
  { value: 5, suffix: "+", label: "Prime Markets" },
  { value: 6, suffix: "+", label: "Major Projects" },
  { value: 500, suffix: "+", label: "Happy Investors" },
  { value: 250, suffix: "+ Cr", prefix: "₹", label: "Transaction Volume" },
];

const SERVICES = [
  {
    icon: MapPin,
    title: "Land Investment Advisory",
    desc: "Strategic guidance on acquiring high-potential land parcels in emerging corridors.",
  },
  {
    icon: Building2,
    title: "Plotted Developments",
    desc: "Premium plotted communities with world-class infrastructure and clear titles.",
  },
  {
    icon: Store,
    title: "Commercial Spaces",
    desc: "High-yield commercial real estate opportunities in bustling business districts.",
  },
  {
    icon: HomeIcon,
    title: "Residential Land",
    desc: "Secure, freehold residential plots for building your dream home or future resale.",
  },
  {
    icon: Factory,
    title: "Industrial Land",
    desc: "Strategic industrial plots near major transport hubs and freight corridors.",
  },
  {
    icon: LineChart,
    title: "Investor Relations",
    desc: "End-to-end portfolio management and regular updates for NRI and domestic investors.",
  },
];

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Transparent Dealings",
    desc: "No hidden charges, no inflated promises. Every number you see is the number you pay.",
  },
  {
    icon: ScrollText,
    title: "Verified Titles",
    desc: "Independent legal scrutiny on every plot — title, RERA, 7/12 and encumbrance, all on record.",
  },
  {
    icon: Boxes,
    title: "Curated Inventory",
    desc: "We say no to ten projects for every one we recommend. Quality is the filter, not commission.",
  },
  {
    icon: Globe2,
    title: "NRI-Friendly",
    desc: "Remote site visits, virtual documentation and dedicated overseas-investor support across time zones.",
  },
  {
    icon: CreditCard,
    title: "Flexible Payment Plans",
    desc: "Construction-linked, instalment and customised payment structures for every investor profile.",
  },
  {
    icon: HandCoins,
    title: "End-to-End Advisory",
    desc: "From entry to exit — site visits, paperwork, possession, resale, portfolio counsel under one roof.",
  },
];

const PROJECTS = [
  {
    name: "Iconic Nest",
    location: "Dholera, Gujarat",
    type: "Residential Plots",
    details: "71 plots • 155-300 sq yards • ~11,661 sqm",
    image: dholera,
    status: "Selling Fast",
    link: "/dholera-plots",
  },
  {
    name: "London Mart",
    location: "Greater Noida West",
    type: "Commercial Space",
    details: "Premium Retail & Office Spaces",
    image: londonmart,
    status: "Premium",
    link: "/london-mart",
  },
  {
    name: "Ace Edit",
    location: "Yamuna Expressway",
    type: "Mixed Use",
    details: "Near Upcoming Jewar Airport",
    image: aceedit,
    status: "Strategic",
    link: "/ace-edit",
  },
];

const C_PROJECTS = [
  {
    name: "Galaxy North Avenue",
    location: "GC-3 Gaur City",
    description:
      "A flagship integrated township association — large-scale residential community with schools, retail and green spaces that set the benchmark for new-city living.",
    image: gaurImg,
    link: "/gaur-city",
  },
  {
    name: "Ace Estate",
    location: "Yamuna Expressway",
    description:
      "A contemporary residential development positioned along one of India's most promising growth corridors, anchored by the upcoming Noida International Airport.",
    image: aceImg,
    link: "/ace-estate",
  },
];

const GALLERY_ITEMS = [
  { src: g1, h: "h-72", caption: "Waterfront Landscapes" },
  { src: g5, h: "h-96", caption: "Luxury Retail Boulevard" },
  { src: g2, h: "h-80", caption: "Corporate Architecture" },
  { src: g6, h: "h-72", caption: "Urban Night Residences" },
  { src: g3, h: "h-96", caption: "Nature-Inspired Masterplan" },
  { src: g7, h: "h-72", caption: "Minimal Luxury Suites" },
  { src: g4, h: "h-72", caption: "Grand Hospitality Interiors" },
  { src: g8, h: "h-80", caption: "Integrated Business District" },
];

const ARTICLES = [
  {
    img: airport,
    tag: "Infrastructure",
    date: "Dec 2025",
    title: "Dholera International Airport — Phase 1 Completed",
    excerpt:
      "With the runway and terminal handover, Dholera SIR transitions from blueprint to live, operational smart city — and early plot holders take centre stage.",
  },
  {
    img: expressway,
    tag: "Market Update",
    date: "Q4 2025",
    title: "Jewar Airport Update: Yamuna Expressway Surge",
    excerpt:
      "Trial flights, anchor industries and the upcoming film city are converging — here's how it reprices land along the Yamuna corridor for the next decade.",
  },
  {
    img: nri,
    tag: "Investor Insight",
    date: "2026",
    title: "Why NRIs Are Choosing India's Greenfield Cities",
    excerpt:
      "Currency tailwinds, infrastructure visibility and transparent RERA enforcement are pulling overseas Indian capital back home — into early-stage corridors.",
  },
];

const STEPS = [
  {
    icon: Compass,
    title: "Discovery",
    desc: "We listen to your investment goals, risk appetite and time horizon to shortlist the right corridor and asset class.",
  },
  {
    icon: FileSearch,
    title: "Due Diligence",
    desc: "Title verification, RERA status, 7/12 records, encumbrance, and developer credibility — fully audited before we present anything.",
  },
  {
    icon: MapPinned,
    title: "Site Visit",
    desc: "Curated, hosted site visits with infrastructure walkthroughs, neighbourhood context and on-ground market insight.",
  },
  {
    icon: FileSignature,
    title: "Documentation",
    desc: "Transparent paperwork, registered agreements, structured payment plans, and full compliance — handled end-to-end.",
  },
  {
    icon: KeyRound,
    title: "Possession & Beyond",
    desc: "Smooth handover, exit advisory, resale support and ongoing portfolio counsel for the lifetime of your investment.",
  },
];

const TESTIMONIALS = [
  {
    text: "JM Ventures provided exceptional guidance in securing our plot in Dholera. Their foresight on the infrastructure developments was spot on. Our investment has already appreciated remarkably.",
    author: "Rajiv M.",
    role: "NRI Investor, UK",
  },
  {
    text: "The clarity of title and sheer professionalism with which the London Mart deal was handled was refreshing. They are a rare breed of real estate advisors who truly understand value creation.",
    author: "Anil S.",
    role: "HNI Investor, Delhi",
  },
  {
    text: "Investing near the Yamuna Expressway seemed daunting until I met the JM Ventures team. Their 50+ years of combined experience showed in their meticulous due diligence.",
    author: "Priya V.",
    role: "Corporate Executive",
  },
];

const FAQS = [
  {
    q: "Are the projects RERA compliant?",
    a: "Absolutely. All our featured developments, including Iconic Nest and London Mart, are strictly RERA compliant, ensuring complete transparency and security for your investment.",
  },
  {
    q: "Why should I invest in Dholera?",
    a: "Dholera is India's first platinum-rated greenfield smart city, backed by massive government investment. With the upcoming international airport, expressway, and major corporate anchor industries (like Tata's fab), early investors stand to gain unprecedented capital appreciation.",
  },
  {
    q: "Can NRIs invest in these plots?",
    a: "Yes, NRIs can legally invest in commercial and residential real estate in India. We provide end-to-end assistance with documentation, foreign exchange regulations (FEMA), and portfolio management.",
  },
  {
    q: "What kind of payment plans are available?",
    a: "We offer flexible, construction-linked, and time-linked payment plans depending on the project to ensure financial comfort while securing your asset.",
  },
  {
    q: "How do you ensure clear title and due diligence?",
    a: "We exclusively deal in properties that are 7/12 verified and freehold. Our legal team conducts rigorous multi-level due diligence before onboarding any project to our portfolio.",
  },
  {
    q: "What expected returns are realistic for the Yamuna Expressway corridor?",
    a: "Given the proximity to the Jewar International Airport and Film City, the corridor is witnessing rapid infrastructural growth. Historically, similar corridors have seen 15-25% annualized appreciation in the developmental phase.",
  },
];

const leaders = [
  {
    name: "Jatin Madani",
    role: "DIRECTOR",
    img: jatin,
    bio: "25+ years in NCR real estate, expert in Noida, Greater Noida, Yamuna Expressway land investments and project development.",
  },
  {
    name: "Yashi Madani",
    role: "DIRECTOR",
    img: yashi,
    bio: "Queen Mary University of London graduate; next-generation leadership focused on brand, investor engagement, and digital growth.",
  },
  {
    name: "Mukesh Jodhani",
    role: "DIRECTOR",
    img: mukesh,
    bio: "25+ years across NCR property markets; strategic real estate advisory with deep developer relationships.",
  },
];

const Counter = ({ end, suffix = "", prefix = "", inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 1800;
    const start = performance.now();
    let raf;

    const tick = (t) => {
      const progress = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(eased * end));

      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, [end, inView]);

  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

const Home = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <SEO
        title="Dholera Smart City Plots | Buy Residential Plots in Dholera SIR | JM Ventures"
        description="Invest in government-approved residential plots in Dholera Smart City with JM Ventures. Explore Dholera SIR projects, plot prices, site visits, expert consultation & secure investment opportunities."
        url="https://www.jm-ventures.in/"
      />
      {/* hero section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
        {/* Animated Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            src={hero}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            poster="/hero-bg.jpg"
          />
          {/* Burgundy gradient overlay */}
          <div className="absolute inset-0 bg-[hsl(335_46%_15%/0.55)] mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-background" />
        </div>

        <div className="container relative z-10 mx-auto px-6 md:px-12 pt-32 pb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-block py-1.5 px-4 rounded-full bg-white/10 text-white/90 backdrop-blur-sm border border-white/20 text-sm tracking-[0.2em] uppercase mb-7"
            >
              Real Estate Investment Advisory
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-[1.05]"
            >
              Creating Value in <br className="hidden md:block" />
              <span className="text-white italic">India's Corridors</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg md:text-xl text-white/85 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
            >
              We identify high-growth property opportunities across Dholera,
              Noida, Greater Noida, and the Yamuna Expressway.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/projects"
                size="lg"
                className="w-full sm:w-auto text-base text-white border-none bg-primary py-2 rounded-lg px-8"
              >
                Explore Projects
              </Link>
              <Link
                to="/about"
                variant="outline"
                className="w-full sm:w-auto py-2 px-8 bg-white/5 text-white hover:bg-white/10 rounded-lg border-[1px] border-white text-base"
              >
                Our Philosophy
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-black/60"
          >
            <span className="text-[10px] uppercase tracking-[0.3em]">
              <a href="#about">Scroll</a>
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-px h-10 bg-gradient-to-b from-white/60 to-transparent"
            />
          </motion.div>
        </div>
      </section>
      {/* marquee */}
      <section className="bg-background py-8 border-y border-border overflow-hidden">
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
          <motion.div
            className="flex gap-12 md:gap-20 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          >
            {TRUST_ITEMS.map((item, index) => (
              <div
                key={index}
                className="flex shrink-0 items-center gap-3 text-muted-foreground"
              >
                <item.icon className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium uppercase tracking-[0.18em]">
                  {item.text}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* about */}
      <section id="about" className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary font-medium tracking-[0.18em] uppercase text-sm mb-5 block">
                About JM Ventures
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
                Our Philosophy: <br />
                <span className="text-primary italic">Creating Value</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At JM Ventures, we believe that real estate investment is more
                than just acquiring land—it's about foreseeing growth,
                understanding market dynamics, and creating enduring value for
                our investors.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                With decades of deep market expertise, we specialize in
                identifying greenfield opportunities and high-growth corridors
                before they reach mainstream saturation, ensuring our clients
                achieve exceptional returns with absolute security.
              </p>

              <div className="grid grid-cols-2 gap-5 max-w-md">
                <div className="border-l-2 border-primary pl-4">
                  <div className="text-3xl font-serif font-bold text-primary">
                    Vision
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    A trusted platform connecting investors to India's most
                    promising corridors.
                  </p>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <div className="text-3xl font-serif font-bold text-primary">
                    Mission
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Transparent, research-backed investment opportunities,
                    end-to-end.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, dela3y: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={aboutImg}
                  alt="JM Ventures leadership in strategy session"
                  className="w-full h-[520px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="absolute -bottom-8 -left-6 md:-left-10 bg-background border border-border rounded-2xl p-6 shadow-2xl max-w-[260px]"
              >
                <div className="text-5xl font-serif font-bold text-primary mb-1">
                  50+
                </div>
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Years Combined Leadership Experience
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="absolute -top-6 -right-4 md:-right-8 bg-primary text-primary-foreground rounded-2xl px-6 py-4 shadow-2xl"
              >
                <div className="text-xl font-serif italic text-white">
                  Creating Value
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* stats */}
      <section
        ref={ref}
        className="relative py-20 bg-primary text-primary-foreground overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] [background-size:32px_32px]" />
        <div className="container relative mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 md:gap-6">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-serif font-bold text-white/90 mb-3 tabular-nums">
                  <Counter
                    end={s.value}
                    suffix={s.suffix}
                    prefix={s.prefix}
                    inView={inView}
                  />
                </div>
                <div className="text-xs md:text-sm uppercase tracking-[0.18em] text-white">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* services section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              Comprehensive Real Estate Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-full hover:-translate-y-2 transition-transform duration-300 border-border/50 shadow-[0px_0px_4px] shadow-black/20 rounded-lg bg-card hover:shadow-[0px_2px_10px] hover:shadow-black/20">
                  <div className="p-8">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Why JM Ventures */}
      <section className="py-24 bg-gradient-to-tr from-[#585b5e]/60 via-primary/50 to-primary/30">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary font-medium tracking-[0.18em] uppercase text-sm mb-4 block">
              Why JM Ventures
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Built on Trust. Measured in Decades.
            </h2>
            <p className="text-muted-foreground text-lg">
              What you get when fifty years of relationships, market memory and
              quiet discipline back every recommendation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative p-8 rounded-2xl border border-border bg-white/50 hover:border-primary/40 hover:-translate-y-1 hover:shadow-xl transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                  <f.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                  {f.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* ongoing projects */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">
                Featured Portfolio
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                Curated Investment Opportunities
              </h2>
              <p className="text-muted-foreground text-lg">
                Including completed landmarks like Galaxy, Gaur City, and Ace
                Estate.
              </p>
            </div>
            <Link
              to="/projects"
              className="text-sm px-5 py-2 border-[1px] border-black rounded-lg"
            >
              View All Projects
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <Link key={index} to={project.link}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="group relative rounded-2xl overflow-hidden bg-card border border-border"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 z-20 bg-background rounded-lg text-xs px-2 py-1 text-foreground hover:bg-background border-none shadow-sm font-semibold">
                      {project.status}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm font-medium text-primary mb-2">
                      {project.type}
                    </div>
                    <h3 className="text-2xl font-serif font-bold mb-2">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground mb-4 text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm py-3 border-t border-border">
                      <Maximize className="w-4 h-4" />
                      <span>{project.details}</span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* completed projects */}
      <section className="py-24 bg-gradient-to-b from-[#585b5e]/50 via-transparent to-[#585b5e]/20">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary font-medium tracking-[0.18em] uppercase text-sm mb-4 block">
              Track Record
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Completed & Associated Projects
            </h2>
            <p className="text-muted-foreground text-lg">
              Decades of association with developments that shaped India's most
              sought-after residential corridors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {C_PROJECTS.map((p, i) => (
              <Link key={p.name} to={p.link}>
                <motion.article
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: i * 0.15 }}
                  className="group bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
                >
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-[1.4s] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-background/95 backdrop-blur px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-primary">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Completed
                    </div>
                  </div>
                  <div className="p-7">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      {p.location}
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
                      {p.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {p.description}
                    </p>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* gallery */}
      <section className="py-24 bg-gradient-to-b from-primary/30 via-transparent to-primary/20">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary font-medium tracking-[0.18em] uppercase text-sm mb-4 block">
              The Lifestyle
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              A Curated Visual Brief
            </h2>
            <p className="text-muted-foreground text-lg">
              Glimpses of the spaces, materials and moods that shape the
              developments we partner with.
            </p>
          </motion.div>

          <div className="columns-2 md:columns-3 lg:columns-4 gap-5 [column-fill:_balance]">
            {GALLERY_ITEMS.map((item, i) => (
              <motion.figure
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (i % 4) * 0.1 }}
                className="group relative mb-5 break-inside-avoid overflow-hidden rounded-xl"
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  className={`w-full ${item.h} object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <figcaption className="absolute bottom-4 left-4 right-4 text-white text-sm uppercase tracking-[0.18em] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  {item.caption}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>
      {/* Strategic Growth Markets */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        ></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white/90">
              Strategic Growth Markets
            </h2>
            <p className="text-white/90 text-lg">
              We focus exclusively on corridors with massive infrastructure
              investments and unprecedented growth potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold mb-4 font-serif text-white/90">
                Dholera SIR, Gujarat
              </h3>
              <p className="text-primary-foreground/80 mb-6 text-lg leading-relaxed text-white/90">
                India's first platinum-rated greenfield smart city. Part of the
                Delhi-Mumbai Industrial Corridor (DMIC), featuring the upcoming
                Dholera International Airport.
              </p>
              <ul className="space-y-3 font-medium">
                <li className="flex items-center gap-3 text-white/90">
                  <div className="w-2 h-2 rounded-full bg-white"></div>{" "}
                  Government-backed Smart City
                </li>
                <li className="flex items-center gap-3 text-white/90">
                  <div className="w-2 h-2 rounded-full bg-white"></div> 4-way
                  connectivity (Road, Rail, Air, Sea)
                </li>
                <li className="flex items-center gap-3 text-white/90">
                  <div className="w-2 h-2 rounded-full bg-white"></div>{" "}
                  Ahmedabad-Dholera Expressway
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-burgundy-dark/50 backdrop-blur-md p-8 rounded-2xl border border-white/10"
            >
              <h3 className="text-2xl font-bold mb-4 font-serif text-white/90">
                NCR Corridors
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-white/90 mb-2">
                    Yamuna Expressway
                  </h4>
                  <p className="text-sm text-white/80">
                    Proximity to the massive upcoming Jewar International
                    Airport and film city, driving unprecedented appreciation.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white/90 mb-2">
                    Noida & Greater Noida
                  </h4>
                  <p className="text-sm text-white/80">
                    Established hubs with robust infrastructure, IT parks, and
                    seamless connectivity to Delhi.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white/90 mb-2">
                    Greater Noida West
                  </h4>
                  <p className="text-sm text-white/80">
                    The booming residential and commercial extension offering
                    excellent entry-level investment options.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* The Investment Case */}
      <section className="relative py-24 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden mb-16 shadow-2xl"
          >
            <img
              src={smartCity}
              alt="Smart city aerial view"
              className="w-full h-[360px] md:h-[440px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#585b5e]/60 via-primary/70 to-primary/30" />
            <div className="absolute inset-0 flex items-center">
              <div className="px-8 md:px-16 max-w-2xl text-primary-foreground">
                <span className="inline-block text-xs uppercase tracking-[0.25em] mb-4 text-white">
                  The Investment Case
                </span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-5 leading-tight text-white/90">
                  Built Where India Is Going Next.
                </h2>
                <p className="text-lg text-white/90 leading-relaxed">
                  Government-backed greenfield smart cities. 4-way connectivity
                  — road, rail, air and sea. Anchor industries already breaking
                  ground. The first movers here win the cycle.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Why Invest Now?
            </h3>
            <p className="text-muted-foreground text-lg">
              Timing is everything. Infrastructure milestones are rapidly
              approaching, setting the stage for significant capital
              appreciation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="h-full bg-card border-border shadow-[0px_0px_4px] shadow-black/20 rounded-lg">
                <div className="p-6">
                  <Plane className="w-10 h-10 text-[#7f3a55] mb-4" />
                  <h3 className="text-lg font-bold mb-2">
                    Airport Completions
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Dholera Int'l Airport Phase 1 and Jewar Airport are nearing
                    operational readiness (Dec 2025).
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="h-full bg-card border-border shadow-[0px_0px_4px] shadow-black/20 rounded-lg">
                <div className="p-6">
                  <TrendingUp className="w-10 h-10 text-[#7f3a55] mb-4" />
                  <h3 className="text-lg font-bold mb-2">Unmatched ROI</h3>
                  <p className="text-sm text-muted-foreground">
                    Early movers in greenfield smart cities historically witness{" "}
                    <span className="font-bold text-[#7f3a55]">2x-3x</span>{" "}
                    appreciation within 5-7 years.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="h-full bg-card border-border shadow-[0px_0px_4px] shadow-black/20 rounded-lg">
                <div className="p-6">
                  <Briefcase className="w-10 h-10 text-[#7f3a55] mb-4" />
                  <h3 className="text-lg font-bold mb-2">Corporate Influx</h3>
                  <p className="text-sm text-muted-foreground">
                    Tata Group's semiconductor fab and massive anchor industries
                    are establishing base in Dholera.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="h-full bg-card border-border shadow-[0px_0px_4px] shadow-black/20 rounded-lg">
                <div className="p-6">
                  <Zap className="w-10 h-10 text-[#7f3a55] mb-4" />
                  <h3 className="text-lg font-bold mb-2">Plug & Play Infra</h3>
                  <p className="text-sm text-muted-foreground">
                    World-class underground utilities, smart grids, and
                    expansive road networks already in place.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* process */}
      <section className="py-24 bg-gradient-to-b from-[#585b5e]/50 via-primary/40 to-primary/30">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <span className="text-primary font-medium tracking-[0.18em] uppercase text-sm mb-4 block">
              How We Work
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              A Considered Investor Journey
            </h2>
            <p className="text-muted-foreground text-lg">
              Five disciplined steps designed to remove ambiguity and protect
              your capital from first call to final possession.
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
              {STEPS.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="relative text-center"
                >
                  <div className="relative inline-flex w-20 h-20 items-center justify-center rounded-full bg-background border-2 border-primary/20 mb-5 shadow-sm">
                    <s.icon className="w-8 h-8 text-primary" />
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-white/90 text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </div>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-foreground mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {s.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* LEADERSHIP */}
      <section className="py-24 md:py-32 bg-[#F2EFEA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={STAGGER}
            className="max-w-3xl mb-16"
          >
            <motion.div
              variants={FADE_UP}
              className="flex items-center gap-4 mb-6"
            >
              <AnimatedUnderline />
              <span className="text-eyebrow text-primary">LEADERSHIP</span>
            </motion.div>
            <motion.h2
              variants={FADE_UP}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-[1.1] tracking-tight"
            >
              The people behind every signature.
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={STAGGER}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {leaders.map((leader) => (
              <motion.div
                key={leader.name}
                variants={FADE_UP}
                className="flex flex-col h-full hover:-translate-y-2 transition-transform duration-500"
              >
                <div className="aspect-[4/5] overflow-hidden bg-foreground rounded-xl">
                  <img
                    src={leader.img}
                    alt={leader.name}
                    className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all rounded-xl duration-700 hover:scale-105"
                  />
                </div>
                <div className="pt-6 flex-1 flex flex-col">
                  <h3 className="text-3xl font-serif font-bold text-foreground mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-primary/80 font-mono text-xs font-bold uppercase tracking-[0.15em] mb-4">
                    {leader.role}
                  </p>
                  <p className="text-foreground/70 font-sans leading-relaxed flex-1">
                    {leader.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* testimonial section */}
      <section className="py-24 bg-[#585b5e]/30 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              Investor Perspectives
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto relative px-8"
          >
            <Quote className="absolute top-0 left-0 w-24 h-24 text-primary/10 -z-10 -translate-x-1/2 -translate-y-1/2 rotate-180" />

            <Swiper
              modules={[Navigation]}
              navigation={true}
              spaceBetween={20}
              slidesPerView={1}
            >
              {TESTIMONIALS.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="p-6 md:p-8 text-center">
                    <p className="text-xl md:text-2xl text-foreground font-serif italic leading-relaxed mb-8">
                      "{testimonial.text}"
                    </p>
                    <div>
                      <div className="font-bold text-lg">
                        {testimonial.author}
                      </div>
                      <div className="text-muted-foreground text-sm">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </section>
      {/* Blog section */}
      {/* <section className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6"
          >
            <div className="max-w-2xl">
              <span className="text-primary font-medium tracking-[0.18em] uppercase text-sm mb-4 block">
                Market Insights
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                The View From the Ground
              </h2>
            </div>
            <p className="text-muted-foreground md:max-w-sm">
              Curated reads on the corridors, milestones and macro shifts moving
              Indian real estate.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {ARTICLES.map((a, i) => (
              <motion.article
                key={a.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="group cursor-pointer"
              >
                <div className="relative h-64 rounded-2xl overflow-hidden mb-5">
                  <img
                    src={a.img}
                    alt={a.title}
                    className="w-full h-full object-cover transition-transform duration-[1.4s] group-hover:scale-110"
                  />
                  <span className="absolute top-4 left-4 bg-background/95 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-primary">
                    {a.tag}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-wider mb-3">
                  <Calendar className="w-3.5 h-3.5" /> {a.date}
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
                  {a.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {a.excerpt}
                </p>
                <span className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold group-hover:gap-3 transition-all">
                  Read insight <ArrowUpRight className="w-4 h-4" />
                </span>
              </motion.article>
            ))}
          </div>
        </div>
      </section> */}
      {/* FAQ section */}
      <section className="py-24 bg-gradient-to-t from-[#585b5e]/20 via-primary/20 to-primary/30">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg">
              Clear answers to help you make informed decisions.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div
                key={index}
                className="border rounded-xl bg-white/70 backdrop-blur-md shadow-sm"
              >
                {/* Question */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center px-5 py-4 text-left"
                >
                  {faq.q}
                  <span className="text-xl">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? "max-h-40 px-5 pb-4" : "max-h-0"
                  }`}
                >
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-primary text-primary-foreground text-center px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white/90">
            Ready to Create Value?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light">
            Schedule a private consultation with our directors to discuss
            tailored investment opportunities across India's most promising real
            estate corridors.
          </p>
          <Link
            to="/contact"
            className="bg-white text-primary hover:bg-gray-100 hover:text-primary text-lg px-8 py-5 h-14 rounded-md font-semibold border-none"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
