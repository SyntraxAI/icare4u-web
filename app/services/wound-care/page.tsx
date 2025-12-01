import Link from "next/link";
import Image from "next/image";

export default function WoundCarePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      
      {/* --------------------------------------------------
        HERO SECTION: Specific Validation
        -------------------------------------------------- 
      */}
      <section className="relative bg-brand-blue text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
           {/* Glassmorphic Badge */}
           <span className="inline-block py-1 px-4 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-sm font-bold tracking-wide uppercase mb-6 text-white w-fit shadow-sm">
            Mobile Wound Care Services
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Advanced Wound Management <br/>
            <span className="text-blue-300">Without the Hospital Visit.</span>
          </h1>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Expert treatment for surgical wounds, diabetic ulcers, and injuries. 
            We bring hospital-grade care directly to your bedside in Las Vegas & Henderson.
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="tel:+17255505447" 
              className="bg-white text-brand-blue font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
            >
              Call for Help
            </a>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------
        WHAT WE TREAT (Semantic List for AI)
        -------------------------------------------------- 
      */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left: The List */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Comprehensive Wound Treatment</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Proper wound care is critical to prevent infection and speed up recovery. 
              Our Board Certified practitioner handles complex cases including:
            </p>
            
            <ul className="space-y-4">
              {[
                "Surgical Wound Dehiscence",
                "Diabetic Foot Ulcers",
                "Pressure Ulcers (Bed Sores)",
                "Venous Stasis Ulcers",
                "Infected Wounds & Abscesses",
                "Traumatic Injuries & Burns"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-green flex items-center justify-center text-white mr-3 mt-1">
                    ✓
                  </span>
                  <span className="text-gray-700 font-medium text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Visual Placeholder (or reuse hero image for now) */}
          <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl bg-gray-200">
             {/* Placeholder for a specific wound care image later */}
             <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold">
                (Image: Provider treating a patient's arm/leg)
             </div>
          </div>

        </div>
      </section>

      {/* --------------------------------------------------
        THE PROCESS (Reducing Anxiety)
        -------------------------------------------------- 
      */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">How Mobile Wound Care Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="p-6 rounded-xl bg-gray-50 border border-gray-100">
              <div className="w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">We Come to You</h3>
              <p className="text-gray-600">No driving or waiting rooms. We arrive at your home with all necessary medical supplies.</p>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-xl bg-gray-50 border border-gray-100">
              <div className="w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Treatment</h3>
              <p className="text-gray-600">We clean, debride, and dress the wound using hospital-grade techniques.</p>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-xl bg-gray-50 border border-gray-100">
              <div className="w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Healing Plan</h3>
              <p className="text-gray-600">We monitor progress and teach you or your caregiver how to manage care between visits.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------
        FAQ / SCHEMA SECTION
        -------------------------------------------------- 
      */}
      <section className="py-20 px-6 bg-brand-dark text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Start Healing?</h2>
        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
          Don't wait for an infection to get worse. Get professional care in the safety of your home today.
        </p>
        <a 
          href="tel:+17255505447" 
          className="bg-brand-green hover:bg-green-600 text-white font-bold py-4 px-10 rounded-full shadow-lg transition duration-300 text-lg inline-block"
        >
          Call (725) 550-5447
        </a>
      </section>

      {/* JSON-LD for "MedicalProcedure" */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "name": "Mobile Wound Care",
            "description": "In-home treatment for diabetic ulcers, surgical wounds, and injuries.",
            "procedureType": "NonSurgical",
            "provider": {
                "@type": "MedicalOrganization",
                "name": "iCare4u Health Solutions"
            }
          }),
        }}
      />

    </main>
  );
}