
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SulfurNaturalOccurrenceSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Natural Occurrence</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Abundance in Earth's crust:</strong> 350 ppm</div>
          <div><strong>Abundance in seawater:</strong> 885 mg/L (as sulfate)</div>
          <div><strong>Natural forms:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Native sulfur deposits (volcanic regions)</li>
            <li>Pyrite (FeS₂) - "fool's gold"</li>
            <li>Galena (PbS), sphalerite (ZnS)</li>
            <li>Gypsum (CaSO₄·2H₂O), anhydrite (CaSO₄)</li>
            <li>Barite (BaSO₄), celestine (SrSO₄)</li>
            <li>Hydrogen sulfide in natural gas</li>
          </ul>
          <div><strong>Biological occurrence:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Essential amino acids (cysteine, methionine)</li>
            <li>Proteins contain sulfur-sulfur bridges</li>
            <li>Sulfur cycle in ecosystems</li>
          </ul>
          <div><strong>Major sources:</strong> Salt domes, volcanic regions, petroleum refining</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SulfurNaturalOccurrenceSection;
