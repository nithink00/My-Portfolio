import React from "react";
import { Download, FileText } from "lucide-react";

const ResumePreview: React.FC = () => {
  return (
    <section
      id="resume"
      className="py-24 bg-slate-950 border-t border-slate-900"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Resume</h2>
            <p className="text-slate-400">
              My qualifications and professional timeline at a glance.
            </p>
          </div>
          <button
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1xFNeuzRQ43YqvPDgPxUUX8N4hVS4soGX/view?usp=sharing",
                "_blank"
              )
            }
            className="flex items-center gap-2 px-6 py-3 bg-white text-slate-950 rounded-full font-semibold hover:bg-slate-200 transition-colors"
          >
            <Download size={18} />
            Download PDF
          </button>
        </div>

        {/* Resume Paper Layout Simulation */}
        <div className="bg-white text-slate-900 rounded shadow-2xl overflow-hidden max-w-4xl mx-auto min-h-[800px] p-8 md:p-12 text-sm leading-normal opacity-90 hover:opacity-100 transition-opacity duration-500">
          {/* Header */}
          <div className="text-center border-b-2 border-slate-900 pb-6 mb-6">
            <h1 className="text-4xl font-bold uppercase tracking-wider mb-2">
              Nithin Katla
            </h1>
            <div className="text-slate-600 font-medium space-x-2 md:space-x-4 flex flex-wrap justify-center">
              <span>+1(934) 451-9425</span>
              <span className="hidden md:inline">|</span>
              <span>nithinkatla19@gmail.com</span>
              <span className="hidden md:inline">|</span>
              <span>Seattle, WA</span>
            </div>
          </div>

          {/* Content Columns */}
          <div className="space-y-6">
            {/* Section */}
            <div className="mb-4">
              <h3 className="font-bold text-lg uppercase border-b border-slate-300 mb-2">
                Professional Experience
              </h3>

              {/* Item 1 */}
              <div className="mb-4">
                <div className="flex justify-between font-bold">
                  <span>Research Assistant – Visiting Scholar</span>
                  <span>Jul. 2025 – Present</span>
                </div>
                <div className="flex justify-between italic text-slate-700 mb-1">
                  <span>Stony Brook University</span>
                  <span>Seattle, WA</span>
                </div>
                <ul className="list-disc pl-5 text-slate-800 space-y-1">
                  <li>
                    Built a distributed consensus orchestrator in Go and
                    deployed it across Kubernetes.
                  </li>
                  <li>
                    Integrated reinforcement learning module to dynamically
                    switch consensus protocols.
                  </li>
                  <li>
                    Automated IaC workflows using Terraform and Jenkins on Azure
                    Kubernetes Service.
                  </li>
                </ul>
              </div>

              {/* Item 2 */}
              <div className="mb-4">
                <div className="flex justify-between font-bold">
                  <span>Graduate Research Assistant</span>
                  <span>Dec. 2023 – Jan. 2025</span>
                </div>
                <div className="flex justify-between italic text-slate-700 mb-1">
                  <span>Mechanismic Inc.</span>
                  <span>Stony Brook, NY</span>
                </div>
                <ul className="list-disc pl-5 text-slate-800 space-y-1">
                  <li>
                    Co-developed a web-based 3D robotics simulation platform
                    using React.js and Babylon.js.
                  </li>
                  <li>
                    Implemented backend services and APIs in Go to handle
                    simulation data.
                  </li>
                </ul>
              </div>

              {/* Item 3 */}
              <div className="mb-4">
                <div className="flex justify-between font-bold">
                  <span>Specialist Programmer</span>
                  <span>Sep. 2021 – Aug. 2023</span>
                </div>
                <div className="flex justify-between italic text-slate-700 mb-1">
                  <span>Apple Inc. (Infosys)</span>
                  <span>Hyderabad, India</span>
                </div>
                <ul className="list-disc pl-5 text-slate-800 space-y-1">
                  <li>
                    Built high-throughput backend services in Java Spring Boot
                    for Apple Maps ingestion.
                  </li>
                  <li>
                    Optimized APIs by integrating Redis caching and PostgreSQL
                    indexing.
                  </li>
                  <li>
                    Developed internal analytics dashboards using React.js,
                    reducing manual QA time by 50%.
                  </li>
                </ul>
              </div>
            </div>

            {/* Skills */}
            <div className="mb-4">
              <h3 className="font-bold text-lg uppercase border-b border-slate-300 mb-2">
                Technical Skills
              </h3>
              <div className="grid grid-cols-1 gap-1 text-slate-800">
                <p>
                  <span className="font-bold">Languages:</span> Go, Python,
                  Java, JavaScript/TypeScript
                </p>
                <p>
                  <span className="font-bold">Frameworks:</span> Spring Boot,
                  React.js, Node.js, gRPC, GraphQL
                </p>
                <p>
                  <span className="font-bold">Cloud/Infra:</span> Terraform,
                  Kubernetes, Docker, AWS, Azure
                </p>
                <p>
                  <span className="font-bold">Databases:</span> PostgreSQL,
                  Redis, MongoDB, MySQL
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-slate-400 text-xs">
            <div className="flex items-center justify-center gap-2">
              <FileText size={12} />
              <span>
                This is a web-generated preview. Download the PDF for the
                official document.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumePreview;
