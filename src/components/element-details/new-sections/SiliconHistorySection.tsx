
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SiliconHistorySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Discovery & History</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Identified as element by Jöns Jacob Berzelius in 1824</li>
          <li>First isolated by heating potassium fluorosilicate with potassium</li>
          <li>Named from Latin "silex" meaning flint or hard stone</li>
          <li>Antoine Lavoisier suspected silicon compounds were elements (1787)</li>
          <li>Early confusion with carbon compounds due to similar properties</li>
          <li>Pure silicon first produced in 1854 by Henri Deville</li>
          <li>Industrial production began in early 1900s for steel making</li>
          <li>Electronic grade silicon developed in 1950s for semiconductors</li>
          <li>Silicon transistor invented at Bell Labs (1947-1954)</li>
          <li>Led to the Silicon Valley technology revolution</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default SiliconHistorySection;
