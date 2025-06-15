
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SulfurNaturalOccurrenceSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Natural Occurrence</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Abundance in Earth's crust:</strong> 350 ppm</div>
          <div><strong>16th most abundant element in crust</strong></div>
          <div><strong>Natural forms:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Native sulfur deposits (volcanic regions)</li>
            <li>Metal sulfides (pyrite FeS₂, galena PbS, sphalerite ZnS)</li>
            <li>Sulfate minerals (gypsum CaSO₄·2H₂O, barite BaSO₄)</li>
            <li>Organic sulfur in petroleum and natural gas</li>
            <li>Hydrogen sulfide in hot springs</li>
          </ul>
          <div><strong>Biological occurrence:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Essential element in proteins (cysteine, methionine)</li>
            <li>Present in vitamins (biotin, thiamine)</li>
            <li>Component of many enzymes</li>
          </ul>
          <div><strong>Major sources:</strong> USA, Russia, Canada, Poland</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SulfurNaturalOccurrenceSection;
