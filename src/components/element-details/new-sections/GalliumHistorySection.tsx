
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const GalliumHistorySection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">History & Discovery</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Predicted by Mendeleev as "eka-aluminum" (1871)</li>
        <li>Discovered by Paul-Émile Lecoq de Boisbaudran (1875, France)</li>
        <li>Name from Latin "Gallia" (France)</li>
        <li>Properties matched Mendeleev's predictions perfectly</li>
        <li>First isolated in pure form in 1875</li>
        <li>Industrial importance grew with electronics in 20th century</li>
      </ul>
    </CardContent>
  </Card>
);

export default GalliumHistorySection;
