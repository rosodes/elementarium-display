
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const BromineSafetySection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Safety & Health</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Highly toxic and corrosive to skin, eyes, lungs</li>
        <li>Causes severe chemical burns on contact</li>
        <li>Vapors irritate respiratory system</li>
        <li>Can cause bromine poisoning (bromism)</li>
        <li>Requires specialized handling and storage</li>
        <li>Environmental concerns: ozone depletion</li>
        <li>Strict workplace exposure limits enforced</li>
      </ul>
    </CardContent>
  </Card>
);

export default BromineSafetySection;
