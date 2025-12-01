import Link from "next/link";
import Image from "next/image";

export default function WeightLossPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      
      {/* --------------------------------------------------
        HERO SECTION: Aspirational & Medical
        -------------------------------------------------- 
      */}
      <section className="relative bg-white text-brand-blue py-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left: Copy */}
          <div className="z-10 relative">
             <span className="inline-block py-1 px-4 rounded-full bg-brand-green/10 border border-brand-green/20 text-brand-green text-sm font-bold tracking-wide uppercase mb-6 w-fit">
              Medically Supervised Programs
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Lose Weight Safely. <br/>
              <span className="text-brand-green">Keep It Off.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
              Stop relying on willpower alone. We offer customized, science-backed weight loss treatments tailored to your unique biology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+17255505447" 
                className="bg-brand-blue text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-brand-dark transition duration-300 text-center"
              >
                Schedule Consultation
              </a>
              <a 
                href="#how-it-works" 
                className="bg-white text-brand-blue border-2 border-brand-blue font-bold py-4 px-8 rounded-full hover:bg-blue-50 transition duration-300 text-center"
              >
                How It Works
              </a>
            </div>
          </div>

          {/* Right: Hero Image Placeholder */}
          {/* Note: Replace '/weight-loss-hero.jpg' with a real image later */}
          <div className="relative h-[500px] w-full rounded-tr-[100px] rounded-bl-[100px] overflow-hidden shadow-2xl bg-gray-200">
             <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold p-6 text-center">
                (Image Idea: Healthy, happy patient jogging or talking with nurse)
             </div>
          </div>

        </div>
      </section>

      {/* --------------------------------------------------
        THE "WHY" SECTION (Medical Authority)
        -------------------------------------------------- 
      */}
      <section className="py-20 px-6 bg-brand-blue text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Why Medical Weight Loss?</h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            Over-the-counter diets often fail because they don't address the root cause. 
            As a medical practice, we can prescribe treatments that balance your metabolic hormones, making weight loss achievable and sustainable.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/10">
              <h3 className="font-bold text-xl mb-2 text-brand-green">01. Lab Analysis</h3>
              <p className="text-blue-100 text-sm">We check your thyroid, hormones, and metabolic markers first.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/10">
              <h3 className="font-bold text-xl mb-2 text-brand-green">02. Prescription Options</h3>
              <p className="text-blue-100 text-sm">Access to GLP-1s (like Semaglutide) and other FDA-approved therapies if eligible.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/10">
              <h3 className="font-bold text-xl mb-2 text-brand-green">03. Ongoing Monitoring</h3>
              <p className="text-blue-100 text-sm">Regular check-ins to adjust dosage and ensure safety.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------
        THE PROCESS (Step by Step)
        -------------------------------------------------- 
      */}
      <section id="how-it-works" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Path to Results</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We make it simple. No waiting rooms, no judgment. Just a clear plan.
            </p>
          </div>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row gap-8 items-center border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="w-16 h-16 bg-brand-green text-white rounded-full flex-shrink-0 flex items-center justify-center text-2xl font-bold">1</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Initial Consultation & Labs</h3>
                <p className="text-gray-600">We meet (in-home or virtual) to discuss your history and order comprehensive bloodwork to understand your body.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row gap-8 items-center border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="w-16 h-16 bg-brand-green text-white rounded-full flex-shrink-0 flex items-center justify-center text-2xl font-bold">2</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Custom Treatment Plan</h3>
                <p className="text-gray-600">Based on your labs, we design a program that may include medication, nutritional guidance, and lifestyle changes.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row gap-8 items-center border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="w-16 h-16 bg-brand-green text-white rounded-full flex-shrink-0 flex items-center justify-center text-2xl font-bold">3</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Monthly Success Visits</h3>
                <p className="text-gray-600">We track your progress, manage any side effects, and celebrate your wins with regular follow-ups.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --------------------------------------------------
        CTA SECTION
        -------------------------------------------------- 
      */}
      <section className="py-20 px-6 bg-gray-50 text-center">
        <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
          <h2 className="text-3xl font-bold text-brand-blue mb-4">Invest in Your Long-Term Health</h2>
          <p className="text-gray-600 mb-8">
            Slots for our medical weight loss program are limited to ensure high-quality care.
          </p>
          <a 
            href="tel:+17255505447" 
            className="bg-brand-green hover:bg-green-600 text-white font-bold py-4 px-12 rounded-full shadow-lg transition duration-300 text-lg inline-block"
          >
            Start Today: (725) 550-5447
          </a>
        </div>
      </section>

      {/* JSON-LD for "MedicalProcedure" (Weight Loss) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "name": "Medical Weight Loss Program",
            "description": "Physician-supervised weight loss including metabolic testing and prescription management.",
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