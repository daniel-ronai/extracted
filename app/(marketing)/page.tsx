import Link from "next/link";

export default function HomePage() {
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
          
          {/* Post Card 1 */}
          <article className="post-card">
            <p className="post-card-meta">Viktor Frankl • Philosophy</p>
            <h2 className="post-card-title">
              <Link href="/posts/mans-search-for-meaning">
                Man's Search for Meaning
              </Link>
            </h2>
            <p className="post-card-excerpt">
              In the depths of suffering, Frankl discovered that meaning isn't found in happiness, but in choosing how we respond to what we cannot change.
            </p>
            <Link href="/posts/mans-search-for-meaning" className="post-card-link">
              Read quotes & insights →
            </Link>
          </article>

          {/* Post Card 2 */}
          <article className="post-card">
            <p className="post-card-meta">Marcus Aurelius • Stoicism</p>
            <h2 className="post-card-title">
              <Link href="/posts/meditations">
                Meditations
              </Link>
            </h2>
            <p className="post-card-excerpt">
              A Roman emperor's private journal on how to live well. Marcus Aurelius reminds us that we control our reactions, not external events.
            </p>
            <Link href="/posts/meditations" className="post-card-link">
              Read quotes & insights →
            </Link>
          </article>

          {/* Post Card 3 */}
          <article className="post-card">
            <p className="post-card-meta">James Clear • Habits</p>
            <h2 className="post-card-title">
              <Link href="/posts/atomic-habits">
                Atomic Habits
              </Link>
            </h2>
            <p className="post-card-excerpt">
              Small changes compound into remarkable results. Clear breaks down exactly how to build better habits and break bad ones.
            </p>
            <Link href="/posts/atomic-habits" className="post-card-link">
              Read quotes & insights →
            </Link>
          </article>

        </div>
      </section>
    </div>
  );
}