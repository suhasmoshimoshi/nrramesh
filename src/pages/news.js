"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";
import { MainNav } from "@/components/Layout/MainNav";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function NewsPage() {
  const { language } = useLanguage();
  const t = translations[language].newsPage;
console.log(t)
  return (
    <div className="min-h-screen bg-[#FFF4E0]">
      <MainNav />

      {/* News Section */}
      <section className="py-16 ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#A65D00] mb-12">
            {t.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.articles.map((article, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow border border-[#FFD700] hover:shadow-[#FFA500]"
              >
                <CardHeader>
                  <Badge className="bg-[#FFA500] text-white border border-[#FFD700]">
                    {article.category}
                  </Badge>
                  <CardTitle className="text-[#A65D00] mt-2">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{article.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-gray-500">{article.date}</p>
                  <Button
                    variant="link"
                    className="text-[#A65D00] hover:text-[#FFA500] ml-auto"
                  >
                    {t.readMore} →
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
