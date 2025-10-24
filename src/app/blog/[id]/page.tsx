import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/data/blogData';

interface BlogPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function BlogPage({ params }: BlogPageProps) {
  const resolvedParams = await params;
  const post = blogPosts.find(p => p.id === resolvedParams.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
     

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link 
          href="/" 
          className="inline-flex items-center text-pink-500 hover:text-pink-600 mb-8 transition-colors group"
        >
          <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>

        {/* Article Header */}
        <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Hero Image */}
          <div className="relative h-80 md:h-96 lg:h-[500px]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center space-x-4 text-sm text-white mb-4">
                <span className="bg-pink-500 text-white px-3 py-1 rounded-full font-medium">
                  {post.category}
                </span>
                <span className="text-white/80">{post.date}</span>
                <span className="text-white/80">{post.readTime}</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                {post.title}
              </h1>
              <p className="text-lg text-white/90 leading-relaxed max-w-3xl">
                {post.excerpt}
              </p>
            </div>
          </div>

          {/* Article Content */}
          <div className="p-8 md:p-12">
            <div 
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700 prose-li:text-gray-700"
              dangerouslySetInnerHTML={{ 
                __html: post.content
                  .replace(/\n/g, '<br>')
                  .replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900 font-semibold">$1</strong>')
                  .replace(/\*(.*?)\*/g, '<em class="text-gray-600 italic">$1</em>')
                  .replace(/^### (.*$)/gim, '<h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-l-4 border-pink-500 pl-4">$1</h3>')
                  .replace(/^## (.*$)/gim, '<h2 class="text-3xl font-bold text-gray-900 mt-12 mb-6 pb-2 border-b-2 border-pink-100">$1</h2>')
                  .replace(/^# (.*$)/gim, '<h1 class="text-4xl font-bold text-gray-900 mt-12 mb-8">$1</h1>')
                  .replace(/^- (.*$)/gim, '<li class="ml-6 mb-2 relative before:content-["•"] before:text-pink-500 before:absolute before:-left-4">$1</li>')
                  .replace(/^(\d+)\. (.*$)/gim, '<li class="ml-6 mb-2 relative before:content-["$1."] before:text-pink-500 before:absolute before:-left-6 before:font-bold">$2</li>')
              }}
            />
          </div>

          {/* Article Footer */}
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">F</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">Food Blog Team</p>
                  <p className="text-gray-600">Culinary Experts & Recipe Developers</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <button className="p-3 bg-white rounded-full shadow-md text-gray-400 hover:text-pink-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                  </svg>
                </button>
                <button className="p-3 bg-white rounded-full shadow-md text-gray-400 hover:text-pink-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="p-3 bg-white rounded-full shadow-md text-gray-400 hover:text-pink-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">More from Our Kitchen</h2>
            <p className="text-gray-600 text-lg">Discover more delicious recipes and cooking tips</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts
              .filter(p => p.id !== post.id && p.category === post.category)
              .slice(0, 3)
              .map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`}>
                  <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {relatedPost.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-pink-600 transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {relatedPost.readTime}
                        </span>
                        <span>{relatedPost.date}</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
          </div>
        </section>
      </main>

   
    </div>
  );
}
