
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const HeliumHistorySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">History & Discovery</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>First detected in the Sun's spectrum by Pierre Janssen during 1868 solar eclipse</li>
          <li>Named "helium" by Norman Lockyer from Greek "helios" (sun)</li>
          <li>First isolated on Earth by William Ramsay in 1895 from cleveite mineral</li>
          <li>The only element discovered in space before Earth</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default HeliumHistorySection;
