import { Brain, Github, Linkedin, Mail, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950/50 border-t border-cyan-500/20 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Brain className="w-6 h-6 text-cyan-400" />
                <span className="text-white">Aditya Khandelwal</span>
              </div>
              <p className="text-slate-400">
                Neuromorphic Computing Researcher exploring brain-inspired AI and 
                energy-efficient computational systems.
              </p>
            </div>

            <div>
              <h3 className="text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-slate-400 hover:text-cyan-400 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#research" className="text-slate-400 hover:text-cyan-400 transition-colors">
                    Research
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-slate-400 hover:text-cyan-400 transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#publications" className="text-slate-400 hover:text-cyan-400 transition-colors">
                    Publications
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white mb-4">Connect</h3>
              <div className="flex gap-3">
                <a 
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg transition-colors text-slate-300 hover:text-cyan-400"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg transition-colors text-slate-300 hover:text-cyan-400"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg transition-colors text-slate-300 hover:text-cyan-400"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:aditya.khandelwal@university.edu"
                  className="p-2 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg transition-colors text-slate-300 hover:text-cyan-400"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-cyan-500/20 text-center text-slate-400">
            <p>© {currentYear} Aditya Khandelwal. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
