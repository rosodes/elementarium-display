
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const BoronSafetySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Safety & Health</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>General safety:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Elemental boron is relatively non-toxic</li>
            <li>Some boron compounds can be harmful</li>
            <li>Avoid inhalation of boron dust</li>
            <li>Use proper ventilation when handling</li>
          </ul>
          <div><strong>Health effects:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Essential for plants in small amounts</li>
            <li>May be beneficial for humans in trace amounts</li>
            <li>Large doses can cause boric acid poisoning</li>
            <li>Skin and eye irritation possible</li>
          </ul>
          <div><strong>Compound-specific hazards:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Boric acid: mild irritant, avoid ingestion</li>
            <li>Borax: eye and respiratory irritant</li>
            <li>Boron trifluoride: highly toxic and corrosive</li>
            <li>Diborane: extremely toxic and flammable</li>
          </ul>
          <div><strong>Handling precautions:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Wear protective equipment when needed</li>
            <li>Proper storage of reactive compounds</li>
            <li>Emergency eye wash stations</li>
            <li>Material safety data sheets consultation</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default BoronSafetySection;
