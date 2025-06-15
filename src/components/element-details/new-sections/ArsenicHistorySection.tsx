
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const ArsenicHistorySection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">History & Discovery</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Known since ancient times (compounds)</li>
        <li>Pure arsenic isolated by Albertus Magnus (~1250)</li>
        <li>Name from Greek "arsenikos" (masculine, potent)</li>
        <li>Arabic "al zarnikh" (the orpiment)</li>
        <li>Used historically as poison and medicine</li>
        <li>Important in alchemy and early chemistry</li>
        <li>Modern applications in semiconductors since 1950s</li>
      </ul>
    </CardContent>
  </Card>
);

export default ArsenicHistorySection;
