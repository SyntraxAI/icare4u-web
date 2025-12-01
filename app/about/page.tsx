import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      
      {/* --------------------------------------------------
        HERO SECTION
        -------------------------------------------------- 
      */}
      <section className="relative bg-brand-blue text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Compassionate Care, <br/>
            <span className="text-brand-green">Personalized for You.</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Meet the team dedicated to bringing hospital-quality medical services to your home.
          </p>
        </div>
      </section>

      {/* --------------------------------------------------
        PROVIDER BIO SECTION
        -------------------------------------------------- 
      */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left: Image Placeholder */}
           {/* Note: Replace '/provider-photo.jpg' with a real image later */}
          <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl bg-gray-200">
             <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold p-6 text-center">
                (Image Idea: Professional headshot of the Nurse Practitioner)
             </div>
          </div>

          {/* Right: Bio Copy */}
          <div>
            <span className="text-brand-green font-bold tracking-wide uppercase mb-2 block">Our Lead Provider</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Jane Doe, APRN, FNP-BC</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Jane Doe is a Board Certified Family Nurse Practitioner with over 10 years of experience in acute care and wound management. She founded iCare4u Health Solutions with a simple mission: to make high-quality healthcare accessible, convenient, and personal.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              "I believe that healing happens best where patients are most comfortable—at home. My goal is to provide the same level of clinical excellence you'd expect in a hospital, but with the time and attention you deserve."
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <p className="font-bold text-brand-blue text-lg">10+ Years</p>
                    <p className="text-gray-500 text-sm">Clinical Experience</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <p className="font-bold text-brand-blue text-lg">Board Certified</p>
                    <p className="text-gray-500 text-sm">Family Nurse Practitioner</p>
                </div>
            </div>
          </div>

        </div>
      </section>

      {/* --------------------------------------------------
        MISSION / VALUES
        -------------------------------------------------- 
      */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl bg-gray-50">
              <h3 className="text-xl font-bold text-brand-blue mb-3">Patient-First Approach</h3>
              <p className="text-gray-600">We take the time to listen, understand your history, and tailor treatments to your specific needs.</p>
            </div>
            <div className="p-8 rounded-xl bg-gray-50">
              <h3 className="text-xl font-bold text-brand-blue mb-3">Clinical Excellence</h3>
              <p className="text-gray-600">We adhere to the highest medical standards and stay updated on the latest treatments and technologies.</p>
            </div>
            <div className="p-8 rounded-xl bg-gray-50">
              <h3 className="text-xl font-bold text-brand-blue mb-3">Integrity & Trust</h3>
              <p className="text-gray-600">We believe in transparent communication and building long-term relationships with our patients.</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}