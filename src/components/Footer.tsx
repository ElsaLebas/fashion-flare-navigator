
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-fashion-black text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-medium">LUXESTYLE</h3>
            <p className="text-gray-400 text-sm">
              Elevating everyday style with premium quality and timeless designs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-fashion-burgundy transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-fashion-burgundy transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-fashion-burgundy transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Shop Column */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/category/women" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Women
                </Link>
              </li>
              <li>
                <Link to="/category/men" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Men
                </Link>
              </li>
              <li>
                <Link to="/category/accessories" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Accessories
                </Link>
              </li>
              <li>
                <Link to="/category/shoes" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Shoes
                </Link>
              </li>
              <li>
                <Link to="/new-arrivals" className="text-gray-400 hover:text-white transition-colors text-sm">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Help Column */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Help</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Customer Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          
          {/* Company Column */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-8 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <p>© 2023 LUXESTYLE. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
