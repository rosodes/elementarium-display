
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SulfurIsotopesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Isotopes</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Stable isotopes:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>³²S (95.02% abundance) - most common</li>
            <li>³⁴S (4.21% abundance)</li>
            <li>³³S (0.75% abundance)</li>
            <li>³⁶S (0.02% abundance)</li>
          </ul>
          <div><strong>Important radioactive isotopes:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>³⁵S (half-life: 87.5 days) - biological tracer</li>
            <li>³¹S (half-life: 2.6 seconds)</li>
          </ul>
          <div><strong>Applications:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>³⁵S used in biological research</li>
            <li>Isotope ratios for geological dating</li>
            <li>Environmental tracer studies</li>
          </ul>
          <div className="mt-2 text-gray-600 dark:text-gray-300">
            Sulfur has 4 stable isotopes with very consistent ratios.
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SulfurIsotopesSection;
