import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              {/* Using standard img tag to force correct sizing and bypass Next.js caching issues */}
              <img
                src="/logo-horizontal.jpg"
                alt="iCare4u Health Solutions Logo"
                style={{ height: '56px', width: 'auto' }}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-gray-700 hover:text-brand-blue font-medium transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-brand-blue font-medium transition-colors">
              About
            </Link>
            <Link href="/services/wound-care" className="text-gray-700 hover:text-brand-blue font-medium transition-colors">
              Wound Care
            </Link>
            <Link href="/services/weight-loss" className="text-gray-700 hover:text-brand-blue font-medium transition-colors">
              Weight Loss
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-brand-blue font-medium transition-colors">
              Contact
            </Link>
            
            {/* Desktop Call Action */}
            <a 
              href="tel:+17255505447" 
              className="bg-brand-blue hover:bg-brand-dark text-white font-bold py-2 px-6 rounded-full transition duration-300 shadow-md hover:shadow-lg"
            >
              Call (725) 550-5447
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}