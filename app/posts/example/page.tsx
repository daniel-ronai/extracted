import { getBookById, formatDate } from "@/lib/books";

export default function MeditationsPost() {
  const book = getBookById("meditations");

  return (
    <article>
      {/* Post Header */}
      <header className="post-header">
        <p className="post-meta">
          {book?.author} • {book?.topic}
        </p>
        <h1 className="post-title">{book?.title}</h1>
        <p className="post-author">By {book?.author}</p>
        {book && (
          <p className="post-date">{formatDate(book.createdAt)}</p>
        )}
      </header>

      {/* Post Content */}
      <div className="post-content">
        {/* Your quotes and content... */}
        <p>
          <em>Meditations</em> is a collection of personal writings by Marcus Aurelius, Roman Emperor from 161 to 180 AD. 
          These aren't meant for publication—they're his private journal, written in Greek while on military campaigns. 
          Reading it feels like discovering someone's most honest thoughts about how to live well.
        </p>

        {/* Quote Section 1 */}

        <div className="post-quote-section">
          <h2 className="post-quote-header">Quote 1</h2>
          <blockquote className="post-quote">
            "You have power over your mind—not outside events. Realize this, and you will find strength."
          </blockquote>
          <div className="post-explanation">
            <p>
              This is the foundation of Stoic philosophy, and it's as relevant today as it was 2,000 years ago. 
              We spend so much energy trying to control things we can't—other people, the weather, the outcome of events. 
              Marcus reminds us that real power lies in how we interpret and respond to what happens, not in forcing 
              the world to bend to our will.
            </p>
            <p>
              When something goes wrong, your first instinct might be anger or frustration. But those emotions come from 
              believing you should have been able to prevent it. The moment you accept that external events are beyond 
              your control, you stop wasting energy on them. Instead, you focus on your response—which is entirely yours 
              to shape.
            </p>
          </div>
        </div>

      </div>
    </article>
  );
}