export default function Footer() {
  return (
    <footer className="bg-brand-blue text-white pt-12 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Column 1: Brand & Credential */}
        <div>
          <h3 className="text-2xl font-bold mb-4">iCare4u Health Solutions</h3>
          <p className="text-blue-50 mb-4 leading-relaxed opacity-90">
            Providing hospital-grade wound care and medical weight loss in the comfort of your home.
          </p>
          {/* DESIGN FIX: Glassmorphic Badge (White/10%) to match Header style */}
          <div className="bg-white/10 p-4 rounded-xl border border-white/10 inline-block backdrop-blur-sm">
            <p className="text-sm font-bold text-yellow-300 tracking-wide">
              ★ Board Certified Family Nurse Practitioner
            </p>
            <p className="text-xs text-blue-100 mt-1 font-medium">APRN FNP-BC</p>
          </div>
        </div>

        {/* Column 2: Service Area */}
        <div>
          <h4 className="text-lg font-bold mb-4 border-b border-brand-dark pb-2">Service Area</h4>
          <ul className="space-y-2 text-blue-50 opacity-90">
            <li>📍 Las Vegas, NV</li>
            <li>📍 Henderson, NV</li>
            <li>📍 North Las Vegas, NV</li>
            <li>📍 Summerlin & Enterprise</li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h4 className="text-lg font-bold mb-4 border-b border-brand-dark pb-2">Contact Us</h4>
          <p className="text-blue-50 mb-2 opacity-90">Ready to schedule?</p>
          <a href="tel:+17255505447" className="text-2xl font-bold text-white hover:text-brand-green transition duration-300 block mb-1">
            (725) 550-5447
          </a>
          <p className="text-sm text-blue-200 mt-4">
            Available Mon-Sat: 8am - 6pm
          </p>
        </div>
      </div>
    </footer>
  );
}