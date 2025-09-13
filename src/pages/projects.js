"use client";
import { useLanguage } from "@/context/LanguageContext";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { MainNav } from "@/components/Layout/MainNav";
import Footer from "@/components/Layout/Footer";
import {
  LayoutGrid,
  Tag,
  Calendar,
  IndianRupee,
  Rocket,
  CheckCircle2,
  Clock,
  ArrowRight
} from "lucide-react";

export default function ProjectsPage() {
  const [apiResponse, setApiResponse] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");
  useEffect(() => {
    const savedResponse = localStorage.getItem("apiResponse");
    if (savedResponse) {
      setApiResponse(JSON.parse(savedResponse));
    }
  }, []);
  const { language } = useLanguage();
  const t = apiResponse?.[language]?.projectsPage;
  const common = apiResponse?.[language]?.common;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF4E0] to-[#FFE5BF]">
      <MainNav />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#FFE5BF] to-[#FFD8A8] text-center">
        <div className="container mx-auto px-4">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white rounded-full shadow-md border border-[#FFD700]">
            <Rocket className="h-6 w-6 text-[#FF9933]" />
            <span className="text-xl font-semibold text-[#FF9933]">
              {t?.heroTitle || "Transformative Projects"}
            </span>
          </div>
          <h1 className="text-5xl font-bold text-[#FF9933] mb-6 animate-fade-in">
            {t?.title || "Our Development Initiatives"}
          </h1>
          <p className="text-xl text-[#A65D00] max-w-3xl mx-auto animate-fade-in delay-100">
            {t?.subtitle || "Explore our ongoing and completed projects that are shaping the future of Karnataka and India."}
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <LayoutGrid className="h-6 w-6 text-[#FF9933]" />
              <h2 className="text-2xl font-bold text-[#FF9933]">
                {common?.filterBy || "Filter by Category"}
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button
                variant={activeCategory === "all" ? "default" : "outline"}
                className={`border-[#FF9933] ${activeCategory === "all" ? "bg-[#FF9933] text-white" : "text-[#FF9933] hover:bg-[#FF9933]/10"}`}
                onClick={() => setActiveCategory("all")}
              >
                {common?.all}
              </Button>
              {t?.categories &&
                Object.entries(t.categories).map(([key, category]) => (
                  <Button
                    key={key}
                    variant={activeCategory === key ? "default" : "outline"}
                    className={`border-[#FFD700] ${activeCategory === key ? "bg-[#FF9933] text-white" : "text-[#A65D00] hover:bg-[#FF9933]/10"}`}
                    onClick={() => setActiveCategory(key)}
                  >
                    {category}
                  </Button>
                ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t?.projects
              ?.filter(project => activeCategory === "all" || project.category === activeCategory)
              .map((project, index) => (
                <div
                  key={index}
                  className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all bg-white border border-[#FFD700]/50 hover:border-[#FF9933]"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={project?.image || "/placeholder-project.jpg"}
                      alt={project?.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <Badge
                      className={`absolute top-4 right-4 capitalize ${project?.status === "completed" ? "bg-[#138808] text-white" : "bg-[#FF9933] text-white"}`}
                    >
                      {project?.status === "completed" ? (
                        <div className="flex items-center gap-1">
                          <CheckCircle2 className="h-3 w-3" />
                          {t?.status?.completed}
                        </div>
                      ) : (
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {t?.status?.ongoing}
                        </div>
                      )}
                    </Badge>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Tag className="h-4 w-4 text-[#FF9933]" />
                      <span className="text-sm font-medium text-[#A65D00]">
                        {t?.categories?.[project?.category]}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-[#FF9933] mb-2 line-clamp-1">
                      {project?.title}
                    </h2>
                    <p className="text-[#5C3B02] mb-4 line-clamp-2">
                      {project?.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project?.tags?.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="outline"
                          className="text-[#A65D00] border-[#FFD700] bg-[#FFF4E0]"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t border-[#FFD700]/30">
                      <div className="flex items-center gap-1 text-sm font-medium text-[#A65D00]">
                        <Calendar className="h-4 w-4" />
                        <span>{project?.duration}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm font-medium text-[#A65D00]">
                        <IndianRupee className="h-4 w-4" />
                        <span>{project?.budget}</span>
                      </div>
                      <Button
                        asChild
                        variant="link"
                        className="text-[#FF9933] hover:text-[#CC7700] p-0 h-auto"
                      >
                        <Link href={`/projects/${project?.slug}`} className="flex items-center gap-1">
                          {common?.readMore}
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-[#FFE5BF] to-[#FFD8A8]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {t?.stats?.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl text-center shadow-sm border border-[#FFD700]/50 hover:shadow-lg transition-all"
              >
                <div className="text-4xl font-bold text-[#FF9933] mb-2">
                  {stat?.value}
                </div>
                <div className="text-[#A65D00]">{stat?.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
