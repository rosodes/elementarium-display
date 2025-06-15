
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const CalciumIsotopesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Isotopes</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Stable isotopes:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>⁴⁰Ca (96.94% abundance) - most common isotope</li>
            <li>⁴²Ca (0.647% abundance)</li>
            <li>⁴³Ca (0.135% abundance)</li>
            <li>⁴⁴Ca (2.086% abundance)</li>
            <li>⁴⁶Ca (0.004% abundance)</li>
            <li>⁴⁸Ca (0.187% abundance)</li>
          </ul>
          <div><strong>Notable properties:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>⁴¹Ca used in medical imaging</li>
            <li>⁴⁵Ca used as radioactive tracer</li>
            <li>Range from ³⁴Ca to ⁶⁰Ca known</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default CalciumIsotopesSection;
