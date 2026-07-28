import { Link } from "../router";

const INLINE_REGEX = /(\*\*\[.+?\]\(.+?\)\*\*|\*\*.+?\*\*|\[.+?\]\(.+?\))/g;

const LINK_CLASS =
  "font-bold text-primary underline underline-offset-2 decoration-primary hover:opacity-80 transition-opacity";

const RichText = ({ text }) => {
  if (!text) return null;

  const parts = text.split(INLINE_REGEX).filter(Boolean);

  return (
    <>
      {parts.map((part, i) => {
        // **[label](url)** — bold + link combined
        const boldLinkMatch = part.match(/^\*\*\[(.+)\]\((.+)\)\*\*$/);
        if (boldLinkMatch) {
          const [, label, href] = boldLinkMatch;
          const isInternal = href.startsWith("/");

          return isInternal ? (
            <Link key={i} to={href} className={LINK_CLASS}>
              {label}
            </Link>
          ) : (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={LINK_CLASS}
            >
              {label}
            </a>
          );
        }

        const boldMatch = part.match(/^\*\*(.+)\*\*$/);
        if (boldMatch) {
          return (
            <strong key={i} className="font-bold text-primary">
              {boldMatch[1]}
            </strong>
          );
        }

        const linkMatch = part.match(/^\[(.+)\]\((.+)\)$/);
        if (linkMatch) {
          const [, label, href] = linkMatch;
          const isInternal = href.startsWith("/");

          return isInternal ? (
            <Link key={i} to={href} className={LINK_CLASS}>
              {label}
            </Link>
          ) : (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={LINK_CLASS}
            >
              {label}
            </a>
          );
        }

        return <span key={i}>{part}</span>;
      })}
    </>
  );
};

export default RichText;