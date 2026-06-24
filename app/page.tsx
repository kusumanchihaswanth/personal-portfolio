export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hi, I'm Haswanth Kusumanchi
      </h1>
      <p className="mb-4">
        I bridge the gap between advanced materials science, mechanical engineering design, and digitalization to optimize the future of manufacturing. I am currently a Materials Science and Engineering Master's student at TU Hamburg, working as a student collaborator at Airbus within the Ground Support Equipment (GSE) and Tools division. My focus centers heavily on driving engineering efficiencies through Additive Manufacturing and Digitalization.
      </p>
      <p className="mb-4">
        Beyond academic and corporate frameworks, I enjoy applying technical computing to structural simulations, tracking innovations in aviation planespotting, and following the mechanical and aerodynamic complexities of Formula 1 racing.
      </p>

      <hr className="my-6 border-neutral-200 dark:border-neutral-800" />

      <h2 className="mb-4 text-xl font-semibold tracking-tighter">Technical Toolkit</h2>
      <ul className="list-disc pl-5 space-y-2 mb-6">
        <li><strong>Design & Engineering:</strong> CATIA V5, SolidWorks, Autodesk Inventor</li>
        <li><strong>Analysis & Simulation:</strong> Finite Element Analysis (FEA), Materials Characterization</li>
        <li><strong>Digitalization & Automation:</strong> Python (Engineering Simulations & Data Plotting)</li>
        <li><strong>Core Competencies:</strong> Additive Manufacturing, Rapid Prototyping, Technical Documentation</li>
      </ul>

      <h2 className="mb-4 text-xl font-semibold tracking-tighter">Key Projects</h2>
      <div className="space-y-4">
        <div>
          <h3 className="font-medium">Aerospace Digitalization & Tooling — Airbus</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">Contributing to additive manufacturing workflows and digital tracking pipelines for ground support equipment.</p>
        </div>
        <div>
          <h3 className="font-medium">Thermoplastic Test Platform Development</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">Collaborated on a dedicated university engineering initiative to design and validate a structural testing platform for thermoplastic release films.</p>
        </div>
        <div>
          <h3 className="font-medium">Formula Bharat Electric Racing Team</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">Engineered structural components, managed technical design specifications, and executed comprehensive Technical Management Inspection (TMI) compliance.</p>
        </div>
      </div>
    </section>
  )
}
