export default function PostFooter() {
  return (
    <footer className="post-footer">
      <div className="post-footer-container">
        <p className="post-footer-text">
          © 2024 Extracted. Extracting wisdom from books worth reading.
        </p>
        <div className="post-footer-links">
          <a href="mailto:hello@extracted.com" className="post-footer-link">
            Contact
          </a>
          <a href="/rss" className="post-footer-link">
            RSS
          </a>
        </div>
      </div>
    </footer>
  );
}