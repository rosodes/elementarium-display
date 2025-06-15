
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const NickelCommercialUsesSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Commercial Uses</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Stainless steel production (~70% of use)</li>
        <li>Other alloys: superalloys, Inconel, Monel</li>
        <li>Electroplating for corrosion resistance</li>
        <li>Rechargeable batteries (NiMH, NiCd)</li>
        <li>Catalysts in chemical industry</li>
        <li>Coins and jewelry</li>
        <li>Magnetic materials and electronics</li>
      </ul>
    </CardContent>
  </Card>
);

export default NickelCommercialUsesSection;
