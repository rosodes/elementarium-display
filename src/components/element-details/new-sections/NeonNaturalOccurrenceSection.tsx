
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const NeonNaturalOccurrenceSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Natural Occurrence</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Atmospheric abundance:</strong> 18.2 ppm (0.0018%)</div>
          <div><strong>Abundance in Earth's crust:</strong> Very rare (5×10⁻³ ppm)</div>
          <div><strong>Natural sources:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Earth's atmosphere - only significant source</li>
            <li>Trace amounts in some minerals</li>
            <li>Produced in stars by nuclear fusion</li>
            <li>Found in small amounts in natural gas</li>
          </ul>
          <div><strong>Cosmic abundance:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>5th most abundant element in the universe</li>
            <li>Produced in stellar nucleosynthesis</li>
            <li>Common in stellar atmospheres</li>
            <li>Found in planetary nebulae</li>
          </ul>
          <div><strong>Atmospheric properties:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Lighter than air (but trapped during formation)</li>
            <li>Does not escape to space easily</li>
            <li>Remains constant in atmosphere</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default NeonNaturalOccurrenceSection;
