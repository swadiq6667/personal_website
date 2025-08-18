
const Footer = () => {
  return (
    <footer className="bg-slate-800 border-t border-slate-700 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-300 mb-4 md:mb-0">
            © 2025 Mohammed Swadique. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a 
              href="https://www.linkedin.com/in/mohammed-swadique-9523561aa/" 
              className="text-slate-400 hover:text-blue-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a 
              href="https://www.instagram.com/s.w.a.d.iq/" 
              className="text-slate-400 hover:text-blue-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sxdq6667@gmail.com&su=Hello&body=I%20wanted%20to%20reach%20out%20to%20you."
              className="text-slate-400 hover:text-blue-400 transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
