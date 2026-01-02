import React, { useState } from 'react';
import { Lock, Rocket, Book, Settings, ShieldCheck } from 'lucide-react';

const PAPIDashboard = () => {
  const [projects, setProjects] = useState([
    { id: 1, name: 'PAPI-Guard Security', status: 'Commercial Standalone', progress: 100 },
    { id: 2, name: 'Gemini Lyric Vault', status: 'In Development', progress: 45 },
    { id: 3, name: 'PAPI Central', status: 'Deploying', progress: 10 }
  ]);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-8 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center mb-12 border-b border-slate-700 pb-6">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            PAPI CENTRAL
          </h1>
          <p className="text-slate-400 mt-2 italic">"Self-control is the ultimate power."</p>
        </div>
        <div className="flex items-center gap-2 bg-green-900/30 text-green-400 px-4 py-2 rounded-full border border-green-500/50">
          <ShieldCheck size={20} />
          <span className="text-sm font-mono tracking-tighter">SECURED BY PAPI-GUARD v2.0</span>
        </div>
      </header>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Project Tracker */}
        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <Rocket className="text-blue-400" />
            <h2 className="text-xl font-semibold">Active Fleet</h2>
          </div>
          <div className="space-y-4">
            {projects.map(project => (
              <div key={project.id} className="bg-slate-700/50 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{project.name}</span>
                  <span className="text-xs text-blue-300 uppercase tracking-widest">{project.status}</span>
                </div>
                <div className="w-full bg-slate-600 h-2 rounded-full">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${project.progress}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The Wisdom Vault */}
        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <Book className="text-amber-400" />
            <h2 className="text-xl font-semibold">Wisdom Vault</h2>
          </div>
          <blockquote className="border-l-4 border-amber-500 pl-4 py-2 text-slate-300 italic mb-4">
            "One of the most important things that a human can have is self control. The more you have the better that you become."
          </blockquote>
          <button className="w-full py-2 text-sm bg-slate-700 hover:bg-slate-600 rounded transition">Add New Entry</button>
        </div>

        {/* Command Center */}
        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <Lock className="text-red-400" />
            <h2 className="text-xl font-semibold">Security Console</h2>
          </div>
          <p className="text-sm text-slate-400 mb-4">Multi-Model Communication Encryption: <span className="text-green-500 font-mono">ACTIVE</span></p>
          <div className="space-y-2">
            <button className="w-full py-2 bg-blue-600 hover:bg-blue-500 rounded font-bold transition">EXECUTE DEPLOYMENT</button>
            <button className="w-full py-2 bg-slate-700 hover:bg-slate-600 rounded transition text-xs text-slate-400">MAINTENANCE MODE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PAPIDashboard;