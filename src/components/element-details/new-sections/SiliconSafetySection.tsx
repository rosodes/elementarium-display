
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SiliconSafetySection: React.FC = () => {
  return (
    <Card className="my-4 border border-red-200 dark:border-red-700">
      <CardHeader className="bg-red-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Safety & Health</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Pure silicon is generally non-toxic and biologically inert</li>
          <li><strong>Crystalline silica dust:</strong> causes silicosis (lung disease)</li>
          <li>Industrial exposure requires respiratory protection</li>
          <li>Silicon dust can cause lung inflammation and scarring</li>
          <li>Silane gas (SiH₄) is toxic and spontaneously combustible</li>
          <li>Silicon tetrachloride is corrosive and releases toxic HCl</li>
          <li>Proper ventilation required in silicon processing facilities</li>
          <li>Medical grade silicones are biocompatible and safe</li>
          <li>Electronic grade silicon requires clean room handling</li>
          <li>OSHA regulations apply to crystalline silica exposure</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default SiliconSafetySection;
