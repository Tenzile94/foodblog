import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Blogs
              </h1>
              <div className="space-y-4 text-gray-700">
                <p>
                  Satisfy your cravings by getting the food you love from your favourite restaurants 
                  delivered to you fast. OURFOOD is now available in selected areas of London.
                </p>
                <p>
                  Discover amazing recipes, cooking tips, and food stories that will inspire your 
                  next culinary adventure. From quick weeknight meals to elaborate weekend feasts, 
                  we've got you covered.
                </p>
              </div>
            </div>

            {/* Small Image Previews */}
            <div className="grid grid-cols-2 gap-4">
              <Link href="/blog/1" className="group">
                <div className="relative h-32 rounded-lg overflow-hidden group-hover:shadow-lg transition-shadow">
                  <Image
                    src="https://images.unsplash.com/photo-1551024506-0bccd828d307?w=300&h=200&fit=crop"
                    alt="Colorful donuts"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <span className="bg-pink-500 text-white px-2 py-1 rounded text-xs font-medium">
                      Read More
                    </span>
                  </div>
                </div>
              </Link>
              <Link href="/blog/2" className="group">
                <div className="relative h-32 rounded-lg overflow-hidden group-hover:shadow-lg transition-shadow">
                  <Image
                    src="https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop"
                    alt="Cooked dish"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <span className="bg-pink-500 text-white px-2 py-1 rounded text-xs font-medium">
                      Read More
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Right Hero Image */}
          <Link href="/blog/3" className="group">
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden group-hover:shadow-2xl transition-shadow">
              <Image
                src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&h=500&fit=crop"
                alt="Smoothie bowl with berries and granola"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white text-xl font-bold mb-2">Featured Recipe</h3>
                <p className="text-white/90 text-sm mb-4">Discover our latest culinary creations</p>
                <span className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors inline-block">
                  Read More
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
