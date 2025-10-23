import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, cyan 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 inline-block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-xl opacity-50"></div>
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1645839078449-124db8a049fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjExNzcwODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Neural Network Visualization"
                className="relative w-32 h-32 rounded-full object-cover border-4 border-cyan-500/50"
              />
            </div>
          </div>

          <h1 className="mb-4 text-white">
            <span className="block mb-2 text-cyan-400">Aditya Khandelwal</span>
            <span className="block">Neuromorphic Computing Researcher</span>
          </h1>

          <p className="mb-8 text-slate-300 max-w-2xl mx-auto">
            Exploring the intersection of neuroscience and computing to build brain-inspired 
            systems that push the boundaries of artificial intelligence and energy-efficient computation.
          </p>

          <div className="flex items-center justify-center gap-4 mb-12">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg transition-colors border border-cyan-500/20 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-400"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg transition-colors border border-cyan-500/20 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-400"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:aditya@example.com"
              className="p-3 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg transition-colors border border-cyan-500/20 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-400"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <button
            onClick={scrollToAbout}
            className="animate-bounce inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-lg transition-all shadow-lg shadow-cyan-500/50"
          >
            Explore My Work
            <ArrowDown className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500">
        <div className="animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
