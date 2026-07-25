import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Compass,
  Menu,
  Quote,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { Link } from "../router";
import banner from "../assets/about/banner.png";
import iconic from "../assets/iconicnest/nest6.png";
import blueprintBg from "../assets/about/blueprint-bg.png";
import journey1 from "../assets/about/journey-1.png";
import journey3 from "../assets/about/journey-3.png";
import journey5 from "../assets/about/journey-5.png";
import jatin from "../assets/home/jatin.jpeg";
import mukesh from "../assets/home/mukesh.jpeg";
import yashi from "../assets/home/yashi.jpeg";
import connectivityBg from "../assets/about/connectivity-bg.png";
import { useEffect, useRef, useState } from "react";
import SEO from "../components/SEO";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const WORD_STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const WORD_ANIM = {
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

const AnimatedUnderlined = () => (
  <motion.span
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    className="block w-12 h-[2px] bg-white origin-left"
  />
);

const pillars = [
  {
    icon: Compass,
    title: "Discerning Selection",
    body: "We curate only title-clear, RERA-compliant opportunities along India's highest-growth corridors. If we wouldn't invest in it ourselves, we don't offer it.",
  },
  {
    icon: ShieldCheck,
    title: "Investor-First Trust",
    body: "Two and a half decades of relationships with developers, regulators, and NRI investors built on transparency, due diligence, and outcomes.",
  },
  {
    icon: Sparkles,
    title: "Editorial Quality",
    body: "From plotted developments to flagship signature projects like Iconic Nest, every offering is held to a luxury standard of design, governance, and finish.",
  },
  {
    icon: Building2,
    title: "Long-Horizon Capital",
    body: "We think in growth corridors and master-plans, not quarters. Our portfolio is engineered for compounding land-value over decades.",
  },
];

const stats = [
  { value: 25, suffix: "+", label: "Years of Expertise" },
  { value: 5, suffix: "", label: "Growth Corridors" },
  { value: 1500, suffix: "+", label: "Investor Families" },
  { value: 100, suffix: "%", label: "Title-Clear Land" },
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

const milestones = [
  {
    year: "2000",
    title: "Founded in NCR",
    body: "JM Ventures begins as a boutique real estate advisory in the Delhi NCR market, built around plotted developments and end-to-end investor handholding.",
    img: journey1,
  },
  {
    year: "2010",
    title: "Corridor Expansion",
    body: "Strategic entry into Greater Noida, Greater Noida West, and the Yamuna Expressway — riding the infrastructure-led growth wave of North India.",
    img: journey3,
  },
  {
    year: "2024",
    title: "Iconic Nest, Dholera",
    body: "Launch of our flagship signature project in India's first Greenfield Smart City, expanding our footprint into the country's most ambitious masterplan.",
    img: journey5,
  },
];

const AnimatedHeadline = ({ text, className }) => (
  <motion.h1 variants={WORD_STAGGER} className={className}>
    {text.split(" ").map((word, i) => (
      <span
        key={i}
        className="inline-block overflow-hidden mr-[0.25em] align-bottom"
      >
        <motion.span variants={WORD_ANIM} className="inline-block">
          {word}
        </motion.span>
      </span>
    ))}
  </motion.h1>
);

const Counter = ({ from, to, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;

    let start = null;
    let raf;

    const step = (timestamp) => {
      if (start === null) start = timestamp;

      const progress = Math.min((timestamp - start) / (duration * 1000), 1);
      setCount(Math.floor(from + (to - from) * progress));

      if (progress < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);

    return () => cancelAnimationFrame(raf);
  }, [inView, from, to, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const About = () => {
  const { scrollY } = useScroll();
  const heroParallax = useTransform(scrollY, [0, 700], [0, 180]);
  return (
    <>
      <SEO
        title="About JM Ventures | Trusted Dholera Smart City Real Estate Consultant"
        description="Learn about JM Ventures, a trusted real estate consultant specializing in Dholera Smart City. Explore government-approved plots, expert investment guidance, transparent deals, and personalized support for property buyers."
        url="https://www.jm-ventures.in/about"
      />
      {/* hero section */}
      <section className="relative h-[80dvh] min-h-[640px] w-full flex items-end overflow-hidden bg-foreground">
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y: heroParallax }}
        >
          <motion.img
            src={banner}
            alt="JM Ventures"
            className="w-full h-full object-cover"
            initial={{ scale: 1 }}
            animate={{ scale: 1.12 }}
            transition={{
              duration: 22,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#F8F5F2]/65 via-[#F8F5F2]/25 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/40 to-foreground/95 mix-blend-multiply" />
        </motion.div>

        <div className="max-w-7xl mx-auto relative z-10 px-6 lg:px-12 pb-24 w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={STAGGER}
            className="max-w-4xl"
          >
            <motion.div
              variants={FADE_UP}
              className="flex items-center gap-4 mb-6"
            >
              <AnimatedUnderlined />
              <span className="text-eyebrow text-accent">
                ABOUT JM VENTURES
              </span>
            </motion.div>

            <AnimatedHeadline
              text="Twenty-five years of building India's most trusted real estate stories."
              className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-[#F8F5F2] leading-[1.05] tracking-tight mb-8"
            />

            <motion.p
              variants={FADE_UP}
              className=" md:text-lg text-[#F8F5F2]/80 max-w-2xl font-sans leading-relaxed"
            >
              We are a boutique real estate development and investment advisory
              firm — pairing institutional-grade due diligence with the warmth
              and discretion of a family office.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* about section */}
      <section className="py-24 md:py-32 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5"
            >
              <div className="flex items-center gap-4 mb-6">
                <AnimatedUnderline />
                <span className="text-eyebrow text-primary">OUR STORY</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-[1.1] tracking-tight mb-8">
                A house built on relationships, governance, and conviction.
              </h2>
              <p className="text-base md:text-lg text-muted-foreground font-sans leading-relaxed mb-6">
                JM Ventures was founded with a simple belief — that real estate
                is, at its core, a relationship business. For over two and a
                half decades we have been a quiet, trusted partner to families,
                NRIs, and institutional capital looking to participate in
                India's most consequential land stories.
              </p>
              <p className="text-base md:text-lg text-muted-foreground font-sans leading-relaxed mb-10">
                From plotted developments in the Delhi NCR to flagship signature
                projects in Dholera — India's first Greenfield Smart City —
                every venture we open is one we have personally walked, vetted,
                and underwritten.
              </p>
              <Link
                to="/projects"
                className="inline-flex items-center gap-3 text-sm font-mono uppercase tracking-widest font-bold text-primary hover:gap-5 transition-all"
                data-testid="link-explore-projects"
              >
                Explore Our Projects <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="lg:col-span-7 relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={iconic}
                  alt="Iconic Nest flagship"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-foreground/95 to-transparent">
                  <p className="text-eyebrow text-accent mb-2">
                    FLAGSHIP — DHOLERA
                  </p>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#F8F5F2]">
                    Iconic Nest
                  </h3>
                </div>
              </div>
              <div className="hidden lg:block absolute -top-6 -left-6 w-24 h-24 border-l-2 border-t-2 border-primary" />
              <div className="hidden lg:block absolute -bottom-6 -right-6 w-24 h-24 border-r-2 border-b-2 border-primary" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* stats section */}
      <section className="py-20 bg-[#F2EFEA] border-y border-border/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={STAGGER}
            className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={FADE_UP}
                className="text-center md:text-left"
              >
                <div className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-primary leading-none mb-3">
                  <Counter
                    from={0}
                    to={stat.value}
                    suffix={stat.suffix}
                    duration={2.2}
                  />
                </div>
                <p className="text-xs md:text-sm font-mono uppercase tracking-[0.18em] text-foreground/70 font-semibold">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHAT WE STAND FOR */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={STAGGER}
            className="max-w-3xl mb-20"
          >
            <motion.div
              variants={FADE_UP}
              className="flex items-center gap-4 mb-6"
            >
              <AnimatedUnderline />
              <span className="text-eyebrow text-primary">
                WHAT WE STAND FOR
              </span>
            </motion.div>
            <motion.h2
              variants={FADE_UP}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-[1.1] tracking-tight"
            >
              Four principles.{" "}
              <span className="text-primary italic">No exceptions.</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={STAGGER}
            className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/20"
          >
            {pillars.map((p) => (
              <motion.div
                key={p.title}
                variants={FADE_UP}
                className="bg-background p-10 lg:p-12 hover:bg-[#F8F5F2] transition-colors duration-500 group"
              >
                <div className="w-14 h-14 mb-8 flex items-center justify-center border border-primary text-primary group-hover:bg-primary group-hover:border-primary group-hover:text-[#F8F5F2] transition-all duration-500">
                  <p.icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                  {p.title}
                </h3>
                <p className="text-base text-muted-foreground font-sans leading-relaxed">
                  {p.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* quote */}
      <section className="relative py-32 bg-primary/70 text-[#F8F5F2] overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src={blueprintBg}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        {/* <div className="absolute inset-0 bg-gradient-to-b from-foreground/20 via-foreground/10 to-foreground/15" /> */}

        <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <Quote
              size={48}
              className="text-accent mx-auto mb-10"
              strokeWidth={1.2}
            />
            <p className="text-3xl md:text-4xl lg:text-5xl font-serif italic leading-[1.25] mb-12 text-[#F8F5F2]">
              "We do not chase markets. We build for the families and
              institutions that will quietly own the next India — one
              title-clear acre at a time."
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-10 h-[1px] bg-accent" />
              <p className="text-xs font-mono uppercase tracking-[0.25em] text-accent font-bold">
                JM Ventures Manifesto
              </p>
              <div className="w-10 h-[1px] bg-accent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* milestones */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={STAGGER}
            className="max-w-3xl mb-20"
          >
            <motion.div
              variants={FADE_UP}
              className="flex items-center gap-4 mb-6"
            >
              <AnimatedUnderline />
              <span className="text-eyebrow text-accent">OUR JOURNEY</span>
            </motion.div>
            <motion.h2
              variants={FADE_UP}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-[1.1] tracking-tight"
            >
              From a boutique advisory{" "}
              <span className="text-primary italic">
                to India's smart-city frontier.
              </span>
            </motion.h2>
          </motion.div>

          <div className="space-y-16 md:space-y-24">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${i % 2 === 1 ? "lg:[direction:rtl]" : ""}`}
              >
                <div className="lg:col-span-7 [direction:ltr]">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={m.img}
                      alt={m.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                    />
                  </div>
                </div>
                <div className="lg:col-span-5 [direction:ltr]">
                  <p className="text-7xl md:text-8xl font-serif font-bold text-primary/40 leading-none mb-4">
                    {m.year}
                  </p>
                  <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-5">
                    {m.title}
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground font-sans leading-relaxed">
                    {m.body}
                  </p>
                </div>
              </motion.div>
            ))}
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

      {/* CTA */}
      <section className="relative py-32 overflow-hidden bg-foreground text-[#F8F5F2]">
        <div className="absolute inset-0 opacity-25">
          <img
            src={connectivityBg}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        {/* <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/85 to-foreground/95" /> */}

        <div className="relative max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-10 h-[1px] bg-accent" />
              <span className="text-eyebrow text-accent">LET'S TALK</span>
              <div className="w-10 h-[1px] bg-accent" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-[1.1] tracking-tight mb-8">
              Ready to participate in India's{" "}
              <span className="italic text-accent">next great cities?</span>
            </h2>
            <p className="text-lg md:text-xl text-[#F8F5F2]/75 max-w-2xl mx-auto font-sans leading-relaxed mb-12">
              Schedule a private consultation with our investment desk. We'll
              walk you through the corridors, the projects, and the numbers — at
              your pace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-primary text-sm px-8 py-4 h-14 uppercase font-semibold"
              >
                Schedule a Consultation
              </Link>
              <Link
                to="/"
                className="text-sm px-8 py-4 h-14 text-[#F8F5F2] border-[1px] uppercase font-semibold border-[#F8F5F2] hover:bg-[#F8F5F2] hover:text-foreground inline-flex items-center justify-center"
                data-testid="link-cta-back-home"
              >
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
