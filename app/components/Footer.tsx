export default function Footer() {
  return (
    <footer className="font-sans bg-slate-900 text-white py-10">
      {/* Grid Sections */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-left">
        
        {/* Section 1 - Company */}
        <div>
          <h4 className="font-bold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-rose-500 transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-rose-500 transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-rose-500 transition-colors">Blog</a></li>
          </ul>
        </div>

        {/* Section 2 - Support */}
        <div>
          <h4 className="font-bold mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-rose-500 transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-rose-500 transition-colors">Contact Us</a></li>
            <li><a href="#" className="hover:text-rose-500 transition-colors">FAQ</a></li>
          </ul>
        </div>

        {/* Section 3 - Services */}
        <div>
          <h4 className="font-bold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-rose-500 transition-colors">Bus Tickets</a></li>
            <li><a href="#" className="hover:text-rose-500 transition-colors">Routes</a></li>
            <li><a href="#" className="hover:text-rose-500 transition-colors">Offers</a></li>
          </ul>
        </div>

        {/* Section 4 - Legal & Info */}
        <div>
          <h4 className="font-bold mb-4">Find Us</h4>

          {/* Address / Info */}
          <p className="text-gray-400 text-sm mb-4">
            MyTicketBus Official <br />
            No. 11, Bazar Greenwood, Gombak, Selangor, Malaysia <br />
            Customer Support: support@myticketbus.my <br />
            Phone: +60 13-485 5099
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-2">
            {/* Facebook */}
            <a href="#" className="text-gray-400 hover:text-rose-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.99H7.898v-2.889h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.196 2.238.196v2.46h-1.26c-1.242 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.889h-2.33v6.99C18.343 21.128 22 16.991 22 12z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a href="#" className="text-gray-400 hover:text-rose-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.054 1.967.24 2.428.403a4.92 4.92 0 011.77 1.036 4.92 4.92 0 011.036 1.77c.163.461.35 1.258.403 2.428.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.967-.403 2.428a4.92 4.92 0 01-1.036 1.77 4.92 4.92 0 01-1.77 1.036c-.461.163-1.258.35-2.428.403-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.967-.24-2.428-.403a4.92 4.92 0 01-1.77-1.036 4.92 4.92 0 01-1.036-1.77c-.163-.461-.35-1.258-.403-2.428C2.212 15.584 2.2 15.2 2.2 12s.012-3.584.07-4.85c.054-1.17.24-1.967.403-2.428a4.92 4.92 0 011.036-1.77 4.92 4.92 0 011.77-1.036c.461-.163 1.258-.35 2.428-.403C8.416 2.212 8.8 2.2 12 2.2zm0-2.2C8.735 0 8.332.012 7.052.07 5.777.127 4.856.32 4.06.584a7.14 7.14 0 00-2.58 1.503A7.14 7.14 0 00.584 4.06c-.264.796-.457 1.717-.514 2.992C.012 8.332 0 8.735 0 12s.012 3.668.07 4.948c.057 1.275.25 2.196.514 2.992a7.14 7.14 0 001.503 2.58 7.14 7.14 0 002.58 1.503c.796.264 1.717.457 2.992.514C8.332 23.988 8.735 24 12 24s3.668-.012 4.948-.07c1.275-.057 2.196-.25 2.992-.514a7.14 7.14 0 002.58-1.503 7.14 7.14 0 001.503-2.58c.264-.796.457-1.717.514-2.992C23.988 15.668 24 15.265 24 12s-.012-3.668-.07-4.948c-.057-1.275-.25-2.196-.514-2.992a7.14 7.14 0 00-1.503-2.58 7.14 7.14 0 00-2.58-1.503c-.796-.264-1.717-.457-2.992-.514C15.668.012 15.265 0 12 0z"/>
                <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zM18.406 4.594a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-400 mt-8">
        © 2026 MyTicketBus (MTB) Official by Kotanaim Enterprise - 001592132-X
      </div>
    </footer>
  );
}
