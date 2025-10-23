import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      title: 'NeuroSim: Neuromorphic Simulator',
      description: 'An open-source Python framework for simulating large-scale spiking neural networks with hardware-in-the-loop capabilities.',
      image: 'https://images.unsplash.com/photo-1602493054376-d9dc3dfcbc7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMGNoaXAlMjBjaXJjdWl0fGVufDF8fHx8MTc2MTI0MDIxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Python', 'CUDA', 'Neural Networks'],
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'SpikeFlow: Event-Driven Vision',
      description: 'Real-time object detection using event cameras and spiking neural networks, achieving 100x energy efficiency over traditional CNNs.',
      image: 'https://images.unsplash.com/photo-1688413709025-5f085266935a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBwYXR0ZXJufGVufDF8fHx8MTc2MTEyOTYwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Computer Vision', 'SNNs', 'Edge AI'],
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'BrainChip: Neuromorphic ASIC',
      description: 'Custom neuromorphic processor design featuring 1M spiking neurons and event-driven processing for edge applications.',
      image: 'https://images.unsplash.com/photo-1645839078449-124db8a049fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjExNzcwODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Hardware', 'Verilog', 'ASIC'],
      github: 'https://github.com',
      demo: null
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-4 text-center text-white">
            Featured Projects
          </h2>
          <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
            Cutting-edge research projects pushing the boundaries of neuromorphic computing 
            and brain-inspired AI systems.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-slate-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-cyan-500/20 hover:border-cyan-500/40 transition-all hover:shadow-lg hover:shadow-cyan-500/10 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="mb-2 text-white">{project.title}</h3>
                  <p className="text-slate-300 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 bg-cyan-500/10 text-cyan-400 rounded border border-cyan-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 hover:text-cyan-400 rounded-lg transition-colors border border-cyan-500/20"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    {project.demo && (
                      <a 
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-lg transition-all"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
