export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-8">
      <div className="max-w-3xl text-center">
        <h1 className="text-white mb-6">Portfolio Website</h1>
        <p className="text-slate-300 text-lg mb-8">
          This portfolio has been converted to vanilla HTML/CSS/JavaScript for GitHub Pages deployment.
        </p>
        <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
          <h2 className="text-white mb-4">Files Created:</h2>
          <ul className="text-slate-300 space-y-2 text-left">
            <li>✓ <code className="text-cyan-400">index.html</code> - Main HTML file</li>
            <li>✓ <code className="text-cyan-400">styles.css</code> - Complete styling</li>
            <li>✓ <code className="text-cyan-400">script.js</code> - Interactive functionality</li>
          </ul>
          <div className="mt-6 p-4 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
            <h3 className="text-white mb-2">Deployment Instructions:</h3>
            <ol className="text-slate-300 text-left space-y-2 text-sm">
              <li>1. Download index.html, styles.css, and script.js</li>
              <li>2. Create a new GitHub repository</li>
              <li>3. Upload these three files to the repository</li>
              <li>4. Go to Settings → Pages</li>
              <li>5. Set source to "Deploy from a branch"</li>
              <li>6. Select "main" branch and "/" (root)</li>
              <li>7. Click Save and wait for deployment</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
