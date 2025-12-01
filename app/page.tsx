import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      
      {/* --------------------------------------------------
        SECTION 1: HERO (Split-Screen)
        -------------------------------------------------- 
      */}
      <section className="relative bg-brand-blue text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* LEFT COLUMN: The Content */}
            <div className="py-20 px-6 md:py-32 lg:pr-12 flex flex-col justify-center z-10 relative">
               {/* DESIGN FIX: Glassmorphic Badge to avoid color clash */}
               <span className="inline-block py-1 px-4 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-sm font-bold tracking-wide uppercase mb-6 text-white w-fit shadow-sm">
                Serving Las Vegas & Henderson
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Hospital-Grade Care, <br/>
                <span className="text-blue-300">Delivered to Your Home.</span>
              </h1>
              <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-lg">
                Skip the waiting room. Our Board Certified Nurse Practitioners bring urgent wound care and medical services directly to you.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+17255505447" 
                  className="bg-white text-brand-blue font-bold py-4 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 text-lg text-center"
                >
                  Call for Appointment
                </a>
                <Link 
                  href="#services" 
                  className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white/10 transition duration-300 text-lg text-center"
                >
                  View Services
                </Link>
              </div>
            </div>

            {/* RIGHT COLUMN: The Hero Image */}
            <div className="relative h-64 lg:h-auto lg:min-h-[600px] w-full">
              <Image
                src="/hero-nurse-patient.jpg"
                alt="Compassionate nurse provider consulting with an elderly patient in a home setting."
                fill
                className="object-cover object-center lg:rounded-bl-[80px]"
                priority 
              />
               {/* Subtle overlay for better blend on mobile */}
               <div className="absolute inset-0 bg-brand-blue/20 lg:hidden"></div>
            </div>

          </div>
        </div>
      </section>

      {/* --------------------------------------------------
        SECTION 2: SERVICES GRID 
        -------------------------------------------------- 
      */}
      <section id="services" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Medical Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Professional care tailored to your needs, without the commute.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* CARD 1: Wound Care */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 border-t-4 border-brand-blue">
              <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center text-brand-blue mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Advanced Wound Management</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Expert treatment for surgical wounds, diabetic ulcers, and injuries. We prevent infection and accelerate healing.
              </p>
              <Link href="/services/wound-care" className="text-brand-blue font-bold hover:text-brand-dark flex items-center group">
                Learn More 
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            {/* CARD 2: Weight Loss */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 border-t-4 border-brand-green">
              <div className="w-14 h-14 bg-green-50 rounded-lg flex items-center justify-center text-brand-green mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Medical Weight Loss</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Safe, effective, and medically supervised weight management plans tailored to your body and health goals.
              </p>
              <Link href="/services/weight-loss" className="text-brand-green font-bold hover:text-green-700 flex items-center group">
                Learn More 
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            {/* CARD 3: Telemedicine */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 border-t-4 border-purple-500">
              <div className="w-14 h-14 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Virtual Health Visits</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Get prescriptions, consultations, and medical advice instantly via secure video calls. Healthcare on your schedule.
              </p>
              <Link href="#" className="text-purple-600 font-bold hover:text-purple-800 flex items-center group">
                Book Virtual
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            {/* CARD 4: Primary Home Care */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 border-t-4 border-orange-500">
              <div className="w-14 h-14 bg-orange-50 rounded-lg flex items-center justify-center text-orange-600 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Primary Home Care</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Management of chronic conditions, post-op recovery, and routine check-ups in the safety of your own living room.
              </p>
              <Link href="#" className="text-orange-600 font-bold hover:text-orange-800 flex items-center group">
                Learn More 
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

          </div>

          {/* TRUST SIGNAL */}
          <div className="mt-12 text-center border-t border-gray-200 pt-8">
            <p className="text-gray-500 font-medium">
              All services administered by a <span className="text-gray-900 font-bold">Board Certified Family Nurse Practitioner (APRN FNP-BC)</span>.
            </p>
          </div>

        </div>
      </section>

      {/* --------------------------------------------------
        SECTION 3: STRUCTURED DATA
        -------------------------------------------------- 
      */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "iCare4u Health Solutions",
            "description": "Mobile wound care and medical weight loss services in Las Vegas.",
            "telephone": "+1-725-550-5447",
            "areaServed": ["Las Vegas", "Henderson", "North Las Vegas"],
            "priceRange": "$$",
            "availableService": [
                { "@type": "MedicalProcedure", "name": "Wound Care" },
                { "@type": "MedicalProcedure", "name": "Medical Weight Loss" }
            ]
          }),
        }}
      />
    </main>
  );
}