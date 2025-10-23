import { FileText, ExternalLink, Award } from 'lucide-react';

export function Publications() {
  const publications = [
    {
      title: 'Energy-Efficient Learning in Spiking Neural Networks Through Adaptive Threshold Modulation',
      authors: 'A. Khandelwal, J. Smith, M. Chen',
      venue: 'NeurIPS 2024',
      type: 'Conference',
      award: 'Best Paper Award',
      link: 'https://arxiv.org',
      year: 2024
    },
    {
      title: 'Hardware-Software Co-Design for Neuromorphic Edge Computing',
      authors: 'A. Khandelwal, R. Johnson',
      venue: 'IEEE Transactions on Neural Networks and Learning Systems',
      type: 'Journal',
      award: null,
      link: 'https://arxiv.org',
      year: 2024
    },
    {
      title: 'Temporal Coding Strategies in Event-Driven Visual Processing',
      authors: 'A. Khandelwal, L. Zhang, K. Patel',
      venue: 'CVPR 2023',
      type: 'Conference',
      award: null,
      link: 'https://arxiv.org',
      year: 2023
    },
    {
      title: 'Biologically Plausible Continual Learning with Spiking Neural Networks',
      authors: 'A. Khandelwal, T. Williams',
      venue: 'Nature Machine Intelligence',
      type: 'Journal',
      award: null,
      link: 'https://arxiv.org',
      year: 2023
    },
    {
      title: 'Memristor-Based Synaptic Plasticity for Neuromorphic Computing',
      authors: 'A. Khandelwal, S. Kumar, A. Martinez',
      venue: 'ISCAS 2022',
      type: 'Conference',
      award: null,
      link: 'https://arxiv.org',
      year: 2022
    }
  ];

  return (
    <section id="publications" className="py-20 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-4 text-center text-white">
            Publications
          </h2>
          <p className="text-center text-slate-400 mb-12">
            Selected publications in top-tier venues for neuromorphic computing, 
            machine learning, and computer vision.
          </p>

          <div className="space-y-4">
            {publications.map((pub, index) => (
              <div 
                key={index}
                className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all group"
              >
                <div className="flex gap-4">
                  <div className="p-3 bg-cyan-500/10 rounded-lg h-fit">
                    <FileText className="w-5 h-5 text-cyan-400" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="text-white group-hover:text-cyan-400 transition-colors">
                        {pub.title}
                      </h3>
                      {pub.award && (
                        <div className="flex items-center gap-1 px-2 py-1 bg-amber-500/10 text-amber-400 rounded border border-amber-500/20 whitespace-nowrap">
                          <Award className="w-3 h-3" />
                          <span className="text-xs">{pub.award}</span>
                        </div>
                      )}
                    </div>
                    
                    <p className="text-slate-400 mb-2">
                      {pub.authors}
                    </p>
                    
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="text-cyan-400">
                        {pub.venue}, {pub.year}
                      </span>
                      <span className="px-2 py-1 bg-cyan-500/10 text-cyan-400 rounded border border-cyan-500/20">
                        {pub.type}
                      </span>
                      <a 
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-slate-400 hover:text-cyan-400 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>View Paper</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a 
              href="https://scholar.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 hover:text-cyan-400 rounded-lg transition-colors border border-cyan-500/20"
            >
              View All Publications on Google Scholar
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
