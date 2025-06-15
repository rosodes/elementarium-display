
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const ArgonNaturalOccurrenceSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Natural Occurrence</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Abundance in atmosphere:</strong> 0.934% by volume</div>
          <div><strong>Third most abundant gas in Earth's atmosphere</strong></div>
          <div><strong>Sources:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Primarily from radioactive decay of ⁴⁰K in Earth's crust</li>
            <li>Produced by cosmic ray interactions</li>
            <li>Released from rocks and minerals over geological time</li>
            <li>Trapped in natural gas deposits</li>
            <li>Found in volcanic gases</li>
          </ul>
          <div><strong>Cosmic abundance:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Relatively rare in universe</li>
            <li>Formed by stellar nucleosynthesis</li>
            <li>Accumulates in planetary atmospheres</li>
          </ul>
          <div><strong>Environmental role:</strong> Chemically inert, no biological function</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ArgonNaturalOccurrenceSection;
