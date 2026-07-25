import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import BlogCard from "../components/BlogCard";
import { getAllBlogs } from "../data/Blogsdata";

const BlogPage = () => {
  const allBlogs = getAllBlogs();
  const categories = useMemo(
    () => ["All", ...new Set(allBlogs.map((b) => b.category))],
    [allBlogs]
  );
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredBlogs =
    activeCategory === "All"
      ? allBlogs
      : allBlogs.filter((b) => b.category === activeCategory);

  return (
    <>
      <SEO
        title="Blog | Real Estate Investment Insights | JM Ventures"
        description="Read the latest insights on Dholera SIR, Yamuna Expressway, Noida & Greater Noida real estate investment — market analysis, due diligence guides and NRI advisory from JM Ventures."
        url="https://www.jm-ventures.in/blog"
        keywords="JM Ventures blog, Dholera investment blog, Yamuna Expressway real estate news, Noida property insights, NRI real estate guide"
      />

      {/* Banner / Hero */}
      <section className="relative py-24 md:py-32 bg-primary text-primary-foreground overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="container relative z-10 mx-auto px-6 md:px-12 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white/90 font-medium tracking-[0.18em] uppercase text-sm mb-5 block"
          >
            Market Insights
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-bold text-white/95 mb-6"
          >
            Insights That Shape <br className="hidden md:block" />
            <span className="italic">Better Decisions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/85 text-lg max-w-2xl mx-auto font-light"
          >
            Research-backed perspectives on India's high-growth real estate
            corridors — from Dholera's smart city rise to the Yamuna
            Expressway's infrastructure story.
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-background pt-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-primary text-white border-primary "
                    : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          {filteredBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((blog, i) => (
                <BlogCard key={blog.id} blog={blog} index={i} />
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground py-20">
              No articles found in this category yet.
            </p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground text-center px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white/90">
            Ready to Create Value?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light">
            Schedule a private consultation with our directors to discuss
            tailored investment opportunities across India's most promising
            real estate corridors.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-primary hover:bg-gray-100 hover:text-primary text-lg px-8 py-5 rounded-md font-semibold border-none"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </>
  );
};

export default BlogPage;