
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const ZincHistorySection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">History & Discovery</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Used in alloys since ancient times (brass)</li>
        <li>Pure zinc isolated by Andreas Marggraf (1746, Germany)</li>
        <li>Name from German "Zink" (pointed, referring to crystal shape)</li>
        <li>Ancient Greeks and Romans knew zinc alloys</li>
        <li>Industrial production began in 18th century</li>
        <li>Galvanization process developed in 1830s</li>
        <li>Essential element role discovered in 20th century</li>
      </ul>
    </CardContent>
  </Card>
);

export default ZincHistorySection;
