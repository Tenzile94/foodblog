import Image from 'next/image';

export default function FeaturedPost() {
  return (
    <section className="bg-gradient-to-br from-pink-50 to-purple-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Art of Mindful Cooking
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the transformative power of cooking with intention, where every ingredient tells a story and every meal becomes a meditation.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Philosophy of Mindful Cooking</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                In our fast-paced world, cooking has become a lost art. We rush through meals, 
                barely tasting what we eat. But what if we approached cooking differently? 
                What if we saw it as a form of meditation, a way to connect with ourselves 
                and the world around us?
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Mindful cooking isn't just about the food—it's about the process. It's about 
                feeling the texture of fresh vegetables, smelling the aromas as they mingle 
                in the pan, and taking time to appreciate each step of the journey from 
                ingredient to meal.
              </p>
              <div className="bg-pink-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-3">The Five Principles of Mindful Cooking:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-3">•</span>
                    <span><strong>Presence:</strong> Be fully present with each ingredient and action</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-3">•</span>
                    <span><strong>Gratitude:</strong> Appreciate the journey of your food from farm to table</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-3">•</span>
                    <span><strong>Intention:</strong> Cook with purpose and love for those you're feeding</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-3">•</span>
                    <span><strong>Patience:</strong> Allow the process to unfold naturally, without rushing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-3">•</span>
                    <span><strong>Joy:</strong> Find pleasure in the simple act of creating nourishment</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Science Behind Mindful Eating</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Research shows that mindful cooking and eating can have profound effects on our 
                physical and mental well-being. When we slow down and pay attention to our food, 
                we not only enjoy it more, but we also digest it better and feel more satisfied.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-bold text-green-800 mb-2">Physical Benefits</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Better digestion</li>
                    <li>• Improved nutrient absorption</li>
                    <li>• Reduced stress eating</li>
                    <li>• Enhanced satiety</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-bold text-blue-800 mb-2">Mental Benefits</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Reduced anxiety</li>
                    <li>• Increased mindfulness</li>
                    <li>• Better focus</li>
                    <li>• Enhanced creativity</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="space-y-6">
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/art3.webp"
                alt="Zen garden cooking setup"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h4 className="text-white text-xl font-bold mb-2">Sacred Kitchen Space</h4>
                <p className="text-white/90">Create a peaceful, intentional space for your mindful cooking practice</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-36 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=300&h=200&fit=crop"
                  alt="Meditation with tea ceremony"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="text-white text-sm font-medium">Tea Ceremony</p>
                </div>
              </div>
              <div className="relative h-36 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/art1.jpeg"
                  alt="Hands preparing vegetables mindfully"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="text-white text-sm font-medium">Mindful Hands</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Start Your Mindful Cooking Journey Today</h3>
            <p className="text-gray-600 mb-6">
              Begin with just 10 minutes of mindful preparation. Choose one ingredient, 
              feel its texture, smell its aroma, and cook with intention. Notice how 
              this simple act transforms not just your meal, but your entire day.
            </p>
            <div className="bg-pink-50 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-3">Today's Mindful Practice:</h4>
              <p className="text-gray-700">
                <strong>Choose one vegetable</strong> and spend 5 minutes simply observing it. 
                Notice its color, texture, weight, and smell. Then, as you prepare it, 
                maintain this awareness. This simple practice can transform your entire 
                relationship with food and cooking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}