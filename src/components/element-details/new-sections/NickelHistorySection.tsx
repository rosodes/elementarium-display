
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const NickelHistorySection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">History &amp; Discovery</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Used in ancient times in meteoritic iron-nickel alloys</li>
        <li>Isolated by Axel Fredrik Cronstedt in 1751 (Sweden)</li>
        <li>Name from German "kupfernickel" (devil's copper)</li>
        <li>Miners found ore that looked like copper but wasn't</li>
        <li>First pure nickel extracted in 1775</li>
        <li>Large-scale production began in 1880s</li>
        <li>Crucial for stainless steel development (early 1900s)</li>
      </ul>
    </CardContent>
  </Card>
);

export default NickelHistorySection;
