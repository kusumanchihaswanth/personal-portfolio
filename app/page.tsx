'use client'

import React, { useState } from 'react'

export default function Page() {
  const [activeTab, setActiveTab] = useState<'home' | 'experience' | 'projects' | 'formula' | 'skills' | 'contact'>('home')

  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-100 font-sans antialiased p-4 md:p-8 lg:p-12 relative flex flex-col justify-between selection:bg-sky-500 selection:text-white">
      {/* Premium technical blueprint grid background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-30"></div>

      <div className="relative max-w-5xl w-full mx-auto flex flex-col flex-1 z-10">
        
        {/* EXECUTIVE HEADER & NAVIGATION PANEL */}
        <div className="mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between border border-slate-800 bg-slate-900/80 backdrop-blur px-6 py-5 rounded-xl gap-4 shadow-2xl">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold tracking-tight text-white">
              Haswanth Kusumanchi
            </h1>
            <p className="text-xs font-semibold tracking-wider text-sky-400 uppercase mt-0.5">
              Materials Science & Mechanical Engineering
            </p>
          </div>
          
          {/* PROFESSIONAL NAVIGATION WITH 6 DISTINCT TABS */}
          <nav className="flex flex-wrap p-1 bg-slate-950/60 rounded-lg border border-slate-800 text-xs">
            {(['home', 'experience', 'projects', 'formula', 'skills', 'contact'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2.5 rounded-md font-semibold tracking-wide uppercase transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {tab === 'formula' ? 'Formula Student' : tab}
              </button>
            ))}
          </nav>
        </div>

        {/* CORE PORTFOLIO WORKSPACE */}
        <main className="flex-1 bg-slate-900/30 border border-slate-800/80 backdrop-blur rounded-2xl p-6 md:p-8 mb-8 shadow-2xl">
          
          {/* SECTION 1: HOME */}
          {activeTab === 'home' && (
            <div className="space-y-6">
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 border-b border-slate-800 pb-6">
                <div className="space-y-4 max-w-3xl">
                  <h2 className="text-xl font-bold text-white">Professional Profile</h2>
                  <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                    Engineering professional currently pursuing an M.Sc. in Materials Science and Engineering at the Hamburg University of Technology (TUHH). With a foundational background in Mechanical Engineering from NIT Rourkela and IIT Hyderabad, my expertise connects structural design, numerical finite element simulations, and digital manufacturing workflows to enhance mechanical lifecycle performance.
                  </p>
                </div>
                
                {/* CV DOWNLOAD ACTION BUTTON */}
                <div className="shrink-0 pt-2">
                  <a 
                    href="/cv.pdf" 
                    download="Haswanth_Kusumanchi_CV.pdf"
                    className="group flex items-center justify-center space-x-2 bg-sky-500 hover:bg-sky-400 text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-lg shadow-sky-500/20 transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <svg className="w-4 h-4 text-white group-hover:animate-bounce" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    <span>Download CV / Resume</span>
                  </a>
                </div>
              </div>

              {/* CURRENT ENGAGEMENTS */}
              <div className="space-y-4">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Current Active Engagements</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-slate-800 bg-slate-900/40 p-5 rounded-xl">
                    <span className="text-[10px] text-sky-400 font-bold uppercase tracking-wider block mb-1">Corporate Sector</span>
                    <h4 className="text-white font-bold text-sm mb-2">Airbus Operations GmbH</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Working student focusing on additive manufacturing implementations, components weight optimization, and tooling digitalization workflows.
                    </p>
                  </div>
                  <div className="border border-slate-800 bg-slate-900/40 p-5 rounded-xl">
                    <span className="text-[10px] text-sky-400 font-bold uppercase tracking-wider block mb-1">Automotive Engineering</span>
                    <h4 className="text-white font-bold text-sm mb-2">e-gnition Hamburg e.V.</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Chassis department team member designing structural cockpit layouts, seating integration, and custom driver ergonomics.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SECTION 2: EXPERIENCE (CORPORATE & INDUSTRIAL ENGAGEMENTS) */}
          {activeTab === 'experience' && (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-3">
                <h2 className="text-xl font-bold text-white">Professional Experience</h2>
                <p className="text-xs text-slate-500 mt-0.5">Corporate roles, engineering internships, and industrial training tenures.</p>
              </div>

              <div className="space-y-4">
                {/* AIRBUS */}
                <div className="p-5 border border-slate-800 bg-slate-900/20 rounded-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h3 className="text-base font-bold text-sky-400">Airbus Operations GmbH</h3>
                    <span className="text-[11px] font-medium text-slate-500">05/2026 – Present | Hamburg, Germany</span>
                  </div>
                  <p className="text-xs text-slate-300 mb-3 font-semibold">Working Student — Additive Manufacturing & Digitalization</p>
                  <ul className="text-xs text-slate-400 space-y-2 list-disc pl-4 leading-relaxed">
                    <li>Support new product development (NPD) initiatives for advanced maintenance tools and Ground Support Equipment (GSE).</li>
                    <li>Apply additive manufacturing methodologies to design, iterate, and optimize components for weight reduction and functionality.</li>
                    <li>Assist in driving the digitalization of tooling workflows to streamline engineering data and improve operational efficiency.</li>
                    <li>Collaborate with cross-functional teams to integrate modern manufacturing techniques into legacy aerospace tooling processes.</li>
                  </ul>
                </div>

                {/* AMNS */}
                <div className="p-5 border border-slate-800 bg-slate-900/20 rounded-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h3 className="text-base font-bold text-white">ArcelorMittal Nippon Steel India</h3>
                    <span className="text-[11px] font-medium text-slate-500">07/2024 – 08/2025 | Kirandul, India</span>
                  </div>
                  <p className="text-xs text-slate-300 mb-3 font-semibold">Graduate Engineering Trainee — Project Planning</p>
                  <ul className="text-xs text-slate-400 space-y-2 list-disc pl-4 leading-relaxed">
                    <li>Planned and coordinated major capital expansion projects to boost the plant's capacity from 8 MMTPA to 12 MMTPA.</li>
                    <li>Worked as the project planner for the Iron Ore Tails Processing and Filtration Plant project, ensuring timely resource allocation and scheduling.</li>
                    <li>Managed project workflows and documentation using proficiency in SAP (MM module) for accurate tracking and control.</li>
                    <li>Developed comprehensive reports, schedules, and presentations using Microsoft Project to streamline communication and monitor progress.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* SECTION 3: PROJECTS (RESEARCH & COLLABORATIVE DEVELOPMENTS) */}
          {activeTab === 'projects' && (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-3">
                <h2 className="text-xl font-bold text-white">Engineering Projects</h2>
                <p className="text-xs text-slate-500 mt-0.5">Academic research frameworks, thesis work, and institutional project collaborations.</p>
              </div>

              <div className="space-y-4">
                {/* FRAUNHOFER */}
                <div className="p-5 border border-slate-800 bg-slate-900/20 rounded-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h3 className="text-base font-bold text-sky-400">Thermoplastic Release-Film Preforming Test Platform</h3>
                    <span className="text-[11px] font-medium text-slate-500">11/2025 – 03/2026 | Fraunhofer IFAM</span>
                  </div>
                  <p className="text-xs text-slate-300 mb-2 font-semibold">Project Work (Fishing for Experience Program at TUHH)</p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Spearheaded the functional engineering design and structural layout simulation of a specialized thermoplastic preforming testing assembly built for carbon composite manufacturing fields. This validation array isolated geometric material behaviors under tension to optimize production molding properties.
                  </p>
                </div>

                {/* BACHELOR THESIS */}
                <div className="p-5 border border-slate-800 bg-slate-900/20 rounded-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h3 className="text-base font-bold text-white">Laser Cladding Optimization (Bachelor Thesis)</h3>
                    <span className="text-[11px] font-medium text-slate-500">NIT Rourkela</span>
                  </div>
                  <p className="text-xs text-slate-300 mb-2 font-semibold">Title: Effect of molten pool thermal history on laser cladding of Stellite 6 + TiB</p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Investigated the microstructural configuration changes of Stellite 6 integrated with a 20% Titanium Boride (TiB) ceramic particle compound under intense cladding sweeps. Evaluated power fields and scan rates to map heat dissipation dynamics, successfully augmenting material wear and erosion resistance metrics.
                  </p>
                </div>

                {/* IIT GANDHINAGAR */}
                <div className="p-5 border border-slate-800 bg-slate-900/20 rounded-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h3 className="text-base font-bold text-white">Residual Stress Modeling via Finite Element Methods</h3>
                    <span className="text-[11px] font-medium text-slate-500">IIT Gandhinagar</span>
                  </div>
                  <p className="text-xs text-slate-300 mb-2 font-semibold">Summer Research Internship</p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Deployed finite element modeling (FEM) arrays to characterize thermal behaviors and build-up parameters in metal powder bed configurations during layered additive manufacturing cycles. Isolated vector changes to minimize structural residual distortions and extend product fatigue thresholds.
                  </p>
                </div>

                {/* UNDERWATER ROBOTICS */}
                <div className="p-5 border border-slate-800 bg-slate-900/20 rounded-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h3 className="text-base font-bold text-white">Deep-Water Excavation Robot Frame Architecture</h3>
                    <span className="text-[11px] font-medium text-slate-500">IIT Guwahati</span>
                  </div>
                  <p className="text-xs text-slate-300 mb-2 font-semibold">Research Collaboration Project</p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Constructed a highly rigid, pressure-stable structural chassis framework targeted for subsea exploration robotic vehicles. Designed strategic thruster coordinate alignments to guarantee optimal stability and drag mitigation under complex fluid dynamics loads.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* SECTION 4: FORMULA STUDENT */}
          {activeTab === 'formula' && (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-3">
                <h2 className="text-xl font-bold text-white">Formula Student Engineering</h2>
                <p className="text-xs text-slate-500 mt-0.5">Chassis development, structural validation, and regulatory technical compliance.</p>
              </div>

              <div className="space-y-6">
                {/* E-GNITION */}
                <div className="border border-slate-800 bg-slate-900/20 p-5 rounded-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h3 className="text-base font-bold text-sky-400">e-gnition Hamburg e.V. (TUHH)</h3>
                    <span className="text-[11px] font-medium text-slate-500">09/2025 – Present | Hamburg, Germany</span>
                  </div>
                  <p className="text-xs text-slate-300 mb-2 font-semibold">Chassis Department Member</p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Contributing to the structural design and engineering optimization of the next-generation egn-26 fully electric formula car line. Actively handling cockpit component envelopes, safety packaging rules, cell layout spaces, and lightweight custom seat ergonomics.
                  </p>
                </div>

                {/* TEAM ROAD RUNNER */}
                <div className="border border-slate-800 bg-slate-900/20 p-5 rounded-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h3 className="text-base font-bold text-white">Team Road Runner Electric (Formula SAE)</h3>
                    <span className="text-[11px] font-medium text-slate-500">08/2021 – 05/2024 | NIT Rourkela</span>
                  </div>
                  <p className="text-xs text-slate-300 mb-2 font-semibold">Chassis and Manufacturing Lead</p>
                  <ul className="text-xs text-slate-400 space-y-2 list-disc pl-4 leading-relaxed">
                    <li>Led the structural deployment of an electric racing chassis, running complete material validations and 3D surfacing files in CATIA V5 and SolidWorks.</li>
                    <li>Conducted detailed Finite Element Analysis (FEA) safety loops mapping structural torsional stiffness configurations and crash impact parameters.</li>
                    <li>Supervised complete machine assembly loops to ensure physical fabrications matched digital parameters while satisfying Formula Student inspection profiles.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* SECTION 5: SKILLS */}
          {activeTab === 'skills' && (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-3">
                <h2 className="text-xl font-bold text-white">Technical Qualifications</h2>
                <p className="text-xs text-slate-500 mt-0.5">Validated software proficiency, operational matrices, and competencies.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-950/60 p-5 rounded-xl border border-slate-800">
                  <h3 className="text-sm font-bold text-sky-400 mb-3 uppercase tracking-wider">Computer-Aided Design (CAD)</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    SolidWorks, CATIA V5, Autodesk Inventor, AutoCAD, Autodesk Fusion360. Experienced in advanced surface features, parametric assembly building, and manufacturing blueprint preparation.
                  </p>
                </div>

                <div className="bg-slate-950/60 p-5 rounded-xl border border-slate-800">
                  <h3 className="text-sm font-bold text-sky-400 mb-3 uppercase tracking-wider">Finite Element Analysis (FEA)</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    ANSYS Mechanical, ANSYS Explicit Dynamics, ANSYS Workbench, ANSYS Fluent. Proficient in mesh independence tracking, structural static parsing, crash metrics, and fluid flow dynamics.
                  </p>
                </div>

                <div className="bg-slate-950/60 p-5 rounded-xl border border-slate-800">
                  <h3 className="text-sm font-bold text-sky-400 mb-3 uppercase tracking-wider">Systems & Engineering Core</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Additive Manufacturing processes, structural material characterization, SAP systems (Materials Management Module), MATLAB, and Simulink data operations.
                  </p>
                </div>

                <div className="bg-slate-950/60 p-5 rounded-xl border border-slate-800">
                  <h3 className="text-sm font-bold text-sky-400 mb-3 uppercase tracking-wider">Languages</h3>
                  <div className="text-xs text-slate-300 space-y-1">
                    <p><strong>English:</strong> Professional Working Proficiency (C1 / IELTS)</p>
                    <p><strong>German:</strong> Elementary Proficiency (A1 / Goethe Certificate)</p>
                    <p><strong>Telugu & Hindi:</strong> Native Languages</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SECTION 6: CONTACT */}
          {activeTab === 'contact' && (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-3">
                <h2 className="text-xl font-bold text-white">Contact & Network</h2>
                <p className="text-xs text-slate-500 mt-0.5">Connect via professional communication lines.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                <div className="space-y-3 flex flex-col justify-between">
                  <div className="p-4 bg-slate-950/40 border border-slate-800 rounded-xl">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Email Address</span>
                    <a href="mailto:kusumanchihaswanth@gmail.com" className="text-sky-400 hover:underline text-sm font-medium mt-1 inline-block">kusumanchihaswanth@gmail.com</a>
                  </div>
                  
                  <div className="p-4 bg-slate-950/40 border border-slate-800 rounded-xl">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">LinkedIn Network</span>
                    <a href="https://linkedin.com/in/haswanth-kusumanchi" target="_blank" rel="noreferrer" className="text-white hover:text-sky-400 font-medium text-sm mt-1 inline-block">linkedin.com/in/haswanth-kusumanchi</a>
                  </div>

                  <div className="p-4 bg-slate-950/40 border border-slate-800 rounded-xl">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Location Headquarters</span>
                    <span className="text-slate-300 text-sm font-medium mt-1 inline-block">Hamburg, Germany</span>
                  </div>
                </div>

                <div className="border border-dashed border-slate-800 p-6 rounded-xl bg-slate-950/20 text-center flex flex-col items-center justify-center min-h-[200px]">
                  <p className="text-xs text-slate-400 mb-4 max-w-xs leading-relaxed">
                    Looking to evaluate physical transcripts, structural design records, or specific compliance blueprints?
                  </p>
                  <a 
                    href="/cv.pdf" 
                    download="Haswanth_Kusumanchi_CV.pdf"
                    className="flex items-center space-x-2 bg-slate-950 border border-slate-700 hover:border-sky-400 text-slate-200 hover:text-white px-5 py-3 rounded-xl text-xs font-semibold transition-all shadow-md"
                  >
                    <svg className="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    <span>Download Complete Resume</span>
                  </a>
                </div>
              </div>
            </div>
          )}

        </main>

        {/* PROFESSIONAL CORPORATE FOOTER */}
        <footer className="w-full pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] text-slate-500 tracking-wider pb-4">
          <div>MECHANICAL & MATERIALS SCIENCE PORTFOLIO HUB</div>
          <div>© 2026 HASWANTH KUSUMANCHI. ALL RIGHTS RESERVED.</div>
        </footer>
      </div>
    </div>
  )
}
