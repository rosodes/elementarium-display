
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const CarbonHistorySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Discovery & History</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Known since:</strong> Prehistoric times (charcoal, coal)</div>
          <div><strong>First recognized as element:</strong> 1789 by Antoine Lavoisier</div>
          <div><strong>Timeline:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Prehistoric - Use of charcoal and coal</li>
            <li>Ancient times - Diamond and graphite known</li>
            <li>1772 - Antoine Lavoisier showed diamond is carbon</li>
            <li>1789 - Named "carbon" from Latin "carbo" (charcoal)</li>
            <li>1796 - Smithson Tennant proved diamond and graphite are allotropes</li>
            <li>1855 - First artificial diamonds produced</li>
            <li>1985 - Discovery of fullerenes (C₆₀)</li>
            <li>2004 - Graphene isolated and studied</li>
          </ul>
          <div><strong>Etymology:</strong> From Latin "carbo" meaning charcoal or coal</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CarbonHistorySection;
