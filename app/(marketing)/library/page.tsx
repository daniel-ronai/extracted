'use client';

import { useState } from "react";
import Link from "next/link";

// Define all books with metadata
const allBooks = [
  {
    id: "mans-search-for-meaning",
    title: "Man's Search for Meaning",
    author: "Viktor Frankl",
    topic: "Philosophy",
    excerpt: "In the depths of suffering, Frankl discovered that meaning isn't found in happiness, but in choosing how we respond to what we cannot change.",
    featured: true,
  },
  {
    id: "meditations",
    title: "Meditations",
    author: "Marcus Aurelius",
    topic: "Stoicism",
    excerpt: "A Roman emperor's private journal on how to live well. Marcus Aurelius reminds us that we control our reactions, not external events.",
    featured: true,
  },
  {
    id: "atomic-habits",
    title: "Atomic Habits",
    author: "James Clear",
    topic: "Habits",
    excerpt: "Small changes compound into remarkable results. Clear breaks down exactly how to build better habits and break bad ones.",
    featured: true,
  },
  {
    id: "subtle-art",
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    topic: "Self-Improvement",
    excerpt: "Manson cuts through the positivity BS and teaches you to focus on what actually matters in your life.",
    featured: false,
  },
  {
    id: "brothers-karamazov",
    title: "The Brothers Karamazov",
    author: "Fyodor Dostoevsky",
    topic: "Literature",
    excerpt: "Dostoevsky's masterpiece explores faith, doubt, morality, and the meaning of existence through the story of three brothers.",
    featured: false,
  },
  {
    id: "crime-punishment",
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    topic: "Literature",
    excerpt: "A psychological thriller about guilt, morality, and redemption. Can you commit evil for a greater good?",
    featured: false,
  },
  {
    id: "ego-enemy",
    title: "Ego Is the Enemy",
    author: "Ryan Holiday",
    topic: "Stoicism",
    excerpt: "Your ego blinds you to your weaknesses and prevents growth. Holiday shows how to overcome it at every stage of life.",
    featured: false,
  },
  {
    id: "deep-work",
    title: "Deep Work",
    author: "Cal Newport",
    topic: "Productivity",
    excerpt: "The ability to focus without distraction is becoming rare—and therefore valuable. Newport teaches you how to cultivate it.",
    featured: false,
  },
];

// Get unique topics
const allTopics = Array.from(new Set(allBooks.map(book => book.topic))).sort();

export default function LibraryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("All");

  // Filter books based on search and topic
  const filteredBooks = allBooks.filter(book => {
    const matchesSearch = 
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesTopic = selectedTopic === "All" || book.topic === selectedTopic;
    
    return matchesSearch && matchesTopic;
  });

  return (
    <div className="library-page">
      {/* Header */}
      <section className="library-header">
        <h1 className="library-title">Library</h1>
        <p className="library-subtitle">
          All the books I've extracted wisdom from. Search or filter by topic.
        </p>
      </section>

      {/* Filters */}
      <section className="library-filters">
        <div className="library-filters-container">
          {/* Search Bar */}
          <div className="library-search">
            <input
              type="text"
              placeholder="Search books, authors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="library-search-input"
            />
          </div>

          {/* Topic Filter */}
          <div className="library-topics">
            <button
              className={`library-topic-btn ${selectedTopic === "All" ? "active" : ""}`}
              onClick={() => setSelectedTopic("All")}
            >
              All
            </button>
            {allTopics.map((topic) => (
              <button
                key={topic}
                className={`library-topic-btn ${selectedTopic === topic ? "active" : ""}`}
                onClick={() => setSelectedTopic(topic)}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Books Grid */}
      <section className="library-books">
        <div className="library-books-container">
          {filteredBooks.length === 0 ? (
            <div className="library-empty">
              <p>No books found matching your search.</p>
            </div>
          ) : (
            <div className="library-grid">
              {filteredBooks.map((book) => (
                <article key={book.id} className="library-card">
                  <p className="library-card-meta">
                    {book.author} • {book.topic}
                  </p>
                  <h2 className="library-card-title">
                    <Link href={`/posts/${book.id}`}>
                      {book.title}
                    </Link>
                  </h2>
                  <p className="library-card-excerpt">{book.excerpt}</p>
                  <Link href={`/posts/${book.id}`} className="library-card-link">
                    Read quotes & insights →
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Results Count */}
      <div className="library-count">
        Showing {filteredBooks.length} of {allBooks.length} books
      </div>
    </div>
  );
}