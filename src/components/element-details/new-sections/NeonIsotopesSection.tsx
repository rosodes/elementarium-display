
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
            <li>²²Ne (9.25% abundance) - stable isotope</li>
            <li>²¹Ne (0.27% abundance) - rare stable isotope</li>
          </ul>
          <div><strong>Important radioactive isotopes:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>²³Ne (half-life: 37.2 seconds) - research</li>
            <li>¹⁹Ne (half-life: 17.2 seconds) - research</li>
          </ul>
          <div><strong>Applications:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>²⁰Ne/²²Ne ratios in meteorite studies</li>
            <li>Isotope research in astrophysics</li>
            <li>Solar wind composition studies</li>
            <li>Atmospheric evolution research</li>
          </ul>
          <div className="mt-2 text-gray-600 dark:text-gray-300">
            Neon isotope ratios help understand solar system formation.
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NeonIsotopesSection;
