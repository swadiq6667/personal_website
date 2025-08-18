import React from "react";
import { Calendar, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NCCPage() {
  const goBack = () => {
    window.history.back();
  };

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Button 
          variant="ghost" 
          onClick={goBack} 
          className="text-slate-400 hover:text-white mb-6 p-0"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          Back
        </Button>
        
        <h1 className="text-4xl font-bold mb-4">
          My NCC Journey
        </h1>
        
        <div className="flex items-center gap-4 text-slate-400 text-sm mb-6">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {new Date("2025-08-16").toLocaleDateString()}
          </div>
          <span>8 min read</span>
        </div>

        <img
          src="/ncc main.png"
          alt="My NCC Journey"
          className="rounded-lg shadow-lg mb-8 w-full"
        />

        <article className="space-y-6 leading-relaxed text-slate-300">
          <p>
            I served in the National Cadet Corps (NCC) while studying in 10th class and had the honor of actively participating in the Republic Day program at Thrissur Maidan. This experience instilled in me values of discipline, patience, and commitment. It also encouraged me to follow healthy habits such as early rising, hard training, and mindful eating.
          </p>
          <p>
            Apart from this, I had the opportunity to attend multiple NCC camps, which were both challenging and memorable. During these camps, cadets were expected to live with strict discipline, often without phones or distractions, and focus completely on training and teamwork. These experiences taught me how to work under pressure, respect rules, and understand the importance of unity and responsibility.
          </p>
          <p>
            Through NCC, I also developed a deeper respect for our armed forces, who dedicate their lives to defending our nation. Seeing their training methods and listening to their stories made me realize the sacrifices behind our freedom. I truly salute our military and carry forward the lessons I learned from NCC in my daily life.
          </p>
          <p>
            The training also helped me grow leadership qualities, team spirit, and the courage to face challenges in life with confidence.
          </p>
        </article>
      </div>
    </section>
  );
}