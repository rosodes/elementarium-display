
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

// Промышленное извлечение ванадия
const VanadiumExtractionSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Extraction</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Mainly recovered from magnetite ores using roasting, leaching, and reduction</li>
        <li>May be obtained as a by-product from uranium mining</li>
        <li>Pure vanadium prepared via reduction with calcium or other active metals</li>
        <li>Also produced electrolytically from vanadium compounds</li>
      </ul>
    </CardContent>
  </Card>
);

export default VanadiumExtractionSection;
