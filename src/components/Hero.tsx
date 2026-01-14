import { ArrowRight, Code2, MessageCircle, Smartphone, Store } from 'lucide-react';

const WHATSAPP_URL = "https://wa.me/94702495311?text=Hi%20Orbitra%20Tech,%20I'm%20interested%20in%20learning%20more%20about%20your%20services.%20Could%20you%20help%20me%20digitize%20my%20business?";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <nav className="container relative z-10 px-6 py-6 mx-auto">
        <div className="flex items-center justify-between">
          <img
            src="/orbitra_logo.png"
            alt="Orbitra Tech"
            className="w-auto h-28 md:h-32"
          />
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 hover:scale-105 flex items-center gap-2 md:mx-10"
          >
            <MessageCircle className="w-4 h-4" />
            Get Started
          </a>
        </div>
      </nav>

      <div className="container relative z-10 px-6 pt-16 pb-24 mx-auto md:pt-24 md:pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium text-blue-700 bg-blue-100 rounded-full animate-fade-in">
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
            Empowering Sri Lankan SMEs
          </div>

          <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-6xl lg:text-7xl animate-slide-up">
            Transform Your Business
            <span className="block mt-2 text-blue-600">Into the Digital Age</span>
          </h1>

          <p className="max-w-2xl mx-auto mb-10 text-lg leading-relaxed text-gray-600 md:text-xl animate-slide-up-delay">
            Practical, affordable, and scalable technology solutions designed specifically for traditional and modern SMEs in Sri Lanka.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 mb-16 sm:flex-row animate-slide-up-delay-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full gap-2 px-8 py-4 text-lg font-medium text-white transition-all duration-300 bg-blue-600 rounded-lg shadow-xl group hover:bg-blue-700 shadow-blue-600/30 hover:shadow-2xl hover:shadow-blue-600/40 hover:scale-105 sm:w-auto"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="flex items-center justify-center w-full px-8 py-4 text-lg font-medium text-blue-600 transition-all duration-300 bg-white border-2 border-blue-600 rounded-lg shadow-lg hover:bg-gray-50 hover:scale-105 sm:w-auto"
            >
              Explore Services
            </a>
          </div>

          <div className="grid max-w-3xl grid-cols-1 gap-8 mx-auto md:grid-cols-3">
            <div className="p-6 transition-all duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl hover:scale-105">
              <div className="flex items-center justify-center mx-auto mb-4 bg-blue-100 rounded-lg w-14 h-14">
                <Code2 className="text-blue-600 w-7 h-7" />
              </div>
              <h3 className="mb-2 font-bold text-gray-900">Web Solutions</h3>
              <p className="text-sm text-gray-600">Modern websites & web applications</p>
            </div>

            <div className="p-6 transition-all duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl hover:scale-105">
              <div className="flex items-center justify-center mx-auto mb-4 bg-blue-100 rounded-lg w-14 h-14">
                <Smartphone className="text-blue-600 w-7 h-7" />
              </div>
              <h3 className="mb-2 font-bold text-gray-900">Mobile Apps</h3>
              <p className="text-sm text-gray-600">iOS & Android applications</p>
            </div>

            <div className="p-6 transition-all duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl hover:scale-105">
              <div className="flex items-center justify-center mx-auto mb-4 bg-blue-100 rounded-lg w-14 h-14">
                <Store className="text-blue-600 w-7 h-7" />
              </div>
              <h3 className="mb-2 font-bold text-gray-900">Business Systems</h3>
              <p className="text-sm text-gray-600">POS, automation & management</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
        </svg>
      </div>
    </div>
  );
}
