
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

/**
 * Историческая справка о водороде
 */
const HydrogenHistorySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">History & Discovery</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Formally discovered by Henry Cavendish (England) in 1766, who described "inflammable air" (hydrogen gas).</li>
          <li>Earlier observed by Paracelsus (16th century) in metal-acid reactions.</li>
          <li>Naming (1783): Antoine Lavoisier gave the name "hydrogène" (water-former) after confirming by combustion with oxygen forms water.</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default HydrogenHistorySection;
