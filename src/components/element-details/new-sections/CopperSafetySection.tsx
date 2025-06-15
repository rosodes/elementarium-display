
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const CopperSafetySection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Safety & Health</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Essential trace element but toxic in large amounts</li>
        <li>Wilson's disease - genetic copper accumulation disorder</li>
        <li>Copper fumes can cause metal fume fever</li>
        <li>Proper ventilation needed when welding/cutting</li>
        <li>Copper sulfate is toxic if ingested</li>
        <li>Generally safe for normal handling and use</li>
      </ul>
    </CardContent>
  </Card>
);

export default CopperSafetySection;
