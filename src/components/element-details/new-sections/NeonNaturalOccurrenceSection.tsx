
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
          <div><strong>Abundance in atmosphere:</strong> 18.2 ppm</div>
          <div><strong>Universe abundance:</strong> 5th most abundant element</div>
          <div><strong>Sources:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Atmospheric gas (0.0018% by volume)</li>
            <li>Produced in stars by alpha process</li>
            <li>Found in stellar spectra</li>
            <li>Trace amounts in minerals (trapped)</li>
            <li>Natural gas deposits (very small amounts)</li>
          </ul>
          <div><strong>Stellar production:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Carbon burning in massive stars</li>
            <li>Alpha capture on oxygen-16</li>
            <li>Released during stellar evolution</li>
          </ul>
          <div><strong>Distribution:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Well-mixed in Earth's atmosphere</li>
            <li>Escapes to space very slowly</li>
            <li>No terrestrial production</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default NeonNaturalOccurrenceSection;
