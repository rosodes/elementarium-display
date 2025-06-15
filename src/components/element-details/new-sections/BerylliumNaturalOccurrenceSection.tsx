
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const BerylliumNaturalOccurrenceSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Natural Occurrence</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Abundance in Earth's crust:</strong> 2.8 ppm</div>
          <div><strong>Main sources:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Beryl (Be₃Al₂Si₆O₁₈) - most important ore</li>
            <li>Bertrandite (Be₄Si₂O₇(OH)₂)</li>
            <li>Chrysoberyl (BeAl₂O₄)</li>
            <li>Emerald (beryl with chromium impurities)</li>
            <li>Aquamarine (beryl with iron impurities)</li>
          </ul>
          <div><strong>Major deposits:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>United States (Utah, Nevada)</li>
            <li>China</li>
            <li>Kazakhstan</li>
            <li>Mozambique</li>
            <li>Brazil</li>
          </ul>
          <div><strong>Note:</strong> Very rare element, never found free in nature</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BerylliumNaturalOccurrenceSection;
