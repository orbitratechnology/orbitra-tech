import { ArrowRight, Code2, Smartphone, Store, MessageCircle } from 'lucide-react';

const WHATSAPP_URL = "https://wa.me/94702495311?text=Hi%20Orbitra%20Tech,%20I'm%20interested%20in%20learning%20more%20about%20your%20services.%20Could%20you%20help%20me%20digitize%20my%20business?";

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <nav className="relative z-10 container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <img
            src="/orbitra_logo.png"
            alt="Orbitra Tech"
            className="h-28 md:h-32 w-auto"
          />
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 hover:scale-105 flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            Get Started
          </a>
        </div>
      </nav>

      <div className="relative z-10 container mx-auto px-6 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
            Empowering Sri Lankan SMEs
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-slide-up">
            Transform Your Business
            <span className="block text-blue-600 mt-2">Into the Digital Age</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed animate-slide-up-delay">
            Practical, affordable, and scalable technology solutions designed specifically for traditional and modern SMEs in Sri Lanka.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-slide-up-delay-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-blue-600 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-blue-700 transition-all duration-300 shadow-xl shadow-blue-600/30 hover:shadow-2xl hover:shadow-blue-600/40 flex items-center gap-2 hover:scale-105 w-full sm:w-auto justify-center"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-medium text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg border-2 border-blue-600 hover:scale-105 w-full sm:w-auto justify-center flex items-center"
            >
              Explore Services
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Code2 className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Web Solutions</h3>
              <p className="text-gray-600 text-sm">Modern websites & web applications</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Smartphone className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Mobile Apps</h3>
              <p className="text-gray-600 text-sm">iOS & Android applications</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Store className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Business Systems</h3>
              <p className="text-gray-600 text-sm">POS, automation & management</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </div>
  );
}
