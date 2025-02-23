import React from 'react'
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";
import { Button } from '../ui/button';


function Footer() {
      const { language } = useLanguage();
    const t = translations[language].footer;
    const c = translations[language].common;

  return (
    <footer className="bg-[#A65D00] text-white py-8">
           <div className="container mx-auto px-4 text-center">
             <p className="text-lg">{c.name}</p>
             <div className="mt-4 flex justify-center gap-6">
               <Button variant="link" className="text-white hover:text-[#FFD700]">
                 {t.privacy}
               </Button>
               <Button variant="link" className="text-white hover:text-[#FFD700]">
                 {t.terms}
               </Button>
             </div>
           </div>
         </footer>
  )
}

export default Footer