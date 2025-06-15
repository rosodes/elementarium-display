
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const PhosphorusHistorySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">History & Discovery</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li><strong>1669:</strong> Discovered by Hennig Brand in Hamburg</li>
          <li>First element discovered by an alchemist</li>
          <li>Brand isolated it from urine while searching for philosopher's stone</li>
          <li>Named "phosphorus" meaning "light-bearer" due to its glow</li>
          <li><strong>1680:</strong> Robert Boyle independently isolated phosphorus</li>
          <li><strong>1769:</strong> Scheele and Gahn obtained it from bone ash</li>
          <li><strong>1830s:</strong> Industrial production began using bone ash</li>
          <li><strong>1888:</strong> Red phosphorus discovered by Anton von Schrötter</li>
          <li><strong>1844:</strong> First safety matches using red phosphorus</li>
          <li>Modern white phosphorus production started in late 1800s</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default PhosphorusHistorySection;
