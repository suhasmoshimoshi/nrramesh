import React, { useEffect, useState } from "react";
import {
  createTranslations,
  readTranslations,
  updateTranslations,
  deleteTranslations,
} from "../../services/translationsService";

export default function TranslationsManager() {
  const [translations, setTranslations] = useState(null);

//   Fetch translations on component load
  useEffect(() => {
    fetchTranslations();
  }, []);

  const fetchTranslations = async () => {
    const data = await readTranslations();
    setTranslations(data);
  };

  const handleCreate = async () => {
    const newTranslations = {
      en: {
        common: {
          name: "Dr. Ramesh N.R.",
          home: "Home",
          news: "News",
          about: "About",
          blogs: "Blogs",
          projects: "Projects",
          contact: "Contact",
          readMore: "Read More →",
          viewAll: "View All",
          switchLanguage: "Switch to Kannada",
        },
        hero: {
          title:
            "Shri Ramesh N.R. Former President, BJP Bengaluru South District Leading the path of development!",
          subtitle:
            "Dedicated Public Servant | Development Advocate | Community Leader",
          cta1: "View Achievements",
          cta2: "Upcoming Events",
        },
        about: {
          title: "About Me",
          content1:
            "Dr. Ramesh N.R. B.Com, L.L.B, M.C.L, D.C.Technology, Ph.D. A distinguished leader dedicated to social service and good governance. With a strong educational background and political experience, he has received numerous accolades, including the prestigious 'Karnataka Chethana' award and 'Bharatha Jyothi' National Award. He was honored with a Ph.D. for his research on 'Versatility of Social Service' from the University of Florida in 2016.",

          content2:
            "His focus areas include education reform, rural infrastructure development, and sustainable agricultural practices.",

          button: "View Full Profile",
          alt: "Official portrait",
        },
        social: {
          head: "Social Interaction",
        },

        achievements: {
          title: "Key Achievements",
          items: [
            {
              title: "Rural Education Initiative",
              description: "Established 50+ schools in rural areas",
              year: "2023",
            },
            {
              title: "Clean Water Project",
              description: "Provided clean drinking water to 25 villages",
              year: "2022",
            },
            {
              title: "Farmers Support Program",
              description: "Benefited 10,000+ farmers with new techniques",
              year: "2021",
            },
          ],
        },
        projects: {
          title: "Recent Projects",
          items: [
            {
              title: "Digital Literacy Drive",
              description: "Trained 5000+ villagers in digital skills",
              tags: ["Education", "Technology"],
            },
            {
              title: "Health Camps",
              description: "Organized 100+ rural health checkup camps",
              tags: ["Healthcare", "Rural"],
            },
            {
              title: "Road Development",
              description: "Built 50km of new rural roads",
              tags: ["Infrastructure", "Development"],
            },
          ],
        },
        blogs: {
          title: "Latest Blogs",
          items: [
            {
              title: "Empowering Rural Communities",
              excerpt:
                "Strategies for sustainable rural development through community participation...",
              date: "March 15, 2024",
              category: "Development",
            },
            {
              title: "Education Reforms",
              excerpt:
                "New initiatives for improving primary education quality...",
              date: "March 10, 2024",
              category: "Education",
            },
          ],
        },
        contact: {
          title: "Get In Touch",
          name: "Full Name",
          email: "Email Address",
          message: "Message",
          namePlaceholder: "Enter your name",
          emailPlaceholder: "Enter your email",
          messagePlaceholder: "Type your message here...",
          button: "Send Message",
          success: "Message sent successfully!",
          error: "Error sending message. Please try again.",
        },
        footer: {
          copyright: "© 2024 Rajesh Kumar. All rights reserved.",
          privacy: "Privacy Policy",
          terms: "Terms of Service",
        },
        aboutPage: {
          title: "Dr. Ramesh N.R",
          content: {
            section1:
              "Dr. Ramesh N.R is a dedicated leader known for his contributions to social service and good governance. With a strong educational background and vast political experience, he has made a significant impact on his community.",
            section2:
              "He is the youngest recipient of the prestigious 'Karnataka Chethana' award and a recipient of the 'Bharatha Jyothi' National Award. He also earned a Ph.D. from the University of Florida for his research on the 'Versatility of Social Service.'",
            section3:
              "His political career began as the Student Union President of P.E.S. College. He later served as the Vice President of Karnataka State BJP Yuva Morcha and as Secretary of Bengaluru City BJP Unit. In 2010, he was elected as the Councilor of Yediyur Ward 167 and served as the BBMP Ruling Party Leader (2014-2015).",
            section4:
              "During Siddaramaiah's Congress (I) Government, he exposed major scams, leading to FIRs against 13 ministers and 21 MLAs. His fight against corruption resulted in the recovery of over ₹8,600 crores worth of government assets.",
            section5:
              "He has successfully won 28 legal battles, filed over 70 cases in investigative agencies, and submitted 59 PILs in the Karnataka High Court. He played a crucial role in banning Hookah Centers in Bengaluru, making it the first city in Asia to do so.",
            section6:
              "Currently, he serves as the President of Bengaluru South District BJP and has led the party to victories in multiple elections, including Hopcoms, PLD Bank, Gram Panchayat, Municipal Council, and MLC elections.",
            missionTitle: "His Mission",
            missionText:
              "To uphold social justice, ensure good governance, and empower communities.",
            stats: [
              { value: "Politician", label: "Category" },
              { value: "15+", label: "Years in Politics" },
              { value: "70+", label: "Legal Cases Filed" },
              { value: "₹8,600+ Cr", label: "Recovered Government Assets" },
              { value: "1st", label: "City in Asia to Ban Hookah Centers" },
              { value: "Bangalore, Karnataka, India", label: "Service Area" },
              { value: "099458 01999", label: "Mobile" },
              { value: "rameshnr.info@gmail.com", label: "Email" },
              { value: "http://www.rameshnr.in/", label: "Website" },
              { value: "RameshNR_BJP", label: "X (Twitter)" },
              { value: "rameshnrofficial", label: "Instagram" },
              { value: "rameshnr9", label: "YouTube" },
            ],
          },
        },

        projectsPage: {
          title: "Our Projects",
          subtitle:
            "Explore our recent initiatives that have made a significant impact in various communities.",
          categories: {
            all: "All",
            education: "Education",
            healthcare: "Healthcare",
            infrastructure: "Infrastructure",
            community: "Community Development",
            environment: "Environment",
          },
          status: {
            ongoing: "Ongoing",
            completed: "Completed",
            upcoming: "Upcoming",
          },
          projects: [
            {
              title: "Road Development",
              description: "Built 50km of new rural roads.",
              image: "/p1.jpg",
              tags: ["Infrastructure", "Development"],
              status: "completed",
              duration: "8 months",
              budget: "200,000",
              slug: "road-development",
            },
            {
              title: "Road Development",
              description: "Built 50km of new rural roads.",
              image: "/p2.jpg",
              tags: ["Infrastructure", "Development"],
              status: "completed",
              duration: "8 months",
              budget: "200,000",
              slug: "road-development",
            },
            {
              title: "Road Development",
              description: "Built 50km of new rural roads.",
              image: "/p3.jpg",
              tags: ["Infrastructure", "Development"],
              status: "completed",
              duration: "8 months",
              budget: "200,000",
              slug: "road-development",
            },
            {
              title: "Road Development",
              description: "Built 50km of new rural roads.",
              image: "/p4.jpg",
              tags: ["Infrastructure", "Development"],
              status: "completed",
              duration: "8 months",
              budget: "200,000",
              slug: "road-development",
            },
            {
              title: "Road Development",
              description: "Built 50km of new rural roads.",
              image: "/p5.jpg",
              tags: ["Infrastructure", "Development"],
              status: "completed",
              duration: "8 months",
              budget: "200,000",
              slug: "road-development",
            },
            {
              title: "Road Development",
              description: "Built 50km of new rural roads.",
              image: "/p6.jpg",
              tags: ["Infrastructure", "Development"],
              status: "completed",
              duration: "8 months",
              budget: "200,000",
              slug: "road-development",
            },
          ],
          stats: [
            { value: "500+", label: "Projects Completed" },
            { value: "1M+", label: "People Benefited" },
            { value: "5M", label: "Total Funding Raised" },
          ],
        },
        newsPage: {
          title: "Latest News",
          subtitle: "Stay updated with our latest announcements and stories.",
          readMore: "Read More",
          articles: [
            {
              title: "Community Development Project Launched",
              description:
                "We have launched a new initiative to improve local infrastructure.",
              date: "July 20, 2024",
              image: "/images/news/community-development.jpg",
              slug: "community-development-project-launched",
            },
            {
              title: "Healthcare Camp Success",
              description:
                "Over 500 people benefited from our recent healthcare camp.",
              date: "July 18, 2024",
              image: "/images/news/healthcare-camp.jpg",
              slug: "healthcare-camp-success",
            },
          ],
        },
      },
      kn: {
        common: {
          name: "ಡಾ. ರಾಮೇಶ್ ಎನ್.ಆರ್",
          home: "ಮುಖಪುಟ",
          about: "ಸುಮಾರು",
          news: "ಸುದ್ದಿ",
          blogs: "ಬ್ಲಾಗ್ಗಳು",
          projects: "ಯೋಜನೆಗಳು",
          contact: "ಸಂಪರ್ಕಿಸಿ",
          readMore: "ಮತ್ತಷ್ಟು ಓದು →",
          viewAll: "ಎಲ್ಲಾ ವೀಕ್ಷಿಸಿ",
          switchLanguage: "ಕನ್ನಡಕ್ಕೆ ಬದಲಾಯಿಸಿ",
        },
        hero: {
          title:
            "ಶ್ರೀ ರಾಮೇಶ್ ಎನ್.ಆರ್ ಮಾಜಿ ಅಧ್ಯಕ್ಷರು, ಬಿಜೆಪಿ ಬೆಂಗಳೂರು ದಕ್ಷಿಣ ಜಿಲ್ಲೆ, ಅಭಿವೃದ್ಧಿ ಮಾರ್ಗದ ಮುಂಚೂಣಿಯಲ್ಲಿ!",
          subtitle: "ಸಮರ್ಪಿತ ಸಾರ್ವಜನಿಕ ಸೇವಕ | ಅಭಿವೃದ್ಧಿ ವಕೀಲ | ಸಮುದಾಯ ನಾಯಕ",
          cta1: "ಸಾಧನೆಗಳನ್ನು ವೀಕ್ಷಿಸಿ",
          cta2: "ಮುಂಬರುವ ಘಟನೆಗಳು",
        },
        social: {
          head: "ಸಾಮಾಜಿಕ ಪರಸ್ಪರ",
        },

        about: {
          title: "ನನ್ನ ಬಗ್ಗೆ",
          content1:
            "ಡಾ. ರಾಮೇಶ್ ಎನ್.ಆರ್. B.Com, L.L.B, M.C.L, D.C.Technology, Ph.D. ಸಮಾಜಸೇವೆ ಮತ್ತು ಉತ್ತಮ ಆಡಳಿತಕ್ಕಾಗಿ ಸಮರ್ಪಿತನಾದ ಗಣನೀಯ ನಾಯಕ. ಅವರು 'ಕರ್ನಾಟಕ ಚೇತನ' ಪ್ರಶಸ್ತಿ ಮತ್ತು 'ಭಾರತ ಜ್ಯೋತಿ' ರಾಷ್ಟ್ರೀಯ ಪ್ರಶಸ್ತಿಯಂತಹ ಅನೇಕ ಗೌರವಗಳನ್ನು ಪಡೆದಿದ್ದಾರೆ. 2016ರಲ್ಲಿ ಫ್ಲೋರಿಡಾ ವಿಶ್ವವಿದ್ಯಾಲಯದಿಂದ 'ಸಾಮಾಜಿಕ ಸೇವೆಯ ಬಹುಮುಖತೆ' ಕುರಿತು ಸಂಶೋಧನೆಗೆ ಪಿಎಚ್.ಡಿ. ಗೌರವವನ್ನು ಪಡೆದಿದ್ದಾರೆ.",

          content2:
            "ಅವರ ಗಮನಕ್ಷೇತ್ರಗಳಲ್ಲಿ ಶಿಕ್ಷಣ ಸುಧಾರಣೆ, ಗ್ರಾಮೀಣ ಮೂಲಸೌಕರ್ಯ ಅಭಿವೃದ್ಧಿ ಮತ್ತು ಸುಸ್ಥಿರ ಕೃಷಿ ಚಟುವಟಿಕೆಗಳು ಸೇರಿವೆ.",

          button: "ಪೂರ್ಣ ಪ್ರೊಫೈಲ್ ವೀಕ್ಷಿಸಿ",
          alt: "ಅಧಿಕೃತ ಭಾವಚಿತ್ರ",
        },

        achievements: {
          title: "ಪ್ರಮುಖ ಸಾಧನೆಗಳು",
          items: [
            {
              title: "ಗ್ರಾಮೀಣ ಶಿಕ್ಷಣ ಉಪಕ್ರಮ",
              description: "ಗ್ರಾಮೀಣ ಪ್ರದೇಶಗಳಲ್ಲಿ 50+ ಶಾಲೆಗಳನ್ನು ಸ್ಥಾಪಿಸಲಾಗಿದೆ",
              year: "2023",
            },
            {
              title: "ಸ್ವಚ್ಛ ನೀರು ಯೋಜನೆ",
              description: "25 ಗ್ರಾಮಗಳಿಗೆ ಸ್ವಚ್ಛ ಕುಡಿಯುವ ನೀರು ಒದಗಿಸಲಾಗಿದೆ",
              year: "2022",
            },
            {
              title: "ರೈತರ ಬೆಂಬಲ ಕಾರ್ಯಕ್ರಮ",
              description: "10,000+ ರೈತರು ಹೊಸ ತಂತ್ರಗಳಿಂದ ಲಾಭ ಪಡೆದಿದ್ದಾರೆ",
              year: "2021",
            },
          ],
        },
        projectsPage: {
          title: "ನಮ್ಮ ಯೋಜನೆಗಳು",
          subtitle:
            "ವಿವಿಧ ಸಮುದಾಯಗಳಲ್ಲಿ ಗಮನಾರ್ಹ ಪರಿಣಾಮವನ್ನು ಉಂಟುಮಾಡಿದ ನಮ್ಮ ಇತ್ತೀಚಿನ ಉಪಕ್ರಮಗಳನ್ನು ಅನ್ವೇಷಿಸಿ.",
          categories: {
            all: "ಎಲ್ಲಾ",
            education: "ಶಿಕ್ಷಣ",
            healthcare: "ಆರೋಗ್ಯ",
            infrastructure: "ಅವಸ್ಥಾಪನೆ",
            community: "ಸಮುದಾಯ ಅಭಿವೃದ್ಧಿ",
            environment: "ಪರಿಸರ",
          },
          status: {
            ongoing: "ನಡೆಯುತ್ತಿದೆ",
            completed: "ಮುಗಿದಿದೆ",
            upcoming: "ಬರುವದು",
          },
          projects: [
            {
              title: "ಡಿಜಿಟಲ್ ಸಾಕ್ಷರತಾ ಅಭಿಯಾನ",
              description:
                "5000+ ಗ್ರಾಮಸ್ಥರಿಗೆ ಡಿಜಿಟಲ್ ಕೌಶಲ್ಯ ತರಬೇತಿ ನೀಡಲಾಗಿದೆ.",
              image: "/p1.jpg",
              tags: ["ಶಿಕ್ಷಣ", "ತಂತ್ರಜ್ಞಾನ"],
              status: "completed",
              duration: "6 ತಿಂಗಳು",
              budget: "50,000",
              slug: "digital-literacy-drive",
            },
            {
              title: "ಆರೋಗ್ಯ ಶಿಬಿರಗಳು",
              description:
                "100+ ಗ್ರಾಮೀಣ ಆರೋಗ್ಯ ಪರಿಶೀಲನಾ ಶಿಬಿರಗಳನ್ನು ಆಯೋಜಿಸಲಾಗಿದೆ.",
              image: "/p2.jpg",
              tags: ["ಆರೋಗ್ಯ", "ಗ್ರಾಮೀಣ"],
              status: "ongoing",
              duration: "1 ವರ್ಷ",
              budget: "80,000",
              slug: "health-camps",
            },
            {
              title: "ರಸ್ತೆ ಅಭಿವೃದ್ಧಿ",
              description: "50 ಕಿಮೀ ಹೊಸ ಗ್ರಾಮೀಣ ರಸ್ತೆಗಳು ನಿರ್ಮಿಸಲಾಗಿದೆ.",
              image: "/p3.jpg",
              tags: ["ಅವಸ್ಥಾಪನೆ", "ಅಭಿವೃದ್ಧಿ"],
              status: "completed",
              duration: "8 ತಿಂಗಳು",
              budget: "200,000",
              slug: "road-development",
            },
            {
              title: "ಮಹಿಳಾ ಸಬಲೀಕರಣ ಕಾರ್ಯಕ್ರಮ",
              description:
                "2000+ ಮಹಿಳೆಯರಿಗೆ ಕೌಶಲ್ಯ ತರಬೇತಿ ನೀಡುವ ಮೂಲಕ ಸಣ್ಣ ಉದ್ಯಮಗಳನ್ನು ಪ್ರಾರಂಭಿಸಲು ಸಹಾಯ ಮಾಡಲಾಗಿದೆ.",
              image: "/p4.jpg",
              tags: ["ಸಮುದಾಯ", "ಸಬಲೀಕರಣ"],
              status: "ongoing",
              duration: "2 ವರ್ಷ",
              budget: "120,000",
              slug: "women-empowerment-program",
            },
            {
              title: "ಶುದ್ಧ ನೀರು ಉಪಕ್ರಮ",
              description: "25 ಹಳ್ಳಿಗಳಿಗೆ ಶುದ್ಧ ಕುಡಿಯುವ ನೀರು ಒದಗಿಸಲಾಗಿದೆ.",
              image: "/p5.jpg",
              tags: ["ಆರೋಗ್ಯ", "ನೈರ್ಮಲ್ಯ"],
              status: "completed",
              duration: "1 ವರ್ಷ",
              budget: "90,000",
              slug: "clean-water-initiative",
            },
            {
              title: "ಶುದ್ಧ ನೀರು ಉಪಕ್ರಮ",
              description: "25 ಹಳ್ಳಿಗಳಿಗೆ ಶುದ್ಧ ಕುಡಿಯುವ ನೀರು ಒದಗಿಸಲಾಗಿದೆ.",
              image: "/p6.jpg",
              tags: ["ಆರೋಗ್ಯ", "ನೈರ್ಮಲ್ಯ"],
              status: "completed",
              duration: "1 ವರ್ಷ",
              budget: "90,000",
              slug: "clean-water-initiative",
            },
          ],
          stats: [
            { value: "500+", label: "ಪೂರ್ಣಗೊಂಡ ಯೋಜನೆಗಳು" },
            { value: "1M+", label: "ಲಾಭ ಪಡೆದ ಜನರು" },
            { value: "5M", label: "ಒಟ್ಟು ಸಂಗ್ರಹಿಸಲಾದ ನಿಧಿ" },
          ],
        },
        footer: {
          copyright: "© 2024 ರಾಜೇಶ್ ಕುಮಾರ್. ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",
          privacy: "ಗೋಪ್ಯತಾ ನೀತಿ",
          terms: "ಸೇವಾ ನಿಯಮಗಳು",
        },
        newsPage: {
          title: "ಇತ್ತೀಚಿನ ಸುದ್ದಿ",
          subtitle: "ನಮ್ಮ ಇತ್ತೀಚಿನ ಘೋಷಣೆಗಳು ಮತ್ತು ಕಥೆಗಳೊಂದಿಗೆ ನವೀಕರಿಸಿ.",
          readMore: "ಮತ್ತಷ್ಟು ಓದಿ",
          articles: [
            {
              title: "ಸಮುದಾಯ ಅಭಿವೃದ್ಧಿ ಯೋಜನೆ ಪ್ರಾರಂಭವಾಯಿತು",
              description:
                "ಸ್ಥಳೀಯ ಮೂಲಸೌಕರ್ಯವನ್ನು ಸುಧಾರಿಸಲು ನಾವು ಹೊಸ ಉಪಕ್ರಮವನ್ನು ಪ್ರಾರಂಭಿಸಿದ್ದೇವೆ.",
              date: "ಜುಲೈ 20, 2024",
              image: "/images/news/community-development.jpg",
              slug: "community-development-project-launched",
            },
            {
              title: "ಆರೋಗ್ಯ ಶಿಬಿರ ಯಶಸ್ಸು",
              description:
                "ನಮ್ಮ ಇತ್ತೀಚಿನ ಆರೋಗ್ಯ ಶಿಬಿರದಿಂದ 500 ಕ್ಕೂ ಹೆಚ್ಚು ಜನರು ಲಾಭ ಪಡೆದಿದ್ದಾರೆ.",
              date: "ಜುಲೈ 18, 2024",
              image: "/images/news/healthcare-camp.jpg",
              slug: "healthcare-camp-success",
            },
          ],
        },
        aboutPage: {
          title: "ಡಾ. ರಾಮೇಶ್ ಎನ್.ಆರ್",
          content: {
            section1:
              "ಡಾ. ರಾಮೇಶ್ ಎನ್.ಆರ್. ಅವರು ಸಾಮಾಜಿಕ ಸೇವೆ ಮತ್ತು ಉತ್ತಮ ಆಡಳಿತದಲ್ಲಿ ಅತ್ಯುತ್ತಮ ಕೊಡುಗೆ ನೀಡಿದ ಸಮರ್ಪಿತ ನಾಯಕರು. ಅವರು ಶ್ರೇಷ್ಟ ಶಿಕ್ಷಣ ಮತ್ತು ರಾಜಕೀಯ ಅನುಭವದಿಂದ ಸಮಾಜದಲ್ಲಿ ಮಹತ್ತರ ಪರಿವರ್ತನೆ ತಂದಿದ್ದಾರೆ.",
            section2:
              "ಅವರು ಪ್ರತಿಷ್ಠಿತ 'ಕರ್ನಾಟಕ ಚೇತನ' ಪ್ರಶಸ್ತಿ ಪಡೆದ ಅತ್ಯಂತ ಕಿರಿಯ ಸದಸ್ಯರಾಗಿದ್ದು, 'ಭಾರತ ಜ್ಯೋತಿ' ರಾಷ್ಟ್ರೀಯ ಪ್ರಶಸ್ತಿಯ ವಿಜೇತರೂ ಆಗಿದ್ದಾರೆ. ಅಲ್ಲದೇ, 'ಸಾಮಾಜಿಕ ಸೇವೆಯ ಬಹುಮುಖತೆಯ ಕುರಿತು' ಅಮೆರಿಕದ ಫ್ಲೋರಿಡಾ ವಿಶ್ವವಿದ್ಯಾಲಯದಿಂದ ಪಿಎಚ್.ಡಿ. ಪಡೆದಿದ್ದಾರೆ.",
            section3:
              "ಪಿಎಸ್ಎಸ್ ಕಾಲೇಜಿನ ವಿದ್ಯಾರ್ಥಿ ಒಕ್ಕೂಟದ ಅಧ್ಯಕ್ಷರಾಗಿ ರಾಜಕೀಯ ಜೀವನ ಪ್ರಾರಂಭಿಸಿದ ಅವರು, ನಂತರ ಕರ್ನಾಟಕ ರಾಜ್ಯ ಬಿಜೆಪಿ ಯುವ ಮೋರ್ಚಾದ ಉಪಾಧ್ಯಕ್ಷ ಮತ್ತು ಬೆಂಗಳೂರು ನಗರ ಬಿಜೆಪಿ ಘಟಕದ ಕಾರ್ಯದರ್ಶಿಯಾಗಿ ಸೇವೆ ಸಲ್ಲಿಸಿದರು. 2010ರಲ್ಲಿ ಯಡಿಯೂರು ವಾರ್ಡ್ 167 ಕೌನ್ಸಿಲರ್ ಆಗಿ ಆಯ್ಕೆಯಾಗಿದ್ದು, 2014-2015ರಲ್ಲಿ ಬಿಬಿಎಂಪಿಯ ಆಡಳಿತ ಪಕ್ಷದ ನಾಯಕರಾಗಿದ್ದರು.",
            section4:
              "ಸಿದ್ಧರಾಮಯ್ಯ ನೇತೃತ್ವದ ಕಾಂಗ್ರೆಸ್ (ಐ) ಸರ್ಕಾರದ ಅವಧಿಯಲ್ಲಿ ಭ್ರಷ್ಟಾಚಾರ ಬಹಿರಂಗಪಡಿಸಿ, 13 ಸಚಿವರು ಮತ್ತು 21 ಶಾಸಕರ ವಿರುದ್ಧ ಎಫ್‌ಐಆರ್ ದಾಖಲಿಸಲು ಕಾರಣರಾದರು. 8,600 ಕೋಟಿ ರೂ. ಮೌಲ್ಯದ ಸರಕಾರಿ ಆಸ್ತಿಗಳನ್ನು ವಾಪಸ್ ಪಡೆಯಲು ಕಾರಣವಾದರು.",
            section5:
              "ನ್ಯಾಯಕ್ಕಾಗಿ ಹೋರಾಟದಲ್ಲಿ 28 ಕಾನೂನು ಪ್ರಕರಣಗಳಲ್ಲಿ ಜಯಗಳಿಸಿದ್ದು, 70+ ಪ್ರಕರಣಗಳನ್ನು ತನಿಖಾ ಸಂಸ್ಥೆಗಳಲ್ಲಿ ದಾಖಲಿಸಿದ್ದಾರೆ. 59 ಸಾರ್ವಜನಿಕ ಹಿತಾಸಕ್ತಿ ಅರ್ಜಿಗಳನ್ನು ಕರ್ನಾಟಕ ಹೈಕೋರ್ಟ್‌ಗೆ ಸಲ್ಲಿಸಿದ್ದಾರೆ. ಬೆಂಗಳೂರು ನಗರದಲ್ಲಿ ಹುಕ್ಕಾ ಕೇಂದ್ರಗಳನ್ನು ನಿಷೇಧಿಸುವಲ್ಲಿ ಪ್ರಮುಖ ಪಾತ್ರವಹಿಸಿ, ಏಷ್ಯಾದಲ್ಲಿ ಈ ನಿರ್ಬಂಧವನ್ನು ಜಾರಿಗೆ ತರಿಸಿದ ಮೊದಲ ನಗರವಾಗಿ ಮಾಡಿದ ಸಾಧನೆ ಮಾಡಿದರು.",
            section6:
              "ಪ್ರಸ್ತುತ, ಅವರು ಬೆಂಗಳೂರು ದಕ್ಷಿಣ ಜಿಲ್ಲೆ ಬಿಜೆಪಿ ಘಟಕದ ಅಧ್ಯಕ್ಷರಾಗಿದ್ದು, ಹಾಪ್‌ಕಾಮ್ಸ್, ಪಿಎಲ್‌ಡಿ ಬ್ಯಾಂಕ್, ಗ್ರಾಮ ಪಂಚಾಯತ್, ನಗರಸಭೆ ಮತ್ತು ವಿಧಾನ ಪರಿಷತ್ ಚುನಾವಣೆಯಲ್ಲಿ ಪಕ್ಷವನ್ನು ಗೆಲುವಿನತ್ತ ಕೊಂಡೊಯ್ಯಲು ಪ್ರಮುಖ ಪಾತ್ರವಹಿಸಿದ್ದಾರೆ.",
            missionTitle: "ಅವರ ಧ್ಯೇಯ",
            missionText:
              "ಸಾಮಾಜಿಕ ನ್ಯಾಯವನ್ನು ಸ್ಥಾಪಿಸುವುದು, ಉತ್ತಮ ಆಡಳಿತ ಒದಗಿಸುವುದು ಮತ್ತು ಸಮುದಾಯಗಳನ್ನು ಸಬಲಗೊಳಿಸುವುದು.",
            stats: [
              { value: "ರಾಜಕೀಯ ನಾಯಕ", label: "ವಿಭಾಗ" },
              { value: "15+", label: "ರಾಜಕೀಯ ಸೇವೆ ವರ್ಷಗಳು" },
              { value: "70+", label: "ದಾಖಲಿಸಿದ ಕಾನೂನು ಪ್ರಕರಣಗಳು" },
              { value: "₹8,600+ ಕೋಟಿ", label: "ಪ್ರತ್ಯರ್ಪಿತ ಸರಕಾರಿ ಆಸ್ತಿಗಳು" },
              { value: "1ನೇ", label: "ಏಷ್ಯಾದಲ್ಲಿ ಹುಕ್ಕಾ ಕೇಂದ್ರ ನಿಷೇಧಿಸಿದ ನಗರ" },
              { value: "ಬೆಂಗಳೂರು, ಕರ್ನಾಟಕ, ಭಾರತ", label: "ಸೇವಾ ಪ್ರದೇಶ" },
              { value: "099458 01999", label: "ಮೊಬೈಲ್" },
              { value: "rameshnr.info@gmail.com", label: "ಇಮೇಲ್" },
              { value: "http://www.rameshnr.in/", label: "ವೆಬ್‌ಸೈಟ್" },
              { value: "RameshNR_BJP", label: "X (ಟ್ವಿಟರ್)" },
              { value: "rameshnrofficial", label: "ಇನ್‌ಸ್ಟಾಗ್ರಾಮ್" },
              { value: "rameshnr9", label: "ಯೂಟ್ಯೂಬ್" },
            ],
          },
        },

        contact: {
          title: "ಸಂಪರ್ಕಿಸಿ",
          name: "ಪೂರ್ಣ ಹೆಸರು",
          email: "ಇಮೇಲ್ ವಿಳಾಸ",
          message: "ಸಂದೇಶ",
          namePlaceholder: "ನಿಮ್ಮ ಹೆಸರನ್ನು ನಮೂದಿಸಿ",
          emailPlaceholder: "ನಿಮ್ಮ ಇಮೇಲ್ ನಮೂದಿಸಿ",
          messagePlaceholder: "ನಿಮ್ಮ ಸಂದೇಶವನ್ನು ಇಲ್ಲಿ ನಮೂದಿಸಿ...",
          button: "ಸಂದೇಶ ಕಳುಹಿಸಿ",
          success: "ಸಂದೇಶವನ್ನು ವಿಜಯವಾಗಿ ಕಳುಹಿಸಲಾಗಿದೆ!",
          error: "ಸಂದೇಶ ಕಳುಹಿಸುವಲ್ಲಿ ದೋಷ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
        },
        blogs: {
          title: "ಇತ್ತೀಚಿನ ಬ್ಲಾಗ್ಗಳು",
          items: [
            {
              title: "ಗ್ರಾಮೀಣ ಸಮುದಾಯಗಳ ಸಬಲೀಕರಣ",
              excerpt:
                "ಸಮುದಾಯ ಭಾಗವಹಿಸುವಿಕೆಯ ಮೂಲಕ ಸುಸ್ಥಿರ ಗ್ರಾಮೀಣ ಅಭಿವೃದ್ಧಿಗೆ ತಂತ್ರಗಳು...",
              date: "ಮಾರ್ಚ್ 15, 2024",
              category: "ಅಭಿವೃದ್ಧಿ",
            },
            {
              title: "ಶಿಕ್ಷಣ ಸುಧಾರಣೆಗಳು",
              excerpt:
                "ಪ್ರಾಥಮಿಕ ಶಿಕ್ಷಣದ ಗುಣಮಟ್ಟವನ್ನು ಸುಧಾರಿಸಲು ಹೊಸ ಉಪಕ್ರಮಗಳು...",
              date: "ಮಾರ್ಚ್ 10, 2024",
              category: "ಶಿಕ್ಷಣ",
            },
          ],
        },
      },
    };
    await createTranslations(newTranslations);
    fetchTranslations(); // Refresh the data
  };

  const handleUpdate = async () => {
    const updates = {
      "en.common.name": "Dr. Updated Name",
      "kn.common.home": "ನವೀಕರಿತ ಮುಖಪುಟ",
    };
    await updateTranslations(updates);
    fetchTranslations(); // Refresh the data
  };

  const handleDelete = async () => {
    await deleteTranslations();
    setTranslations(null); // Clear the state
  };

  return (
    <div>
      <h1>Translations Manager</h1>

      <button onClick={handleCreate}>Create/Replace Translations</button>
      <button onClick={fetchTranslations}>Fetch Translations</button>
      <button onClick={handleDelete}>Delete Translations</button>
      <button onClick={handleUpdate}>Update Translations</button>

      {translations && <pre>{JSON.stringify(translations, null, 2)}</pre>}
    </div>
  );
}
