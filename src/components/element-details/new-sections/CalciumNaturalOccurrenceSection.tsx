
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const CalciumNaturalOccurrenceSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Natural Occurrence</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Abundance in Earth's crust:</strong> 4.15% (5th most abundant)</div>
          <div><strong>Main sources:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Limestone (CaCO₃) - most abundant source</li>
            <li>Marble (metamorphic CaCO₃)</li>
            <li>Chalk (CaCO₃)</li>
            <li>Gypsum (CaSO₄·2H₂O)</li>
            <li>Fluorite (CaF₂)</li>
            <li>Seawater (400 ppm)</li>
          </ul>
          <div><strong>Biological occurrence:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Bones and teeth (hydroxyapatite)</li>
            <li>Coral reefs and shells</li>
            <li>Essential for all living organisms</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default CalciumNaturalOccurrenceSection;
