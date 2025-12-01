export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      
      {/* --------------------------------------------------
        HERO SECTION
        -------------------------------------------------- 
      */}
      <section className="relative bg-brand-blue text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Ready to schedule an appointment or have questions? We're here to help.
          </p>
        </div>
      </section>

      {/* --------------------------------------------------
        CONTACT INFO & MAP
        -------------------------------------------------- 
      */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Left: Contact Details */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center text-brand-green text-xl mr-4">
                  📞
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Phone</h3>
                  <a href="tel:+17255505447" className="text-brand-blue hover:underline text-lg block mt-1">
                    (725) 550-5447
                  </a>
                  <p className="text-sm text-gray-500 mt-1">Call or Text for appointments</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center text-brand-green text-xl mr-4">
                  📧
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Email</h3>
                  <a href="mailto:info@icare4u.com" className="text-brand-blue hover:underline text-lg block mt-1">
                    info@icare4u.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center text-brand-green text-xl mr-4">
                  🕒
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Hours of Operation</h3>
                  <p className="text-gray-600 mt-1">Monday - Saturday: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Service Area Map Placeholder */}
          <div className="bg-white p-2 rounded-2xl shadow-lg h-[400px] relative overflow-hidden">
             {/* Note: In a real app, you'd embed a Google Map iframe here */}
             <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-500 font-bold">
                (Google Map Embed: Las Vegas Service Area)
             </div>
          </div>

        </div>
      </section>

    </main>
  );
}