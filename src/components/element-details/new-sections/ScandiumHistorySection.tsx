
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const ScandiumHistorySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Discovery & History</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Predicted:</strong> 1869 by Dmitri Mendeleev as "eka-boron"</div>
          <div><strong>Discovery:</strong> 1879 by Lars Fredrik Nilson</div>
          <div><strong>Location:</strong> Uppsala, Sweden</div>
          <div><strong>Timeline:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>1869 - Mendeleev predicted element with properties between calcium and titanium</li>
            <li>1879 - Nilson discovered in euxenite and gadolinite minerals</li>
            <li>1879 - Named after Scandinavia</li>
            <li>1937 - First metallic scandium produced</li>
            <li>1960s - Industrial production begins</li>
            <li>1970s - Applications in aerospace developed</li>
          </ul>
          <div><strong>Etymology:</strong> From Latin "Scandia" meaning Scandinavia</div>
          <div><strong>Significance:</strong> Confirmed Mendeleev's periodic table predictions</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ScandiumHistorySection;
