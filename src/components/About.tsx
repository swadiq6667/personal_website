
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const skills = [
    {category: "Product manager", items: ["Product Roadmapping", "SaaS Product Management", "Cross-Functional Collaboration", "Feature Prioritization"] },
    { category: "Testing", items: ["Selenium", "Postman API Testing", "Manual Testing", "Test Automation", "JIRA", "SQL"] },
    { category: "Development", items: ["Python", "Django", "HTML/CSS", "JavaScript"] },
    { category: "Design", items: ["Figma", "Canva", "Poster Designing"] },
    { category: "Soft Skills", items: ["Client Communication", "Team Leadership", "Problem Solving"] }
  ];

  const certifications = [
    "Google Digital Garage — Fundamentals of Digital Marketing",
    "BrowserStack-cross browser+mobile web testing",
    "Python Programming-django",
    "alison-Quality Assurance: Techniques and Methodologies",
  ];

  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
          <p className="text-lg text-slate-300 mb-6 leading-relaxed">
  <strong>
    QA Engineer  with 2+ years of experience in manual testing, automation testing (Selenium), API testing (Postman), and end-to-end software quality assurance. Recently promoted in the UAE to a Product Manager / SaaS Implementation role, where I manage product workflows, collaborate with clients, gather requirements, and ensure smooth onboarding and product adoption.

I have hands-on experience developing Python/Django applications, analyzing code, implementing features, and solving technical challenges. I work closely with cross-functional teams—developers, designers, and clients—to translate requirements into functional, high-quality software solutions.

My strengths include technical communication, leadership, user training, product demos, bug analysis, and improving customer experience. I also enjoy creative work such as poster design and visual branding.

Eager to grow further in Product Management, AI automation, SaaS systems, and technical leadership, contributing to impactful digital solutions.
  </strong>
</p>
            {/* <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              My background includes leadership roles (College Union Chairman) where I led 7+ student initiatives, 
              developing strong problem-solving and team management skills. I thrive in collaborative environments 
              where quality assurance meets innovative design thinking.
            </p> */}
            
            <div className="mb-8">
  <h3 className="text-xl font-semibold text-white mb-4">Education</h3>
  <div className="space-y-3">
    <div className="p-4 bg-slate-700 rounded-lg">
      <h4 className="text-blue-400 font-semibold">Master of Computer Applications (MCA)</h4>
      <p className="text-slate-300">SRM University • 2024 - Ongoing</p>
    </div>
    <div className="p-4 bg-slate-700 rounded-lg">
      <h4 className="text-blue-400 font-semibold">Bachelor of Computer Applications (BCA)</h4>
      <p className="text-slate-300">Paramekkavu College of Arts and Science (Calicut University) • 2020 - 2023</p>
    </div>
    <div className="p-4 bg-slate-700 rounded-lg">
      <h4 className="text-blue-400 font-semibold">Higher Secondary, Computer Science</h4>
      <p className="text-slate-300">SKHSS, Guruvayoor • 2018 - 2020</p>
    </div>
  </div>
</div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">Certifications</h3>
              <div className="flex flex-wrap gap-3">
                {certifications.map((cert, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm border border-blue-600/30"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <Card className="bg-slate-700 border-slate-600">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Skills & Technologies</h3>
              <div className="space-y-6">
                {skills.map((skillGroup, index) => (
                  <div key={index}>
                    <h4 className="text-lg font-semibold text-blue-400 mb-3">{skillGroup.category}</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <div 
                          key={skillIndex}
                          className="flex items-center p-2 bg-slate-600 rounded-lg hover:bg-slate-500 transition-colors"
                        >
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                          <span className="text-slate-200 text-sm">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
