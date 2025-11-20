import React, { useState, useEffect } from "react";
import { HERO_TITLES, SOCIAL_LINKS } from "../constants";
import { ArrowRight, Github, Linkedin, Mail, User } from "lucide-react";
import profileImg from "../images/profile.jpg";

const Hero: React.FC = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = HERO_TITLES[titleIndex];
    const typeSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentTitle.substring(0, displayedText.length + 1));
        if (displayedText.length === currentTitle.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayedText(currentTitle.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % HERO_TITLES.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, titleIndex]);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden"
      id="about"
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full mix-blend-screen filter blur-[128px] opacity-50 animate-blob"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-600/20 rounded-full mix-blend-screen filter blur-[128px] opacity-50 animate-blob animation-delay-2000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
          {/* Left Column: Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-8 z-10">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-400 text-sm font-medium mb-4 backdrop-blur-sm">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                </span>
                Open to Work
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-violet-400">
                  Nithin Katla
                </span>
              </h1>

              <div className="h-12 lg:h-16 flex justify-center lg:justify-start items-center">
                <span className="text-2xl lg:text-4xl font-semibold text-slate-400">
                  I am a {displayedText}
                  <span className="animate-pulse ml-1 text-primary-400">|</span>
                </span>
              </div>

              <p className="text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Specializing in building reliable backend systems, cloud
                infrastructure and distributed systems. I turn complex
                engineering problems into simple, scalable and efficient
                solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="px-8 py-3 rounded-full bg-primary-500 text-white font-semibold hover:bg-primary-600 transition-all flex items-center gap-2 shadow-lg shadow-primary-500/25 transform hover:-translate-y-1"
              >
                Contact Me <ArrowRight size={18} />
              </a>
              <a
                href="#resume"
                className="px-8 py-3 rounded-full border border-slate-700 text-slate-300 font-semibold hover:border-primary-500 hover:text-primary-400 transition-all bg-slate-900/50 backdrop-blur-sm transform hover:-translate-y-1"
              >
                View Resume
              </a>
            </div>

            <div className="flex items-center gap-6 justify-center lg:justify-start pt-4">
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-white transition-colors transform hover:scale-110"
              >
                <Linkedin size={28} />
              </a>
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-white transition-colors transform hover:scale-110"
              >
                <Github size={28} />
              </a>
              <a
                href={SOCIAL_LINKS.email}
                className="text-slate-400 hover:text-white transition-colors transform hover:scale-110"
              >
                <Mail size={28} />
              </a>
            </div>
          </div>

          {/* Right Column: Profile Image */}
          <div className="hidden lg:block w-full lg:w-5/12 z-10 pl-0 lg:pl-8">
            <div className="relative w-full aspect-square max-w-md mx-auto group">
              {/* Soft Glow */}
              <div
                className="absolute inset-0 rounded-2xl blur-xl opacity-30 group-hover:opacity-60 
      transition duration-700 bg-gradient-to-tr from-primary-500 to-violet-500"
              ></div>

              {/* Subtle rotated card frame */}
              <div
                className="absolute inset-0 rounded-2xl bg-slate-800 border border-slate-700 
      rotate-3 group-hover:rotate-0 transition-transform duration-500 ease-out"
              ></div>

              {/* Main Image Container */}
              <div
                className="absolute inset-0 rounded-2xl overflow-hidden bg-slate-900 border border-slate-700 
      shadow-xl transition-transform duration-500"
              >
                <img
                  src={profileImg}
                  alt="Nithin Katla"
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-700 
        group-hover:scale-105"
                  loading="eager"
                />

                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <div
                    className="bg-slate-900/90 backdrop-blur-md border border-slate-700/50 p-4 rounded-xl 
          translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 
          transition-all duration-500 delay-100 shadow-xl"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-2 w-2 rounded-full bg-emerald-500 animate-ping"></div>
                      <span className="text-emerald-400 text-xs font-bold tracking-wider uppercase">
                        Available Now
                      </span>
                    </div>
                    <p className="text-slate-300 text-sm font-medium">
                      Expert in Full-Stack and Distributed Systems
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
