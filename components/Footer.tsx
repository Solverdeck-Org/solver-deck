import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#193cb8]">SolverDeck</h3>
            <p className="text-black mb-4">
              Transforming businesses through intelligent technology
              solutions.
            </p>

            {/* Newsletter */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#193cb8]">Newsletter</h3>
              <p className="text-black mb-4">
                Subscribe to our newsletter for the latest updates and insights.
              </p>
              <div className="flex flex-col space-y-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-white border-[#193cb8]"
                />
                <Button className="bg-[#193cb8] hover:bg-[#193cb8]/90 text-white">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#193cb8]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-black hover:text-[#193cb8] transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-black hover:text-[#193cb8] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="text-black hover:text-[#193cb8] transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-black hover:text-[#193cb8] transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-black hover:text-[#193cb8] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#193cb8]">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="mr-2 h-5 w-5 text-[#193cb8]" />
                <span className="text-black">
                  info@solverdeck.com
                </span>
              </li>
              <li className="flex items-start">
                <Phone className="mr-2 h-5 w-5 text-[#193cb8]" />
                <span className="text-black">(123) 456-7890</span>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-[#193cb8]" />
                <span className="text-black">
                  123 Tech Avenue, Suite 100
                  <br />
                  Innovation City, IC 12345
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-[#193cb8]">Contact Us</h3>

            <div className="flex flex-col space-y-4">
              <Link
                href="#"
                className="flex text-black hover:text-[#193cb8] transition-colors"
              >
                <Facebook size={20} className="mr-2" />
                <span>Facebook</span>
              </Link>
              <Link
                href="#"
                className="flex text-black hover:text-[#193cb8] transition-colors"
              >
                <Twitter size={20} className="mr-2" />
                <span>Twitter</span>
              </Link>
              <Link
                href="#"
                className="flex text-black hover:text-[#193cb8] transition-colors"
              >
                <Linkedin size={20} className="mr-2" />
                <span>Linkedin</span>
              </Link>
              <Link
                href="#"
                className="flex text-black hover:text-[#193cb8] transition-colors"
              >
                <Instagram size={20} className="mr-2" />
                <span>Instagram</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-[#193cb8] mt-12 pt-8 text-center">
          <p className="text-black">© {new Date().getFullYear()} SolverDeck. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link
              href="/privacy-policy"
              className="text-black hover:text-[#193cb8] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-black hover:text-[#193cb8] transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
