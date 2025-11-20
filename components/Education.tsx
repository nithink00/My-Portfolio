import React from "react";
import { EDUCATION } from "../constants";
import { GraduationCap } from "lucide-react";

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-slate-900/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Education
        </h2>

        <div className="space-y-8">
          {EDUCATION.map((edu, idx) => (
            <div
              key={idx}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col md:flex-row gap-6 items-start md:items-center transition-hover hover:border-slate-700"
            >
              <div className="bg-slate-800 p-4 rounded-xl shrink-0">
                <GraduationCap className="text-primary-400" size={32} />
              </div>

              <div className="flex-1 w-full">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-xl font-bold text-white">{edu.school}</h3>
                  <span className="text-sm text-slate-500 bg-slate-950 px-3 py-1 rounded-full border border-slate-800 mt-2 md:mt-0 w-fit">
                    {edu.period}
                  </span>
                </div>

                <h4 className="text-lg text-primary-400 mb-2">{edu.degree}</h4>
                <p className="text-slate-500 text-sm mb-4">{edu.location}</p>

                {edu.courses && (
                  <div className="pt-4 border-t border-slate-800">
                    <p className="text-sm text-slate-400">
                      <span className="font-semibold text-slate-300">
                        Relevant Courses:
                      </span>{" "}
                      {edu.courses}
                    </p>
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

export default Education;
