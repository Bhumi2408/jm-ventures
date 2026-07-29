import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { Link } from "../router"; // or next/link
import { buildFaqSchema } from "../data/Blogsdata";

import {
  MapPinned,
  TrendingUp,
  ShieldCheck,
  Route,
  LineChart,
  MapPin,
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  Phone,
  Plus,
  X,
  Link2,
  ChevronDown,
  Home as HomeIcon,
  Building2,
  Landmark,
  CheckCircle2,
  Users,
  Award,
  Sparkles,
} from "lucide-react";
import iconicNestImg from "../assets/home/dholera.jpeg";
import jmLogo from "../assets/jmlogo.png";
import g1 from "../assets/iconicnest/nest1.jpeg";
import g2 from "../assets/iconicnest/nest2.png";
import g3 from "../assets/iconicnest/nest2.jpg";
import g4 from "../assets/iconicnest/nest3.jpeg";
import g5 from "../assets/iconicnest/nest4.jpeg";
import g6 from "../assets/iconicnest/nest5.jpg";
import g7 from "../assets/iconicnest/nest6.png";
import iconiclogo from "../assets/iconicnestlogo.png";
import SEO from "../components/SEO";

const NAV_LINKS = ["Home", "About", "Projects", "Contact"];

const FEATURES = [
  {
    roman: "i",
    icon: MapPinned,
    title: "Prime Location",
    blurb:
      "Inside Dholera SIR, India's first greenfield smart city. On the airport-bound SH-40 corridor.",
  },
  {
    roman: "ii",
    icon: TrendingUp,
    title: "High Growth Potential",
    blurb:
      "Early-stage entry into a master-planned region backed at the highest level of government.",
  },
  {
    roman: "iii",
    icon: ShieldCheck,
    title: "Clear Documentation",
    blurb:
      "Title-clear, freehold land with verified 7/12 records. Nothing to second-guess.",
  },
  {
    roman: "iv",
    icon: Route,
    title: "Easy Accessibility",
    blurb:
      "Six-lane Ahmedabad–Dholera Expressway, new international airport, proposed metro rail.",
  },
  {
    roman: "v",
    icon: LineChart,
    title: "Future Appreciation",
    blurb:
      "A pre-arrival window comparable to Gurgaon-2010, with stronger infrastructure commitment.",
  },
];

const GALLERY = [
  { src: g1, caption: "Dholera Smart City Headquarters" },
  { src: g7, caption: "Integrated Smart Business District" },
  { src: g3, caption: "Contemporary Commercial Facade" },
  { src: g2, caption: "Delhi–Mumbai Industrial Corridor" },
  { src: g5, caption: "Ground Infrastructure Development" },
  { src: g4, caption: "Strategic Growth Zone Mapping" },
  { src: g6, caption: "Future Expansion Master Layout" },
];

const CONNECTIVITY = [
  {
    label: "Air",
    title: "Dholera International Airport",
    note: "Phase I complete · Dec 2025",
  },
  {
    label: "Road",
    title: "Ahmedabad–Dholera Expressway",
    note: "Six lanes · operational",
  },
  {
    label: "Rail",
    title: "DMIC High-Speed Corridor",
    note: "Under development",
  },
  {
    label: "Sea",
    title: "Gulf of Khambhat Access",
    note: "Industrial port linkage",
  },
];

const WHAT_YOU_GET = [
  { label: "Plot Sizes", value: "155 – 300 sq yards" },
  { label: "Total Plots", value: "71 residential" },
  { label: "Land Area", value: "≈ 11,661 sq m" },
  { label: "Ownership", value: "Freehold · Title Clear" },
  { label: "Advisory", value: "End-to-end paperwork & visits" },
];

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "features", label: "Features" },
  { id: "gallery", label: "Gallery" },
  { id: "location", label: "Location" },
  { id: "details", label: "Details" },
  { id: "enquire", label: "Enquire" },
];

/* ---------------------------------------------------------------------- */
/* Content sourced from the JM Venture Dholera brief                       */
/* ---------------------------------------------------------------------- */

const LIMITED_OFFERS = [
  "Starting Price: Contact for Latest Price",
  "Easy EMI Options Available",
  "100% Clear Title & Documentation",
  "DTCP/NA Approved Projects (where applicable)",
  "Free Site Visit Assistance",
  "Expert Investment Consultation",
  "Limited Premium Corner & Main Road Plots",
];

const MAJOR_DEVELOPMENTS = [
  "International Airport",
  "Expressways & Metro Connectivity",
  "Dedicated Freight Corridor",
  "Industrial Manufacturing Hub",
  "ABCD Building",
  "Smart Roads & Underground Utilities",
  "Solar Power Infrastructure",
  "Business & Logistics Parks",
  "Government-backed Infrastructure Development",
];

const PRICE_FACTORS = [
  "Location",
  "Road Connectivity",
  "Residential or Commercial Zone",
  "Plot Size",
  "Project Approval Status",
  "Future Development Potential",
];

const PLOT_TYPES = [
  {
    icon: HomeIcon,
    roman: "i",
    title: "Residential Plots",
    lede: "Perfect for:",
    items: [
      "Future Home Construction",
      "Holiday Homes",
      "Long-Term Family Investment",
      "Rental Property Development",
    ],
    note: "Available in multiple sizes suitable for different budgets.",
  },
  {
    icon: Building2,
    roman: "ii",
    title: "Commercial Plots",
    lede: "Ideal for:",
    items: [
      "Offices",
      "Retail Shops",
      "Warehouses",
      "Hotels",
      "Commercial Complexes",
      "Business Centers",
    ],
    note: "Commercial land near upcoming infrastructure offers excellent ROI.",
  },
  {
    icon: TrendingUp,
    roman: "iii",
    title: "Investment Plots",
    lede: "Ideal for investors planning:",
    items: [
      "5-Year Investment",
      "10-Year Investment",
      "Wealth Creation",
      "Portfolio Diversification",
    ],
    note: "Our Dholera investment plots are strategically selected in high-growth corridors where future infrastructure development is expected.",
  },
];

const WHY_JM_VENTURE = [
  {
    title: "Verified Projects",
    blurb:
      "Every project undergoes document verification before recommendation.",
  },
  {
    title: "Transparent Pricing",
    blurb: "No hidden charges.",
  },
  {
    title: "Complete Documentation Support",
    blurb: "We assist from booking to registration.",
  },
  {
    title: "Expert Investment Advice",
    blurb:
      "Our specialists analyze future growth corridors before recommending plots.",
  },
  {
    title: "Site Visit Assistance",
    blurb: "Visit the project physically before investing.",
  },
  {
    title: "End-to-End Support",
    blurb:
      "From inquiry to registration, JM Venture stays with you throughout the buying process.",
  },
];

const LAND_DEMAND_DRIVERS = [
  "Industrial Expansion",
  "Government Infrastructure Projects",
  "Growing Employment Opportunities",
  "Increasing Residential Demand",
  "Commercial Development",
];

