'use client';
import React from 'react';
import { InlineWidget } from 'react-calendly';

const CalendlyWidget = () => {
  return (
    <div className="CalendlyWidget">
      <InlineWidget url="https://calendly.com/norainanordin/30min" />
    </div>
  );
};

export default CalendlyWidget;
