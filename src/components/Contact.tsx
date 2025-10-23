import { Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This is a mock submit - in a real application, you would send this to a backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! This is a demo, so no message was actually sent.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-4 text-center text-white">
            Get In Touch
          </h2>
          <p className="text-center text-slate-400 mb-12">
            Interested in collaboration or have questions about my research? 
            Feel free to reach out!
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-500/10 rounded-lg">
                    <Mail className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-white">Email</h3>
                    <a 
                      href="mailto:aditya.khandelwal@university.edu"
                      className="text-slate-300 hover:text-cyan-400 transition-colors"
                    >
                      aditya.khandelwal@university.edu
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-500/10 rounded-lg">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-white">Location</h3>
                    <p className="text-slate-300">
                      Neuromorphic Systems Lab<br />
                      Department of Computer Science<br />
                      Research University
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl p-6 border border-cyan-500/20">
                <h3 className="mb-2 text-white">Research Interests</h3>
                <p className="text-slate-300">
                  I'm always open to discussing collaborations in neuromorphic computing, 
                  spiking neural networks, and energy-efficient AI systems.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-slate-800/50 border border-cyan-500/20 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/40 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-slate-800/50 border border-cyan-500/20 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/40 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-white">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 bg-slate-800/50 border border-cyan-500/20 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/40 transition-colors resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-lg transition-all shadow-lg shadow-cyan-500/20"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
