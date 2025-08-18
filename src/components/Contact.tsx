
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities and collaborating on exciting projects. 
            Let's connect and explore how we can work together!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-8">
              {/* Updated the grid to support four columns on medium-to-large screens */}
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                  <p className="text-slate-300 mb-4">sxdq6667@gmail.com</p>
                  <a href="mailto:sxdq6667@gmail.com">
                    <Button 
                      variant="outline" 
                      className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                    >
                      Send Email
                    </Button>
                  </a>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Linkedin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">LinkedIn</h3>
                  <p className="text-slate-300 mb-4">Connect professionally</p>
                  <Button 
                    variant="outline" 
                    className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                    onClick={() => window.open('https://www.linkedin.com/in/mohammed-swadique-9523561aa/', '_blank')}
                  >
                    Connect
                  </Button>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Github className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">GitHub</h3>
                  <p className="text-slate-300 mb-4">View my repositories</p>
                  <Button 
                    variant="outline" 
                    className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                    onClick={() => window.open('https://github.com/swadiq6667', '_blank')}
                  >
                    Visit Profile
                  </Button>
                </div>

                {/* New section for Instagram */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Instagram className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Instagram</h3>
                  <p className="text-slate-300 mb-4">Follow me</p>
                  <Button 
                    variant="outline" 
                    className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                    onClick={() => window.open('https://www.instagram.com/s.w.a.d.iq/', '_blank')}
                  >
                    Follow
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;