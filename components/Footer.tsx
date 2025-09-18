import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RiTwitterXLine } from "react-icons/ri";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="flex flex-col md:flex-row md:justify-between space-y-4">
        <div className="flex flex-col">
          <Image src="/sd.png" alt="Solverdeck Logo" width={120} height={36} />
          <p className="text-white/80 mt-2 mb-4">
            Transforming businesses through <br /> intelligent technology
            solutions.
          </p>
          <div className="flex flex-col space-y-2 mb-4">
            <p className="text-lg font-medium">Join our newsletter</p>
            <div className="relative w-78">
              <Input
                placeholder="Enter your email"
                className="w-full h-12 pl-3 border-border/20 placeholder:text-white/90"
              />
              <Button className="absolute bg-[#1800AD] hover:bg-[#1800AD]/80 right-2 top-1/2 -translate-y-1/2">
                Subscribe
              </Button>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="bg-white/20 rounded-sm size-7 flex items-center justify-center">
              <Link href="https://x.com/Solverdeck">
                <RiTwitterXLine className="size-5" />
              </Link>
            </div>
            <div className="bg-white/20 rounded-sm size-7 flex items-center justify-center">
              <Link href="https://linkedin.com/company/solverdeck">
                <CiLinkedin className="size-5" />
              </Link>
            </div>
            <div className="bg-white/20 rounded-sm size-7 flex items-center justify-center">
              <Link href="https://instagram.com/solverdeck">
                <FaInstagram className="size-5" />
              </Link>
            </div>
            <div className="bg-white/20 rounded-sm size-7 flex items-center justify-center">
              <Link href="https://www.facebook.com/profile.php?id=61578877721977">
                <CiFacebook className="size-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="mr-20">
            <h3 className="mb-2 font-semibold">Sections</h3>
            <ul className="text-white/80 flex flex-col gap-1 text-sm">
              <li>
                <Link href="/#services">Services</Link>
              </li>
              <li>
                <Link href="/#process">Process</Link>
              </li>
              <li>
                <Link href="/#about">About us</Link>
              </li>
              <li>
                <Link href="/#contact">Contact</Link>
              </li>
              <li>
                <Link href="/#faq">FAQ</Link>
              </li>
            </ul>
          </div>
          <div className="mr-20">
            <h3 className="mb-2 font-semibold">Pages</h3>
            <ul className="text-white/80 flex flex-col gap-1 text-sm">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/case-studies">Case Studies</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between border-t border-white/30 py-5 mt-10">
        <p className="text-sm">
          Copyright © {new Date().getFullYear()} Solverdeck. | Registered with Company House No. 16597716
        </p>

        <ul className="flex gap-x-2 gap-y-4 text-sm">
          <li>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/terms-of-service">Terms Of Service</Link>
          </li>
        </ul>
      </div>

      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(135deg, rgba(24,0,173,0.6) 0%, rgba(24,0,173,0.15) 20%, transparent 80%)",
        }}
      />
    </footer>
  );
};

export default Footer;
