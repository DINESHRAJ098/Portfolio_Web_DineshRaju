import React from 'react';
import { personalInfo, experiences, projects, educationHistory, certifications, hackathons } from '../data/portfolioData';
import { X, Printer, Download, ExternalLink, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex justify-center p-2 sm:p-6 md:p-10">
      <div className="relative w-full max-w-4xl bg-white text-slate-900 rounded-xl shadow-2xl overflow-hidden my-auto border border-slate-200">
        
        {/* Top Modal Controls (Hidden in Print) */}
        <div className="print:hidden bg-slate-900 text-white px-6 py-3.5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-sm text-sky-400">Official Resume Document</span>
            <span className="text-xs text-slate-400">• Updated 2026/2027</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 hover:text-white transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Canvas */}
        <div className="p-6 sm:p-10 md:p-12 space-y-6 text-slate-800 print:p-0">
          
          {/* Header */}
          <div className="text-center border-b border-slate-300 pb-4">
            <h1 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wide text-slate-900">
              {personalInfo.name}
            </h1>
            <div className="text-xs sm:text-sm text-slate-600 mt-2 flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
              <span>{personalInfo.location}</span>
              <span>|</span>
              <span>{personalInfo.phone}</span>
              <span>|</span>
              <span className="text-sky-700">{personalInfo.email}</span>
            </div>
            <div className="text-xs sm:text-sm text-slate-600 mt-1 flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline text-sky-700">
                {personalInfo.linkedinDisplay}
              </a>
              <span>|</span>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:underline text-sky-700">
                {personalInfo.githubDisplay}
              </a>
              <span>|</span>
              <a href={personalInfo.portfolioUrl} target="_blank" rel="noopener noreferrer" className="hover:underline text-sky-700">
                {personalInfo.portfolioDisplay}
              </a>
            </div>
          </div>

          {/* CAREER OBJECTIVE */}
          <div className="space-y-1.5">
            <h2 className="text-sm font-bold tracking-wider uppercase text-slate-900 border-b border-slate-400 pb-0.5">
              CAREER OBJECTIVE
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700 text-justify">
              {personalInfo.aboutBio}
            </p>
          </div>

          {/* SKILLS */}
          <div className="space-y-1.5">
            <h2 className="text-sm font-bold tracking-wider uppercase text-slate-900 border-b border-slate-400 pb-0.5">
              SKILLS
            </h2>
            <div className="text-xs sm:text-sm space-y-1 text-slate-700">
              <p>
                <strong className="text-slate-900">AI/ML & LLM:</strong> Prompt Engineering, Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), Agentic AI concepts, Generative AI Tools, Conversational Data Analytics
              </p>
              <p>
                <strong className="text-slate-900">Data & Analysis:</strong> NumPy, Pandas, SQL
              </p>
              <p>
                <strong className="text-slate-900">Languages:</strong> Python, JavaScript, HTML, CSS
              </p>
              <p>
                <strong className="text-slate-900">Frontend & Backend:</strong> React.js, Node.js, REST APIs, Responsive Design
              </p>
              <p>
                <strong className="text-slate-900">Core Strengths:</strong> Communication, Problem Solving, Time Management, Adaptability, Self-Motivated
              </p>
            </div>
          </div>

          {/* RELEVANT EXPERIENCE */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold tracking-wider uppercase text-slate-900 border-b border-slate-400 pb-0.5">
              RELEVANT EXPERIENCE
            </h2>

            {experiences.map((exp, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between items-baseline text-xs sm:text-sm">
                  <span className="font-bold text-slate-900">
                    {exp.role}
                  </span>
                  <span className="italic text-slate-600 font-mono text-xs">
                    {exp.period}
                  </span>
                </div>
                <div className="text-xs text-slate-700 italic">
                  {exp.organization} {exp.program ? `— ${exp.program}` : ''} {exp.mode ? `(${exp.mode})` : ''}
                </div>
                <ul className="list-disc list-outside pl-4 text-xs sm:text-sm text-slate-700 space-y-0.5">
                  {exp.bullets.map((b, bIdx) => (
                    <li key={bIdx}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* PROJECTS */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold tracking-wider uppercase text-slate-900 border-b border-slate-400 pb-0.5">
              PROJECTS
            </h2>

            {projects.map((proj) => (
              <div key={proj.id} className="space-y-1">
                <div className="flex flex-wrap justify-between items-baseline text-xs sm:text-sm">
                  <span className="font-bold text-slate-900">{proj.title}</span>
                  <div className="text-xs text-sky-700 font-mono flex items-center gap-2">
                    {proj.githubUrl && <span>github.com/DINESHRAJU98/...</span>}
                    {proj.liveUrl && <span>{proj.liveUrl.replace('https://', '')}</span>}
                  </div>
                </div>
                <ul className="list-disc list-outside pl-4 text-xs sm:text-sm text-slate-700 space-y-0.5">
                  {proj.bullets.map((b, bIdx) => (
                    <li key={bIdx}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CERTIFICATIONS */}
          <div className="space-y-1.5">
            <h2 className="text-sm font-bold tracking-wider uppercase text-slate-900 border-b border-slate-400 pb-0.5">
              CERTIFICATIONS
            </h2>
            <ul className="list-disc list-outside pl-4 text-xs sm:text-sm text-slate-700 space-y-0.5">
              {certifications.map((c, idx) => (
                <li key={idx}>
                  <span className="font-medium text-slate-900">{c.title}</span> — {c.date}
                </li>
              ))}
            </ul>
          </div>

          {/* EDUCATION */}
          <div className="space-y-1.5">
            <h2 className="text-sm font-bold tracking-wider uppercase text-slate-900 border-b border-slate-400 pb-0.5">
              EDUCATION
            </h2>
            <div className="space-y-2 text-xs sm:text-sm text-slate-700">
              <div className="flex justify-between items-baseline">
                <div>
                  <strong className="text-slate-900">Sandip University</strong> — B.Tech, Computer Science and Engineering
                  <div className="text-xs text-slate-600">Expected Graduation: April 2027, Nashik, India</div>
                </div>
                <span className="font-mono text-xs text-slate-600">2023 – 2027</span>
              </div>

              <div className="flex justify-between items-baseline">
                <div>
                  <strong className="text-slate-900">Sri Bhavishya Junior College</strong> — Intermediate
                </div>
                <span className="font-mono text-xs text-slate-600">2021 – 2023</span>
              </div>

              <div className="flex justify-between items-baseline">
                <div>
                  <strong className="text-slate-900">Sri Chaitanya High School</strong> — 10th Standard
                </div>
                <span className="font-mono text-xs text-slate-600">2020 – 2021</span>
              </div>
            </div>
          </div>

          {/* ADDITIONAL INFORMATION */}
          <div className="space-y-1.5">
            <h2 className="text-sm font-bold tracking-wider uppercase text-slate-900 border-b border-slate-400 pb-0.5">
              ADDITIONAL INFORMATION
            </h2>
            <ul className="list-disc list-outside pl-4 text-xs sm:text-sm text-slate-700">
              {hackathons.map((h, idx) => (
                <li key={idx}>
                  Participated in the <strong className="text-slate-900">{h.title}</strong> — {h.date}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Actions Bar (Hidden in Print) */}
        <div className="print:hidden bg-slate-50 px-6 py-4 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Click 'Print / Save PDF' to generate a physical or digital PDF copy.
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-semibold transition-colors"
            >
              Close
            </button>
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              Download / Print PDF
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
