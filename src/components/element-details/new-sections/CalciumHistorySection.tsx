
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const CalciumHistorySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Discovery & History</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Discovery:</strong> 1808 by Humphry Davy</div>
          <div><strong>Location:</strong> London, England</div>
          <div><strong>Timeline:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Ancient - Lime (CaO) known from limestone heating</li>
            <li>1808 - First isolated by electrolysis of lime and mercury oxide</li>
            <li>1808 - Named from Latin "calx" meaning lime</li>
            <li>1840s - Industrial lime production begins</li>
            <li>1900s - Role in biological systems understood</li>
          </ul>
          <div><strong>Etymology:</strong> From Latin "calx, calcis" meaning lime or limestone</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CalciumHistorySection;
