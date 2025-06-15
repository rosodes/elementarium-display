
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const OxygenHistorySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Discovery & History</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Discovered independently:</strong> 1772-1774</div>
          <div><strong>Timeline:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>1772 - Carl Wilhelm Scheele (Sweden) isolated oxygen</li>
            <li>1774 - Joseph Priestley (England) published first account</li>
            <li>1777 - Antoine Lavoisier (France) named it "oxygen"</li>
            <li>1883 - Raoul-Pierre Pictet liquefied oxygen</li>
            <li>1895 - Carl von Linde produced liquid oxygen commercially</li>
            <li>1901 - Oxyacetylene welding developed</li>
            <li>1960s - Liquid oxygen used in rocket propulsion</li>
          </ul>
          <div><strong>Etymology:</strong> From Greek "oxys" (acid) + "genes" (producer), meaning "acid-former"</div>
          <div><strong>Early uses:</strong> Medical therapy, steel production, welding</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OxygenHistorySection;
