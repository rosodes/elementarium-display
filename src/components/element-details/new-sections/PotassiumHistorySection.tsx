
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const PotassiumHistorySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Discovery & History</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Discovery:</strong> 1807 by Humphry Davy</div>
          <div><strong>Location:</strong> London, England</div>
          <div><strong>Timeline:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Ancient - Potash (K₂CO₃) known from plant ashes</li>
            <li>1807 - First isolated by electrolysis of molten potash</li>
            <li>1807 - Named from English "potash" and Arabic "qali"</li>
            <li>1860s - Industrial production methods developed</li>
            <li>1930s - Role in plant nutrition established</li>
          </ul>
          <div><strong>Etymology:</strong> From "potash" (pot ashes), symbol K from Latin "kalium"</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PotassiumHistorySection;
