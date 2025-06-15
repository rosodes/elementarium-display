
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
          <div><strong>Known since prehistoric times</strong></div>
          <div><strong>Recognized as element:</strong> 1789 by Antoine Lavoisier</div>
          <div><strong>Timeline:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Prehistoric - Charcoal used for cave paintings</li>
            <li>3750 BCE - Egyptians and Sumerians used charcoal</li>
            <li>1772 - Diamond shown to be pure carbon</li>
            <li>1789 - Lavoisier listed carbon as an element</li>
            <li>1796 - Graphite shown to be carbon</li>
            <li>1985 - Buckminsterfullerene (C₆₀) discovered</li>
            <li>2004 - Graphene isolated</li>
          </ul>
          <div><strong>Etymology:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>From Latin "carbo" meaning charcoal</li>
            <li>Symbol "C" directly from Latin name</li>
            <li>Related to words like "carbon" and "carbonic"</li>
          </ul>
          <div><strong>Modern discoveries:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Fullerenes, carbon nanotubes, graphene</li>
            <li>Applications in nanotechnology</li>
            <li>Advanced carbon materials</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default CarbonHistorySection;
