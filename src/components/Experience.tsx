import { Card, CardContent } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Test Engineer",
      company: "Agua India",
      period: "June 2023 - Present",
      achievements: [
        "Performed manual and automation testing on multiple projects, including web applications, websites, and software systems such as Agua Spark, CASBIRO School Management, LedgerGate, Sahakari, and Bookify.",
        "Designed and executed test cases, developed test plans, and managed defect tracking using tools like JIRA, Trello, and Bugzilla.",
        "Conducted API testing using Postman and automated regression suites using Selenium, ensuring high product quality.",
        "Collaborated closely with developers to debug issues efficiently, leveraging knowledge of Python and Django for code readability and technical discussions.",
        "Communicated directly with clients to gather feedback, suggest improvements, and ensure project requirements were met.",
        "Contributed to enhancing testing processes with a focus on introducing AI-based automation solutions."
      ]
    },
    {
      title: "Python Developer Intern",
      company: "Soften Technologies",
      period: "March 2023 - May 2023",
      achievements: [
        "Completed a foundational internship that marked the beginning of my career in technology, providing exposure to software development and testing concepts.",
        "Developed and maintained web applications using Django and Flask, focusing on building features and enhancing user experience.",
        "Gained valuable experience in debugging, code optimization, and collaborating with development teams.",
        "This internship helped strengthen my technical understanding and motivated my transition into software testing with a deeper appreciation for code quality and functionality."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Experience</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-slate-800 border-slate-700 hover:border-blue-500 transition-colors">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">{exp.title}</h3>
                    <p className="text-blue-400 text-lg">{exp.company}</p>
                  </div>
                  <span className="text-slate-400 bg-slate-700 px-4 py-2 rounded-full mt-2 md:mt-0 w-fit">
                    {exp.period}
                  </span>
                </div>
                
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <span className="text-slate-300 leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
