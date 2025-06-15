
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const CarbonBioSection: React.FC = () => (
  <Card className="my-4 border border-green-200 dark:border-green-700">
    <CardHeader className="bg-green-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Biological Role & Toxicity</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <div className="space-y-2">
        <div>
          <strong>Biological Role:</strong> Carbon is the backbone of all known life, vital for complex biomolecules and as a component of all living cells.
        </div>
        <ul className="list-disc pl-4 space-y-1">
          <li>Basis of carbohydrates, lipids, proteins, nucleic acids (DNA/RNA).</li>
          <li>Essential for metabolism, cell structure, energy storage and transfer.</li>
          <li>Enables formation of millions of organic molecules via catenation and versatile bonding.</li>
          <li>Plays a critical role in the global carbon cycle (respiration, photosynthesis, decomposition).</li>
          <li>Human body mass: ~18% carbon.</li>
        </ul>
        <div>
          <strong>Toxicity:</strong>
        </div>
        <ul className="list-disc pl-4 space-y-1">
          <li>Elemental forms (diamond, graphite): non-toxic to humans and animals.</li>
          <li>Carbon dust (graphite/coal dust) may cause lung irritation with chronic exposure.</li>
          <li>Some carbon compounds are extremely toxic: carbon monoxide (CO), cyanides, phosgene.</li>
        </ul>
        <div>
          <strong>Environmental & Health Impact:</strong> Carbon dioxide (CO₂) is a potent greenhouse gas; excessive levels cause respiratory issues or death in confined spaces.
        </div>
        <div className="mt-2 text-gray-600 dark:text-gray-300">
          Carbon is indispensable for all life — but some compounds (like CO) are hazardous.
        </div>
      </div>
    </CardContent>
  </Card>
);

export default CarbonBioSection;
