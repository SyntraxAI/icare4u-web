import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// "Smart" Imports using @ to guarantee the path is found
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "iCare4u Health Solutions | Mobile Wound Care Las Vegas",
  description: "Expert mobile wound care and medical weight loss in Las Vegas. Board Certified FNP coming to your home.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        
        {/* Global Navigation */}
        <Navbar />

        {/* The Main Page Content */}
        {children}

        {/* Global Footer */}
        <Footer />

        {/* STICKY MOBILE CTA BAR (Visible only on mobile) */}
        <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] p-4 md:hidden z-50 flex justify-between items-center gap-4">
            <div className="flex-1">
                <p className="text-xs text-gray-500 font-semibold">Need help?</p>
                <p className="text-sm font-bold text-brand-blue">Speak to a Provider</p>
            </div>
            <a 
                href="tel:+17255505447" 
                className="bg-brand-blue text-white font-bold py-3 px-6 rounded-lg shadow-lg active:scale-95 transition-transform"
            >
                Call Now
            </a>
        </div>

      </body>
    </html>
  );
}