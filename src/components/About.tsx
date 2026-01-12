import { Target, Eye, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Leading Digital Transformation
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Based in the Kalutara-Beruwala region, we're committed to making digital transformation accessible and effective for every business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300">
              <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower Sri Lankan SMEs by providing reliable, modern digital solutions that drive real business growth.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300">
              <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become the leading digital transformation agency in the Kalutara-Beruwala region and beyond.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300">
              <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Value</h3>
              <p className="text-gray-600 leading-relaxed">
                Practical systems that improve sales, reduce workload, and increase operational efficiency for your business.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">Who We Serve</h3>
              <p className="text-gray-300 text-center mb-8 text-lg">
                We specialize in helping businesses across various sectors embrace digital transformation
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  'Retail Shops',
                  'Restaurants',
                  'Online Stores',
                  'Wholesalers',
                  'Service Companies',
                  'Educational Institutions',
                  'Traditional Businesses',
                  'Modern SMEs'
                ].map((industry) => (
                  <div key={industry} className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-center hover:bg-white/20 transition-all duration-300">
                    <span className="text-sm font-medium">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
