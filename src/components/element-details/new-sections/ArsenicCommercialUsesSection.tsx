
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const ArsenicCommercialUsesSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Commercial Uses</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Semiconductors: GaAs, InAs compounds (~90%)</li>
        <li>LEDs and laser diodes</li>
        <li>High-frequency electronics</li>
        <li>Solar cells and photovoltaics</li>
        <li>Wood preservatives (chromated copper arsenate)</li>
        <li>Alloys for lead-acid batteries</li>
        <li>Glass manufacturing (clarifying agent)</li>
      </ul>
    </CardContent>
  </Card>
);

export default ArsenicCommercialUsesSection;
