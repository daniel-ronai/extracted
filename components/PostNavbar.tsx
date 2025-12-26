import Link from "next/link";

export default function PostNavbar() {
  return (
    <nav className="post-navbar">
      <div className="post-navbar-container">
        <Link href="/" className="post-navbar-logo">
          Extracted
        </Link>
        <div className="post-navbar-links">
          <Link href="/" className="post-navbar-link">
            Home
          </Link>
          <Link href="/library" className="post-navbar-link">
            Library
          </Link>
          <Link href="/about" className="post-navbar-link">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}