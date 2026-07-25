import { Link } from "../router";
import { motion } from "framer-motion";
import { Calendar, ArrowUpRight } from "lucide-react";

const formatDate = (dateStr) =>
  new Date(dateStr).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

const BlogCard = ({ blog, index = 0 }) => {
  return (
    <Link to={`/blog/${blog.slug}`}>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: (index % 3) * 0.12 }}
        className="group relative h-full rounded-2xl overflow-hidden bg-card border border-border shadow-[0px_0px_4px] shadow-black/20 hover:shadow-[0px_2px_10px] hover:shadow-black/20 hover:-translate-y-2 transition-all duration-300"
      >
        <div className="aspect-[16/10] overflow-hidden relative">
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
          <img
            src={blog.coverImage}
            alt={blog.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <span className="absolute top-4 left-4 z-20 bg-background/95 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-primary">
            {blog.category}
          </span>
        </div>

        <div className="p-6 flex flex-col">
          <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-wider mb-3">
            <Calendar className="w-3.5 h-3.5" />
            {formatDate(blog.date)}
            <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
            {blog.readTime}
          </div>

          <h3 className="text-xl font-serif font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
            {blog.title}
          </h3>

          <p className="text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-3">
            {blog.excerpt}
          </p>

          <span className="mt-auto inline-flex items-center gap-1.5 text-primary text-sm font-semibold group-hover:gap-3 transition-all">
            Read insight <ArrowUpRight className="w-4 h-4" />
          </span>
        </div>
      </motion.article>
    </Link>
  );
};

export default BlogCard;