// components/SeoHead.jsx
import Head from "next/head";
import { useRouter } from "next/router";

export const SeoHead = ({ title, description, image }) => {
  const { locales, defaultLocale, asPath } = useRouter();

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />

      {/* Alternate language links */}
      {locales.map((locale) => (
        <link
          key={locale}
          rel="alternate"
          hrefLang={locale}
          href={`https://yourdomain.com/${locale}${asPath}`}
        />
      ))}

      {/* Canonical URL */}
      <link rel="canonical" href={`https://yourdomain.com${asPath}`} />

      {/* Schema markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Shri Rajesh Kumar",
          url: "https://yourdomain.com/",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://yourdomain.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        })}
      </script>
    </Head>
  );
};
