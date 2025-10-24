import Link from 'next/link';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
  

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Last updated: January 2025
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                We collect information you provide directly to us, such as when you:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Subscribe to our newsletter</li>
                <li>Leave comments on our blog posts</li>
                <li>Participate in our community discussions</li>
              </ul>
              <p>
                This information may include your name, email address, and any other information 
                you choose to provide.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
            <div className="space-y-4 text-gray-700">
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Send you newsletters and updates about our blog</li>
                <li>Respond to your inquiries and comments</li>
                <li>Improve our website and content</li>
                <li>Analyze website usage and trends</li>
                <li>Prevent fraud and ensure website security</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third 
                parties without your consent, except as described in this policy.
              </p>
              <p>
                We may share your information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and safety</li>
                <li>In connection with a business transfer or acquisition</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                We use cookies and similar tracking technologies to enhance your experience on our website. 
                These technologies help us:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Remember your preferences</li>
                <li>Analyze website traffic and usage</li>
                <li>Improve website performance</li>
                <li>Provide personalized content</li>
              </ul>
              <p>
                You can control cookie settings through your browser preferences, though this may 
                affect some functionality of our website.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                We implement appropriate security measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction.
              </p>
              <p>
                However, no method of transmission over the internet or electronic storage is 
                100% secure. While we strive to protect your information, we cannot guarantee 
                absolute security.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
            <div className="space-y-4 text-gray-700">
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p>
                To exercise these rights, please contact us using the information provided in 
                our Contact section.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Links</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Our website may contain links to third-party websites. We are not responsible 
                for the privacy practices or content of these external sites. We encourage you 
                to review the privacy policies of any third-party sites you visit.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Our website is not intended for children under 13 years of age. We do not 
                knowingly collect personal information from children under 13. If you are a 
                parent or guardian and believe your child has provided us with personal 
                information, please contact us.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                We may update this privacy policy from time to time. We will notify you of 
                any changes by posting the new policy on this page and updating the "Last updated" 
                date. We encourage you to review this policy periodically.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                If you have any questions about this privacy policy or our privacy practices, 
                please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="font-medium">Email: privacy@foodblog.com</p>
                <p className="font-medium">Subject: Privacy Policy Inquiry</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
  
    </div>
  );
}
