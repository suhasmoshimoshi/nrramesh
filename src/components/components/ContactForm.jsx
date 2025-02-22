// components/ContactForm.jsx
"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-8">Get In Touch</h2>
        <form className="space-y-6">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your name" />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Type your message here"
              rows={5}
            />
          </div>
          <Button className="w-full bg-blue-900 hover:bg-blue-800">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
}
