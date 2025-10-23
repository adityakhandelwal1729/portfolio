import { GraduationCap, Briefcase, Award } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-12 text-center text-white">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="mb-2 text-white">Education</h3>
                  <p className="text-slate-300 mb-1">Ph.D. in Computer Science</p>
                  <p className="text-slate-400">Neuromorphic Computing & AI</p>
                  <p className="text-slate-500">2020 - Present</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg">
                  <Briefcase className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="mb-2 text-white">Current Position</h3>
                  <p className="text-slate-300 mb-1">Research Scientist</p>
                  <p className="text-slate-400">Neuromorphic Systems Lab</p>
                  <p className="text-slate-500">2022 - Present</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20">
            <p className="text-slate-300 mb-6">
              I am a computer scientist specializing in neuromorphic computing and brain-inspired 
              artificial intelligence. My research focuses on developing novel computational paradigms 
              that mimic the efficiency and adaptability of biological neural systems.
            </p>
            <p className="text-slate-300 mb-6">
              With expertise spanning spiking neural networks, event-driven processing, and 
              energy-efficient hardware architectures, I work at the cutting edge of computational 
              neuroscience and machine learning.
            </p>
            <div className="flex items-start gap-4 p-4 bg-cyan-500/5 rounded-lg border border-cyan-500/20">
              <Award className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-white mb-2">Key Achievements</h4>
                <ul className="text-slate-300 space-y-1 list-disc list-inside">
                  <li>Published 15+ papers in top-tier conferences and journals</li>
                  <li>Developed energy-efficient spiking neural network architectures</li>
                  <li>Contributed to open-source neuromorphic computing frameworks</li>
                  <li>Recipient of Best Paper Award at NeurIPS 2024</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
