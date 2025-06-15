
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const PhosphorusHistorySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Discovery & History</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Discovery:</strong> 1669 by Hennig Brand (Germany)</div>
          <div><strong>Method:</strong> Distillation of concentrated urine</div>
          <div><strong>Timeline:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>1669 - Brand discovered white phosphorus</li>
            <li>1680s - Robert Boyle produced phosphorus in England</li>
            <li>1769 - Carl Scheele found phosphorus in bone ash</li>
            <li>1844 - Red phosphorus discovered by Anton von Schrötter</li>
            <li>1914 - Black phosphorus discovered by Percy Bridgman</li>
            <li>1950s - Industrial production from phosphate rock</li>
          </ul>
          <div><strong>Etymology:</strong> From Greek "phosphoros" (light-bearer)</div>
          <div><strong>Historical significance:</strong> First element discovered by alchemical experiment</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PhosphorusHistorySection;
