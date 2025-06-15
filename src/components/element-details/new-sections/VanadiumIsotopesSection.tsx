
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

// Изотопы ванадия
const VanadiumIsotopesSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Isotopes</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <div>
        <strong>Natural vanadium:</strong>
        <ul className="pl-4 list-disc">
          <li><b>V-51</b>: 99.75%, stable</li>
          <li><b>V-50</b>: ~0.25%, weakly radioactive (very long half-life)</li>
        </ul>
        <div>Artificial isotopes: over 15 known (all radioactive)</div>
      </div>
    </CardContent>
  </Card>
);

export default VanadiumIsotopesSection;
