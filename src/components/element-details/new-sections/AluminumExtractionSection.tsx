
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const AluminumExtractionSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Commercial Production & Extraction</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Hall-Héroult Process (primary production):</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Bauxite ore purified to alumina (Al₂O₃) via Bayer process</li>
            <li>Electrolysis of alumina dissolved in molten cryolite (Na₃AlF₆)</li>
            <li>Process occurs at 950-980°C in carbon-lined cells</li>
            <li>Reaction: 2Al₂O₃ + 3C → 4Al + 3CO₂</li>
            <li>Requires enormous amounts of electricity (3 electrons per Al atom)</li>
          </ul>
          <div><strong>Recycling (secondary production):</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Melting and reprocessing of scrap aluminum</li>
            <li>Uses only 5% of energy required for primary production</li>
            <li>No loss of material properties through recycling</li>
            <li>Provides about 1/3 of global aluminum supply</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default AluminumExtractionSection;
