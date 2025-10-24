import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen bg-white">


      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Our Food Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're passionate food lovers dedicated to sharing delicious recipes, 
            cooking tips, and culinary adventures that inspire your next meal.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                What started as a simple passion for cooking has grown into a comprehensive 
                food blog that reaches thousands of home cooks every day. Our journey began 
                in a small kitchen, where we discovered that the best meals come from 
                fresh ingredients, simple techniques, and a whole lot of love.
              </p>
              <p>
                We believe that cooking should be accessible to everyone, regardless of 
                skill level or budget. That's why we focus on creating recipes that are 
                both delicious and achievable, with clear instructions and helpful tips 
                along the way.
              </p>
              <p>
                From quick weeknight dinners to elaborate weekend feasts, we're here to 
                guide you through every step of your culinary journey.
              </p>
            </div>
          </div>
          <div className="relative h-80 rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop"
              alt="Cooking ingredients and kitchen tools"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Mission</h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
            To inspire and empower home cooks by providing reliable, tested recipes, 
            practical cooking advice, and a supportive community where everyone can 
            discover the joy of creating delicious meals from scratch.
          </p>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Passion</h3>
            <p className="text-gray-600">
              We love what we do and it shows in every recipe we create and every tip we share.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Quality</h3>
            <p className="text-gray-600">
              Every recipe is tested multiple times to ensure it works perfectly in your kitchen.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Community</h3>
            <p className="text-gray-600">
              We're building a supportive community where everyone can learn and grow together.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">F</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Food Blog Team</h3>
              <p className="text-gray-600 mb-4">Culinary Experts & Recipe Developers</p>
              <p className="text-sm text-gray-500">
                Our dedicated team of food enthusiasts works tirelessly to bring you 
                the best recipes, cooking tips, and culinary inspiration.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">C</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600 mb-4">Our Amazing Readers</p>
              <p className="text-sm text-gray-500">
                You, our wonderful community of home cooks, are what makes this blog special. 
                Your feedback, photos, and stories inspire us every day.
              </p>
            </div>
          </div>
        </div>
      </main>

  
    </div>
  );
}
