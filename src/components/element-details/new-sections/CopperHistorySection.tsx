
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const CopperHistorySection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">History & Discovery</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>One of the first metals used by humans (~8000 BCE)</li>
        <li>Copper Age preceded Bronze Age</li>
        <li>Name from Latin "cuprum" (from Cyprus)</li>
        <li>Symbol Cu from Latin "cuprum"</li>
        <li>Essential for development of civilization</li>
        <li>Bronze (copper-tin alloy) revolutionized tools and weapons</li>
      </ul>
    </CardContent>
  </Card>
);

export default CopperHistorySection;
