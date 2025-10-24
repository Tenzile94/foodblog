import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-8">Blog Post Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The blog post you're looking for doesn't exist or may have been moved.
        </p>
        <Link 
          href="/"
          className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-md font-medium transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

