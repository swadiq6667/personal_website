import React from 'react';
import { Calendar, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ChairmanExperience() {
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
          My Journey as Chairman – Parmekavu College Union (Euonia 2023)
        </h1>
        
        <div className="flex items-center gap-4 text-slate-400 text-sm mb-6">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {new Date("2025-08-15").toLocaleDateString()}
          </div>
          <span>8 min read</span>
        </div>

        <img
          src="/Chairman.jpeg"
          alt="College Chairman Euonia"
          className="rounded-lg shadow-lg mb-8 w-full"
        />

        <article className="space-y-6 leading-relaxed text-slate-300">
          <p>
            In 2023, I had the honor of being elected as Chairman of the Parmekavu College Union – Euonia.
            The journey began with a competitive three-way election, where I campaigned on a vision of
            unity, innovation, and active student engagement.
          </p>

          <p>
            Leading a dedicated team, we successfully organized 9 major programs during my tenure.
            These events ranged from academic workshops and cultural festivals to sports meets and
            social awareness campaigns—each crafted to foster community spirit and enhance campus life.
          </p>

          <p>
            The role wasn’t just about organizing events—it was about leadership, decision-making,
            and representing the voices of my peers. From late-night planning sessions to high-pressure
            event days, every challenge became an opportunity to grow.
          </p>

          <p>
            Serving as Chairman taught me the importance of teamwork, diplomacy, and the ability to
            balance diverse opinions while driving a common vision. This experience continues to influence
            my leadership style in both professional and personal projects.
          </p>
        </article>
      </div>
    </section>
  );
}