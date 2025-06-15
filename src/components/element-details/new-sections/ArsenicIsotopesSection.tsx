
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const ArsenicIsotopesSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Isotopes</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <div>
        <strong>Natural arsenic isotopes:</strong>
        <ul className="pl-4 list-disc">
          <li><b>As-75:</b> 100%, stable (only stable isotope)</li>
        </ul>
        <div className="mt-2">
          <strong>Radioactive isotopes:</strong>
          <ul className="pl-4 list-disc">
            <li>As-74: 17.8 days half-life</li>
            <li>As-76: 1.08 days half-life</li>
            <li>As-72: 26 hours half-life</li>
          </ul>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default ArsenicIsotopesSection;
