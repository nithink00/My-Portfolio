import React from "react";
import { SKILLS } from "../constants";

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A robust set of tools and technologies I leverage to build scalable
            distributed systems and performant web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS.map((category) => (
            <div
              key={category.category}
              className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-primary-500/30 hover:bg-slate-900 transition-all duration-300 group"
            >
              <div className="bg-slate-800/50 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-500/10 transition-colors">
                <category.icon
                  className="text-slate-300 group-hover:text-primary-400"
                  size={24}
                />
              </div>

              <h3 className="text-xl font-semibold text-white mb-4">
                {category.category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm rounded-md bg-slate-800 text-slate-300 border border-slate-700 hover:border-primary-500/50 hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