const LAND_TYPES = [
  "Residential Land",
  "Commercial Land",
  "Township Plots",
  "Investment Plots",
  "Corner Plots",
  "Main Road Facing Plots",
  "Gated Community Plots",
  "Premium Location Plots",
];

const BENEFITS = [
  {
    title: "High Appreciation Potential",
    blurb:
      "Infrastructure development generally increases surrounding land value.",
  },
  {
    title: "Government-Backed Development",
    blurb: "One of India's largest planned smart city projects.",
  },
  {
    title: "Affordable Entry Price",
    blurb:
      "Compared to metro cities, Dholera still offers attractive investment opportunities.",
  },
  {
    title: "Future Commercial Growth",
    blurb: "Industries and businesses create long-term land demand.",
  },
  {
    title: "Flexible Investment Options",
    blurb: "Suitable for small, medium, and large investors.",
  },
];

const CHOOSE_CHECKLIST = [
  "Verify ownership documents",
  "Check project approvals",
  "Understand zoning regulations",
  "Review future master plans",
  "Evaluate road connectivity",
  "Confirm nearby infrastructure",
  "Assess appreciation potential",
  "Work with trusted consultants like JM Venture",
];

const WHO_SHOULD_INVEST = [
  "First-Time Investors",
  "NRI Buyers",
  "Working Professionals",
  "Business Owners",
  "Real Estate Investors",
  "Retirement Planning",
  "Long-Term Wealth Builders",
];

const FAQS = [
  {
    q: "What is the current Dholera plot price?",
    a: "The Dholera plot price depends on the location, plot size, project approvals, and nearby infrastructure developments. At JM Venture, we offer premium Dholera plots at competitive prices. Contact us for the latest price list and available inventory.",
  },
  {
    q: "What is the average Dholera Smart City plot price?",
    a: "The Dholera Smart City plot price varies based on residential or commercial zoning, road connectivity, and project location. Our experts at JM Venture can help you compare different options and choose the best investment.",
  },
  {
    q: "Are Dholera plots for sale legally verified?",
    a: "Yes. JM Venture offers Dholera plots for sale with proper documentation and verified ownership. We guide buyers through the complete verification and registration process for a transparent purchase experience.",
  },
  {
    q: "Is investing in Dholera plots a good decision?",
    a: "Many investors consider Dholera investment plots attractive because of planned infrastructure, industrial development, and long-term growth potential. However, like any real estate investment, it's important to review project details, legal documents, and your own financial goals before investing.",
  },
  {
    q: "What types of land in Dholera are available?",
    a: "You can find various types of land in Dholera, including residential plots, commercial plots, investment plots, corner plots, and gated community developments. JM Venture helps you choose the right property based on your budget and investment objectives.",
  },
  {
    q: "Can I buy residential plots in Dholera Smart City?",
    a: "Yes. JM Venture offers residential Dholera plots for sale in multiple sizes suitable for building a home or making a long-term investment.",
  },
  {
    q: "Are commercial plots available in Dholera?",
    a: "Yes. We provide Dholera land for sale suitable for commercial projects such as offices, retail shops, warehouses, hotels, and industrial developments.",
  },
  {
    q: "Why are Dholera plot prices increasing?",
    a: "The demand for Dholera plots is influenced by ongoing infrastructure projects, industrial development, improved connectivity, and planned urban growth. Market conditions and government developments may impact future prices.",
  },
  {
    q: "How do I choose the best Dholera investment plot?",
    a: "When selecting Dholera investment plots, consider the project location, legal approvals, connectivity, future infrastructure plans, and the reputation of the developer or seller. JM Venture provides expert guidance to help you make an informed decision.",
  },
  {
    q: "Does JM Venture provide site visits before booking?",
    a: "Yes. We arrange free site visits so buyers can inspect the project location, surrounding infrastructure, and available plots before making an investment decision.",
  },
  {
    q: "What documents should I check before buying land in Dholera?",
    a: "Before purchasing land in Dholera, verify the title documents, ownership records, project approvals, zoning details, and registration documents. JM Venture assists buyers with complete documentation support.",
  },
  {
    q: "Can NRIs buy Dholera plots?",
    a: "Eligible NRIs can purchase property in India subject to applicable laws and RBI/FEMA regulations. Our team can guide you through the documentation and buying process.",
  },
  {
    q: "What plot sizes are available in Dholera?",
    a: "JM Venture offers Dholera plots for sale in various sizes to meet residential, commercial, and investment needs. Contact us for the latest availability and plot dimensions.",
  },
  {
    q: "How can I get the latest Dholera plot price?",
    a: "You can contact JM Venture to receive the latest Dholera plot price, updated inventory, payment plans, and current offers based on your preferred location and budget.",
  },
  {
    q: "Why should I buy Dholera land from JM Venture?",
    a: "JM Venture provides verified projects, transparent pricing, professional investment guidance, site visit assistance, and end-to-end support from inquiry to registration, making your property buying experience smooth and reliable.",
  },
];

const SEARCH_TERMS = [
  "Dholera plot price",
  "Dholera plots for sale",
  "Dholera land for sale",
  "Land in Dholera",
  "Dholera investment plots",
  "Dholera smart city plot price",
];

const EXCLUSIVE_OFFER = [
  "Free Investment Consultation",
  "Free Site Visit Support",
  "Latest Price List",
  "Premium Plot Availability",
  "Limited-Time Booking Assistance",
];

