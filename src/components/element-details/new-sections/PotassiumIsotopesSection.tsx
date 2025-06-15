
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const PotassiumIsotopesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Isotopes</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Stable isotopes:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>³⁹K (93.26% abundance) - most common isotope</li>
            <li>⁴¹K (6.73% abundance) - stable isotope</li>
          </ul>
          <div><strong>Radioactive isotopes:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>⁴⁰K (0.01% abundance, t½ = 1.25 billion years)</li>
            <li>Used in potassium-argon dating of rocks</li>
            <li>Natural radioactivity in human body</li>
            <li>Other isotopes range from ³²K to ⁵⁹K</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default PotassiumIsotopesSection;
