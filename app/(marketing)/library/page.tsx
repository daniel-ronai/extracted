'use client';

import { useState } from "react";
import Link from "next/link";
import { getAllBooks, getAllTopics, formatDate } from "@/lib/books";

export default function LibraryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("All");

  const topics = getAllTopics();
  const allBooksData = getAllBooks();

  // Filter books based on search and topic
  const filteredBooks = allBooksData.filter(book => {
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
            {topics.map((topic) => (
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
                    {book.author} • {book.topic} {/*• {formatDate(book.createdAt)}*/}
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
        Showing {filteredBooks.length} of {allBooksData.length} books
      </div>
    </div>
  );
}