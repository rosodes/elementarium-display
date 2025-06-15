
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const NitrogenSafetySection: React.FC = () => (
  <Card className="my-4 border border-blue-200 dark:border-blue-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Safety &amp; Precautions</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs space-y-2">
      <div>
        <strong>Cryogenic/liquid nitrogen hazards:</strong>
        <ul className="list-disc pl-4 space-y-1">
          <li>Contact causes severe frostbite, cold burns</li>
          <li>Danger of asphyxiation in confined spaces (displaces oxygen)</li>
        </ul>
      </div>
      <div>
        <strong>Inert gas asphyxiation:</strong> Nitrogen gas is not itself toxic, but can displace oxygen, causing unconsciousness and death without warning.
      </div>
      <div>
        <strong>Lab and industrial precautions:</strong>
        <ul className="list-disc pl-4 space-y-1">
          <li>Adequate ventilation in areas using nitrogen</li>
          <li>LNG and cryo PPE: gloves, face shield, apron</li>
          <li>Monitor oxygen levels in nitrogen-enriched environments</li>
        </ul>
      </div>
      <div>
        <strong>Decompression risk:</strong> Rapid pressure changes can cause "the bends" in divers or workers.
      </div>
      <div>
        <strong>Chemical derivative hazards:</strong> Nitrogen oxides, ammonia, hydrazine highly toxic — use protective equipment and follow all standards.
      </div>
      <div className="mt-2 text-[11px] text-gray-500">
        Sources: OSHA, Air Liquide, Safety Data Sheets
      </div>
    </CardContent>
  </Card>
);

export default NitrogenSafetySection;
