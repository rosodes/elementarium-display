
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const ArgonInterestingFactsSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Interesting Facts</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Third most abundant gas in Earth's atmosphere</li>
          <li>Completely colorless, odorless, and tasteless</li>
          <li>2.5 times more soluble in water than nitrogen</li>
          <li>Makes distinctive blue-violet glow in gas discharge tubes</li>
          <li>Used in light bulbs to prevent tungsten filament oxidation</li>
          <li>Forms no known stable chemical compounds</li>
          <li>Denser than air - can be "poured" like a liquid</li>
          <li>Discovery led to understanding of noble gases</li>
          <li>Used by scuba divers in specialized gas mixtures</li>
          <li>Critical for preserving historical documents</li>
          <li>Essential for growing silicon crystals</li>
          <li>Can suffocate in enclosed spaces (displaces oxygen)</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default ArgonInterestingFactsSection;
