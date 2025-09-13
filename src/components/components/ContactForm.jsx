// components/ContactForm.jsx
"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#FFF4E0] to-[#FFE5BF]">
      <div className="container mx-auto px-6 max-w-3xl">
        {/* Section Heading */}
        <h2 className="text-4xl font-extrabold text-center text-[#CC7700] mb-12 animate-fade-in">
          Get In Touch
        </h2>

        {/* Contact Form */}
        <form className="space-y-6 bg-white p-8 rounded-2xl shadow-xl">
          {/* Name Field */}
          <div className="flex flex-col">
            <Label htmlFor="name" className="mb-2 text-lg font-medium text-[#A65D00]">
              Name
            </Label>
            <Input
              id="name"
              placeholder="Enter your name"
              className="border border-[#FFD700] focus:border-[#FF9933] focus:ring-1 focus:ring-[#FF9933] transition"
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col">
            <Label htmlFor="email" className="mb-2 text-lg font-medium text-[#A65D00]">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="border border-[#FFD700] focus:border-[#FF9933] focus:ring-1 focus:ring-[#FF9933] transition"
            />
          </div>

          {/* Message Field */}
          <div className="flex flex-col">
            <Label htmlFor="message" className="mb-2 text-lg font-medium text-[#A65D00]">
              Message
            </Label>
            <Textarea
              id="message"
              placeholder="Type your message here"
              rows={6}
              className="border border-[#FFD700] focus:border-[#FF9933] focus:ring-1 focus:ring-[#FF9933] transition resize-none"
            />
          </div>

          {/* Submit Button */}
          <Button className="w-full bg-[#CC7700] hover:bg-[#A65D00] text-white font-semibold py-4 rounded-xl shadow-lg transition transform hover:scale-105">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
}
