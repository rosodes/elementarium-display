
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const ScandiumNaturalOccurrenceSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Natural Occurrence</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Abundance in Earth's crust:</strong> 22 ppm</div>
          <div><strong>Main sources:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Thortveitite (Sc₂Si₂O₇) - main ore</li>
            <li>Euxenite (complex oxide mineral)</li>
            <li>Gadolinite (rare earth silicate)</li>
            <li>By-product of uranium and rare earth mining</li>
            <li>Wolframite deposits</li>
          </ul>
          <div><strong>Major deposits:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Madagascar (largest reserves)</li>
            <li>Norway</li>
            <li>Russia</li>
            <li>China</li>
            <li>Ukraine</li>
          </ul>
          <div><strong>Distribution:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Widely distributed but in low concentrations</li>
            <li>Found in granitic rocks</li>
            <li>Present in some iron meteorites</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default ScandiumNaturalOccurrenceSection;
