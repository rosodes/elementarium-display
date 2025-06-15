
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const MagnesiumHistorySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">History & Discovery</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Discovery timeline:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>1618: Epsom salt (MgSO₄·7H₂O) recognized as distinct from other salts</li>
            <li>1755: Joseph Black distinguished magnesia (MgO) from lime (CaO)</li>
            <li>1808: Sir Humphry Davy first isolated metallic magnesium by electrolysis</li>
            <li>1828: Antoine Bussy prepared magnesium in coherent form</li>
            <li>1886: Commercial production began in Germany</li>
          </ul>
          <div><strong>Etymology:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Named after Magnesia, a district in Greece</li>
            <li>Related to magnetite and manganese, also named after the same region</li>
            <li>Chemical symbol "Mg" from Latin "magnesium"</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default MagnesiumHistorySection;
