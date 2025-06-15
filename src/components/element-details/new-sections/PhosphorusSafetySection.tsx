
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const PhosphorusSafetySection: React.FC = () => (
  <Card className="my-4 border border-red-200 dark:border-red-700">
    <CardHeader className="bg-red-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Safety & Precautions</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>White phosphorus is highly toxic and a severe fire/health risk—must be stored under water, handled with great care.</li>
        <li>Causes severe burns if it contacts skin and is fatal if ingested.</li>
        <li>Red phosphorus is much less hazardous, but can convert to white form and should be handled with caution.</li>
        <li>Wear gloves, safety goggles, and use fume hoods when handling all forms in the lab.</li>
        <li>Chronic exposure (match industry) causes “phossy jaw” (necrosis of the jawbone).</li>
        <li>Fertilizer-grade compounds (phosphates) are of low toxicity and do not pose general handling problems.</li>
      </ul>
    </CardContent>
  </Card>
);

export default PhosphorusSafetySection;
