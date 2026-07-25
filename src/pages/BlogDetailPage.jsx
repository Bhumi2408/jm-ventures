import { useState } from "react";
import { useParams, Link, Navigate } from "../router";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import SEO from "../components/SEO";
import BlogCard from "../components/BlogCard";
import RichText from "../components/RichText";
import {
  getBlogBySlug,
  getRelatedBlogs,
  buildArticleSchema,
  buildFaqSchema,
} from "../data/blogsData";

const formatDate = (dateStr) =>
  new Date(dateStr).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

const BlogDetailPage = () => {
  const { slug } = useParams();
  const blog = getBlogBySlug(slug);
  const [activeFaq, setActiveFaq] = useState(null);

  if (!blog) {
    return <Navigate to="/blog" replace />;
  }

  const related = getRelatedBlogs(blog.slug, 3);
  const pageUrl = `https://www.jm-ventures.in/blog/${blog.slug}`;

  const schema = [buildArticleSchema(blog, pageUrl), buildFaqSchema(blog.faqs)].filter(
    Boolean
  );

  const toggleFaq = (i) => setActiveFaq(activeFaq === i ? null : i);

  return (
    <>
      <SEO
        title={blog.metaTitle || `${blog.title} | JM Ventures Blog`}
        description={blog.metaDescription || blog.excerpt}
        image={blog.coverImage}
        url={pageUrl}
        type="article"
        publishedTime={blog.date}
        author={blog.author}
        keywords={`${blog.category}, JM Ventures, ${blog.title}`}
        schema={schema}
      />

      {/* Hero */}
      <section className="relative h-[55vh] min-h-[420px] flex items-end overflow-hidden">
        <img
          src={blog.coverImage}
          alt={blog.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#585b5e]/60 via-primary/70 to-primary/30" />

        <div className="relative z-10 container mx-auto px-6 md:px-12 pb-14">
          <Link
            to="/blog"
            className="flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white transition-colors mb-6"
          >
            &larr; Back to Journal
          </Link>
          <span className="inline-block bg-background/95 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-primary mb-4">
            {blog.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight max-w-3xl">
            {blog.title}
          </h1>
        </div>
      </section>

      {/* Meta bar */}
      <section className="bg-background border-b border-border">
        <div className="container mx-auto px-6 md:px-12 py-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <span className="text-foreground font-medium">{blog.author}</span>
          <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" /> {formatDate(blog.date)}
          </span>
          <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />

        </div>
      </section>

      {/* Article Content */}
      <article className="bg-background py-16">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          {blog.intro?.map((p, i) => (
            <p
              key={i}
              className="text-lg leading-relaxed text-muted-foreground mb-6"
            >
              <RichText text={p} />
            </p>
          ))}

          {blog.content.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5 }}
              className={section.level === "sub" ? "mb-8" : "mb-10 mt-2"}
            >
              {section.level === "sub" ? (
                <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                  {section.heading}
                </h3>
              ) : (
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4 pt-2">
                  {section.heading}
                </h2>
              )}

              {section.paragraphs?.map((p, i) => (
                <p
                  key={i}
                  className="text-base leading-relaxed text-muted-foreground mb-4"
                >
                  <RichText text={p} />
                </p>
              ))}

              {section.list && (
                <ul className="space-y-2 mb-4">
                  {section.list.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <span>
                        <RichText text={item} />
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Multiple sequential paragraph+list groups under one heading
                  (e.g. "Residential Plots" -> intro+list, then "Benefits include:"+list) */}
              {section.groups?.map((group, gi) => (
                <div key={gi} className="mb-4">
                  {group.paragraphs?.map((p, i) => (
                    <p
                      key={i}
                      className="text-base leading-relaxed text-muted-foreground mb-3"
                    >
                      <RichText text={p} />
                    </p>
                  ))}
                  {group.list && (
                    <ul className="space-y-2 mb-4">
                      {group.list.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          <span>
                            <RichText text={item} />
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {/* Comparison table */}
              {section.table && (
                <div className="overflow-x-auto mb-4 rounded-lg border border-border">
                  <table className="w-full text-sm">
                    <thead className="bg-primary text-primary-foreground">
                      <tr>
                        {section.table.headers.map((h, i) => (
                          <th
                            key={i}
                            className="px-4 py-3 text-left font-serif font-semibold"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row, ri) => (
                        <tr
                          key={ri}
                          className={ri % 2 === 0 ? "bg-card" : "bg-background"}
                        >
                          {row.map((cell, ci) => (
                            <td
                              key={ci}
                              className="px-4 py-3 text-muted-foreground border-t border-border"
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {section.note &&
                (Array.isArray(section.note) ? (
                  section.note.map((n, i) => (
                    <p
                      key={i}
                      className="text-base leading-relaxed text-muted-foreground mb-3"
                    >
                      <RichText text={n} />
                    </p>
                  ))
                ) : (
                  <p className="text-base leading-relaxed text-muted-foreground">
                    <RichText text={section.note} />
                  </p>
                ))}

              {/* "Tip:" style callout */}
              {section.tip && (
                <div className="mt-4 rounded-lg border-l-4 border-primary bg-primary/5 px-4 py-3">
                  <p className="text-sm text-foreground">
                    <span className="font-bold text-primary">Tip: </span>
                    <RichText text={section.tip} />
                  </p>
                </div>
              )}
            </motion.div>
          ))}

          {/* Inline CTA */}
          <div className="mt-14 rounded-2xl border border-border bg-card shadow-[0px_0px_4px] shadow-black/20 p-8 text-center">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
              Have questions about this corridor?
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Talk to our directors for a tailored investment perspective.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary text-primary-foreground px-7 py-3 rounded-md text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </article>

      {/* FAQ */}
      {blog.faqs?.length > 0 && (
        <section className="py-20 bg-gradient-to-t from-[#585b5e]/20 via-primary/20 to-primary/30">
          <div className="container mx-auto px-6 md:px-12 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-10 text-center">
              {blog.faqSectionTitle || "Frequently Asked Questions"}
            </h2>
            <div className="space-y-4">
              {blog.faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-border rounded-xl bg-white/70 backdrop-blur-md shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center px-5 py-4 text-left text-foreground font-medium"
                  >
                    {faq.q}
                    <span className="text-xl text-primary">
                      {activeFaq === index ? "−" : "+"}
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      activeFaq === index ? "max-h-40 px-5 pb-4" : "max-h-0"
                    }`}
                  >
                    <p className="text-muted-foreground">
                      <RichText text={faq.a} />
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="py-20 bg-background border-t border-border">
          <div className="container mx-auto px-6 md:px-12">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-10">
              More From The Journal
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {related.map((b, i) => (
                <BlogCard key={b.id} blog={b} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default BlogDetailPage;