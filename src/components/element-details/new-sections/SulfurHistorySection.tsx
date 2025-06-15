
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SulfurHistorySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">History & Discovery</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li><strong>Ancient times:</strong> Known since prehistoric times</li>
          <li>Mentioned in ancient texts from Egypt, India, Greece</li>
          <li>Called "brimstone" in biblical references</li>
          <li><strong>9th century:</strong> Chinese used sulfur in gunpowder</li>
          <li><strong>1777:</strong> Antoine Lavoisier recognized as an element</li>
          <li><strong>1867:</strong> Frasch process developed for mining</li>
          <li><strong>1909:</strong> Contact process for sulfuric acid production</li>
          <li><strong>1930s:</strong> Claus process for sulfur recovery</li>
          <li>Ancient uses: fumigation, medicine, bleaching</li>
          <li>Medieval alchemy: one of the fundamental principles</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default SulfurHistorySection;
