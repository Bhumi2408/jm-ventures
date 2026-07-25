import { motion, useInView, useScroll, useTransform } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  ArrowRight,
  Calendar,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  MessageSquare,
  Phone,
  Send,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "../router";
import SEO from "../components/SEO";

const channels = [
  {
    icon: Phone,
    title: "Call Us",
    primary: "+91 98990 53053",
    secondary: "Mon – Sat · 10:00 – 19:00 IST",
    action: "tel:+919876543210",
    actionLabel: "Place a call",
  },
  {
    icon: Mail,
    title: "Email",
    primary: "info@jmventures.in",
    secondary: "Response within 1 business day",
    action: "mailto:info@jmventures.in",
    actionLabel: "Send an email",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp",
    primary: "+91 98990 53053",
    secondary: "Quick replies, document sharing",
    action: "https://wa.me/919876543210",
    actionLabel: "Open chat",
  },
];

const offices = [
  {
    city: "Noida",
    label: "Headquarters",
    address:
      "Mindmill Corporate towers, Film City, Sector 16A, Noida, UP-201301",
    hours: "Mon – Sat · 10:00 – 19:00",
    phone: "+91 120 456 7890",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80",
  },
];

const Contact = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    consent: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (submitted) return;

    setSubmitted(true);

    const templateParams = {
      form_type: "Contact Form",
      from_name: form.name,
      from_email: form.email,
      phone: form.phone,
      interest: form.company,
      message: form.message,
    };

    // Form reset
    setForm({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      consent: false,
    });

    // Instant redirect
    navigate("/thank-you");

    // Email background me send hogi
    emailjs
      .send(
        "service_et2ozej",
        "template_xqwjqe7",
        templateParams,
        "CqaPnjLV5Q0q6hcqK",
      )
      .then(() => {
        console.log("Lead sent successfully");
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
      });
  };

  const update = (key, value) => setForm({ ...form, [key]: value });
  return (
    <>
      <SEO
        title="Contact JM Ventures | Dholera Smart City Property Experts"
        description="Contact JM Ventures for expert guidance on Dholera Smart City investments. Get details on plot prices, site visits, government-approved projects, and personalized assistance from our property experts."
        url="https://www.jm-ventures.in/contact"
      />
      {/* hero section */}
      <section className="relative min-h-[70dvh] flex items-center bg-foreground text-white overflow-hidden pt-40 pb-28">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=80"
            alt="Modern office interior"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/40" />
        </div>

        <div
          className="absolute inset-0 z-10 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="container relative z-20 flex flex-col items-center px-6 md:px-12">
          <div className="max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-primary/20 border border-primary/40 backdrop-blur-sm"
            >
              <MessageCircle className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs tracking-[0.25em] uppercase text-white/90">
                Get in Touch
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] mb-8"
            >
              Let's start a{" "}
              <span className="italic text-primary">conversation.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-lg md:text-xl text-white/70 leading-relaxed"
            >
              Whether you're sizing up your first investment or restructuring a
              multi-asset portfolio — our team responds within one business day.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 md:py-20 bg-background -mt-12 relative z-30 md:px-28">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border shadow-2xl">
            {channels.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-background p-8 hover:bg-primary/5 transition-colors group"
              >
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                  <c.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                </div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                  {c.title}
                </div>
                <div className="font-serif text-xl text-foreground mb-1">
                  {c.primary}
                </div>
                <div className="text-sm text-muted-foreground mb-5">
                  {c.secondary}
                </div>
                <a
                  href={c.action}
                  className="text-sm font-medium text-primary hover:text-deep-burgundy transition-colors inline-flex items-center"
                >
                  {c.actionLabel}
                  <span className="ml-2 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-12 md:py-20 bg-gradient-to-t from-primary/60 to-foreground/60 md:px-28">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid items-center lg:grid-cols-12 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5"
            >
              <span className="text-sm tracking-[0.3em] font-semibold uppercase text-white/80 mb-4 block">
                Inquiry Form
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-white/70 font-semibold leading-tight mb-6">
                Tell us a little about what you're looking for.
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                The more you share, the more precisely we can route your inquiry
                to the right relationship manager. All conversations are
                confidential.
              </p>

              <div className="border-l-2 border-primary pl-6 py-2">
                <p className="font-serif font-medium text-xl text-white italic mb-2">
                  "We treat every inquiry like a portfolio brief — not a lead."
                </p>
                <p className="text-sm text-primary font-semibold">
                  — Mukesh Jodhani, Director
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-7"
            >
              {submitted ? (
                <div className="bg-primary text-white p-12 text-center">
                  <Send className="w-12 h-12 mx-auto mb-6 text-white" />
                  <h3 className="font-serif text-3xl mb-3">
                    Inquiry received.
                  </h3>
                  <p className="text-white/80 max-w-md mx-auto">
                    Thank you — a relationship manager will reach out within one
                    business day. Look out for an email from{" "}
                    <span className="underline">info@jmventures.in</span>.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-secondary/5 p-8 md:p-12 border border-border space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <Field
                      label="Full name"
                      required
                      value={form.name}
                      onChange={(v) => update("name", v)}
                    />
                    <Field
                      label="Company / family office"
                      value={form.company}
                      onChange={(v) => update("company", v)}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <Field
                      label="Email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(v) => update("email", v)}
                    />
                    <Field
                      label="Phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(v) => update("phone", v)}
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white mb-2">
                      Your message
                    </label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      placeholder="Tell us about your goals, timeline, or specific properties you're considering..."
                      className="w-full bg-background border border-border p-4 text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                    />
                  </div>

                  <label className="flex items-start gap-3 cursor-pointer text-white">
                    <input
                      type="checkbox"
                      required
                      checked={form.consent}
                      onChange={(e) => update("consent", e.target.checked)}
                      className="mt-1 accent-primary"
                    />
                    <span className="text-sm text-muted-foreground">
                      I agree to receive updates,offers and communication via
                      RCS/SMS/WHATSAPP CALL from JM Ventures LLP. and accept the
                      privacy policy.
                    </span>
                  </label>

                  <button
                    type="submit"
                    disabled={submitted}
                    className="inline-flex items-center bg-primary text-white px-8 py-4 text-sm font-medium tracking-wide hover:bg-deep-burgundy transition-colors group disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitted ? "Submitting..." : "Send Inquiry"}
                    {!submitted && (
                      <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-12 md:py-20 bg-secondary/5">
        <div className="container mx-auto px-6 md:px-28 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <span className="text-sm tracking-[0.3em] uppercase text-primary mb-4 block">
              Visit Us
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight">
              Three offices across the National Capital Region.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-1">
            {offices.map((o, i) => (
              <motion.div
                key={o.city}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-background border border-border flex items-center justify-start text-left group hover:shadow-2xl transition-shadow"
              >
                <div className="overflow-hidden">
                  <img
                    src={o.image}
                    alt={o.city}
                    className="w-full h-[280px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <div className="flex items-start mb-4">
                    <div>
                      <h3 className="font-serif text-2xl text-foreground text-left">
                        {o.city}
                      </h3>
                      <span className="text-xs uppercase tracking-wider text-primary">
                        {o.label}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-start text-muted-foreground">
                      <MapPin className="w-4 h-4 mt-0.5 mr-3 flex-shrink-0 text-primary" />
                      <span>{o.address}</span>
                    </div>
                    <div className="flex items-start text-muted-foreground">
                      <Clock className="w-4 h-4 mt-0.5 mr-3 flex-shrink-0 text-primary" />
                      <span>{o.hours}</span>
                    </div>
                    <div className="flex items-start text-muted-foreground">
                      <Phone className="w-4 h-4 mt-0.5 mr-3 flex-shrink-0 text-primary" />
                      <a
                        href={`tel:${o.phone.replace(/\s/g, "")}`}
                        className="hover:text-primary transition-colors"
                      >
                        {o.phone}
                      </a>
                    </div>
                  </div>

                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(o.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center text-left text-sm font-medium text-primary hover:text-deep-burgundy transition-colors"
                  >
                    Get directions
                    <span className="ml-2">→</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="py-24 md:py-32 bg-foreground text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-3 gap-12 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <span className="text-sm tracking-[0.3em] uppercase text-primary mb-3 block">
                Find Us
              </span>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight">
                Our headquarters in Sector 62, Noida.
              </h2>
            </motion.div>
            <motion.a
              href="https://maps.google.com/?q=Logix+Cyber+Park+Sector+62+Noida"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 text-sm font-medium tracking-wide hover:bg-deep-burgundy transition-colors lg:justify-self-end"
            >
              Open in Google Maps →
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="aspect-[16/8] w-full overflow-hidden rounded-xl border border-white/10"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.9745510784587!2d77.31233608885498!3d28.570526900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1f7f0000001%3A0x4717c8950219203f!2sMindmill%20Park%20View!5e0!3m2!1sen!2sin!4v1777277771625!5m2!1sen!2sin"
              width="100%"
              height="100%"
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </>
  );
};

function Field({ label, type = "text", value, onChange, required }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider text-white mb-2">
        {label} {required && <span className="text-primary">*</span>}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        pattern={
          type === "tel"
            ? "[0-9]{10}"
            : type === "email"
              ? "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"
              : undefined
        }
        title={
          type === "tel"
            ? "Please enter a valid 10-digit phone number"
            : type === "email"
              ? "Please enter a valid email address"
              : ""
        }
        className="w-full bg-background border border-border p-3 text-foreground focus:outline-none focus:border-primary transition-colors"
      />
    </div>
  );
}

export default Contact;
