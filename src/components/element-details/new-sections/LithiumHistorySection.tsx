
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const LithiumHistorySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Discovery & History</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Discovery:</strong> 1817 by Johan August Arfvedson</div>
          <div><strong>First isolated:</strong> 1821 by William Brande and Humphry Davy</div>
          <div><strong>Name origin:</strong> From Greek "lithos" (stone)</div>
          <div className="text-xs text-gray-500">First element discovered from a mineral (not plant/animal material).</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LithiumHistorySection;
