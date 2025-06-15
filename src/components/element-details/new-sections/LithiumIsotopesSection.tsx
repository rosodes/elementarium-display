
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const LithiumIsotopesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Isotopes</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Stable isotopes:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>⁶Li (7.5% abundance)</li>
            <li>⁷Li (92.5% abundance) — most common</li>
          </ul>
          <div><strong>Radioactive isotopes:</strong> All others are very short-lived.</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LithiumIsotopesSection;
