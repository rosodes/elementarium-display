
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

// История открытия марганца
const ManganeseHistorySection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">History & Discovery</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Isolated by Johan Gottlieb Gahn (1774, Sweden)</li>
        <li>Earlier recognized by Carl Wilhelm Scheele and others</li>
        <li>Name from Latin "magnes" (magnet) due to magnetic properties of compounds</li>
        <li>Used in steelmaking since late 1800s</li>
      </ul>
    </CardContent>
  </Card>
);
export default ManganeseHistorySection;
