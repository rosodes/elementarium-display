
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const NeonIsotopesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Isotopes</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Stable isotopes:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>²⁰Ne (90.48% abundance) - most common isotope</li>
            <li>²²Ne (9.25% abundance) - second most common</li>
            <li>²¹Ne (0.27% abundance) - rare stable isotope</li>
          </ul>
          <div><strong>Important radioactive isotopes:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>²⁴Ne (half-life: 3.38 minutes) - research applications</li>
            <li>¹⁹Ne (half-life: 17.22 seconds) - laboratory studies</li>
          </ul>
          <div><strong>Applications:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Isotope ratios in cosmology research</li>
            <li>Solar wind studies using isotope signatures</li>
            <li>Nuclear physics research</li>
            <li>Dating of meteorites and lunar samples</li>
          </ul>
          <div className="mt-2 text-gray-600 dark:text-gray-300">
            Neon isotope ratios provide insights into solar system formation.
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NeonIsotopesSection;
