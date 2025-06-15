
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const ChlorineExtractionSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Extraction & Production</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Chlor-alkali process (primary method):</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Electrolysis of brine (NaCl solution)</li>
            <li>Reaction: 2NaCl + 2H₂O → Cl₂ + H₂ + 2NaOH</li>
            <li>Membrane cell, diaphragm cell, or mercury cell</li>
            <li>Produces chlorine, hydrogen, and sodium hydroxide</li>
          </ul>
          <div><strong>Laboratory preparation:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>MnO₂ + 4HCl → MnCl₂ + Cl₂ + 2H₂O</li>
            <li>Oxidation of HCl with various oxidizing agents</li>
          </ul>
          <div><strong>Production scale:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Global production: ~85 million tonnes/year</li>
            <li>Major producers: China, USA, Europe</li>
            <li>Energy-intensive electrolytic process</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChlorineExtractionSection;
