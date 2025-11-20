import React from "react";
import { EXPERIENCES } from "../constants";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Professional Journey
          </h2>
          <div className="h-1 w-20 bg-primary-500 rounded-full"></div>
        </div>

        <div className="relative border-l border-slate-800 ml-4 md:ml-8 space-y-12">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="relative pl-8 md:pl-12">
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-2 h-5 w-5 rounded-full border-4 border-slate-900 bg-primary-500 shadow-[0_0_0_4px_rgba(14,165,233,0.2)]"></div>

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                  <h4 className="text-xl text-primary-400 font-medium mb-2">
                    {exp.company}
                  </h4>

                  <div className="flex flex-wrap gap-4 text-sm text-slate-400 mb-6">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-slate-300 leading-relaxed"
                      >
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-600 flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-medium rounded bg-slate-800/80 text-slate-400 border border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
