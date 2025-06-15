
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const BerylliumExtractionSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Extraction & Production</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>From beryl ore:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Crushing and grinding of beryl ore</li>
            <li>Fusion with sodium hexafluorosilicate</li>
            <li>Leaching with sulfuric acid</li>
            <li>Precipitation as beryllium hydroxide</li>
            <li>Conversion to beryllium fluoride (BeF₂)</li>
          </ul>
          <div><strong>Metal production:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Reduction of BeF₂ with magnesium</li>
            <li>Electrolysis of molten BeCl₂-NaCl mixture</li>
            <li>Vacuum melting and casting</li>
            <li>Powder metallurgy for complex shapes</li>
          </ul>
          <div><strong>Challenges:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Extremely toxic during processing</li>
            <li>Requires specialized safety equipment</li>
            <li>High energy consumption</li>
            <li>Limited ore availability</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default BerylliumExtractionSection;
