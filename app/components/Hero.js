'use client';
import { useState } from 'react';
import CalendlyWidget from './CalendlyWidget';

export default function Hero() {
  const [showCalendly, setShowCalendly] = useState(false);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('my-projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="hero mt-10">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-gray-700 text-4xl font-bold">
              Hello, I&apos;m Noraina
            </h1>
            <p className="text-gray-700 text-xl mb-8 py-6">
              I help small and medium business to automate the repetitive tasks
              with NO-CODE, LOW-CODE or FULL-CODE solution.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={scrollToProjects}
                className="btn btn-outline text-gray-700 transition duration-300"
              >
                My Projects
              </button>
              <button
                onClick={() => setShowCalendly(true)}
                className="btn btn-primary text-gray-700 transition duration-300"
              >
                Book a FREE Discovery Call
              </button>
            </div>
          </div>
        </div>
      </section>

      {showCalendly && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg relative w-full max-w-md max-h-[90vh] overflow-auto">
            <button
              onClick={() => setShowCalendly(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 z-10"
            >
              Close
            </button>
            <CalendlyWidget />
          </div>
        </div>
      )}
    </>
  );
}
