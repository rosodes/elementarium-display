
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const NitrogenNaturalOccurrenceSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Natural Occurrence</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Atmospheric abundance:</strong> 78.1% of Earth's atmosphere</div>
          <div><strong>Abundance in Earth's crust:</strong> 19 ppm</div>
          <div><strong>Natural forms:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Molecular nitrogen (N₂) in atmosphere</li>
            <li>Sodium nitrate (Chile saltpeter)</li>
            <li>Potassium nitrate (saltpeter)</li>
            <li>Organic nitrogen in living organisms</li>
            <li>Nitrogen compounds in soil</li>
          </ul>
          <div><strong>Biological nitrogen cycle:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Nitrogen fixation by bacteria</li>
            <li>Nitrification and denitrification</li>
            <li>Decomposition of organic matter</li>
            <li>Lightning converts N₂ to nitrates</li>
          </ul>
          <div><strong>Biological role:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Essential for all life forms</li>
            <li>Component of amino acids and proteins</li>
            <li>Part of DNA and RNA bases</li>
            <li>3% of human body mass</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default NitrogenNaturalOccurrenceSection;
