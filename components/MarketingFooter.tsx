import Link from "next/link";

export default function MarketingFooter() {
  return (
    <footer className="marketing-footer">
      <div className="marketing-footer-inner">
        <div className="marketing-footer-left">
          <p className="marketing-footer-logo">Extracted</p>
          <p className="marketing-footer-tagline">
            Extracting wisdom from books worth reading
          </p>
        </div>

        <div className="marketing-footer-links">
          <Link href="/">Home</Link>
          <Link href="/library">Library</Link>
          <Link href="/about">About</Link>
          <a href="mailto:hello@extracted.com">Contact</a>
        </div>
      </div>
    </footer>
  );
}