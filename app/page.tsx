'use client'

import React, { useState } from 'react'

export default function Page() {
  const [activeTab, setActiveTab] = useState<'blueprint' | 'specifications' | 'materials' | 'contact'>('blueprint')

  return (
    <div className="fixed inset-0 z-50 w-screen h-screen bg-neutral-900 text-neutral-100 font-sans overflow-y-auto antialiased p-4 md:p-8 lg:p-12 selection:bg-sky-500 selection:text-white">
      {/* BACKGROUND GRAPH GRID SUITE - Simulates engineering drafting paper */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-40"></div>

      <div className="relative max-w-5xl mx-auto h-full flex flex-col z-10">
        
        {/* TOP SPECIFICATION HEADER & MULTI-TAB CONTROLLER */}
        <div className="mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between border border-slate-800 bg-slate-950/80 backdrop-blur px-5 py-4 rounded-xl gap-4 shadow-xl">
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse"></span>
              <span className="text-xs uppercase tracking-widest text-slate-400 font-mono font-bold">
                PROJECT STATUS // COMPONENT INITIALIZED
              </span>
            </div>
            <h1 className="text-xl font-bold tracking-tight text-white mt-1">
              Haswanth Kusumanchi
            </h1>
          </div>
          
          {/* MECHANICAL TAB CONTROLS */}
          <nav className="flex flex-wrap p-1 bg-slate-900/60 rounded-lg border border-slate-800/80 text-xs font-mono">
            {(['blueprint', 'specifications', 'materials', 'contact'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-md font-medium tracking-wider uppercase transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/20 font-bold'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {tab === 'blueprint' ? '01 // Core' : tab === 'specifications' ? '02 // Projects' : tab === 'materials' ? '03 // Profile' : '04 // Contact'}
              </button>
            ))}
          </nav>
        </div>

        {/* CORE SPECIFICATION RENDER BOX */}
        <main className="flex-1 bg-slate-950/40 border border-slate-800/60 backdrop-blur rounded-2xl p-6 md:p-8 mb-8 min-h-[460px] shadow-inner">
          
          {/* TAB 01: BLUEPRINT COMPONENT (HOME) */}
          {activeTab === 'blueprint' && (
            <div className="space-y-6">
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 border-b border-slate-800 pb-6">
                <div className="space-y-4 max-w-3xl">
                  <div className="text-xs font-mono text-sky-400 font-semibold tracking-wider uppercase border border-sky-500/20 bg-sky-500/5 px-2.5 py-1 rounded max-w-max">
                    Focus: Additive Manufacturing & Digitalization
                  </div>
                  <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                    Materials Science & Engineering graduate scholar specializing in cross-functional structural optimizations. Bridging the gap between physics-based component design, finite element analysis matrices, and digital deployment loops to maximize production lifecycle parameters.
                  </p>
                </div>
                
                {/* INTEGRATED DOWNLOAD CV CALL-TO-ACTION */}
                <div className="shrink-0 pt-2">
                  <a 
                    href="/cv.pdf" 
                    download="Haswanth_Kusumanchi_CV.pdf"
                    className="group flex items-center justify-center space-x-3 bg-sky-500 hover:bg-sky-400 text-white font-mono text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-lg shadow-sky-500/20 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <svg className="w-4 h-4 text-white group-hover:animate-bounce" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    <span>Download CV / Resume</span>
                  </a>
                </div>
              </div>

              {/* CORE VECTORS MATRIX GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="border border-slate-800 bg-slate-900/30 p-5 rounded-xl hover:bg-slate-900/50 transition-all group">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-1.5 h-3 bg-sky-500 rounded-sm"></div>
                    <h3 className="text-white font-bold text-sm font-mono tracking-tight">Physical System Optimization</h3>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Executing mechanical structural sizing and advanced tooling synthesis utilizing CATIA V5, SolidWorks, and Autodesk Inventor platforms.
                  </p>
                </div>
                
                <div className="border border-slate-800 bg-slate-900/30 p-5 rounded-xl hover:bg-slate-900/50 transition-all">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-1.5 h-3 bg-sky-500 rounded-sm"></div>
                    <h3 className="text-white font-bold text-sm font-mono tracking-tight">Digitalization Loops</h3>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Deploying engineering tracking setups and building multi-axis structural data visualization assets using Python frameworks.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 02: SPECIFICATIONS REGISTER (WORK/PROJECTS) */}
          {activeTab === 'specifications' && (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-3 flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-bold text-white font-mono">Engineering Project Logs</h2>
                  <p className="text-xs text-slate-500 font-mono mt-0.5">Structural analysis and collaborative validation data packages.</p>
                </div>
                <a href="/cv.pdf" download className="text-xs font-mono text-sky-400 hover:underline flex items-center space-x-1">
                  <span>Full Logs in CV</span> <span>&rarr;</span>
                </a>
              </div>

              <div className="space-y-4">
                <div className="border border-slate-800 bg-slate-900/20 p-5 rounded-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h3 className="font-bold text-sky-400 text-sm font-mono">Airbus / GSE & Tools Optimization</h3>
                    <span className="text-[10px] text-slate-500 font-mono">Current Sector</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Contributing to additive manufacturing configurations and digital asset logging systems within Ground Support Equipment architectures to improve layout workflows.
                  </p>
                </div>

                <div className="border border-slate-800 bg-slate-900/20 p-5 rounded-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h3 className="font-bold text-white text-sm font-mono">Thermoplastic Interface Testing Assembly</h3>
                    <span className="text-[10px] text-slate-500 font-mono">Structural Verification</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Collaborated on the physical architecture and evaluation matrix parameters of a platform engineered to isolate structural thresholds and failure variables of high-performance thermoplastic release films.
                  </p>
                </div>

                <div className="border border-slate-800 bg-slate-900/20 p-5 rounded-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h3 className="font-bold text-white text-sm font-mono">Formula Electric Structural Component Design</h3>
                    <span className="text-[10px] text-slate-500 font-mono">Formula Bharat Integration</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Engineered mechanical chassis interfaces, verified structural stress profiles via FEA, and coordinated formal blueprint logs to pass strict Technical Management Inspection guidelines.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 03: MATERIALS CHARACTERIZATION (ABOUT PROFILE) */}
          {activeTab === 'materials' && (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-3">
                <h2 className="text-lg font-bold text-white font-mono">Profile Context Matrix</h2>
                <p className="text-xs text-slate-500 font-mono mt-0.5">Validation details and physical background parameters.</p>
              </div>

              <div className="text-sm text-slate-300 space-y-4 max-w-3xl leading-relaxed">
                <p>
                  I am a graduate engineering student in the Materials Science and Engineering Master's program at the Technische Universität Hamburg. My work is driven by structural logic: leveraging computational tools and automation strategies to remove bottlenecks in traditional component manufacturing.
                </p>
                <p>
                  Outside the lab, my technical curiosity carries over to real-world aerodynamics and mechanics, specifically tracking modern aviation innovations through planespotting and analyzing engineering changes in Formula 1 racing architectures.
                </p>
              </div>

              <div className="mt-6">
                <h3 className="text-white font-bold text-xs font-mono mb-3 tracking-widest uppercase">// TECHNICAL_TOOLKIT_CAPABILITIES</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs font-mono">
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/60">
                    <span className="text-sky-400 block font-bold mb-1.5">[01 / STRUCTURAL CAD]</span>
                    CATIA V5 // SolidWorks // Autodesk Inventor // FEA Analysis
                  </div>
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/60">
                    <span className="text-sky-400 block font-bold mb-1.5">[02 / METRICS & CODE]</span>
                    Python Data Modeling // Automated Simulation Plotting
                  </div>
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/60">
                    <span className="text-sky-400 block font-bold mb-1.5">[03 / PRODUCTION]</span>
                    Additive Manufacturing // Component Characterization // TMI Compliance
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 04: CONTACT CHANNELS */}
          {activeTab === 'contact' && (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-3">
                <h2 className="text-lg font-bold text-white font-mono">Direct Channel Routing</h2>
                <p className="text-xs text-slate-500 font-mono mt-0.5">Initialize external communication paths.</p>
              </div>

              <p className="text-xs text-slate-400 max-w-xl leading-relaxed">
                Open for engineering project collaboration, corporate networking, or academic research discussions.
              </p>

              <div className="space-y-3 pt-2 text-sm font-mono">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                  <span className="text-slate-500 font-bold w-24">EMAIL:</span>
                  <a href="mailto:haswanth.kusumanchi@tuhh.de" className="text-sky-400 hover:underline">haswanth.kusumanchi@tuhh.de</a>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                  <span className="text-slate-500 font-bold w-24">LINKEDIN:</span>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white hover:text-sky-400 transition-colors">linkedin.com/in/haswanth-kusumanchi</a>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                  <span className="text-slate-500 font-bold w-24">STATION:</span>
                  <span className="text-slate-400">Hamburg, Germany</span>
                </div>
              </div>

              <div className="mt-8 flex justify-start">
                <a 
                  href="/cv.pdf" 
                  download="Haswanth_Kusumanchi_CV.pdf"
                  className="flex items-center space-x-2 bg-slate-900 border border-slate-800 hover:border-sky-500/50 text-slate-300 hover:text-white px-4 py-2.5 rounded-lg text-xs font-mono transition-all"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  <span>Download Complete Specifications Portfolio (CV PDF)</span>
                </a>
              </div>
            </div>
          )}

        </main>

        {/* METRIC SYSTEM FOOTER BAR */}
        <footer className="mt-auto pt-6 border-t border-slate-900/60 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] text-slate-500 font-mono tracking-wider">
          <div>ENGINEERING DASHBOARD V2.4 // COUPLING COMPLETED</div>
          <div>© 2026 HASWANTH KUSUMANCHI. ALL SYSTEMS VERIFIED.</div>
        </footer>
      </div>
    </div>
  )
}
