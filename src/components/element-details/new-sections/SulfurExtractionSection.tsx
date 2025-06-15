
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SulfurExtractionSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Extraction & Production</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Frasch process:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Melts underground sulfur with superheated water</li>
            <li>Forces molten sulfur to surface with compressed air</li>
            <li>Produces very pure sulfur (99.5%+)</li>
          </ul>
          <div><strong>Claus process:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Recovers sulfur from hydrogen sulfide gas</li>
            <li>2H₂S + SO₂ → 3S + 2H₂O</li>
            <li>Major source from natural gas processing</li>
          </ul>
          <div><strong>Other sources:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Mining native sulfur deposits</li>
            <li>Roasting metal sulfide ores</li>
            <li>By-product of petroleum refining</li>
          </ul>
          <div><strong>Annual production:</strong> ~70 million tons globally</div>
          <div><strong>Major producers:</strong> China, USA, Russia, Canada</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SulfurExtractionSection;
