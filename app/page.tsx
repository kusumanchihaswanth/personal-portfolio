'use client'

import React, { useState } from 'react'

export default function Page() {
  const [activeTab, setActiveTab] = useState<'home' | 'projects' | 'formula' | 'skills' | 'contact'>('home')

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
          
          {/* PROFESSIONAL NAVIGATION */}
          <nav className="flex flex-wrap p-1 bg-slate-950/60 rounded-lg border border-slate-800 text-xs">
            {(['home', 'projects', 'formula', 'skills', 'contact'] as const).map((tab) => (
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

          {/* SECTION 2: PROJECTS */}
          {activeTab === 'projects' && (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-3">
                <h2 className="text-xl font-bold text-white">Engineering Project Portfolio</h2>
                <p className="text-xs text-slate-500 mt-0.5">Comprehensive documentation of industrial, research, and institutional projects.</p>
              </div>

              <div className="space-y-4">
                {/* AIRBUS */}
                <div className="p-5 border border-slate-800 bg-slate-900/20 rounded-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h3 className="text-base font-bold text-sky-400">Additive Manufacturing & Digitalization</h3>
                    <span className="text-[11px] font-medium text-slate-500">Airbus Operations GmbH | 2026 – Present</span>
                  </div>
                  <p className="text-xs text-slate-300 mb-3 font-semibold">Role: Working Student (Ground Support Equipment & Tools)</p>
                  <ul className="text-xs text-slate-400 space-y-2 list-disc pl-4 leading-relaxed">
                    <li>Contribute to New Product Development (NPD) vectors targeting structural ground handling support gear and advanced maintenance tools.</li>
                    <li>Utilize polymer and metallic additive manufacturing architectures to achieve structural component lightweighting and high strength-to-weight optimization.</li>
                    <li>Map and digitize tracking configurations across local legacy workflows to minimize communication delays and accelerate data efficiency lines.</li>
                  </ul>
                </div>

                {/* FRAUNHOFER */}
                <div className="p-5 border border-slate-800 bg-slate-900/20 rounded-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h3 className="text-base font-bold text-white">Thermoplastic Preforming Test Platform</h3>
                    <span className="text-[11px] font-medium text-slate-500">Fraunhofer IFAM | 2025 – 2026</span>
                  </div>
                  <p className="text-xs text-slate-300 mb-3 font-semibold">Role: Project Engineer (Fishing for Experience Framework)</p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Spearheaded the design, configuration, and structural simulation parameters of an automated platform built to perform load validation testing on high-performance thermoplastic release films. This framework enables composite component manufacturers to accurately evaluate geometric deformation limits and material thresholds prior to final molding production.
                  </p>
                </div>

                {/* AMNS */}
                <div className="p-5 border border-slate-800 bg-slate-900/20 rounded-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h3 className="text-base font-bold text-white">Capital Expansion Project Planning</h3>
                    <span className="text-[11px] font-medium text-slate-500">AM/NS India | 2024 – 2025</span>
                  </div>
                  <p className="text-xs text-slate-300 mb-3 font-semibold">Role: Graduate Engineering Trainee (Iron Ore Beneficiation Plant)</p>
                  <ul className="text-xs text-slate-400 space-y-2 list-disc pl-4 leading-relaxed">
                    <li>Managed structural scheduling and cross-functional planning to successfully scale industrial plant operating output benchmarks from 8 MMTPA to 12 MMTPA.</li>
                    <li>Acted as primary system coordinator for the execution, logistics, and resource pipeline of the multi-million dollar Tails Processing and Filtration Plant installation.</li>
                    <li>Supervised equipment scheduling, critical path tracking, and inventory data integration by leveraging advanced SAP Materials Management modules.</li>
                  </ul>
                </div>

                {/* BACHELOR THESIS */}
                <div className="p-5 border border-slate-800 bg-slate-900/20 rounded-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h3 className="text-base font-bold text-white">Laser Cladding Molten Pool Thermal History Analysis</h3>
                    <span className="text-[11px] font-medium text-slate-500">Bachelor Thesis | NIT Rourkela</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Investigated the microstructural evolution of Stellite 6 reinforced with 20% Titanium Boride (TiB) ceramic particles during advanced laser cladding operations. Modeled how changes in laser output energy and scanning speed vectors shift local thermal pooling histories, successfully enhancing total abrasive wear resistance and coating life parameters in extreme operational conditions.
                  </p>
                </div>

                {/* IIT GANDHINAGAR */}
                <div className="p-5 border border-slate-800 bg-slate-900/20 rounded-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h3 className="text-base font-bold text-white">Finite Element Modeling of Additive Manufacturing Residual Stresses</h3>
                    <span className="text-[11px] font-medium text-slate-500">IIT Gandhinagar | Research Internship</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Utilized high-fidelity finite element modeling (FEM) code blocks to simulate layer-by-layer metal deposition mechanics. Isolated how varying operational process fields alter cooling vectors, yielding critical insights used to minimize microstructural residual stress formation and enhance material fatigue life.
                  </p>
                </div>

                {/* UNDERWATER ROBOTICS */}
                <div className="p-5 border border-slate-800 bg-slate-900/20 rounded-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h3 className="text-base font-bold text-white">Remote Sensing & Structural Synthesis in Deep-Water Robotics</h3>
                    <span className="text-[11px] font-medium text-slate-500">IIT Guwahati | Research Project</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Designed and structurally engineered a robust, pressure-resistant framework for an underwater robotic vehicle built for deep-water excavations. Formulated exact thruster placement matrices and spatial alignment maps to preserve flawless hydrodynamic stability and full movement control under severe underwater loads.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* SECTION 3: FORMULA STUDENT */}
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
                    <span className="text-[11px] font-medium text-slate-500">09/2025 – Present</span>
                  </div>
                  <p className="text-xs text-slate-300 mb-2 font-semibold">Core Department: Chassis & Cockpit Design</p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Active team member engaged in the engineering design cycle of the next-generation egn-26 fully electric formula race car. Responsibilities center on cockpit interior layout generation, balancing driver safety rules, optimizing driver cell ergonomics, and engineering custom high-strength composite seat geometry configurations.
                  </p>
                </div>

                {/* TEAM ROAD RUNNER */}
                <div className="border border-slate-800 bg-slate-900/20 p-5 rounded-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h3 className="text-base font-bold text-white">Team Road Runner Electric (NIT Rourkela)</h3>
                    <span className="text-[11px] font-medium text-slate-500">08/2021 – 05/2024</span>
                  </div>
                  <p className="text-xs text-slate-300 mb-2 font-semibold">Leadership Position: Chassis and Manufacturing Lead</p>
                  <ul className="text-xs text-slate-400 space-y-2 list-disc pl-4 leading-relaxed">
                    <li>Led a multi-disciplinary automotive engineering division to design, simulate, and physically manufacture a lightweight Formula Student electric race vehicle.</li>
                    <li>Executed detailed 3D surface and structural modeling using CATIA V5 and SolidWorks platforms to maximize structural integrity.</li>
                    <li>Conducted extensive Finite Element Analysis (FEA) to simulate rigorous crash impacts and calculate torsional stiffness requirements to achieve mass optimization.</li>
                    <li>Supervised material characterization matrices and final physical assembly tolerances to ensure exact compliance with international Technical Management Inspection (TMI) rulebooks.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* SECTION 4: SKILLS */}
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

          {/* SECTION 5: CONTACT */}
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
