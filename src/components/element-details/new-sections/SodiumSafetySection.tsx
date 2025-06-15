
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SodiumSafetySection: React.FC = () => {
  return (
    <Card className="my-4 border border-red-200 dark:border-red-700">
      <CardHeader className="bg-red-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Safety & Handling</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Major hazards:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Reacts violently with water, producing hydrogen gas</li>
            <li>Highly corrosive to skin and eyes</li>
            <li>Fire and explosion risk in contact with moisture</li>
            <li>Burns are severe and can be fatal</li>
          </ul>
          <div><strong>Storage requirements:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Store under mineral oil or kerosene</li>
            <li>Keep in dry, inert atmosphere</li>
            <li>Avoid contact with air and moisture</li>
            <li>Use specialized containers and handling equipment</li>
          </ul>
          <div><strong>Emergency procedures:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Never use water on sodium fires</li>
            <li>Use dry sand or special metal fire extinguishers</li>
            <li>Evacuate area if large quantities are involved</li>
            <li>Seek immediate medical attention for burns</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default SodiumSafetySection;
