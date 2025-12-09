import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      name: "Leave Management (personal project)",
      role: "Python Developer",
      description:
        "I developed a Leave Management System as a personal project to streamline employee leave tracking and approval processes. The system is built using Django (backend) and React (frontend), with role-based access control for Admin, HR, and Employees.",
      image: "/Gemini_Generated_Image_muth8kmuth8kmuth.png",
      tools: ["Python", "Django", "HTML", "CSS", "JavaScript", "PostgreSQL"],
      results:
        "This project enhanced my skills in Django, React, REST APIs, and database design. It gave me practical experience in building a real-world HR tool with proper workflows, reports, and user roles.",
      highlights: [
        "Leave Requests – Employees can submit leave applications (full-day/half-day), specify reasons, and track approval status in real time.",
        "Approval Workflow – HR/Admin can approve, reject, or cancel leave requests with instant notifications.",
        "Task Board – Organizes employee tasks and progress, integrated with attendance.",
        "Clock-In / Clock-Out – Time tracking system with support for break management (tea, lunch, and others).",
        "Attendance Tracking – Records working days, present/absent days, and approved leave days automatically.",
      ],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      name: "CASBIRO - School Management",
      role: "Lead QA Engineer",
      description:
        "CASBIRO School Management is a software solution designed to handle key academic operations such as student results, attendance, classes, fees, and overall school administration. The system provides two dedicated applications: one for parents to track student progress and another for teachers to manage academic records.",
      image: "/Gemini_Generated_Image_mxt306mxt306mxt3.png",
      tools: ["Selenium", "Python", "Django", "Postman"],
      results: "Reduced testing cycle time by 70% and identified 50+ critical bugs pre-launch",
      highlights: [
        "Wrote and executed testcases for coremodules like attendance and Fee management.",
        "ConductedAPItesting(Postman), databasevalidation (SQL), and regression testing after updates.",
        "Collaborated with developers to resolve critical issues early in the SDLC and improve overall product stability.",
        "Validated role-based access control for Teachers,Parents,Administrators,Accounts manager,Mentor,Principal",
        "Conducted load and performance testing",
      ],
      liveUrl: "https://play.google.com/store/apps/details?id=com.mysar.teacher&hl=en",
      githubUrl: "#",
    },
    {
      name: "LedgerGate CMA Academy (Web Application, Mobile App, Dashboard)",
      role: "Lead QA Engineer ",
      description:
        "Ledger Gate is academic software designed for CMA (Cost and Management Accounting) students. It provides a complete learning platform where students can log in securely, access and study course chapters, watch educational videos, attend online exams, and check their marks and results—all in one place",
      image: "/Gemini_Generated_Image_wzjfw0wzjfw0wzjf.png",
      tools: ["Selenium", "Figma", "Postman", "Python"],
      results:
        "students can learn smoothly, attempt exams fairly, and get accurate results, while the system stays secure, fast, and error-free.",
      highlights: [
        "Conducted usability testing and UI/UX improvements",
        "Performed manual testing with focus on UI/UX consistency across devices (mobile, tablet, laptop).",
        "Designed responsive test cases for mobile and desktop",
        "Online Exam Functionality-Questions display correctly (MCQs, theory, numerical),Timer works as expected and auto-submits after timeout.",
        "Content aligns with CMA curriculum (Cost Accounting, Taxation, Financial Management, etc.).",
        "Students can track progress by topic (e.g., Cost Sheet, Budgeting, Variance Analysis).",
      ],
      liveUrl: "https://play.google.com/store/apps/details?id=com.ledgergate.app&hl=en",
      githubUrl: "#",
    },
    {
      name: "Mobile Banking App QA & Design(personal project)",
      role: "QA Engineer & UX Designer",
      description:
        "I developed and tested a Mobile Banking Application that enables users to securely manage their finances through their smartphones. The application was designed with a strong focus on UI/UX simplicity, security, and seamless API integration to provide a smooth and reliable banking experience.",
      image: "/Gemini_Generated_Image_qwy910qwy910qwy9.png",
      tools: ["Python", "Figma", "Postman", "django", "react"],
      results:
        "The Mobile Banking App was successfully developed and tested with Razorpay payment gateway integration, enabling secure transactions such as fund transfers, bill payments, and merchant payments with real-time confirmation.",
      highlights: [
        "Seamless Integration – Ensured smooth communication between frontend and backend services",
        "End-to-End Testing Coverage – Designed and executed test cases for core features like login, balance check, fund transfer, and transaction history.",
        "Built and tested RESTful APIs with authentication and encryption for secure financial transactions.",
        "users can seamlessly log in, view balances, transfer funds, and manage transactions with high performance and minimal errors.",
      ],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      name: "(Bookifye App – Booking Services)",
      role: "QA Engineer",
      description:
        "Bookifye – Multi-Service Appointment Booking System. Bookify is a unified platform for discovering service providers and booking appointments across multiple categories—car wash, haircut/salon, and gym/fitness. It supports Customer, Provider, and Admin roles with real-time slot management, secure payments, and automated reminders to reduce no-shows.",
      image: "/BOOKIFY.png",
      tools: ["Python", "Postman", "django", "react"],
      results:
        "Stable, friction-free booking across categories with accurate slot and capacity handling,Reliable payments with correct handling of success/failure/pending and refund workflows,Lower no-shows via reminder cadence; clean reporting for providers and admins.",
      highlights: [
        "Performed API testing (Postman): availability, pricing, booking, refunds, notifications; verified status codes, payloads, and idempotency.",
        "Designed end-to-end test scenarios for search → slot selection → payment → confirmation → reschedule/cancel.",
        "Verified role-based access control for Customer, Provider, and Admin roles.",
        "Verified payment gateway integration (Razorpay): secure transactions, real-time confirmation, and proper error handling.",
      ],
      liveUrl: "https://play.google.com/store/apps/details?id=com.bookifye.app&hl=en",
      githubUrl: "#",
    },
    {
      name: "Sahakari – Race Plus",
      role: "QA Engineer & UX Designer",
      description:
        "Sahakari Race Plus is an educational technology platform and coaching institute founded in 2021. It provides comprehensive coaching for Kerala PSC examinations including CSEB, Kerala Bank, STO, Civil Police Officer, Women CPO, LD Typist, Dairy Farm Instructor, Livestock Inspector, and more. I was responsible for ensuring the platform’s quality, usability, and seamless student experience across web and mobile applications.",
      image: "/sahakari_race_plus.png",
      tools: ["Selenium", "Postman", "Python", "Figma", "MySQL"],
      results:
        "Improved app stability and reduced major defects by 65% before release. Enhanced user experience with smoother navigation and reduced load time for student modules.",
      highlights: [
        "Designed and executed test cases for core modules: user login, course access, payments, attendance, exams, and results.",
        "Performed API testing for student exam registration, results fetching, and fee transactions.",
        "Validated exam workflows including practice tests, mock exams, and result generation.",
        "Collaborated with developers and designers to improve UI/UX consistency for students and teachers.",
        "Conducted database validation (MySQL) to ensure accuracy of exam scores, course enrollments, and payments.",
        "Created user flow mockups in Figma to simplify onboarding and course selection for students.",
      ],
      liveUrl: "https://play.google.com/store/apps/details?id=com.dockode.sahakariraceplus&hl=en",
      githubUrl: "#",
    },
  ];

  // helper to open link in new tab only when a valid link is provided
  const openLink = (url?: string | null) => {
    if (!url || url === "#" || url.trim() === "") return;
    // ensure url has protocol
    const finalUrl = url.startsWith("http") ? url : `https://${url}`;
    window.open(finalUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              role="button"
              tabIndex={0}
              onClick={() => openLink(project.liveUrl)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") openLink(project.liveUrl);
              }}
              className="block cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
            >
              <Card className="bg-slate-700 border-slate-600 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl text-white mb-2">{project.name}</CardTitle>
                  <p className="text-blue-400 font-medium">{project.role}</p>
                </CardHeader>

                <CardContent>
                  <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Tools & Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, toolIndex) => (
                        <Badge key={toolIndex} variant="secondary" className="bg-blue-600/20 text-blue-400 border-blue-600/30">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Key Results:</h4>
                    <p className="text-green-400 font-medium">{project.results}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2">Highlights:</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-slate-300 text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
