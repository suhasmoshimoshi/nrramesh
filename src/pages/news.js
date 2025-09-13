"use client";
import { useLanguage } from "@/context/LanguageContext";
import { useState, useEffect } from "react";
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
import { Newspaper, Calendar, ArrowRight } from "lucide-react";

export default function NewsPage() {
  const [apiResponse, setApiResponse] = useState(null);
  useEffect(() => {
    const savedResponse = localStorage.getItem("apiResponse");
    if (savedResponse) {
      setApiResponse(JSON.parse(savedResponse));
    }
  }, []);
  const { language } = useLanguage();
  const t = apiResponse?.[language]?.newsPage;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF4E0] to-[#FFE5BF]">
      <MainNav />
      {/* News Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <Newspaper className="h-10 w-10 text-[#FF9933]" />
            </div>
            <h2 className="text-4xl font-bold text-[#FF9933] mb-4 animate-fade-in">
              {t?.title || "Latest News & Updates"}
            </h2>
            <p className="text-xl text-[#A65D00] max-w-2xl mx-auto animate-fade-in delay-100">
              {t?.subtitle || "Stay informed with the latest developments and announcements."}
            </p>
          </div>

          {/* News Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t?.articles?.map((article, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 border border-[#FFD700]/50 bg-white hover:border-[#FF9933] group"
              >
                <CardHeader className="p-6">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-[#FF9933] text-white border border-[#FFD700]">
                      {article?.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-[#A65D00]">
                      <Calendar className="h-4 w-4" />
                      <span>{article?.date}</span>
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-[#FF9933] mt-4 group-hover:text-[#CC7700] transition-colors">
                    {article?.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="text-[#5C3B02] line-clamp-3">{article?.excerpt}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button
                    variant="link"
                    className="text-[#FF9933] hover:text-[#CC7700] p-0 h-auto font-semibold flex items-center gap-1"
                  >
                    {t?.readMore || "Read More"}
                    <ArrowRight className="h-4 w-4" />
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
