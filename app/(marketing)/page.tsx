import Link from "next/link";
import { getFeaturedBooks, formatDate } from "@/lib/books";

export default function HomePage() {
  const featuredBooks = getFeaturedBooks();

  return (
    <div>
      {/* Hero Section */}
      <section className="homepage-hero">
        <h1 className="homepage-title">Extracted</h1>
        <p className="homepage-subtitle">
          Wisdom from the books that shaped how I think. Each post distills key quotes and ideas into insights you can actually use.
        </p>
      </section>

      {/* Featured Posts */}
      <section className="homepage-posts">
        <div className="homepage-section-header">
          <h2 className="homepage-section-title">Featured</h2>
          <Link href="/library" className="homepage-view-all">
            View all books →
          </Link>
        </div>

        <div className="homepage-posts-grid">
          {featuredBooks.map((book) => (
            <article key={book.id} className="post-card">
              <p className="post-card-meta">
                {book.author} • {book.topic} {/*• {formatDate(book.createdAt)}*/}
              </p>
              <h2 className="post-card-title">
                <Link href={`/posts/${book.id}`}>
                  {book.title}
                </Link>
              </h2>
              <p className="post-card-excerpt">
                {book.excerpt}
              </p>
              <Link href={`/posts/${book.id}`} className="post-card-link">
                Read quotes & insights →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}