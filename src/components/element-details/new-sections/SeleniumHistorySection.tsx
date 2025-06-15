
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SeleniumHistorySection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">History & Discovery</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Discovered in 1817 by Jöns Jakob Berzelius</li>
        <li>Found in residue from sulfuric acid production</li>
        <li>Initially thought to be tellurium</li>
        <li>Named from Greek "selene" (moon)</li>
        <li>Photoelectric effect discovered in 1873</li>
        <li>First commercial photoelectric cells in 1930s</li>
        <li>Biological importance recognized in 1950s</li>
      </ul>
    </CardContent>
  </Card>
);

export default SeleniumHistorySection;
