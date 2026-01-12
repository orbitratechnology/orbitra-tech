import { MessageCircle, Mail, MapPin } from 'lucide-react';

const WHATSAPP_URL = "https://wa.me/94702495311?text=Hi%20Orbitra%20Tech,%20I%20would%20like%20to%20discuss%20digital%20solutions%20for%20my%20business.%20Please%20let%20me%20know%20how%20you%20can%20help.";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to start your digital transformation journey? Contact us today for a free consultation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border border-green-100 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="bg-green-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-green-600 font-medium text-lg">+94 70 249 5311</p>
            </a>

            <a
              href="mailto:orbitra.technology@gmail.com"
              className="group bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="bg-red-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-red-900 mb-2">Email</h3>
              <p className="text-red-600 font-medium break-all">orbitra.technology@gmail.com</p>
            </a>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 hover:shadow-xl transition-all duration-300">
              <div className="bg-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Location</h3>
              <p className="text-blue-600 leading-relaxed">
                198/41 Sheikh Jamaldeen Road,<br />
                Beruwala, Sri Lanka
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-20 pt-12 border-t border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <img
                src="/orbitra_logo.png"
                alt="Orbitra Tech"
                className="h-32 w-auto"
              />
            </div>
            <p className="text-gray-600 text-center md:text-right">
              &copy; {new Date().getFullYear()} Orbitra Tech. Empowering businesses through technology.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
