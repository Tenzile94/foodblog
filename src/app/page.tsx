import HeroSection from '@/components/HeroSection';
import BlogCards from '@/components/BlogCards';
import FeaturedPost from '@/components/FeaturedPost';
import { blogPosts } from '@/data/blogData';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <BlogCards posts={blogPosts} />
      <FeaturedPost />
    </div>
  );
}