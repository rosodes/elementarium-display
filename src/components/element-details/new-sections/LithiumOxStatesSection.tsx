
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const LithiumOxStatesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Oxidation States</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <ul className="pl-4 list-disc text-xs space-y-1">
          <li>Main: +1 (most common, e.g., LiCl, Li₂O, LiOH)</li>
          <li>Lithium readily loses its outer electron to achieve noble gas configuration</li>
          <li>Forms ionic compounds with non-metals</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default LithiumOxStatesSection;
