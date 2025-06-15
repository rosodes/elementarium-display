
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const NickelSafetySection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Safety &amp; Health</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Contact allergies common (~10% of population)</li>
        <li>Nickel carbonyl (Ni(CO)₄) extremely toxic</li>
        <li>Some nickel compounds are carcinogenic</li>
        <li>Occupational exposure limits strictly regulated</li>
        <li>Proper ventilation needed in processing</li>
        <li>Essential trace element for some organisms</li>
      </ul>
    </CardContent>
  </Card>
);

export default NickelSafetySection;
