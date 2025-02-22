// components/Content/ProjectsGrid.jsx
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/context/LanguageContext";

export const ProjectsGrid = () => {
  const { language } = useLanguage();
  const { projects } = translations[language];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          {projects.title}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.items.map((project) => (
            <Card
              key={project.slug}
              className="hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="mt-4 space-y-2 text-sm">
                  <p>
                    <strong>Budget:</strong> {project.budget}
                  </p>
                  <p>
                    <strong>Completed:</strong> {project.year}
                  </p>
                  <p>
                    <strong>Beneficiaries:</strong> {project.beneficiaries}
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Link
                  href={`/projects/${project.slug}`}
                  className="text-blue-600 hover:underline"
                >
                  {projects.readMore} →
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
