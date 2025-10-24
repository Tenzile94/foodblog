import Link from 'next/link';
import Image from 'next/image';

export default function Contact() {

  return (
    <div className="min-h-screen bg-white">


      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We'd love to hear from you! Whether you have a question, suggestion, or just want to say hello, 
            we're here to help.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Email Contact */}
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Get in Touch</h3>
                  <p className="text-gray-600">We'll get back to you within 24 hours</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-2">General Inquiries</h4>
                  <a href="mailto:hello@foodblog.com" className="text-pink-500 hover:text-pink-600 transition-colors text-lg font-medium">
                    hello@foodblog.com
                  </a>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-2">Recipe Questions</h4>
                  <a href="mailto:recipes@foodblog.com" className="text-pink-500 hover:text-pink-600 transition-colors text-lg font-medium">
                    recipes@foodblog.com
                  </a>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-2">Partnerships</h4>
                  <a href="mailto:partnerships@foodblog.com" className="text-pink-500 hover:text-pink-600 transition-colors text-lg font-medium">
                    partnerships@foodblog.com
                  </a>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Response Times</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">General Questions</span>
                  <span className="text-pink-500 font-medium">Within 24 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Recipe Help</span>
                  <span className="text-pink-500 font-medium">Within 12 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Technical Issues</span>
                  <span className="text-pink-500 font-medium">Within 48 hours</span>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900">Can I submit my own recipes?</h4>
                  <p className="text-gray-600 text-sm">Yes! We love featuring community recipes. Send them to recipes@foodblog.com</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Do you offer cooking classes?</h4>
                  <p className="text-gray-600 text-sm">We're working on virtual cooking classes. Stay tuned for updates!</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">How can I suggest content topics?</h4>
                  <p className="text-gray-600 text-sm">We'd love your suggestions! Email us at hello@foodblog.com with your ideas.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-16">
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=400&fit=crop"
              alt="Contact us - cooking ingredients"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-white text-2xl font-bold mb-2">Let's Cook Together!</h3>
              <p className="text-white/90">
                We're always excited to hear from fellow food lovers and help you on your culinary journey.
              </p>
            </div>
          </div>
        </div>
      </main>

    
    </div>
  );
}
