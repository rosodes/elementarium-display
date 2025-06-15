
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const BerylliumOxStatesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Oxidation States</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Primary oxidation state:</strong> +2</div>
          <div><strong>Most common compounds:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>+2: Beryllium oxide (BeO), beryllium chloride (BeCl₂)</li>
            <li>+2: Beryllium sulfate (BeSO₄), beryllium fluoride (BeF₂)</li>
            <li>+2: Beryllium hydroxide (Be(OH)₂)</li>
            <li>0: Metallic beryllium (Be)</li>
          </ul>
          <div className="mt-2 text-gray-600 dark:text-gray-300">
            Beryllium readily loses two outer electrons to achieve helium configuration.
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BerylliumOxStatesSection;
