
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const FluorineSafetySection: React.FC = () => {
  return (
    <Card className="my-4 border border-red-200 dark:border-red-700">
      <CardHeader className="bg-red-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Safety Information</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Extreme hazards:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Highly toxic and corrosive gas</li>
            <li>Causes severe chemical burns</li>
            <li>Reacts violently with organic matter</li>
            <li>Can ignite many materials spontaneously</li>
          </ul>
          <div><strong>Health effects:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Severe respiratory irritation</li>
            <li>Chemical burns to skin and eyes</li>
            <li>Bone and tooth damage (fluorosis)</li>
            <li>Can be fatal in high concentrations</li>
          </ul>
          <div><strong>Handling precautions:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Use only in specialized facilities</li>
            <li>Require extensive safety training</li>
            <li>Full protective equipment mandatory</li>
            <li>Emergency procedures essential</li>
          </ul>
          <div><strong>Storage requirements:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Nickel or Monel containers only</li>
            <li>Dry, inert atmosphere</li>
            <li>Remote, well-ventilated areas</li>
            <li>Emergency response systems</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default FluorineSafetySection;
