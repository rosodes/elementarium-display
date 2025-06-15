
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const CobaltHistorySection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">History &amp; Discovery</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Used as blue pigment since ancient times (2600 BCE)</li>
        <li>Isolated as pure metal by Georg Brandt in 1735</li>
        <li>First recognized as a distinct element in Sweden</li>
        <li>Name from German "kobald" (evil spirit/goblin)</li>
        <li>Miners blamed cobalt ore for arsenic poisoning</li>
        <li>Commercial production began in early 1900s</li>
        <li>Co-60 discovered in 1938, revolutionized cancer treatment</li>
      </ul>
    </CardContent>
  </Card>
);

export default CobaltHistorySection;
