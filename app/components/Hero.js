'use client';
import { useState } from 'react';

export default function Hero() {
  const [showCalendly, setShowCalendly] = useState(false);

  return (
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
            <button className="btn btn-outline text-gray-700 transition duration-300">
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

        {showCalendly && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            {/* Insert Calendly embed code here */}
            <button onClick={() => setShowCalendly(false)}>Close</button>
          </div>
        )}
      </div>
    </section>
  );
}
