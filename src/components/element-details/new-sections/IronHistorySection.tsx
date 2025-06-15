
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

// История открытия железа
const IronHistorySection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">History & Discovery</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Known since ancient times (~3500 BCE from meteorites)</li>
        <li>Iron Age began around 1200 BCE</li>
        <li>First smelted from ore around 1500 BCE in Anatolia</li>
        <li>Name from Anglo-Saxon "iren" and Latin "ferrum"</li>
        <li>Modern steel production developed in 1800s</li>
      </ul>
    </CardContent>
  </Card>
);

export default IronHistorySection;
