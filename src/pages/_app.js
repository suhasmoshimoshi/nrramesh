import { useEffect, useState } from "react";
import { LanguageProvider } from "../context/LanguageContext";
import "../styles/globals.css";
import { readTranslations } from "../../services/translationsService";
import { ClipLoader } from "react-spinners"; // Import spinner

function MyApp({ Component, pageProps }) {
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Remove existing data before updating
        localStorage.removeItem("apiResponse");

        // Fetch new data
        const response = await readTranslations();
        if (response) {
          localStorage.setItem("apiResponse", JSON.stringify(response));
          setIsDataLoaded(true); // Allow rendering after saving new data
        }
      } catch (error) {
        console.error("Failed to fetch API response:", error);
      }
    };

    fetchData();
  }, []);

  // Show a spinner until data is set
  if (!isDataLoaded) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#FFF3E0]">
        <ClipLoader color="#FF9933" size={50} />
      </div>
    );
  }

  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}

export default MyApp;
