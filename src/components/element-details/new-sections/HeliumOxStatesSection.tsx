
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const HeliumOxStatesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Oxidation States</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <p className="text-xs">
          <strong>Oxidation State:</strong> 0 (zero)<br/>
          Helium is a noble gas and does not form chemical compounds under normal conditions.
          It has a complete electron shell and is chemically inert.
        </p>
      </CardContent>
    </Card>
  );
};

export default HeliumOxStatesSection;
