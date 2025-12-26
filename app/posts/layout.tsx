import PostNavbar from "@/components/PostNavbar";
import PostFooter from "@/components/PostFooter";
import Footer from "@/components/Footer";
import MarketingNavbar from "@/components/MarketingNavbar";

export default function PostsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="post-layout">
      <MarketingNavbar />
      <main className="post-main">
        {children}
      </main>
      <Footer />
    </div>
  );
}