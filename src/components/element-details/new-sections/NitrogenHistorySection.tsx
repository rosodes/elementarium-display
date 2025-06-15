
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const NitrogenHistorySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Discovery & History</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Discovered:</strong> 1772 by Daniel Rutherford (Scotland)</div>
          <div><strong>Timeline:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>1772 - Daniel Rutherford isolated "noxious air" (nitrogen)</li>
            <li>1772 - Carl Wilhelm Scheele also studied "foul air"</li>
            <li>1772 - Henry Cavendish and Joseph Priestley conducted similar experiments</li>
            <li>1790 - Jean-Antoine Chaptal named it "nitrogen" (nitrate former)</li>
            <li>1908 - Fritz Haber developed ammonia synthesis process</li>
            <li>1910 - Industrial ammonia production began</li>
            <li>1917 - Nitrogen fixation became crucial for explosives in WWI</li>
          </ul>
          <div><strong>Etymology:</strong> From Greek "nitron" (native soda) + "genes" (forming)</div>
          <div><strong>Alternative names:</strong> Azote (from Greek "a-zoos" - lifeless)</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NitrogenHistorySection;
