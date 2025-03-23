import { useLanguage } from "@/context/LanguageContext";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { MainNav } from "@/components/Layout/MainNav";
import Footer from "@/components/Layout/Footer";

export default function ProjectsPage() {
  const [apiResponse, setApiResponse] = useState(null);

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
    <div className="min-h-screen bg-orange-50 text-orange-900">
      <MainNav />

      {/* Hero Section */}
      <section className="bg-orange-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xl text-orange-700 max-w-2xl mx-auto">
            {t?.subtitle}
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-[#FFF4E0]">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="mb-12 flex flex-wrap gap-4">
            <Button
              variant="outline"
              className="border-orange-500 text-orange-500"
            >
              {common?.all}
            </Button>
            {t?.categories &&
              Object.values(t.categories).map((category, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="border-orange-300 text-orange-700 hover:border-orange-500 hover:text-orange-900"
                >
                  {category}
                </Button>
              ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {t?.projects?.map((project, index) => (
              <div
                key={index}
                className="rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-orange-300"
              >
                <div className="relative h-[50vh]">
                  <Image
                    src={project?.image}
                    alt={project?.title}
                    fill
                    className="object-scale-down"
                  />
                </div>
                <div className="p-6 bg-orange-50">
                  <div className="flex items-center justify-between mb-4">
                    <Badge
                      variant={
                        project?.status === "completed"
                          ? "default"
                          : "secondary"
                      }
                      className="capitalize bg-orange-500 text-white"
                    >
                      {t?.status?.[project?.status]}
                    </Badge>
                    <span className="text-sm text-orange-700">
                      {project?.duration}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-orange-900 mb-2">
                    {project?.title}
                  </h2>
                  <p className="text-orange-700 mb-4">{project?.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project?.tags?.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="outline"
                        className="text-orange-700 border-orange-300"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-orange-800">
                      {common?.budget}: {project?.budget}
                    </span>
                    <Button asChild variant="link" className="text-orange-600">
                      <Link href={`/projects/${project?.slug}`}>
                        {common?.readMore} →
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
      <section className="bg-orange-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {t?.stats?.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl text-center shadow-sm border border-orange-300"
              >
                <div className="text-4xl font-bold text-orange-900 mb-2">
                  {stat?.value}
                </div>
                <div className="text-orange-700">{stat?.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
