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
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function BlogsPage() {
  const [apiResponse, setApiResponse] = useState(null);

  useEffect(() => {
    // Fetch data from localStorage
    const savedResponse = localStorage.getItem("apiResponse");
    if (savedResponse) {
      setApiResponse(JSON.parse(savedResponse));
    }
  }, []);

  const { language } = useLanguage();
  const t = apiResponse?.[language]?.blogs;

  if (!t) {
    return (
      <div className="min-h-screen flex items-center justify-center text-[#A65D00]">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF4E0]">
      <MainNav />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-[#A65D00] mb-12">
            {t.pageTitle}
          </h1>
          <div className="grid md:grid-cols-2 gap-8">
            {t.items.map((blog, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow border border-[#FFD700] hover:shadow-[#FFA500]"
              >
                <CardHeader>
                  <CardTitle className="text-[#A65D00]">{blog.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge className="bg-[#FFA500] text-white border border-[#FFD700]">
                    {blog.category}
                  </Badge>
                  <p className="mt-4 text-gray-700">{blog.excerpt}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <p className="text-sm text-gray-500">{blog.date}</p>
                  <Button
                    variant="link"
                    className="text-[#A65D00] hover:text-[#FFA500]"
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
