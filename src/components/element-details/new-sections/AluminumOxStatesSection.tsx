
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const AluminumOxStatesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Oxidation States</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Primary oxidation state:</strong> +3</div>
          <div><strong>Most common compounds:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>+3: Aluminum oxide (Al₂O₃), aluminum chloride (AlCl₃)</li>
            <li>+3: Aluminum sulfate (Al₂(SO₄)₃), aluminum hydroxide (Al(OH)₃)</li>
            <li>+3: Aluminum nitrate (Al(NO₃)₃), aluminum phosphate (AlPO₄)</li>
            <li>0: Metallic aluminum (Al)</li>
          </ul>
          <div className="mt-2 text-gray-600 dark:text-gray-300">
            Aluminum readily loses three outer electrons to achieve noble gas configuration.
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AluminumOxStatesSection;
