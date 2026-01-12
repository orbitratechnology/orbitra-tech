import { CheckCircle, MessageCircle } from 'lucide-react';

const WHATSAPP_URL = "https://wa.me/94702495311?text=Hi%20Orbitra%20Tech,%20I'm%20ready%20to%20transform%20my%20business%20digitally.%20Can%20we%20discuss%20a%20solution%20for%20my%20needs?";

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            Join the growing number of Sri Lankan businesses leveraging technology to increase efficiency, boost sales, and scale faster.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              'Affordable Solutions',
              'Expert Support',
              'Proven Results'
            ].map((benefit, index) => (
              <div key={index} className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-lg">
                <CheckCircle className="w-5 h-5 text-blue-200" />
                <span className="font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white text-blue-600 px-8 py-4 rounded-lg font-medium text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center gap-2 hover:scale-105 w-full sm:w-auto justify-center"
            >
              <MessageCircle className="w-5 h-5" />
              Get a Free Consultation
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-blue-800 transition-all duration-300 border-2 border-white/20 hover:scale-105 w-full sm:w-auto justify-center flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
