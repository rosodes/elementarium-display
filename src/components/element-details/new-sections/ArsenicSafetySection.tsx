
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const ArsenicSafetySection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Safety & Health</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Highly toxic - carcinogenic to humans</li>
        <li>Acute poisoning can be fatal</li>
        <li>Chronic exposure causes skin lesions</li>
        <li>Groundwater contamination major concern</li>
        <li>Strict occupational exposure limits</li>
        <li>Proper ventilation and protective equipment required</li>
        <li>Environmental monitoring essential</li>
      </ul>
    </CardContent>
  </Card>
);

export default ArsenicSafetySection;
