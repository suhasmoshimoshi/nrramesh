// pages/index.js
"use client"
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";
import { MainNav } from "@/components/Layout/MainNav";
import { HeroSection } from "@/components/HeroSection";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import AchievementsSlider from "@/components/components/AchievementsSection";
import { ParallaxScrollDemo } from "@/components/components/ParallaxScrollDemo";
import { HeroParallaxDemo } from "@/components/components/HeroParallaxDemo";
import Youtube from "@/components/components/Youtube";
import Link from "next/link";
import SocialPopup from "@/components/components/SocialPopup";
import Footer from "@/components/Layout/Footer";
import { ImagesSliderDemo } from "@/components/components/ImagesSliderDemo";


export default function HomePage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen">
      <MainNav />

      {/* Hero Section */}
      <ImagesSliderDemo />

      {/* About Section */}
      <section className="py-16 bg-[#FFF3E0]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[30rem] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/profile.jpg"
                alt={t.about.alt}
                fill
                className="object-scale-down rounded-lg"
                priority
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#CC7700]">
                {t?.about?.title}
              </h2>
              <p className="text-lg text-[#5C3B02] mb-4">{t.about.content1}</p>
              <p className="text-lg text-[#5C3B02]">{t.about.content2}</p>
              <Link href={"/about"}>
                <Button className="mt-6 bg-[#CC7700] hover:bg-[#A65D00] text-white transition shadow-md">
                  {t?.about?.button}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Youtube />
      <AchievementsSlider />

      {/* Latest Projects */}
      <section className="py-16 bg-[#FFF4E0]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#A65D00] mb-12">
            {t?.projects?.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t?.projects?.items.map((project, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow border border-[#FFD700] hover:shadow-[#FFA500]"
              >
                <CardHeader>
                  <CardTitle className="text-[#A65D00]">
                    {project?.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project?.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        className="bg-[#FFA500] text-white border border-[#FFD700]"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="link"
                    className="pl-0 text-[#A65D00] hover:text-[#FFA500]"
                  >
                    {t.projects.readMore} →
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Highlights */}
      <section className="py-16 bg-[#FFF4E0]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#A65D00] mb-12">
            {t.blogs?.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {t.blogs.items.map((blog, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow border border-[#FFD700] hover:shadow-[#FFA500]"
              >
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <Badge className="bg-[#FFA500] text-white border border-[#FFD700]">
                      {blog.category}
                    </Badge>
                    <h3 className="text-xl font-semibold text-[#A65D00]">
                      {blog?.title}
                    </h3>
                    <p className="text-gray-700">{blog.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-500">{blog.date}</p>
                      <Button
                        variant="link"
                        className="text-[#A65D00] hover:text-[#FFA500]"
                      >
                        {t.blogs.readMore} →
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <ParallaxScrollDemo />

      {/* Contact Section */}
      <section className="py-16 bg-[#FFF4E0]">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold text-center text-[#A65D00] mb-8">
            {t.contact.title}
          </h2>
          <form
            className="space-y-6 border border-[#FFD700] p-6 rounded-lg shadow-lg"
            onSubmit={(e) => {
              e.preventDefault();
              const name = e.target.name.value;
              const email = e.target.email.value;
              const message = e.target.message.value;

              // Construct WhatsApp message
              const whatsappMessage = `Hello, I would like to get in touch!\n\n*Name:* ${name}\n*Email:* ${email}\n*Message:* ${message}`;

              // WhatsApp link with pre-filled message
              const whatsappURL = `https://wa.me/9141877999?text=${encodeURIComponent(
                whatsappMessage
              )}`;

              // Open WhatsApp chat
              window.open(whatsappURL, "_blank");
            }}
          >
            <div>
              <label className="block mb-2 text-sm font-medium text-[#A65D00]">
                {t.contact.name}
              </label>
              <Input
                name="name"
                className="border border-[#FFD700] focus:ring-[#FFA500]"
                placeholder={t.contact.namePlaceholder}
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-[#A65D00]">
                {t.contact.email}
              </label>
              <Input
                type="email"
                name="email"
                className="border border-[#FFD700] focus:ring-[#FFA500]"
                placeholder={t.contact.emailPlaceholder}
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-[#A65D00]">
                {t.contact.message}
              </label>
              <Textarea
                name="message"
                rows={5}
                className="border border-[#FFD700] focus:ring-[#FFA500]"
                placeholder={t.contact.messagePlaceholder}
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-[#A65D00] hover:bg-[#FFA500] text-white"
            >
              {t.contact.button}
            </Button>
          </form>
        </div>
      </section>
      <SocialPopup />

      <Footer />
    </div>
  );
}
