
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const AluminumHistorySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">History & Discovery</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Discovery timeline:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>1754: Andreas Marggraf isolated alumina (Al₂O₃) from clay</li>
            <li>1807: Sir Humphry Davy named the metal "aluminum"</li>
            <li>1825: Hans Christian Ørsted first isolated metallic aluminum</li>
            <li>1827: Friedrich Wöhler improved isolation method</li>
            <li>1854: Henri Étienne Sainte-Claire Deville developed sodium reduction process</li>
            <li>1886: Charles Martin Hall and Paul Héroult independently developed electrolytic process</li>
            <li>1888: First commercial aluminum production began</li>
          </ul>
          <div><strong>Etymology:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>From Latin "alumen" meaning bitter salt</li>
            <li>Originally called "alumium" by Davy, later "aluminum"</li>
            <li>British prefer "aluminium" while Americans use "aluminum"</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default AluminumHistorySection;
