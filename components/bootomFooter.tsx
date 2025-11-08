import { FaSpotify } from "react-icons/fa";
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-gray-400 py-4">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-white">
              <div className="text-3xl font-serif leading-none">
                Trace Adkins
              </div>
            </div>
          </div>

          {/* Copyright and Links */}
          <div className="text-center text-sm">
            <span>
              © 2025 All American Entertainment. All Rights Reserved. |{" "}
            </span>
            <a href="#" className="hover:text-white transition-colors">
              Sitemap
            </a>
            <span> | </span>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/traceadkins"
              className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:border-gray-400 hover:text-white transition-colors"
            >
              <FaFacebook size={16} />
            </a>
            <a
              href="https://twitter.com/TraceAdkins"
              className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:border-gray-400 hover:text-white transition-colors"
            >
              <FaXTwitter size={16} />
            </a>
            <a
              href="https://www.instagram.com/traceadkins/"
              className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:border-gray-400 hover:text-white transition-colors"
            >
              <FaInstagram size={16} />
            </a>
            <a
              href="https://www.youtube.com/user/traceadkins?sub_confirmation=1"
              className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:border-gray-400 hover:text-white transition-colors"
            >
              <FaYoutube size={16} />
            </a>
            <a
              href="https://open.spotify.com/artist/79FMDwzZQxHgSkIYBl3ODU"
              className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:border-gray-400 hover:text-white transition-colors"
            >
              <FaSpotify size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
