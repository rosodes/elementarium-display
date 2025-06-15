
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SiliconHistorySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Discovery & History</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Discovery:</strong> 1824 by Jöns Jacob Berzelius (Sweden)</div>
          <div><strong>Timeline:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>1787 - Antoine Lavoisier suspected silicon existence</li>
            <li>1808 - Humphry Davy attempted isolation</li>
            <li>1824 - Berzelius isolated impure silicon</li>
            <li>1854 - Henri Sainte-Claire Deville purified silicon</li>
            <li>1918 - Czochralski process for crystal growth</li>
            <li>1940s - Beginning of semiconductor applications</li>
            <li>1954 - First silicon solar cell</li>
            <li>1958 - First integrated circuit</li>
          </ul>
          <div><strong>Etymology:</strong> From Latin "silex" (flint) + suffix "-on"</div>
          <div><strong>Alternative names:</strong> Called "silicium" in many languages</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SiliconHistorySection;
