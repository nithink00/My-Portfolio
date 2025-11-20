import React from "react";
import { PROJECTS } from "../constants";
import { FolderGit2, BookOpen, ArrowUpRight } from "lucide-react";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-slate-400 max-w-2xl">
              Highlights of my work in Distributed Systems, ML and Web
              Applications.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group bg-slate-900 rounded-2xl border border-slate-800 p-6 hover:border-primary-500/40 hover:shadow-2xl hover:shadow-primary-500/5 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-primary-500/20 transition-colors">
                  <FolderGit2
                    className="text-slate-300 group-hover:text-primary-400"
                    size={24}
                  />
                </div>
                {project.publication && (
                  <div className="flex items-center gap-1 text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">
                    <BookOpen size={12} />
                    Published
                  </div>
                )}
              </div>

              <div className="mb-auto">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-800">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium text-slate-500 px-2 py-1 bg-slate-950 rounded border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.publication && (
                  <div className="mt-4 text-xs text-slate-500 italic">
                    {project.publication}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
