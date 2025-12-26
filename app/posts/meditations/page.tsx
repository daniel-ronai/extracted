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

        {/* Quote Section 2 */}
        <div className="post-quote-section">
          <h2 className="post-quote-header">Quote 2</h2>
          <blockquote className="post-quote">
            "The happiness of your life depends upon the quality of your thoughts."
          </blockquote>
          <div className="post-explanation">
            <p>
              Your mind creates your experience of reality. Two people can go through the exact same situation and have 
              completely different reactions based solely on how they think about it. Marcus understood that if you don't 
              actively manage your thoughts, they'll manage you—often in ways that make you miserable.
            </p>
            <p>
              This doesn't mean "think positive" or pretend everything is fine when it isn't. It means being deliberate 
              about the stories you tell yourself. When you interpret every setback as a personal failure, you'll feel 
              defeated. When you see challenges as opportunities to grow, you'll feel energized. Same situation, different 
              thought, different life.
            </p>
          </div>
        </div>

        {/* Quote Section 3 */}
        <div className="post-quote-section">
          <h2 className="post-quote-header">Quote 3</h2>
          <blockquote className="post-quote">
            "Waste no more time arguing what a good man should be. Be one."
          </blockquote>
          <div className="post-explanation">
            <p>
              It's easy to spend hours debating philosophy, ethics, or what the "right" way to live is. But Marcus cuts 
              through all that: just act. You don't need perfect clarity or a complete moral framework before you start 
              doing good things. You learn by doing.
            </p>
            <p>
              This quote is a reminder that thinking about being better isn't the same as actually being better. Stop 
              overthinking, stop waiting for the perfect moment, and just start. Take the small actions that align with 
              your values. The rest will follow.
            </p>
          </div>
        </div>

        {/* Quote Section 4 */}
        <div className="post-quote-section">
          <h2 className="post-quote-header">Quote 4</h2>
          <blockquote className="post-quote">
            "If it is not right, do not do it. If it is not true, do not say it."
          </blockquote>
          <div className="post-explanation">
            <p>
              Simple moral clarity. Marcus lived in a world of political intrigue and constant temptation to compromise. 
              This quote is his anchor: don't do things you know are wrong, and don't lie. It sounds obvious, but how often 
              do we justify small compromises because "everyone does it" or "it doesn't really matter"?
            </p>
            <p>
              The power of this principle is that it simplifies decision-making. You don't need to calculate the consequences 
              or weigh competing interests. If something violates your values, you don't do it. Period. That clarity protects 
              you from slowly drifting into behavior you'd be ashamed of.
            </p>
          </div>
        </div>

        {/* Quote Section 5 */}
        <div className="post-quote-section">
          <h2 className="post-quote-header">Quote 5</h2>
          <blockquote className="post-quote">
            "When you arise in the morning, think of what a precious privilege it is to be alive—to breathe, to think, 
            to enjoy, to love."
          </blockquote>
          <div className="post-explanation">
            <p>
              Gratitude was central to Marcus's philosophy. He knew that life is short and fragile, and that every day is 
              a gift. This isn't some fluffy positivity—it's a practical tool. Starting your day by acknowledging how lucky 
              you are to be alive shifts your mindset from scarcity to abundance.
            </p>
            <p>
              When you're stressed about work, relationships, or money, it's easy to lose perspective. This quote reminds 
              you to zoom out. You're alive. You can think. You can feel. That's already extraordinary. Whatever problems 
              you're facing exist within that context, and that context is a miracle.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}