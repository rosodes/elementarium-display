
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const FluorineHistorySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Discovery & History</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Isolated:</strong> 1886 by Henri Moissan</div>
          <div><strong>Timeline:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>1670s - Fluorite mineral described</li>
            <li>1810 - André-Marie Ampère predicted existence</li>
            <li>1813 - Humphry Davy suggested "fluorine" name</li>
            <li>1886 - Henri Moissan first isolated F₂ gas</li>
            <li>1906 - Moissan received Nobel Prize</li>
            <li>1930s - Development of fluoropolymers</li>
            <li>1940s - Manhattan Project used fluorine</li>
          </ul>
          <div><strong>Etymology:</strong> From Latin "fluere" (to flow) via fluorite</div>
          <div><strong>Isolation challenges:</strong> Extreme reactivity made isolation very difficult</div>
          <div><strong>Early applications:</strong> Glass etching, refrigeration</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FluorineHistorySection;
