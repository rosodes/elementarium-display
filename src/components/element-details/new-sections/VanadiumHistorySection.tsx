
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

// История открытия ванадия
const VanadiumHistorySection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">History & Discovery</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Discovered in 1801 by Andrés Manuel del Río (Mexico), lost, then rediscovered by Nils Sefström (Sweden) in 1830</li>
        <li>Named after Vanadis, the Scandinavian goddess of beauty, due to colorful compound series</li>
        <li>First isolated in metallic form in 1867 by Henry Roscoe</li>
      </ul>
    </CardContent>
  </Card>
);

export default VanadiumHistorySection;
