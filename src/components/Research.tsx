import { Brain, Cpu, Zap, Network } from 'lucide-react';

export function Research() {
  const researchAreas = [
    {
      icon: Brain,
      title: 'Spiking Neural Networks',
      description: 'Developing biologically plausible learning algorithms for spiking neural networks that achieve state-of-the-art performance while maintaining energy efficiency.',
      keywords: ['STDP', 'Temporal Coding', 'Synaptic Plasticity']
    },
    {
      icon: Cpu,
      title: 'Neuromorphic Hardware',
      description: 'Designing and optimizing custom neuromorphic chips that leverage event-driven processing and in-memory computing for ultra-low-power AI applications.',
      keywords: ['Event-driven', 'Memristors', 'Analog Computing']
    },
    {
      icon: Zap,
      title: 'Energy-Efficient AI',
      description: 'Creating novel architectures and training methods that dramatically reduce the energy footprint of AI systems while maintaining or improving accuracy.',
      keywords: ['Model Compression', 'Quantization', 'Sparse Networks']
    },
    {
      icon: Network,
      title: 'Brain-Inspired Learning',
      description: 'Investigating biological learning principles and translating them into practical machine learning algorithms for continual and few-shot learning scenarios.',
      keywords: ['Continual Learning', 'Meta-Learning', 'Neuroscience']
    }
  ];

  return (
    <section id="research" className="py-20 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-4 text-center text-white">
            Research Areas
          </h2>
          <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
            My research bridges neuroscience, computer science, and engineering to create 
            next-generation computing systems inspired by the brain.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {researchAreas.map((area, index) => (
              <div 
                key={index}
                className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all hover:shadow-lg hover:shadow-cyan-500/10 group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all">
                    <area.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-white flex-1">{area.title}</h3>
                </div>
                <p className="text-slate-300 mb-4">
                  {area.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {area.keywords.map((keyword, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
