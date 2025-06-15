
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SiliconIsotopesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Isotopes</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Stable isotopes:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>²⁸Si (92.23% abundance) - most common isotope</li>
            <li>²⁹Si (4.67% abundance) - used in NMR studies</li>
            <li>³⁰Si (3.10% abundance) - used in isotope studies</li>
          </ul>
          <div><strong>Notable radioactive isotopes:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>³²Si (half-life: 153 years) - cosmogenic isotope</li>
            <li>³¹Si (half-life: 2.62 hours) - medical applications</li>
            <li>All other isotopes have very short half-lives</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default SiliconIsotopesSection;
