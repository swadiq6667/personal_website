import React from 'react';
import { Calendar, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CricketPage() {
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
          My Cricket Journey
        </h1>
        
        <div className="flex items-center gap-4 text-slate-400 text-sm mb-6">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {new Date("2025-08-16").toLocaleDateString()}
          </div>
          <span>8 min read</span>
        </div>

        <img
          src="/squad.jpeg"
          alt="My Cricket Journey"
          className="rounded-lg shadow-lg mb-8 w-full"
        />

        <article className="space-y-6 leading-relaxed text-slate-300">
          <p>
            Cricket has always been a passion for me. I consider myself an all-rounder, usually batting at No. 4 and contributing as a spinner. Over time, I've improved my game and truly enjoy playing with both bat and ball. Playing in an aggressive and confident manner has always been my style, and I look forward to representing my school and, one day, the Thrissur district.
          </p>

          <p>
            One of my most memorable moments was during our school cricket tournament. Our team reached the finals, and I played an important role with the bat. That performance helped us win the School Sub-District Championship, which remains one of the best experiences of my cricketing life.
          </p>

          <p>
            Later, I had the honor of being selected for district-level practice. Although I couldn’t make it into the playing XI and had to remain the 12th man, the experience itself was priceless. Practicing alongside such talented and skilled cricketers taught me valuable lessons in discipline, teamwork, and sportsmanship.
          </p>

          <p>
            My cricket journey did not stop with school. At the college level, I proudly represented Paramekkavu College for three consecutive years. Playing for my college in tournaments was a whole new experience—tougher, more competitive, and full of responsibility. The hard training sessions, often starting two months before the tournaments, tested our limits, but they also built our character and strengthened our bond as a team. Every match was a chance to prove myself, and every season brought unforgettable memories of pride, effort, and joy.
          </p>
          <p>
            Cricket has given me much more than just matches and memories—it has shaped my character and mindset. It taught me patience while bowling, focus while batting, and resilience when facing challenges. Most importantly, cricket has shown me the power of team spirit. Victories feel sweeter when shared with teammates, and defeats teach us how to bounce back stronger.
          </p>
          <p>
            These experiences taught me teamwork, consistency, and the importance of balancing sports with academics, shaping me into a disciplined and focused individual.
          </p>
        </article>
      </div>
    </section>
  );
}

