
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const BromineHistorySection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">History & Discovery</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Discovered in 1826 by Antoine Jérôme Balard (France)</li>
        <li>Found in seaweed ash from Montpellier salt marshes</li>
        <li>Initially called "muride" from Latin muria (brine)</li>
        <li>Name from Greek "bromos" meaning stench</li>
        <li>Confirmed as new element by Gay-Lussac</li>
        <li>Industrial production began in 1860s</li>
        <li>Large-scale extraction from seawater started 1920s</li>
      </ul>
    </CardContent>
  </Card>
);

export default BromineHistorySection;
