import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MainNav } from "@/components/Layout/MainNav";
import Footer from "@/components/Layout/Footer";

export default function AboutPage() {
  const { language } = useLanguage();
  const t = translations[language].aboutPage;
  const common = translations[language].common;

  return (
    <div className="min-h-screen bg-[#FFF4E0] text-[#6B4226]">
      <MainNav />

      {/* Main Content */}
      <section className="py-16 bg-[#FFF4E0]">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12 text-[#6B4226]">
            {t.title}
          </h1>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg border border-[#D9A679]">
              <Image
                src="/about-team.jpg"
                alt={t.content.teamTitle}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Content Section */}
            <div className="space-y-6">
              <p className="text-lg text-[#6B4226]">{t.content.section1}</p>
              <p className="text-lg text-[#6B4226]">{t.content.section2}</p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {t.content.stats.map((stat, index) => (
                  <div
                    key={index}
                    className="p-6 bg-[#FFD8A8] border border-[#D9A679] rounded-lg text-center"
                  >
                    <div className="text-3xl font-bold text-[#6B4226]">
                      {stat.value}
                    </div>
                    <div className="text-sm text-[#8C5A3C] mt-2">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Call to Action Buttons */}
              <div className="flex gap-4 mt-8">
                <Button
                  asChild
                  className="bg-[#BF7548] hover:bg-[#A65C30] text-white"
                >
                  <Link href="/achievements">
                    {common.viewAll} {common.achievements}
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-[#BF7548] text-[#BF7548] hover:border-[#A65C30] hover:text-[#A65C30]"
                >
                  <Link href="/contact">
                    {common.contact} {common.us}
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Mission Section */}
          <div className="mt-16 bg-[#FFD8A8] border border-[#D9A679] rounded-xl p-8">
            <h2 className="text-3xl font-bold text-[#6B4226] mb-6">
              {t.content.missionTitle}
            </h2>
            <p className="text-lg text-[#6B4226]">{t.content.missionText}</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
