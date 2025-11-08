import { FaSpotify } from "react-icons/fa";
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-8">
      <div className="container mx-auto px-6 flex flex-col items-center space-y-6 md:space-y-0 md:flex-row md:justify-between">
        {/* Centered Logo on small screens */}
        <div className="text-white text-3xl font-serif tracking-wide text-center md:text-left">
          TRACE ADKINS
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://www.facebook.com/traceadkins"
            className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform"
          >
            <FaFacebook size={18} />
          </a>
          <a
            href="https://www.instagram.com/traceadkins/"
            className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform"
          >
            <FaInstagram size={18} />
          </a>
          <a
            href="https://open.spotify.com/artist/79FMDwzZQxHgSkIYBl3ODU"
            className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform"
          >
            <FaSpotify size={18} />
          </a>
          <a
            href="https://twitter.com/TraceAdkins"
            className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform"
          >
            <FaXTwitter size={18} />
          </a>
          <a
            href="https://www.youtube.com/user/traceadkins?sub_confirmation=1"
            className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform"
          >
            <FaYoutube size={18} />
          </a>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-4 md:flex md:flex-row md:space-x-6 text-sm text-center md:text-left">
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms of Use
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Accessibility
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}
