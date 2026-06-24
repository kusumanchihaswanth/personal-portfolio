'use client'

import React, { useState } from 'react'

export default function Page() {
  // Managing the active window tab context
  const [activeTab, setActiveTab] = useState<'home' | 'work' | 'about' | 'contact'>('home')

  return (
    <div className="fixed inset-0 z-50 w-screen h-screen bg-neutral-950 text-neutral-200 font-mono overflow-y-auto antialiased selection:bg-emerald-500 selection:text-black p-4 md:p-8 lg:p-12">
      <div className="max-w-5xl mx-auto h-full flex flex-col">
        
        {/* TOP STATUS BAR & DYNAMIC NAVIGATION MENU */}
        <div className="mb-8 flex flex-col sm:flex-row items-center justify-between border border-neutral-800 bg-neutral-900/50 px-4 py-3 rounded-lg gap-4">
          <div className="flex items-center space-x-4">
            <div className="flex space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-500/80"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500/80"></div>
              <div className="h-3 w-3 rounded-full bg-emerald-500/80"></div>
            </div>
            <span className="text-xs text-neutral-500 tracking-widest uppercase font-semibold border-l border-neutral-800 pl-4">
              SYS_OPT: {activeTab.toUpperCase()}
            </span>
          </div>
          
          {/* INTERACTIVE NAVIGATION BUTTONS */}
          <nav className="flex space-x-1 bg-neutral-950 p-1 rounded-md border border-neutral-800/60 text-xs">
            {(['home', 'work', 'about', 'contact'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 rounded text-xs font-medium tracking-wider uppercase transition-all duration-150 ${
                  activeTab === tab
                    ? 'bg-emerald-500 text-black font-bold shadow-md shadow-emerald-500/10'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* CONDITIONAL RENDER PANELS BLOCK */}
        <main className="flex-1 bg-neutral-900/10 border border-neutral-900 rounded-xl p-2 sm:p-6 mb-8 min-h-[450px]">
          
          {/* TAB 01: HOME PANEL */}
          {activeTab === 'home' && (
            <div className="animate-fadeIn">
              <header className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
                  haswanth_kusumanchi<span className="text-emerald-400 animate-pulse">_</span>
                </h1>
                <p className="text-emerald-400/90 text-sm tracking-wider uppercase mb-4">// SYSTEMS ENGINEER & DIGITALIZATION STRATEGIST</p>
                <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-3xl">
                  Executing physical data optimization and cross-functional digitalization pipelines. Developing scalable mechanical design matrix solutions combining industrial manufacturing frameworks with computational analytics.
                </p>
              </header>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="border border-neutral-800 bg-neutral-900/20 p-4 rounded-lg">
                  <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 block mb-1">01 / CAPABILITIES</span>
                  <h3 className="text-white font-bold mb-2 text-sm">Additive Architecture</h3>
                  <p className="text-xs text-neutral-400 leading-normal">Optimizing component geometries and multi-material system compliance pipelines.</p>
                </div>
                <div className="border border-neutral-800 bg-neutral-900/20 p-4 rounded-lg">
                  <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 block mb-1">02 / CORE LOGIC</span>
                  <h3 className="text-white font-bold mb-2 text-sm">Process Digitalization</h3>
                  <p className="text-xs text-neutral-400 leading-normal">Deploying analytical algorithms and tracking data scripts to drive engineering efficiency limits.</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 02: WORK / PROJECT ARCHIVE */}
          {activeTab === 'work' && (
            <div className="animate-fadeIn space-y-6">
              <div className="border-b border-neutral-800 pb-3">
                <h2 className="text-xl font-bold text-white">Project Registries</h2>
                <p className="text-xs text-neutral-500 mt-1">Operational tracks and architectural deployments.</p>
              </div>

              <div className="space-y-4">
                <div className="border border-neutral-800 bg-neutral-900/30 p-4 rounded-lg hover:border-emerald-500/30 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-1">
                    <h3 className="font-bold text-emerald-400 text-sm">Airbus Tooling & GSE Infrastructure</h3>
                    <span className="text-[10px] bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800 text-neutral-400 max-w-max">Corporate Collaboration</span>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Developing tracking solutions and automated validation layouts within the Ground Support Equipment ecosystem to accelerate engineering production parameters.
                  </p>
                </div>

                <div className="border border-neutral-800 bg-neutral-900/30 p-4 rounded-lg hover:border-emerald-500/30 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-1">
                    <h3 className="font-bold text-white text-sm">Thermoplastic Evaluation Array</h3>
                    <span className="text-[10px] bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800 text-neutral-400 max-w-max">University Alliance</span>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Designed and mapped a custom load verification matrix testing platform engineered specifically to analyze failure point thresholds of structural thermoplastic film surfaces.
                  </p>
                </div>

                <div className="border border-neutral-800 bg-neutral-900/30 p-4 rounded-lg hover:border-emerald-500/30 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-1">
                    <h3 className="font-bold text-white text-sm">Formula Electric Chassis Framework</h3>
                    <span className="text-[10px] bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800 text-neutral-400 max-w-max">Formula Bharat</span>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Engineered primary suspension components, verified FEA loading vectors, and compiled technical system blueprints to verify full Technical Management Inspection safety alignment.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 03: ABOUT / STACK MATRIX */}
          {activeTab === 'about' && (
            <div className="animate-fadeIn space-y-6">
              <div className="border-b border-neutral-800 pb-3">
                <h2 className="text-xl font-bold text-white">Profile Context</h2>
                <p className="text-xs text-neutral-500 mt-1">Background validation parameters.</p>
              </div>

              <div className="text-sm text-neutral-400 space-y-4 max-w-3xl leading-relaxed">
                <p>
                  I am deep within my Materials Science and Engineering Master's track at the Technische Universität Hamburg, focusing closely on advanced material parameters and digital manufacturing paradigms. 
                </p>
                <p>
                  My engineering ideology centers on modular frameworks: removing manual processing overhead through software execution, optimization routines, and data scripting. Outside structural constraints, I trace aerospace design lines via planespotting and analyze computational strategies used in Formula 1 racing.
                </p>
              </div>

              <div className="mt-6">
                <h3 className="text-white font-bold text-sm mb-3">// ENVIRONMENT_TOOLKIT_MATRIX</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="bg-neutral-950 p-3 rounded border border-neutral-900">
                    <span className="text-emerald-400 block mb-1">[DESIGN]</span>
                    CATIA V5 // SolidWorks // Inventor // FEA Analysis
                  </div>
                  <div className="bg-neutral-950 p-3 rounded border border-neutral-900">
                    <span className="text-emerald-400 block mb-1">[COMPUTE]</span>
                    Python Data Scripting // Structural Sim Modeling
                  </div>
                  <div className="bg-neutral-950 p-3 rounded border border-neutral-900">
                    <span className="text-emerald-400 block mb-1">[PARADIGMS]</span>
                    Additive Manufacturing // Digitalization Loops // TMI Compliance
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 04: CONTACT PORTAL */}
          {activeTab === 'contact' && (
            <div className="animate-fadeIn space-y-6">
              <div className="border-b border-neutral-800 pb-3">
                <h2 className="text-xl font-bold text-white">Communication Portal</h2>
                <p className="text-xs text-neutral-500 mt-1">Initialize direct data link connection.</p>
              </div>

              <p className="text-xs text-neutral-400 max-w-xl leading-relaxed">
                Open for collaborative engineering deployments, academic research networking, or cross-platform framework inquiries.
              </p>

              <div className="space-y-2 pt-2 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="text-neutral-500 font-bold w-20">EMAIL:</span>
                  <a href="mailto:haswanth.kusumanchi@tuhh.de" className="text-emerald-400 hover:underline">haswanth.kusumanchi@tuhh.de</a>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-neutral-500 font-bold w-20">LINKEDIN:</span>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white hover:text-emerald-400 transition-colors">linkedin.com/in/haswanth-kusumanchi</a>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-neutral-500 font-bold w-20">NETWORK:</span>
                  <span className="text-neutral-400">Hamburg, Germany</span>
                </div>
              </div>

              <div className="mt-6 border border-dashed border-neutral-800 p-4 rounded text-center text-xs text-neutral-500 bg-neutral-950/40">
                &gt; COM_LINK: Security verified via SSL routing architecture.
              </div>
            </div>
          )}

        </main>

        {/* METRIC FOOTER BAR */}
        <footer className="mt-auto pt-6 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] text-neutral-600 tracking-wider">
          <div>// STACK: NEXT.JS + TAILWIND + VERCEL INTEGRITY CLOUD</div>
          <div>© 2026 HASWANTH KUSUMANCHI. LOGS ENCRYPTED.</div>
        </footer>
      </div>
    </div>
  )
}
