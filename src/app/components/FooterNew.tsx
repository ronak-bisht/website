import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";

export function FooterNew() {
  const footerLinks = {
    Pages: [
      { label: "Home", path: "/" },
      { label: "Services", path: "/services" },
      { label: "Contact", path: "/contact" },
    ],
    "Contact Us": [
      { label: "reachus@enormconnect.in", path: "mailto:reachus@enormconnect.in" },
      { label: "+91 87963 35202", path: "tel:+918796335202" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Instagram, href: "#" },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={logo} alt="enorm conect" className="h-10 w-auto" />
              
            </Link>
            <p className="text-gray-400 mb-6">
              Building innovative software solutions for modern businesses. 
              From web apps to mobile platforms, we create technology that drives success.
            </p>
            
            {/* Presence Section (Replaces Founder) */}
            <div className="mb-6 p-4 bg-gray-900 rounded-lg border border-gray-800 max-w-xs">
              <p className="text-cyan-400 font-semibold mb-3 flex items-center gap-2">
                Our Presence
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-gray-400 text-sm">
                  <MapPin size={16} className="text-cyan-400" />
                  <span>Delhi NCR</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400 text-sm">
                  <MapPin size={16} className="text-cyan-400" />
                  <span>Dehradun</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400 text-sm">
                  <MapPin size={16} className="text-cyan-400" />
                  <span>Chandigarh</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-cyan-600 transition-colors"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white mb-4 font-semibold">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.path.startsWith('mailto:') || link.path.startsWith('tel:') ? (
                      <a href={link.path} className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-all group">
                        <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/20 group-hover:text-cyan-400 transition-colors">
                          {link.path.startsWith('mailto:') ? <Mail size={16} /> : <Phone size={16} />}
                        </div>
                        <span className="text-sm truncate">{link.label}</span>
                      </a>
                    ) : (
                      <Link to={link.path} className="text-gray-400 hover:text-cyan-400 transition-colors">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 Enorm Connect. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}