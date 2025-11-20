import React from "react";
import { SOCIAL_LINKS } from "../constants";
import { Mail, Linkedin, Phone, ArrowUp } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <footer
      id="contact"
      className="bg-slate-950 pt-24 pb-12 border-t border-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Let's Connect
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              I'm exploring opportunities in backend engineering, cloud
              infrastructure, and distributed systems. If you'd like to connect
              or have a question, feel free to reach out.
            </p>
            <a
              href={SOCIAL_LINKS.email}
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-white font-semibold rounded-full hover:bg-primary-600 transition-colors shadow-lg shadow-primary-500/20"
            >
              Say Hello
            </a>
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <a
              href={SOCIAL_LINKS.email}
              className="flex items-center p-6 bg-slate-900 rounded-2xl border border-slate-800 hover:border-primary-500/50 transition-all group"
            >
              <div className="bg-slate-800 p-3 rounded-full mr-4 group-hover:bg-primary-500 group-hover:text-white transition-colors text-slate-400">
                <Mail size={24} />
              </div>
              <div>
                <span className="block text-sm text-slate-500">Email</span>
                <span className="text-lg text-white font-medium">
                  nithinkatla19@gmail.com
                </span>
              </div>
            </a>

            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center p-6 bg-slate-900 rounded-2xl border border-slate-800 hover:border-primary-500/50 transition-all group"
            >
              <div className="bg-slate-800 p-3 rounded-full mr-4 group-hover:bg-primary-500 group-hover:text-white transition-colors text-slate-400">
                <Linkedin size={24} />
              </div>
              <div>
                <span className="block text-sm text-slate-500">LinkedIn</span>
                <span className="text-lg text-white font-medium">
                  Connect on LinkedIn
                </span>
              </div>
            </a>

            <div className="flex items-center p-6 bg-slate-900 rounded-2xl border border-slate-800 hover:border-primary-500/50 transition-all group">
              <div className="bg-slate-800 p-3 rounded-full mr-4 group-hover:bg-primary-500 group-hover:text-white transition-colors text-slate-400">
                <Phone size={24} />
              </div>
              <div>
                <span className="block text-sm text-slate-500">Phone</span>
                <span className="text-lg text-white font-medium">
                  +1 (934) 451-9425
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Nithin Katla. All rights reserved.
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="p-3 bg-slate-900 rounded-full text-slate-400 hover:text-primary-400 hover:bg-slate-800 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
