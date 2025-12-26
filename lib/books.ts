export interface Book {
  id: string;
  title: string;
  author: string;
  topic: string;
  excerpt: string;
  featured: boolean;
  createdAt: string; // ISO date string: "2024-12-26"
}

export const allBooks: Book[] = [
  {
    id: "meditations",
    title: "Meditations",
    author: "Marcus Aurelius",
    topic: "Stoicism",
    excerpt: "A Roman emperor's private journal on how to live well. Marcus Aurelius reminds us that we control our reactions, not external events.",
    featured: true,
    createdAt: "2024-12-22",
  },
  {
    id: "mans-search-for-meaning",
    title: "Man's Search for Meaning",
    author: "Viktor Frankl",
    topic: "Philosophy",
    excerpt: "In the depths of suffering, Frankl discovered that meaning isn't found in happiness, but in choosing how we respond to what we cannot change.",
    featured: true,
    createdAt: "2024-12-22",
  },
  {
    id: "atomic-habits",
    title: "Atomic Habits",
    author: "James Clear",
    topic: "Habits",
    excerpt: "Small changes compound into remarkable results. Clear breaks down exactly how to build better habits and break bad ones.",
    featured: true,
    createdAt: "2024-12-26",
  },
  {
    id: "subtle-art",
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    topic: "Self-Improvement",
    excerpt: "Manson cuts through the positivity BS and teaches you to focus on what actually matters in your life.",
    featured: false,
    createdAt: "2024-12-15",
  },
  {
    id: "brothers-karamazov",
    title: "The Brothers Karamazov",
    author: "Fyodor Dostoevsky",
    topic: "Literature",
    excerpt: "Dostoevsky's masterpiece explores faith, doubt, morality, and the meaning of existence through the story of three brothers.",
    featured: false,
    createdAt: "2024-12-10",
  },
  {
    id: "crime-punishment",
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    topic: "Literature",
    excerpt: "A psychological thriller about guilt, morality, and redemption. Can you commit evil for a greater good?",
    featured: false,
    createdAt: "2024-12-08",
  },
  {
    id: "ego-enemy",
    title: "Ego Is the Enemy",
    author: "Ryan Holiday",
    topic: "Stoicism",
    excerpt: "Your ego blinds you to your weaknesses and prevents growth. Holiday shows how to overcome it at every stage of life.",
    featured: false,
    createdAt: "2024-12-05",
  },
  {
    id: "deep-work",
    title: "Deep Work",
    author: "Cal Newport",
    topic: "Productivity",
    excerpt: "The ability to focus without distraction is becoming rare—and therefore valuable. Newport teaches you how to cultivate it.",
    featured: false,
    createdAt: "2024-12-01",
  },
];

// Helper functions
export const getFeaturedBooks = () => 
  allBooks
    .filter(book => book.featured)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

export const getAllBooks = () => 
  allBooks.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

export const getAllTopics = () => 
  Array.from(new Set(allBooks.map(book => book.topic))).sort();

export const getBookById = (id: string) => 
  allBooks.find(book => book.id === id);

// Format date helper
export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
};