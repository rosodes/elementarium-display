
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const BoronHistorySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Discovery & History</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Discovery:</strong> 1808 by Joseph Louis Gay-Lussac and Louis Jacques Thénard</div>
          <div><strong>Independent discovery:</strong> Same year by Humphry Davy</div>
          <div><strong>Timeline:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Ancient times - Borax used in metallurgy and glass making</li>
            <li>1808 - Element isolated by reduction of boric acid</li>
            <li>1909 - Pure crystalline boron produced</li>
            <li>1958 - Boron fibers developed for composites</li>
            <li>1970s - Boron neutron capture therapy research</li>
          </ul>
          <div><strong>Etymology:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Named from Arabic "buraq" and Persian "burah"</li>
            <li>Refers to borax mineral</li>
            <li>Chemical symbol "B" from Latin "boracium"</li>
          </ul>
          <div><strong>Early uses:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Ancient Egyptians used borax in mummification</li>
            <li>Medieval alchemists knew boric compounds</li>
            <li>Glass making in Venice and China</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default BoronHistorySection;
