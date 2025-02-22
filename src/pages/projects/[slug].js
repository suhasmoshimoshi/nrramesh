// pages/projects/[slug].js
import { useRouter } from "next/router";
import { projects } from "@/data/projects";
// import { ProjectTemplate } from "@/components/Templates";

export default function ProjectPage() {
  const router = useRouter();
  const { slug } = router.query;
  const { locale } = router;

  const project = projects[locale].find((p) => p.slug === slug);

  if (!project) return <div>Project not found</div>;

  return (
    <div className="min-h-screen">
      {/* <LanguageSwitch /> */}
      {/* <ProjectTemplate project={project} /> */}
    </div>
  );
}

export async function getStaticPaths() {
  const paths = [
    ...projects.en.map((p) => ({ params: { slug: p.slug }, locale: "en" })),
    ...projects.kn.map((p) => ({ params: { slug: p.slug }, locale: "kn" })),
  ];
  return { paths, fallback: false };
}

export async function getStaticProps({ params, locale }) {
  const project = projects[locale].find((p) => p.slug === params.slug);
  return { props: { project } };
}
