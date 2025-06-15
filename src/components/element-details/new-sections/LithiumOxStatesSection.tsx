
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const LithiumOxStatesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Oxidation States</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Primary oxidation state:</strong> +1 (only common state)</div>
          <div><strong>Common compounds:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>+1: LiCl, LiOH, Li₂CO₃ (all stable)</li>
            <li>Lithium forms ionic compounds</li>
            <li>Does not exhibit other stable oxidation states</li>
          </ul>
          <div className="mt-2 text-gray-600 dark:text-gray-300">
            Lithium easily loses its outer electron, behaving as a strong reducer.
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LithiumOxStatesSection;
