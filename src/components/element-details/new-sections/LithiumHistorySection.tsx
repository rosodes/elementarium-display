
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
          <div><strong>Discovery:</strong> 1817 by Johan August Arfwedson</div>
          <div><strong>Location:</strong> Stockholm, Sweden</div>
          <div><strong>Timeline:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>1817 - Discovered in petalite mineral by Arfwedson</li>
            <li>1818 - Named "lithium" from Greek "lithos" (stone)</li>
            <li>1821 - First isolated by William Thomas Brande</li>
            <li>1855 - Large-scale production by electrolysis</li>
            <li>1991 - First commercial lithium-ion battery by Sony</li>
          </ul>
          <div><strong>Etymology:</strong> From Greek "lithos" meaning stone, as it was first found in a mineral</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LithiumHistorySection;
