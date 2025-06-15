
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const AluminumIsotopesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Isotopes</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Stable isotope:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>²⁷Al (100% abundance) - only stable isotope</li>
          </ul>
          <div><strong>Important radioactive isotopes:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>²⁶Al (half-life: 717,000 years) - cosmogenic nuclide</li>
            <li>²⁸Al (half-life: 2.24 minutes) - medical applications</li>
            <li>²⁹Al (half-life: 6.56 minutes) - research tracer</li>
          </ul>
          <div><strong>Applications:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>²⁶Al dating in meteorites and sediments</li>
            <li>Cosmogenic dating techniques</li>
            <li>Nuclear research applications</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default AluminumIsotopesSection;
