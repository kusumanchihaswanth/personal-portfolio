'use client'

import React, { useState } from 'react'

export default function Page() {
  const [activeTab, setActiveTab] = useState<'blueprint' | 'specifications' | 'materials' | 'contact'>('blueprint')

  return (
    // FIX: Swapped fixed h-screen with absolute container padding rules to stop project grid component clipping
    <div className="min-h-screen w-full bg-neutral-900 text-neutral-100 font-sans antialiased p-4 md:p-8 lg:p-12 selection:bg-sky-500 selection:text-white relative flex flex-col justify-between">
      {/* BACKGROUND GRAPH GRID SUITE - Engineering Drafting Simulator */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-40"></div>

      <div className="relative max-w-5xl w-full mx-auto flex flex-col flex-1 z-10">
        
        {/* TOP SPECIFICATION HEADER & MULTI-TAB CONTROLLER */}
        <div className="mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between border border-slate-800 bg-slate-950/80 backdrop-blur px-5 py-4 rounded-xl gap-4 shadow-xl">
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse"></span>
              <span className="text-xs uppercase tracking-widest text-slate-400 font-mono font-bold">
                M.SC SYSTEM TRACK // CURRENT GRADE: 1.2
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
                {tab === 'blueprint' ? '01 // Core' : tab === 'specifications' ? '02 // Experience' : tab === 'materials' ? '03 // Specs & Skills' : '04 // Route'}
              </button>
            ))}
          </nav>
        </div>

        {/* CORE SPECIFICATION RENDER BOX */}
        <main className="flex-1 bg-slate-950/40 border border-slate-800/60 backdrop-blur rounded-2xl p-6 md:p-8 mb-8 shadow-inner">
          
          {/* TAB 01: BLUEPRINT COMPONENT (HOME) */}
          {activeTab === 'blueprint' && (
            <div className="space-y-6">
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 border-b border-slate-800 pb-6">
                <div className="space-y-4 max-w-3xl">
                  <div className="text-xs font-mono text-sky-400 font-semibold tracking-wider uppercase border border-sky-500/20 bg-sky-500/5 px-2.5 py-1 rounded max-w-max">
                    Focus: Advanced Materials, Additive Manufacturing & Process Digitalization
                  </div>
                  <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                    Highly motivated engineering professional pursuing an M.Sc. in Materials Science and Engineering at TUHH, Germany. Expertly merging a foundational background in Mechanical Engineering with high-fidelity CAD/FEM simulations, structural optimization frameworks, and corporate manufacturing workflows.
                  </p>
                </div>
                
                {/* DEDICATED RESUME DOWNLOAD ACTION */}
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

              {/* ACTIVE TENURE MATRICES */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="border border-slate-800 bg-slate-900/30 p-5 rounded-xl group">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-3 bg-sky-500 rounded-sm"></div>
                      <h3 className="text-white font-bold text-sm font-mono tracking-tight">Airbus Operations GmbH</h3>
                    </div>
                    <span className="text-[10px] font-mono bg-sky-500/10 text-sky-400 px-2 py-0.5 rounded">Active</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Working Student in Additive Manufacturing and Digitalization. Supporting new product development (NPD) vectors for Ground Support Equipment (GSE) and specialized aircraft maintenance tooling arrays.
                  </p>
                </div>
                
                <div className="border border-slate-800 bg-slate-900/30 p-5 rounded-xl group">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-3 bg-sky-500 rounded-sm"></div>
                      <h3 className="text-white font-bold text-sm font-mono tracking-tight">e-gnition Hamburg e.V.</h3>
                    </div>
                    <span className="text-[10px] font-mono bg-sky-500/10 text-sky-400 px-2 py-0.5 rounded">Active</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Chassis Department Member for TUHH's Formula Student electric race vehicle development line. Actively executing design variables for driver ergonomics and advanced seat geometry arrays.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 02: EXPERIENCE SPECIFICATIONS */}
          {activeTab === 'specifications' && (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-3">
                <h2 className="text-lg font-bold text-white font-mono">Professional Timeline</h2>
                <p className="text-xs text-slate-500 font-mono mt-0.5">Corporate, industrial, and institutional project tracks.</p>
              </div>

              <div className="space-y-6">
                {/* AIRBUS */}
                <div className="relative border border-slate-800 bg-slate-900/10 p-5 rounded-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
                    <div>
                      <h3 className="font-bold text-sky-400 text-sm font-mono">Working Student: Additive Manufacturing & Digitalization</h3>
                      <p className="text-xs text-slate-300">Airbus Operations GmbH — Hamburg, Germany</p>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">05/2026 – Present</span>
                  </div>
                  <ul className="text-xs text-slate-400 space-y-2 list-disc pl-4">
                    <li>Support new product development (NPD) initiatives for advanced maintenance tools and Ground Support Equipment (GSE).</li>
                    <li>Apply additive manufacturing methodologies to design, iterate, and optimize components for weight reduction and functionality.</li>
                    <li>Assist in driving the digitalization of tooling workflows to streamline engineering data and improve operational efficiency.</li>
                  </ul>
                </div>

                {/* FRAUNHOFER */}
                <div className="relative border border-slate-800 bg-slate-900/10 p-5 rounded-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
                    <div>
                      <h3 className="font-bold text-white text-sm font-mono">Project Engineering Track</h3>
                      <p className="text-xs text-slate-300">Fraunhofer IFAM — Hamburg, Germany</p>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">11/2025 – 03/2026</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Deployed through the 'Fishing for Experience' framework at TUHH. Spearheaded the functional engineering design, structural layout, and numerical simulation of an innovative thermoplastic release-film preforming test platform utilized in carbon composite manufacturing.
                  </p>
                </div>

                {/* AMNS */}
                <div className="relative border border-slate-800 bg-slate-900/10 p-5 rounded-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
                    <div>
                      <h3 className="font-bold text-white text-sm font-mono">Graduate Engineering Trainee — Project Planning</h3>
                      <p className="text-xs text-slate-300">ArcelorMittal Nippon Steel India — Kirandul, India</p>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">07/2024 – 08/2025</span>
                  </div>
                  <ul className="text-xs text-slate-400 space-y-2 list-disc pl-4">
                    <li>Coordinated major capital industrial plant expansion architectures to scale operating output tolerances from 8 MMTPA to 12 MMTPA.</li>
                    <li>Served as Lead System Planner for the Iron Ore Tails Processing and Filtration Plant, tracking multi-million resource schedules.</li>
                    <li>Controlled project material routing and documentation workflows using integrated SAP system parameters (MM Module).</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 03: SPECS & TECHNICAL TOOLKIT */}
          {activeTab === 'materials' && (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-3">
                <h2 className="text-lg font-bold text-white font-mono">Technical Specifications Matrix</h2>
                <p className="text-xs text-slate-500 font-mono mt-0.5">Software properties, design capabilities, and core research logs.</p>
              </div>

              {/* SKILLS SECTION */}
              <div>
                <h3 className="text-white font-bold text-xs font-mono mb-3 tracking-widest text-sky-400 uppercase">// ENGINEERING_TOOLKIT</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs font-mono">
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/60">
                    <span className="text-slate-400 block font-bold mb-1">[CAD SOLUTIONS]</span>
                    SolidWorks // CATIA V5 // Autodesk Inventor // AutoCAD // Fusion360
                  </div>
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/60">
                    <span className="text-slate-400 block font-bold mb-1">[NUMERICAL FEA]</span>
                    ANSYS Mechanical // ANSYS Explicit Dynamics // Workbench // Fluent
                  </div>
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/60">
                    <span className="text-slate-400 block font-bold mb-1">[COMPUTATIONAL]</span>
                    Python // MATLAB & Simulink // SAP Systems (MM Module)
                  </div>
                </div>
              </div>

              {/* ACADEMIC RESEARCH PROJECTS ACCOMPLISHED */}
              <div className="pt-2">
                <h3 className="text-white font-bold text-xs font-mono mb-4 tracking-widest text-sky-400 uppercase">// RESEARCH_REGISTRY</h3>
                <div className="grid grid-cols-1 gap-4 font-sans">
                  
                  <div className="p-4 rounded-xl bg-slate-900/20 border border-slate-800">
                    <h4 className="text-sm font-bold text-white font-mono">Laser Cladding of Stellite 6 + TiB (Bachelor Thesis)</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      Investigated molten pool thermal histories inside extreme-wear surface applications. Analyzed variable laser energy profiles and scanning vector velocities to dramatically optimize local structural microstructure thresholds and particle dispersion integrity.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/20 border border-slate-800">
                    <h4 className="text-sm font-bold text-white font-mono">Residual Stress FEA Modeling (IIT Gandhinagar)</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      Summer Research Internship focused on deploying high-fidelity finite element modeling (FEM) arrays to characterize localized thermal residual stresses across progressive additive manufacturing metal powder bed layers.
                    </p>
                  </div>

                </div>
              </div>
            </div>
          )}

          {/* TAB 04: CONTACT ROUTE */}
          {activeTab === 'contact' && (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-3">
                <h2 className="text-lg font-bold text-white font-mono">Connection Coordinates</h2>
                <p className="text-xs text-slate-500 font-mono mt-0.5">Initialize direct engineering communication channels.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                <div className="space-y-4 text-sm font-mono">
                  <div className="flex flex-col p-3 bg-slate-900/30 border border-slate-800 rounded-xl">
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Secure Email Address</span>
                    <a href="mailto:kusumanchihaswanth@gmail.com" className="text-sky-400 hover:underline mt-1 text-xs sm:text-sm">kusumanchihaswanth@gmail.com</a>
                  </div>
                  
                  <div className="flex flex-col p-3 bg-slate-900/30 border border-slate-800 rounded-xl">
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Professional Interface</span>
                    <a href="https://linkedin.com/in/haswanth-kusumanchi" target="_blank" rel="noreferrer" className="text-white hover:text-sky-400 transition-colors mt-1 text-xs sm:text-sm">linkedin.com/in/haswanth-kusumanchi</a>
                  </div>

                  <div className="flex flex-col p-3 bg-slate-900/30 border border-slate-800 rounded-xl">
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Physical Coordinates</span>
                    <span className="text-slate-300 mt-1 text-sm">Hamburg, Germany</span>
                  </div>
                </div>

                {/* CV PROMPT FROM CONTACT PAGE */}
                <div className="border border-dashed border-slate-800 p-6 rounded-xl bg-slate-950/40 text-center flex flex-col items-center justify-center h-full min-h-[180px]">
                  <p className="text-xs text-slate-400 mb-4 max-w-xs leading-relaxed">
                    Require full verifiable educational transcripts, engineering certification lists, or comprehensive background documentation?
                  </p>
                  <a 
                    href="/cv.pdf" 
                    download="Haswanth_Kusumanchi_CV.pdf"
                    className="flex items-center space-x-2 bg-slate-900 border border-slate-700 hover:border-sky-400 text-slate-200 hover:text-white px-5 py-2.5 rounded-lg text-xs font-mono transition-all duration-200 shadow-md"
                  >
                    <svg className="w-3.5 h-3.5 text-sky-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    <span>Download Complete CV Profile</span>
                  </a>
                </div>
              </div>
            </div>
          )}

        </main>

        {/* FIXED: METRIC SYSTEM FOOTER BAR - Stays locked strictly underneath elements without layout clipping */}
        <footer className="w-full pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] text-slate-500 font-mono tracking-wider pb-4">
          <div>DASHBOARD OVERRIDE V2.7 // INTEGRATION VERIFIED</div>
          <div>© 2026 HASWANTH KUSUMANCHI. ALL SYSTEMS OPERATIONAL.</div>
        </footer>
      </div>
    </div>
  )
}
