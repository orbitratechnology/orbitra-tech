import {
  Globe, Smartphone, Building2, Palette, ShoppingCart, Bot,
  Briefcase, Cloud, Search, Calendar, CreditCard, Megaphone,
  MessageSquare, UtensilsCrossed, Layout, Book, GraduationCap,
  Users, BarChart3, Package, Gift, Heart, Globe2, MapPin
} from 'lucide-react';

const services = [
  { icon: Globe, title: 'Website Development', description: 'Modern, responsive websites' },
  { icon: Smartphone, title: 'Mobile App Development', description: 'iOS & Android applications' },
  { icon: Building2, title: 'SME Digitalization', description: 'Complete digital transformation' },
  { icon: Palette, title: 'Design & Branding', description: 'Professional brand identity' },
  { icon: ShoppingCart, title: 'E-Commerce Solution', description: 'Online store platforms' },
  { icon: Bot, title: 'AI & Automations', description: 'Smart business automation' },
  { icon: Briefcase, title: 'Business Solutions', description: 'Custom business tools' },
  { icon: Cloud, title: 'Cloud Solutions', description: 'Scalable cloud infrastructure' },
  { icon: Search, title: 'SEO Optimization', description: 'Search engine visibility' },
  { icon: Calendar, title: 'Booking Systems', description: 'Appointment management' },
  { icon: CreditCard, title: 'POS Systems', description: 'Point of sale solutions' },
  { icon: Megaphone, title: 'Ads Management Setup', description: 'Digital advertising campaigns' },
  { icon: MessageSquare, title: 'AI Assistants', description: 'Chatbots & virtual assistants' },
  { icon: UtensilsCrossed, title: 'Restaurant Digital Menu', description: 'Digital menu systems' },
  { icon: Layout, title: 'UI/UX Redesign', description: 'User experience optimization' },
  { icon: Book, title: 'Product Catalogs', description: 'Digital product showcases' },
  { icon: GraduationCap, title: 'LMS & Educational Systems', description: 'Learning management platforms' },
  { icon: Users, title: 'Employee Management', description: 'Staff management systems' },
  { icon: BarChart3, title: 'Business Dashboards', description: 'Analytics & reporting tools' },
  { icon: Package, title: 'Order Management', description: 'Order processing systems' },
  { icon: Gift, title: 'Loyalty Points Integration', description: 'Customer reward programs' },
  { icon: Heart, title: 'Lovers Shop Digital System', description: 'Specialized retail solutions' },
  { icon: Globe2, title: 'Domain & DNS Management', description: 'Domain setup & maintenance' },
  { icon: MapPin, title: 'Google Business Management', description: 'Local SEO & listings' }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs. From concept to deployment, we've got you covered.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-1"
                >
                  <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-all duration-300">
                    <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-all duration-300" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-base">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-6 text-lg">
              Don't see what you're looking for?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-blue-700 transition-all duration-300 shadow-xl shadow-blue-600/30 hover:shadow-2xl hover:shadow-blue-600/40 hover:scale-105"
            >
              Let's discuss your needs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
