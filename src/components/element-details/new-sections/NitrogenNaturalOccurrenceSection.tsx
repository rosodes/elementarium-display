
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const NitrogenNaturalOccurrenceSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Natural Occurrence</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Atmosphere:</strong> 78.09% by volume (most abundant gas)</div>
          <div><strong>Abundance in Earth's crust:</strong> 19 ppm</div>
          <div><strong>Abundance in universe:</strong> 7th most abundant element</div>
          <div><strong>Natural forms:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Diatomic gas (N₂) in atmosphere</li>
            <li>Nitrates in soil and minerals (Chile saltpeter - NaNO₃)</li>
            <li>Ammonia in trace amounts</li>
            <li>Organic nitrogen in all living organisms</li>
            <li>Protein content in plants and animals</li>
            <li>DNA and RNA nucleotides</li>
            <li>Atmospheric nitrogen oxides from lightning</li>
          </ul>
          <div><strong>Major sources:</strong> Air separation plants, natural gas processing</div>
          <div><strong>Biological cycle:</strong> Nitrogen fixation by bacteria, plant uptake, decay</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NitrogenNaturalOccurrenceSection;
