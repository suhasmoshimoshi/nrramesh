import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FaFacebook, FaInstagram, FaTwitter, FaPhone } from "react-icons/fa";

export default function SocialPopup() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#A65D00] text-white p-4 rounded-full shadow-lg hover:bg-[#FFA500]"
      >
        ✌️
      </Button>

      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white p-4 rounded-lg shadow-xl w-48">
          <p className="text-center font-bold mb-2 text-[#A65D00]">Follow Us</p>
          <div className="flex flex-col gap-2">
            <a
              href="tel:+91 9741677999"
              className="flex items-center gap-2 text-[#A65D00] hover:text-[#FFA500]"
            >
              <FaPhone /> +91 9741677999
            </a>
            <a
              href="https://www.facebook.com/RameshNRBJP/"
              className="flex items-center gap-2 text-[#1877F2] hover:underline"
            >
              <FaFacebook /> Facebook
            </a>
            <a
              href="https://www.instagram.com/rameshnrofficial/?hl=en"
              className="flex items-center gap-2 text-[#E4405F] hover:underline"
            >
              <FaInstagram /> Instagram
            </a>
            <a
              href="https://x.com/rameshnr_bjp?lang=en"
              className="flex items-center gap-2 text-[#1DA1F2] hover:underline"
            >
              <FaTwitter /> Twitter
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
