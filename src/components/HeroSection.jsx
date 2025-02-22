import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-[#FF8C00] to-[#CC7700] text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Serving the People of Karnataka
        </h1>
        <p className="text-xl mb-8">
          Dedicated Public Servant | Development Advocate | Community Leader
        </p>
        <div className="flex gap-4 justify-center">
          {/* Primary Button */}
          <Button className="bg-[#A65D00] text-white hover:bg-[#8B4A00] transition shadow-md">
            View Achievements
          </Button>

          {/* Outline Button */}
          <Button
            variant="outline"
            className="text-white border-[#FFD700] hover:bg-[#B36200] transition"
          >
            Upcoming Events
          </Button>
        </div>
      </div>
    </section>
  );
}
