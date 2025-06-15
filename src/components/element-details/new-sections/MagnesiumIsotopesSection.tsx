
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const MagnesiumIsotopesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Isotopes</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Stable isotopes:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>²⁴Mg (78.99% abundance) - most common isotope</li>
            <li>²⁵Mg (10.00% abundance)</li>
            <li>²⁶Mg (11.01% abundance)</li>
          </ul>
          <div><strong>Important radioactive isotopes:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>²³Mg (half-life: 11.3 seconds) - research applications</li>
            <li>²⁷Mg (half-life: 9.46 minutes) - medical tracers</li>
            <li>²⁸Mg (half-life: 20.9 hours) - nuclear research</li>
          </ul>
          <div><strong>Applications:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Isotope ratio studies in geology and cosmology</li>
            <li>Medical imaging and research</li>
            <li>Nuclear physics research</li>
            <li>Meteorite age dating</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default MagnesiumIsotopesSection;
