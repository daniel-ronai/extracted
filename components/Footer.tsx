'use client';

import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;
    
    setStatus("loading");
    
    try {
      const response = await fetch("https://hook.eu2.make.com/w762bj748gp4o46uhmyc43do71p1wgny", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      
      if (response.ok) {
        setStatus("success");
        setEmail("");
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-left">
            <p className="footer-logo">Extracted</p>
            <p className="footer-tagline">
              Extracting wisdom from books worth reading
            </p>
          </div>

          <div className="footer-newsletter">
            <p className="footer-newsletter-title">Get notified of new posts</p>
            <form onSubmit={handleSubmit} className="footer-newsletter-form">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="footer-newsletter-input"
                disabled={status === "loading" || status === "success"}
                required
              />
              <button 
                type="submit" 
                className="footer-newsletter-button"
                disabled={status === "loading" || status === "success"}
              >
                {status === "loading" ? "..." : status === "success" ? "✓" : "Join"}
              </button>
            </form>
            {status === "error" && (
              <p className="footer-newsletter-error">Something went wrong. Try again.</p>
            )}
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-links">
            <Link href="/">Home</Link>
            <Link href="/library">Library</Link>
            <Link href="/about">About</Link>
            <Link href="/privacy">Privacy Policy</Link>
            {/*<a href="mailto:hello@extracted.com">Contact</a>*/}
          </div>
          <p className="footer-copyright">© 2026 Extracted</p>
        </div>
      </div>
    </footer>
  );
}