
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const BerylliumHistorySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Discovery & History</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Discovery:</strong> 1798 by Louis-Nicolas Vauquelin</div>
          <div><strong>First isolation:</strong> 1828 by Friedrich Wöhler and Antoine Bussy</div>
          <div><strong>Timeline:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>1798 - Vauquelin discovered element in beryl and emerald</li>
            <li>1828 - First isolated by reducing BeCl₂ with potassium</li>
            <li>1898 - Marie and Pierre Curie used it in radium discovery</li>
            <li>1932 - Used in discovery of the neutron by Chadwick</li>
            <li>1940s - Industrial production began</li>
          </ul>
          <div><strong>Etymology:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Named from Greek "beryllos" meaning beryl</li>
            <li>Originally called "glucinium" (sweet-tasting) by Vauquelin</li>
            <li>Name "beryllium" adopted in 1949</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default BerylliumHistorySection;
