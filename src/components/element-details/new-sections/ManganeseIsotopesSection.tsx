
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

// Изотопы марганца
const ManganeseIsotopesSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Isotopes</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <div>
        <strong>Natural manganese:</strong>
        <ul className="pl-4 list-disc">
          <li><b>Mn-55</b>: 100%, stable (only stable isotope)</li>
        </ul>
        <div>Many artificial radioactive isotopes known (Mn-51 to Mn-69)</div>
      </div>
    </CardContent>
  </Card>
);
export default ManganeseIsotopesSection;
