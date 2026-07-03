import React from 'react';

/**
 * Screen-reader / crawler-only semantic content.
 * Injects target keywords directly into the DOM so crawlers pick them up
 * without altering the visual design.
 */
const SEOKeywords: React.FC = () => (
  <div className="sr-only" aria-hidden="false">
    <h1>Sowmiyan S — AI Developer & Full Stack Engineer from Namakkal, Tamil Nadu</h1>
    <h2>Sowmiyan Developer · Sowmiyan S VSB College of Engineering Technical Campus</h2>
    <p>
      Sowmiyan S is a Tamil AI developer and full stack engineer based in Kandampalayam,
      Tiruchengode, Namakkal district, Tamil Nadu, India. As a tech developer studying at
      VSB College of Engineering Technical Campus (VSB CETC), Sowmiyan builds intelligent
      AI systems, LLM applications, and modern web experiences using React, TypeScript,
      Python, and cloud infrastructure. Also known as the developer behind the Bound By Code
      YouTube channel, Sowmiyan shares Tamil-language tutorials on AI tools, vibe coding,
      and open-source engineering. Sowmiyan is a developer in Tiruchengode, Namakkal — a
      Tamil Nadu developer available for freelance projects, internships, and full-time
      roles.
    </p>
  </div>
);

export default SEOKeywords;
