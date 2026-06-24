export default function Page() {
  return (
    // This wrapper completely breaks out of any template restrictions to force an immersive, full-screen tech interface
    <div className="fixed inset-0 z-50 w-screen h-screen bg-neutral-950 text-neutral-200 font-mono overflow-y-auto antialiased selection:bg-emerald-500 selection:text-black p-4 md:p-8 lg:p-12">
      <div className="max-w-6xl mx-auto h-full flex flex-col">
        
        {/* Terminal Style Header Banner */}
        <div className="mb-6 flex items-center justify-between border border-neutral-800 bg-neutral-900/50 px-4 py-2 rounded-md">
          <div className="flex space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-500/80"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500/80"></div>
            <div className="h-3 w-3 rounded-full bg-emerald-500/80"></div>
          </div>
          <span className="text-xs text-neutral-500 tracking-widest uppercase font-semibold">System: Operational</span>
        </div>

        {/* Main Core Hook */}
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
            haswanth_kusumanchi<span className="text-emerald-400 animate-pulse">_</span>
          </h1>
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-3xl">
            &gt; Materials Science Master's student @ TU Hamburg. Specialize in driving physical engineering efficiencies via Additive Manufacturing, structural optimization, and Digitalization pipelines. Currently collaborating within GSE & Tools at Airbus.
          </p>
        </header>

        {/* Grid Display for Core Engineering Focus Blocks - Now expands wider */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="border border-neutral-800 bg-neutral-900/30 p-5 rounded-lg hover:border-emerald-500/40 transition-colors">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 block mb-1">// CORE VECTOR</span>
            <h2 className="text-lg font-bold text-white mb-2">Advanced Materials & CAD</h2>
            <p className="text-sm text-neutral-400 leading-normal">
              Executing mechanical parts modeling and multi-material component synthesis using CATIA V5, SolidWorks, and Autodesk Inventor.
            </p>
          </div>
          <div className="border border-neutral-800 bg-neutral-900/30 p-5 rounded-lg hover:border-emerald-500/40 transition-colors">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 block mb-1">// INTERFACE LOGIC</span>
            <h2 className="text-lg font-bold text-white mb-2">Digitalization & Python</h2>
            <p className="text-sm text-neutral-400 leading-normal">
              Building technical processing models, automated telemetry evaluation algorithms, and processing structural simulation charts with Python.
            </p>
          </div>
        </div>

        {/* Engineering Skills Module */}
        <div className="mb-10 border-l-2 border-neutral-800 pl-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center">
            <span className="text-emerald-400 mr-2">01.</span> Technical Toolkit
          </h2>
          <div className="space-y-3 text-sm md:text-base">
            <div><span className="text-neutral-500">[Design]</span> <span className="text-neutral-300">CATIA V5 // SolidWorks // Autodesk Inventor // FEA</span></div>
            <div><span className="text-neutral-500">[Coding]</span> <span className="text-neutral-300">Python // Engineering Data Simulation Plotting</span></div>
            <div><span className="text-neutral-500">[Domain]</span> <span className="text-neutral-300">Additive Manufacturing // Rapid Prototyping // TMI Document Compliance</span></div>
          </div>
        </div>

        {/* Chronological Technical Project Track */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center">
            <span className="text-emerald-400 mr-2">02.</span> Project Registries
          </h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="relative border border-neutral-800 bg-neutral-900/10 p-5 rounded-lg">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                <h3 className="font-bold text-emerald-400 text-base">Airbus Collaboration Pipeline</h3>
                <span className="text-xs text-neutral-500 font-mono mt-1 sm:mt-0">Present</span>
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Contributing core design tracking methodologies for Ground Support Equipment and automated functional loops within tooling digitalization environments.
              </p>
            </div>

            <div className="relative border border-neutral-800 bg-neutral-900/10 p-5 rounded-lg">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                <h3 className="font-bold text-white text-base">Thermoplastic Release Platform</h3>
                <span className="text-xs text-neutral-500 font-mono mt-1 sm:mt-0">2026</span>
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Collaboratively developed an industrial verification structural testing framework designated to benchmark physical threshold capabilities for high-performance thermoplastic releases.
              </p>
            </div>

            <div className="relative border border-neutral-800 bg-neutral-900/10 p-5 rounded-lg">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                <h3 className="font-bold text-white text-base">Formula Bharat Electric Chassis</h3>
                <span className="text-xs text-neutral-500 font-mono mt-1 sm:mt-0">Structural Compliance</span>
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Engineered primary functional components, drafted validation datasets, and cleared cross-disciplinary Technical Management Inspection safety gates.
              </p>
            </div>
          </div>
        </div>

        {/* Minimalist Tech Footer */}
        <footer className="mt-auto pt-8 border-t border-neutral-900 text-center text-[10px] md:text-xs text-neutral-600 tracking-wider">
          // SYSTEM DEPLOYED VIA VERCEL HYPERSTRUCTURE -- ALL LOGS SECURE
        </footer>
      </div>
    </div>
  )
}
