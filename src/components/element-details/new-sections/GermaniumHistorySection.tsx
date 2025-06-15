
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const GermaniumHistorySection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">History & Discovery</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Predicted by Mendeleev as "eka-silicon" (1871)</li>
        <li>Discovered by Clemens Winkler (1886, Germany)</li>
        <li>Named after Germany (Germania)</li>
        <li>Found in argyrodite mineral</li>
        <li>First confirmation of Mendeleev's periodic predictions</li>
        <li>Industrial use began in 1940s with transistors</li>
      </ul>
    </CardContent>
  </Card>
);

export default GermaniumHistorySection;