const IconicNest = () => {
  const pageUrl = "https://www.jm-ventures.in/dholera-plots";

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: "Dholera Plots for Sale | Residential Plots in Dholera SIR | JM Ventures",
    headline: "Premium Residential Plots in Dholera SIR",
    description:
      "Explore premium residential plots in Dholera SIR, Gujarat with JM Ventures. Discover freehold plots, transparent pricing, legal documentation, and expert assistance for property investment in Dholera.",
    inLanguage: "en-IN",
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://www.jm-ventures.in/#website",
      name: "JM Ventures",
      url: "https://www.jm-ventures.in/",
    },
    about: {
      "@type": "Thing",
      name: "Residential Plots in Dholera SIR",
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: "https://www.jm-ventures.in/images/dholera-plots-banner.jpg",
    },
    publisher: {
      "@type": "Organization",
      name: "JM Ventures",
      url: "https://www.jm-ventures.in/",
      logo: {
        "@type": "ImageObject",
        url: "https://www.jm-ventures.in/logo.png",
      },
    },
    mainEntity: {
      "@type": "Service",
      name: "Dholera Residential Plot Booking",
      serviceType: "Residential Plot Investment",
      provider: {
        "@type": "Organization",
        name: "JM Ventures",
      },
      areaServed: {
        "@type": "Place",
        name: "Dholera SIR, Gujarat, India",
      },
    },
    breadcrumb: {
      "@id": `${pageUrl}#breadcrumb`,
    },
    datePublished: "2025-01-01",
    dateModified: "2026-07-29",
  };


  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.jm-ventures.in/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: "https://www.jm-ventures.in/projects",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Iconic Nest – Dholera Plots",
        item: pageUrl,
      },
    ],
  };

  const faqSchema = buildFaqSchema(FAQS);
  const schema = [webPageSchema, breadcrumbSchema, faqSchema].filter(Boolean);

  const [lightbox, setLightbox] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const { scrollY } = useScroll();
  const heroScale = useTransform(scrollY, [0, 800], [1, 1.12]);
  const heroY = useTransform(scrollY, [0, 800], [0, 120]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lightbox keyboard nav
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight")
        setLightbox((i) => (i === null ? null : (i + 1) % GALLERY.length));
      if (e.key === "ArrowLeft")
        setLightbox((i) =>
          i === null ? null : (i - 1 + GALLERY.length) % GALLERY.length,
        );
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <div className="min-h-[100dvh] bg-[#F8F5F2] text-[#1A1414] selection:bg-[#873953] selection:text-white overflow-x-hidden font-sans">
      <SEO
        title="Dholera Plot Price 2026 | Dholera Land Price & Residential Plots"
        description="Looking for the latest Dholera Plot Price or Dholera Land Price? Compare residential plot prices, explore verified projects, and invest confidently with expert support from JM Ventures."
        url={pageUrl}
        schema={schema}
      />
      {/* 1) HERO */}
      <section className="relative h-[100dvh] min-h-[640px] w-full overflow-hidden">
        <motion.div
          style={{ scale: heroScale, y: heroY }}
          className="absolute inset-0 will-change-transform"
        >
          <img
            src={iconicNestImg}
            alt="Iconic Nest"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Layered gradients: black + burgundy */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/55 to-[#0A0A0A]/15"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-br from-[#873953]/40 via-transparent to-[#5C2438]/30 mix-blend-multiply"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(135,57,83,0.25),transparent_60%)]"
        />

        {/* Decorative corner brackets */}
        <div
          aria-hidden
          className="absolute top-28 right-6 lg:right-10 w-12 h-12 border-r border-t border-[#F8F5F2]/40 hidden md:block"
        />
        <div
          aria-hidden
          className="absolute bottom-10 left-6 lg:left-10 w-12 h-12 border-l border-b border-[#F8F5F2]/40 hidden md:block"
        />

        {/* Back link */}
        <div className="absolute top-28 left-6 lg:left-10 z-10">
          <Link
            to="/projects"
            className="inline-flex items-center text-[#F8F5F2]/75 hover:text-[#F8F5F2] text-[11px] tracking-[0.25em] uppercase transition-colors group"
          >
            <span className="w-8 h-[1px] bg-[#F8F5F2]/50 mr-3 group-hover:w-12 transition-all duration-500" />
            <ArrowLeft className="w-3.5 h-3.5 mr-2" />
            Back to Projects
          </Link>
        </div>

        {/* Vertical side label */}
        <div className="hidden lg:flex absolute left-10 top-1/2 -translate-y-1/2 -rotate-90 origin-left z-10 items-center gap-3">
          <span className="w-12 h-[1px] bg-[#F8F5F2]/40" />
          <span className="text-[10px] tracking-[0.4em] uppercase text-[#F8F5F2]/60">
            Project · 01 of 06
          </span>
        </div>

        {/* Hero content */}
        <div className="absolute inset-x-0 bottom-0 px-6 lg:px-10 pb-24 lg:pb-32">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="inline-block bg-[#873953] text-white text-[10px] tracking-[0.3em] uppercase font-semibold px-3 py-1.5">
                  Plotted Development
                </span>
                <span className="text-[#F8F5F2]/60 text-[10px] tracking-[0.3em] uppercase">
                  Phase 02 · Est. 2025
                </span>
              </div>

              <h1 className="font-serif text-[14vw] sm:text-[10vw] lg:text-[8vw] leading-[0.9] text-[#F8F5F2] mb-8 -tracking-[0.02em]">
                Iconic{" "}
                <span className="italic font-light text-[#F8F5F2]/95">
                  Nest.
                </span>
              </h1>

              <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-[#F8F5F2]/85 max-w-3xl">
                <div className="flex items-center text-[11px] tracking-[0.25em] uppercase">
                  <MapPin className="w-4 h-4 mr-2.5 text-[#873953]" />
                  Dholera SIR · Gujarat, India
                </div>
                <span className="hidden md:block w-12 h-[1px] bg-[#F8F5F2]/30" />
                <p className="text-[#F8F5F2]/70 font-light text-base md:text-lg italic max-w-xl">
                  Where India's first smart city begins.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating spec card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="hidden lg:block absolute right-10 bottom-32 z-10"
        >
          <div className="bg-[#F8F5F2]/8 backdrop-blur-md border border-white/15 text-[#F8F5F2] w-[280px]">
            <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
              <span className="text-[10px] tracking-[0.3em] uppercase opacity-60">
                Spec Sheet
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#873953]">
                Live
              </span>
            </div>
            <div className="px-6 py-5 space-y-3.5">
              {[
                ["Type", "Plotted"],
                ["Sizes", "155–300 sq yd"],
                ["Status", "Available"],
                ["Title", "Freehold"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex items-baseline justify-between text-xs"
                >
                  <span className="opacity-50 tracking-[0.15em] uppercase text-[10px]">
                    {k}
                  </span>
                  <span className="font-serif italic text-sm">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* 4) GALLERY */}
      <section
        id="gallery"
        className="bg-gradient-to-tr from-primary to-foreground px-6 lg:px-10 py-28 lg:py-36 text-[#F8F5F2] relative"
      >
        <span
          aria-hidden
          className="pointer-events-none absolute left-0 bottom-0 font-serif italic text-[24vw] lg:text-[18vw] leading-none text-white/[0.025] select-none"
        >
          gallery
        </span>

        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
            <div className="lg:col-span-6">
              <SectionLabel label="Gallery" tone="dark" />
              <h2 className="font-serif text-4xl lg:text-5xl leading-[1.05] mt-6">
                A walk through
                <span className="italic text-[#873953]"> Iconic Nest.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 lg:pt-3 flex items-end">
              <p className="text-[#F8F5F2] font-light leading-relaxed">
                Renders, location visuals and aerial impressions of the master
                plan and surrounding infrastructure. Click any frame to expand.
              </p>
            </div>
          </div>

          {/* Asymmetric editorial gallery grid */}
          <div className="grid grid-cols-12 gap-3 md:gap-4">
            <GalleryTile
              item={GALLERY[0]}
              index={0}
              className="col-span-12 md:col-span-8 aspect-[16/10]"
              onClick={setLightbox}
            />
            <GalleryTile
              item={GALLERY[1]}
              index={1}
              className="col-span-6 md:col-span-4 aspect-square"
              onClick={setLightbox}
            />
            <GalleryTile
              item={GALLERY[2]}
              index={2}
              className="col-span-6 md:col-span-4 aspect-[4/5]"
              onClick={setLightbox}
            />
            <GalleryTile
              item={GALLERY[3]}
              index={3}
              className="col-span-12 md:col-span-4 aspect-[4/5]"
              onClick={setLightbox}
            />
            <GalleryTile
              item={GALLERY[4]}
              index={4}
              className="col-span-12 md:col-span-4 aspect-[4/5]"
              onClick={setLightbox}
            />
            <GalleryTile
              item={GALLERY[5]}
              index={5}
              className="col-span-6 md:col-span-7 aspect-[16/10]"
              onClick={setLightbox}
            />
            <GalleryTile
              item={GALLERY[6]}
              index={6}
              className="col-span-6 md:col-span-5 aspect-[16/10]"
              onClick={setLightbox}
            />
          </div>

          <div className="flex items-center justify-center mt-10 relative">
            <Link
              to="https://wa.me/919899053053"
              target="_blank"
              className="bg-white hover:bg-[#1A1414] flex text-primary rounded-none px-9 py-7 text-[11px] tracking-[0.25em] uppercase h-auto group min-w-[240px] hover:text-white"
            >
              Get Latest Plot Price
              <ArrowUpRight className="w-4 h-4 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5) LOCATION ADVANTAGE */}
      <section
        id="location"
        className="px-6 lg:px-10 py-28 lg:py-40 bg-[#F8F5F2] relative"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <SectionLabel label="Location Advantage" />
            <h2 className="font-serif text-4xl lg:text-5xl leading-[1.05] text-[#1A1414] mt-6 mb-8">
              The right address,
              <span className="italic text-[#873953]"> at the right time.</span>
            </h2>
            <p className="text-[#1A1414]/70 font-light leading-relaxed mb-6 text-lg">
              Dholera is the only Indian city being built from scratch with
              road, rail, air and sea access — backed personally from the PM's
              office for over a decade.
            </p>
            <p className="text-[#1A1414]/60 font-light leading-relaxed">
              Iconic Nest sits on the airport road inside it. The kind of
              address that defines the next forty years.
            </p>

            <div className="mt-10 inline-flex items-center gap-4 px-6 py-4 border border-[#1A1414]/15 hover:border-[#873953] hover:bg-[#873953] hover:text-white transition-colors duration-500 cursor-pointer group">
              <MapPin className="w-4 h-4 text-[#873953] group-hover:text-white" />
              <div>
                <div className="text-[10px] tracking-[0.3em] uppercase opacity-60">
                  On the Map
                </div>
                <div className="font-serif italic text-base">
                  Fedra–Pipli Road, SH-40
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 ml-2 group-hover:rotate-45 transition-transform" />
            </div>

            <div className="mt-10 inline-block">
              <Link
                to="https://wa.me/919899053053"
                target="_blank"
                className="bg-[#873953] hover:bg-[#1A1414] flex text-white rounded-none px-9 py-7 text-[11px] tracking-[0.25em] uppercase h-auto group min-w-[240px]"
              >
                Book Free Site Visit
                <ArrowUpRight className="w-4 h-4 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7">
            {/* Image */}
            <div className="relative mb-10 group overflow-hidden">
              <div className="aspect-[5/4] overflow-hidden">
                <img
                  src={g7}
                  alt="Connectivity"
                  className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
                />
              </div>
              <div className="absolute top-4 left-4 bg-[#F8F5F2]/95 backdrop-blur px-4 py-2 text-[#1A1414]">
                <span className="text-[10px] tracking-[0.3em] uppercase font-semibold">
                  Connectivity Map
                </span>
              </div>
            </div>

            {/* Connectivity timeline */}
            <div className="space-y-px bg-[#1A1414]/10">
              {CONNECTIVITY.map((c, idx) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="bg-[#F8F5F2] grid grid-cols-12 gap-4 items-center px-5 py-5 hover:bg-white transition-colors group"
                >
                  <div className="col-span-2 lg:col-span-2">
                    <span className="text-[10px] tracking-[0.3em] uppercase text-[#873953] font-semibold">
                      {c.label}
                    </span>
                  </div>
                  <div className="col-span-7 lg:col-span-7">
                    <div className="font-serif text-lg lg:text-xl text-[#1A1414] leading-tight">
                      {c.title}
                    </div>
                  </div>
                  <div className="col-span-3 lg:col-span-3 text-right">
                    <span className="text-xs text-[#1A1414]/55 font-light italic">
                      {c.note}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2) OVERVIEW */}
      <section
        id="overview"
        className="relative px-6 lg:px-10 py-28 lg:pt-40 lg:pb-20 bg-primary/40"
      >
        {/* Watermark monogram */}
        <span
          aria-hidden
          className="pointer-events-none absolute right-0 top-10 font-serif italic text-[28vw] lg:text-[22vw] leading-none text-[#1A1414]/[0.025] select-none"
        >
          02
        </span>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 relative">
          <div className="lg:col-span-4">
            <SectionLabel label="The Project" />
            <h2 className="font-serif text-4xl lg:text-5xl leading-[1.05] text-[#1A1414] mt-6">
              A premium plotted address inside India's
              <span className="italic text-[#873953]"> first smart city.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 lg:pt-3">
            <p className="text-xl leading-[1.6] text-[#1A1414]/80 font-light">
              <span className="float-left font-serif text-7xl leading-[0.85] mr-3 mt-1.5 text-[#873953] italic">
                I
              </span>
              conic Nest is a curated, low-density plotted development on the
              airport-bound SH-40 inside the Dholera Special Investment Region.
              It offers something genuinely rare in Indian real estate today —
              clean title land, in a master-planned greenfield city, before the
              world arrives.
            </p>
            <div className="my-10 flex items-center gap-5">
              <span className="block w-16 h-[1px] bg-[#873953]" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#873953] font-semibold">
                Why it matters
              </span>
            </div>
            <p className="text-base leading-[1.75] text-[#1A1414]/65 font-light">
              Designed for serious investors and future homeowners, Iconic Nest
              pairs the upside of an early-stage smart-city allocation with the
              assurance of full freehold ownership — the kind of foundation a
              generational asset deserves.
            </p>
            <div className="mt-10 flex items-center gap-3 text-[#1A1414]/50">
              <span className="font-serif italic text-sm">— JM Ventures</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3) KEY FEATURES — refined editorial list */}
      <section
        id="features"
        className="px-6 lg:px-10 pb-28 lg:pt-20 lg:pb-28 relative"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-16 lg:mb-20">
            <div className="lg:col-span-5">
              <SectionLabel label="Key Features" />
              <h2 className="font-serif text-4xl lg:text-5xl leading-[1.05] text-[#1A1414] mt-6">
                Built around what
                <span className="italic text-[#873953]"> matters.</span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 lg:pt-3">
              <p className="text-[#1A1414]/65 font-light leading-relaxed text-lg">
                Five quiet promises we make to every buyer at Iconic Nest. No
                fine print, no asterisks — just the things that should be
                obvious in luxury real estate.
              </p>
            </div>
          </div>

          {/* Editorial numbered list */}
          <div className="border-t border-[#1A1414]/10">
            {FEATURES.map((f, idx) => (
              <motion.article
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="group relative grid grid-cols-12 gap-4 lg:gap-8 items-center py-8 lg:py-10 border-b border-[#1A1414]/10 hover:bg-[#1A1414] hover:text-[#F8F5F2] transition-colors duration-500 px-2 lg:px-6 -mx-2 lg:-mx-6"
              >
                <div className="col-span-2 lg:col-span-1">
                  <span className="font-serif italic text-3xl lg:text-4xl text-[#873953] group-hover:text-[#F8F5F2] transition-colors duration-500">
                    {f.roman}
                  </span>
                </div>

                <div className="col-span-1 lg:col-span-1 flex justify-center">
                  <span className="w-11 h-11 rounded-full border border-[#1A1414]/20 group-hover:border-[#873953] group-hover:bg-[#873953] group-hover:text-white flex items-center justify-center transition-all duration-500">
                    <f.icon className="w-4 h-4" />
                  </span>
                </div>

                <div className="col-span-9 lg:col-span-4">
                  <h3 className="font-serif text-2xl lg:text-3xl leading-tight">
                    {f.title}
                  </h3>
                </div>

                <div className="col-span-12 lg:col-span-5 lg:col-start-7">
                  <p className="text-sm lg:text-base font-light leading-relaxed text-[#1A1414]/70 group-hover:text-[#F8F5F2]/75 transition-colors duration-500 max-w-md">
                    {f.blurb}
                  </p>
                </div>

                <div className="hidden lg:flex col-span-1 justify-end">
                  <ArrowUpRight className="w-5 h-5 text-[#1A1414]/30 group-hover:text-[#873953] group-hover:rotate-45 transition-all duration-500" />
                </div>
              </motion.article>
            ))}
          </div>

          <div className="flex items-center justify-center mt-10">
            <Link
              to="https://wa.me/919899053053"
              target="_blank"
              className="bg-[#873953] hover:bg-[#1A1414] flex text-white rounded-none px-9 py-7 text-[11px] tracking-[0.25em] uppercase h-auto group min-w-[240px]"
            >
              Get Latest Plot Price
              <ArrowUpRight className="w-4 h-4 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6) WHAT YOU GET — refined spec sheet */}
      <section
        id="details"
        className="px-6 lg:px-10 py-28 lg:py-40 bg-[#1A1414] text-[#F8F5F2] relative overflow-hidden"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#873953]/10 blur-3xl"
        />

        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16 lg:mb-20">
            <SectionLabel label="What You Get" tone="dark" center />
            <h2 className="font-serif text-4xl lg:text-6xl leading-[1.05] max-w-3xl mx-auto mt-6">
              Everything that should be obvious —
              <span className="italic text-[#873953]"> made simple.</span>
            </h2>
          </div>

          {/* Spec sheet card with corner brackets */}
          <div className="relative">
            {/* Corner brackets */}
            <span
              className="absolute -top-3 -left-3 w-6 h-6 border-t border-l border-[#873953]"
              aria-hidden
            />
            <span
              className="absolute -top-3 -right-3 w-6 h-6 border-t border-r border-[#873953]"
              aria-hidden
            />
            <span
              className="absolute -bottom-3 -left-3 w-6 h-6 border-b border-l border-[#873953]"
              aria-hidden
            />
            <span
              className="absolute -bottom-3 -right-3 w-6 h-6 border-b border-r border-[#873953]"
              aria-hidden
            />

            <div className="border border-[#F8F5F2]/15 divide-y divide-[#F8F5F2]/10">
              {WHAT_YOU_GET.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="grid grid-cols-12 gap-6 items-baseline px-6 lg:px-10 py-6 lg:py-7 hover:bg-[#F8F5F2]/[0.03] transition-colors group"
                >
                  <span className="col-span-1 font-serif italic text-white text-sm">
                    0{idx + 1}
                  </span>
                  <span className="col-span-4 lg:col-span-3 text-[10px] tracking-[0.3em] uppercase text-[#F8F5F2]/65 font-semibold">
                    {item.label}
                  </span>
                  <span className="col-span-7 lg:col-span-7 font-serif text-xl lg:text-2xl leading-snug">
                    {item.value}
                  </span>
                  <span className="hidden lg:block col-span-1 text-right">
                    <Plus className="w-4 h-4 text-[#F8F5F2] inline group-hover:text-[#873953] group-hover:rotate-90 transition-all duration-500" />
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6.1) DHOLERA PLOT PRICE — INTRO & LIMITED OFFER */}
      <section className="px-6 lg:px-10 py-28 lg:py-36 bg-[#F8F5F2] relative">
        <span
          aria-hidden
          className="pointer-events-none absolute right-0 top-0 font-serif italic text-[26vw] lg:text-[18vw] leading-none text-[#1A1414]/[0.025] select-none"
        >
          07
        </span>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 relative">
          <div className="lg:col-span-5">
            <SectionLabel label="Dholera Plot Price" />
            <h2 className="font-serif text-4xl lg:text-5xl leading-[1.05] text-[#1A1414] mt-6">
              Dholera Plot Price – Premium Dholera Plots for Sale |
              <span className="italic text-[#873953]">
                {" "}
                Invest with JM Venture
              </span>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 lg:pt-3">
            <p className="text-lg leading-[1.75] text-[#1A1414]/75 font-light">
              Looking for the best <Link href="dholera-plots" className="text-primary font-bold"> Dholera plot price</Link> with
              maximum future appreciation? Welcome to{" "}
              <strong>JM Venture</strong>, your trusted real estate partner for
              premium <strong className="text-primary font-bold">Dholera plots for sale</strong>. Whether you're
              planning to build your dream home, invest for long-term wealth, or
              buy commercial land, we offer legally verified plots in the most
              promising locations of Dholera Smart City.
            </p>
            <p className="text-base leading-[1.75] text-[#1A1414]/65 font-light mt-6">
              With India's first Greenfield Smart City rapidly developing under
              the Delhi-Mumbai Industrial Corridor (DMIC), investing in{" "}
              <strong>land in Dholera</strong> today could become one of your
              smartest financial decisions.
            </p>

            <div className="my-10 flex items-center gap-5">
              <span className="block w-16 h-[1px] bg-[#873953]" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#873953] font-semibold">
                Limited-Time Investment Offer
              </span>
            </div>

            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
              {LIMITED_OFFERS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[#1A1414]/75 font-light text-sm lg:text-base"
                >
                  <CheckCircle2 className="w-4 h-4 mt-0.5 text-[#873953] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 inline-block">
              <a
                href="tel:+919899053053"
                className="bg-[#873953] hover:bg-[#1A1414] flex text-white rounded-none px-9 py-7 text-[11px] tracking-[0.25em] uppercase h-auto group min-w-[280px] items-center"
              >
                <Phone className="w-4 h-4 mr-3" />
                Call JM Venture Today
                <ArrowUpRight className="w-4 h-4 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
            <p className="mt-4 text-[#1A1414]/50 font-light italic text-sm">
              Book your site visit & get the latest Dholera plot price before
              rates increase.
            </p>
          </div>
        </div>
      </section>

      {/* 6.2) WHY INVEST IN DHOLERA SMART CITY */}
      <section className="px-6 lg:px-10 py-28 lg:py-36 bg-[#1A1414] text-[#F8F5F2] relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 top-1/3 w-[460px] h-[460px] rounded-full bg-[#873953]/10 blur-3xl"
        />
        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-16">
            <div className="lg:col-span-5">
              <SectionLabel label="Why Invest" tone="dark" />
              <h2 className="font-serif text-4xl lg:text-5xl leading-[1.05] mt-6">
                Why invest in Dholera
                <span className="italic text-[#873953]"> Smart City?</span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 lg:pt-3">
              <p className="text-[#F8F5F2]/70 font-light leading-relaxed text-lg">
                Dholera Smart City is India's first planned Greenfield Smart
                City under the Government of India's Smart Cities Mission.
                Spread across thousands of hectares, it is being developed with
                world-class infrastructure, industrial zones, residential
                townships, commercial hubs, and advanced transport connectivity.
              </p>
            </div>
          </div>

          <div className="mb-6">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#873953] font-semibold">
              Major developments include
            </span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#F8F5F2]/10 border border-[#F8F5F2]/10">
            {MAJOR_DEVELOPMENTS.map((item, idx) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
                className="bg-[#1A1414] px-6 py-6 flex items-start gap-3 hover:bg-[#F8F5F2]/[0.04] transition-colors"
              >
                <Sparkles className="w-4 h-4 mt-0.5 text-[#873953] shrink-0" />
                <span className="font-light text-[#F8F5F2]/85 text-sm lg:text-base">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
          <p className="text-[#F8F5F2]/50 font-light leading-relaxed mt-4 italic">
            These projects are expected to increase land demand significantly in
            the coming years.
          </p>
        </div>
      </section>

      {/* 6.3) MARKET TRENDS */}
      <section className="px-6 lg:px-10 py-28 lg:py-36 bg-[#F8F5F2] relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <SectionLabel label="Market Trends" />
            <h2 className="font-serif text-4xl lg:text-5xl leading-[1.05] text-[#1A1414] mt-6">
              Dholera plot price —
              <span className="italic text-[#873953]">
                {" "}
                current market trends.
              </span>
            </h2>
            <p className="text-[#1A1414]/65 font-light leading-relaxed mt-8">
              If you're searching for the latest{" "}
              <strong>Dholera smart city plot price</strong>, it's important to
              understand that prices vary depending on:
            </p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 lg:pt-3">
            <div className="border-t border-[#1A1414]/10">
              {PRICE_FACTORS.map((f, idx) => (
                <div
                  key={f}
                  className="flex items-center justify-between py-5 border-b border-[#1A1414]/10 group hover:pl-2 transition-all"
                >
                  <span className="font-serif italic text-lg text-[#1A1414]">
                    {f}
                  </span>
                  <span className="font-serif italic text-[#873953] text-sm">
                    0{idx + 1}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-[#1A1414]/65 font-light leading-relaxed mt-8">
              Generally, <strong>Dholera plot prices</strong> have shown
              consistent appreciation because of continuous government
              infrastructure investments. <br /> At <strong>JM Venture</strong>,
              we help buyers choose plots that offer both affordability and high
              appreciation potential. <br /> OOur experts provide complete
              market analysis before recommending any investment.
            </p>
          </div>
        </div>
      </section>

      {/* 6.4) PLOT TYPES */}
      <section className="px-6 lg:px-10 py-28 lg:py-36 bg-[#1A1414] text-[#F8F5F2] relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 bottom-0 w-[460px] h-[460px] rounded-full bg-[#873953]/10 blur-3xl"
        />
        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-6">
              <SectionLabel label="Choose Your Investment" tone="dark" />
              <h2 className="font-serif text-4xl lg:text-5xl leading-[1.05] mt-6">
                Dholera plots for sale —
                <span className="italic text-[#873953]">
                  {" "}
                  choose the right investment.
                </span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 lg:pt-3 flex items-end">
              <p className="text-[#F8F5F2]/70 font-light leading-relaxed">
                JM Venture offers a wide selection of Dholera plots for sale,
                including:
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {PLOT_TYPES.map((p, idx) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="border border-[#F8F5F2]/15 p-8 hover:border-[#873953] transition-colors duration-500 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="w-11 h-11 rounded-full border border-[#F8F5F2]/20 group-hover:border-[#873953] group-hover:bg-[#873953] flex items-center justify-center transition-all duration-500">
                    <p.icon className="w-4 h-4" />
                  </span>
                  <span className="font-serif italic text-3xl text-[#873953]">
                    {p.roman}
                  </span>
                </div>
                <h3 className="font-serif text-2xl mb-4">{p.title}</h3>
                <p className="text-[10px] tracking-[0.25em] uppercase text-[#F8F5F2]/50 font-semibold mb-3">
                  {p.lede}
                </p>
                <ul className="space-y-2 mb-6">
                  {p.items.map((it) => (
                    <li
                      key={it}
                      className="text-sm font-light text-[#F8F5F2]/80 flex items-start gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#873953] mt-2 shrink-0" />
                      {it}
                    </li>
                  ))}
                </ul>
                <p className="text-xs italic font-light text-[#F8F5F2]/50 leading-relaxed pt-4 border-t border-[#F8F5F2]/10">
                  {p.note}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6.5) WHY JM VENTURE */}
      <section className="px-6 lg:px-10 py-28 lg:py-36 bg-[#F8F5F2] relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-5">
              <SectionLabel label="Why JM Venture" />
              <h2 className="font-serif text-4xl lg:text-5xl leading-[1.05] text-[#1A1414] mt-6">
                Choosing the right
                <span className="italic text-[#873953]"> consultant.</span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 lg:pt-3">
              <p className="text-[#1A1414]/65 font-light leading-relaxed text-lg">
                Choosing the right real estate consultant is as important as
                choosing the right plot. Here's why investors trust JM Venture.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#1A1414]/10">
            {WHY_JM_VENTURE.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="border-r border-b border-[#1A1414]/10 p-8 hover:bg-[#1A1414] hover:text-[#F8F5F2] transition-colors duration-500 group"
              >
                <ShieldCheck className="w-5 h-5 text-[#873953] mb-4 group-hover:text-[#F8F5F2] transition-colors" />
                <h3 className="font-serif text-xl mb-2">✔ {item.title}</h3>
                <p className="text-sm font-light text-[#1A1414]/65 group-hover:text-[#F8F5F2]/75 transition-colors">
                  {item.blurb}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6.6) LAND IN DHOLERA + TYPES AVAILABLE */}
      <section className="px-6 lg:px-10 py-28 lg:py-36 bg-[#1A1414] text-[#F8F5F2] relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionLabel label="Land in Dholera" tone="dark" />
            <h2 className="font-serif text-4xl lg:text-5xl leading-[1.05] mt-6">
              A smart choice for
              <span className="italic text-[#873953]"> future growth.</span>
            </h2>
            <p className="text-[#F8F5F2]/65 font-light leading-relaxed mt-8">
              The demand for land in Dholera is increasing due to:
            </p>
            <ul className="mt-8 space-y-3">
              {LAND_DEMAND_DRIVERS.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-[#F8F5F2]/80 font-light"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#873953] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-[#F8F5F2]/65 font-light leading-relaxed mt-8">
              Unlike many speculative markets, Dholera's growth is backed by
              planned infrastructure and government-led development.
            </p>
            <p className="text-[#F8F5F2]/65 font-light leading-relaxed mt-8">
              This makes it attractive for both first-time investors and
              experienced real estate buyers.
            </p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#873953] font-semibold">
              Dholera land for sale — types available
            </span>
            <p className="text-[#F8F5F2]/50 font-light italic mt-3 mb-8">
              JM Venture provides multiple land options including:
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {LAND_TYPES.map((item, idx) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: idx * 0.04 }}
                  className="flex items-center gap-3 border border-[#F8F5F2]/15 px-5 py-4 hover:border-[#873953] transition-colors"
                >
                  <Landmark className="w-4 h-4 text-[#873953] shrink-0" />
                  <span className="font-light text-sm lg:text-base">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
            <p className="text-[#F8F5F2]/50 font-light italic mt-3 mb-8">
              Our consultants help you select the most suitable option according
              to your investment goals.
            </p>
          </div>
        </div>
      </section>

      {/* 6.7) BENEFITS */}
      <section className="px-6 lg:px-10 py-28 lg:py-36 bg-[#F8F5F2] relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-5">
              <SectionLabel label="Benefits" />
              <h2 className="font-serif text-4xl lg:text-5xl leading-[1.05] text-[#1A1414] mt-6">
                Benefits of buying Dholera
                <span className="italic text-[#873953]">
                  {" "}
                  investment plots.
                </span>
              </h2>
            </div>
          </div>

          <div className="border-t border-[#1A1414]/10">
            {BENEFITS.map((b, idx) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="grid grid-cols-12 gap-4 lg:gap-8 items-center py-7 border-b border-[#1A1414]/10 hover:bg-[#1A1414] hover:text-[#F8F5F2] transition-colors duration-500 px-2 lg:px-6 -mx-2 lg:-mx-6 group"
              >
                <div className="col-span-1">
                  <span className="font-serif italic text-2xl text-[#873953] group-hover:text-[#F8F5F2] transition-colors">
                    0{idx + 1}
                  </span>
                </div>
                <div className="col-span-11 lg:col-span-4">
                  <h3 className="font-serif text-xl lg:text-2xl leading-tight">
                    {b.title}
                  </h3>
                </div>
                <div className="col-span-12 lg:col-span-7 lg:col-start-6">
                  <p className="text-sm lg:text-base font-light leading-relaxed text-[#1A1414]/70 group-hover:text-[#F8F5F2]/75 transition-colors duration-500">
                    {b.blurb}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6.8) HOW TO CHOOSE + WHO SHOULD INVEST */}
      <section className="px-6 lg:px-10 py-28 lg:py-36 bg-[#1A1414] text-[#F8F5F2] relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 top-0 w-[460px] h-[460px] rounded-full bg-[#873953]/10 blur-3xl"
        />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 relative">
          <div className="lg:col-span-6">
            <SectionLabel label="How to Choose" tone="dark" />
            <h2 className="font-serif text-4xl lg:text-5xl leading-[1.05] mt-6 mb-8">
              How to choose the
              <span className="italic text-[#873953]">
                {" "}
                right Dholera plot?
              </span>
            </h2>
            <p className="text-[#F8F5F2]/60 font-light leading-relaxed mb-8">
              Before buying any property, consider:
            </p>
            <ul className="space-y-3">
              {CHOOSE_CHECKLIST.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 text-[#873953] shrink-0" />
                  <span className="font-light text-[#F8F5F2]/85">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#F8F5F2]/60 font-light leading-relaxed mb-8">
              Avoid purchasing based only on low prices—always evaluate the
              project's legal status and development prospects.
            </p>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <SectionLabel label="Who Should Invest" tone="dark" />
            <h2 className="font-serif text-4xl lg:text-5xl leading-[1.05] mt-6 mb-8">
              Who should
              <span className="italic text-[#873953]"> invest in Dholera?</span>
            </h2>
            <p className="text-[#F8F5F2]/60 font-light leading-relaxed mb-8">
              Our plots are ideal for:
            </p>
            <div className="flex flex-wrap gap-3">
              {WHO_SHOULD_INVEST.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 border border-[#F8F5F2]/20 px-4 py-2.5 text-sm font-light hover:border-[#873953] transition-colors"
                >
                  <Users className="w-3.5 h-3.5 text-[#873953]" />
                  {item}
                </span>
              ))}
            </div>
            <p className="text-[#F8F5F2]/60 font-light leading-relaxed mb-8">
              Whether your budget is modest or substantial, JM Venture can help
              you identify a suitable opportunity.
            </p>
          </div>
        </div>
      </section>

      {/* 6.9) FAQ */}
      <section className="px-6 lg:px-10 py-28 lg:py-36 bg-[#F8F5F2] relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel label="FAQs" center />
            <h2 className="font-serif text-4xl lg:text-6xl leading-[1.05] mt-6">
              Frequently asked
              <span className="italic text-[#873953]"> questions.</span>
            </h2>
          </div>

          <div className="border-t border-[#1A1414]/10">
            {FAQS.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={item.q} className="border-b border-[#1A1414]/10">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="font-serif italic text-[#873953] text-sm">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="font-serif text-lg lg:text-xl text-[#1A1414] group-hover:text-[#873953] transition-colors">
                        {item.q}
                      </span>
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#873953] shrink-0 transition-transform duration-500 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 pl-0 lg:pl-9 text-[#1A1414]/65 font-light leading-relaxed max-w-2xl">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6.10) WHY BUY THROUGH JM VENTURE + BOOK TODAY */}
      <section className="px-6 lg:px-10 py-28 lg:py-36 bg-[#1A1414] text-[#F8F5F2] relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#873953]/10 blur-3xl"
        />
        <div className="max-w-6xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
            <div className="lg:col-span-5">
              <SectionLabel label="Why Buy Through Us" tone="dark" />
              <h2 className="font-serif text-4xl lg:text-5xl leading-[1.05] mt-6">
                Why buy through
                <span className="italic text-[#873953]"> JM Venture?</span>
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-[#F8F5F2]/65 font-light leading-relaxed text-lg mb-8">
                Buying real estate is a major decision. At{" "}
                <strong>JM Venture</strong>, we focus on helping clients make
                informed choices by providing transparent information, verified
                projects, and professional support from inquiry to registration.
                Whether you're searching for:
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {SEARCH_TERMS.map((term) => (
                  <span
                    key={term}
                    className="text-[10px] tracking-[0.2em] uppercase border border-[#873953]/40 text-[#873953] px-4 py-2"
                  >
                    {term}
                  </span>
                ))}
              </div>
              <p className="text-[#F8F5F2]/50 font-light italic leading-relaxed">
                Our experienced team is here to help you explore options that
                align with your investment goals.
              </p>
            </div>
          </div>

          <div className="border-t border-[#F8F5F2]/10 pt-16 text-center">
            <Award className="w-8 h-8 text-[#873953] mx-auto mb-6" />
            <h3 className="font-serif text-3xl lg:text-4xl mb-4">
              Book Your Dholera Plot
              <span className="italic text-[#873953]"> Today.</span>
            </h3>
            <p className="text-[#F8F5F2]/60 font-light max-w-xl mx-auto mb-10">
              Don't miss the opportunity to invest in one of India's most
              talked-about smart city developments.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {EXCLUSIVE_OFFER.map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-2 text-sm font-light border border-[#F8F5F2]/15 px-5 py-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#873953]" />
                  {item}
                </span>
              ))}
            </div>
            <p className="font-serif italic text-[#F8F5F2]/70 max-w-2xl mx-auto">
              Get the latest Dholera plot price, schedule your site visit, and
              explore verified Dholera plots for sale before the next price
              revision. JM Venture — your trusted partner for smart real estate
              investments in Dholera.
            </p>
          </div>
        </div>
      </section>

      {/* 7) CTA */}
      <section
        id="enquire"
        className="relative bg-[#F8F5F2] text-[#1A1414] px-6 lg:px-10 py-20 lg:py-28 overflow-hidden"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(135,57,83,0.18),transparent_60%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-[#873953]/8 blur-3xl"
        />

        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionLabel label="Next Step" center />
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6 mt-6 leading-[1.02]">
              Interested in
              <span className="italic text-[#873953]"> this project?</span>
            </h2>
            <p className="text-[#1A1414]/65 text-base md:text-lg font-light mb-12 max-w-2xl mx-auto leading-relaxed">
              Talk to our advisory team. We'll send the full inventory sheet,
              walk you through payment plans and arrange a guided site visit at
              Dholera SIR.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link
                to="/contact"
                className="bg-[#873953] hover:bg-[#1A1414] flex text-white rounded-none px-9 py-7 text-[11px] tracking-[0.25em] uppercase h-auto group min-w-[240px]"
              >
                Schedule Site Visit
                <ArrowUpRight className="w-4 h-4 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
              <a
                href="https://wa.me/919899053053"
                target="_blank"
                className="bg-transparent flex items-center justify-center hover:bg-[#1A1414] hover:text-[#F8F5F2] text-[#1A1414] border border-[#1A1414]/30 hover:border-[#1A1414] rounded-none px-9 py-7 text-[11px] tracking-[0.25em] uppercase h-auto group min-w-[240px]"
              >
                Get Details
                <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="flex items-center justify-center gap-3 text-[#1A1414]/55">
              <span className="block w-12 h-[1px] bg-[#873953]/40" />
              <a
                href="tel:+919899053053"
                className="inline-flex items-center gap-2 text-sm font-light italic font-serif hover:text-[#873953] transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                or call directly · +91 98990 53053
              </a>
              <span className="block w-12 h-[1px] bg-[#873953]/40" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 bg-[#0A0A0A]/96 backdrop-blur-md z-[100] flex items-center justify-center p-6 cursor-zoom-out"
          >
            {/* Top bar */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-[#F8F5F2]/80">
              <div className="flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase">
                <span className="text-[#873953]">
                  {String(lightbox + 1).padStart(2, "0")}
                </span>
                <span className="w-8 h-[1px] bg-[#F8F5F2]/30" />
                <span>{String(GALLERY.length).padStart(2, "0")}</span>
                <span className="hidden md:inline ml-4 italic font-serif text-sm not-uppercase tracking-normal text-[#F8F5F2]/70">
                  {GALLERY[lightbox].caption}
                </span>
              </div>
              <button
                aria-label="Close"
                onClick={() => setLightbox(null)}
                className="w-11 h-11 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-[#873953] hover:border-[#873953] transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Prev / Next */}
            <button
              aria-label="Previous"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox((i) =>
                  i === null ? null : (i - 1 + GALLERY.length) % GALLERY.length,
                );
              }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/25 text-white flex items-center justify-center hover:bg-[#873953] hover:border-[#873953] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              aria-label="Next"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox((i) =>
                  i === null ? null : (i + 1) % GALLERY.length,
                );
              }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/25 text-white flex items-center justify-center hover:bg-[#873953] hover:border-[#873953] transition-colors"
            >
              <ArrowRight className="w-4 h-4" />
            </button>

            <motion.img
              key={lightbox}
              src={GALLERY[lightbox].src}
              alt={GALLERY[lightbox].caption}
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-[88vw] max-h-[82vh] object-contain shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

function SectionLabel({ index, label, tone = "light", center = false }) {
  const color = tone === "dark" ? "text-[#F8F5F2]/55" : "text-[#1A1414]/55";
  return (
    <div
      className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}
    >
      <span className="font-serif italic text-[#873953] text-lg">{index}</span>
      <span className="block w-8 h-[1px] bg-[#873953]" />
      <span
        className={`text-[10px] tracking-[0.3em] uppercase font-semibold ${color}`}
      >
        {label}
      </span>
    </div>
  );
}

function GalleryTile({ item, index, className, onClick }) {
  return (
    <button
      onClick={() => onClick(index)}
      className={`relative overflow-hidden group cursor-zoom-in bg-[#0D0D0D] ${className}`}
    >
      <img
        src={item.src}
        alt={item.caption}
        className="absolute inset-0 w-full h-full object-cover transition-all duration-[1300ms] ease-out group-hover:scale-[1.06] grayscale-[60%] group-hover:grayscale-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/70 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Index */}
      <div className="absolute top-4 left-4 text-[#F8F5F2]/70 text-[10px] tracking-[0.3em] uppercase">
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Caption + view */}
      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
        <span className="font-serif italic text-[#F8F5F2] text-sm md:text-base translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          {item.caption}
        </span>
        <span className="bg-[#F8F5F2] text-[#1A1414] text-[10px] tracking-[0.25em] uppercase px-3 py-1.5 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 shrink-0">
          Expand
        </span>
      </div>
    </button>
  );
}

export default IconicNest;
