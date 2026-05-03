import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToBlog = () => {
    const element = document.getElementById("blog");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side text */}
          <div className="animate-fade-in text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Mohammed Swadique
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-400 mb-6">
            Associate Product Manager | Python Enthusiast | Buissness Development Manager | Quality Assurance tester
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl">
              Building quality,Breaking code — developing, designing, and
              testing to perfection
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={scrollToProjects}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
              >
                View Projects
              </Button>

              <Button
                onClick={scrollToBlog}
                size="lg"
                variant="outline"
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 text-lg"
              >
                Read My Blog
              </Button>

              {/* Fixed Download CV */}
              <a href="/Swadiqcv.pdf.pdf" download>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 text-lg"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </Button>
              </a>
            </div>
          </div>

          {/* Right side image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-blue-400/30 shadow-2xl">
                <img
                  src="/myphoto.jpeg" // ✅ Fixed path
                  alt="Mohammed Swadique - Professional Headshot"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl">👨‍💻</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

