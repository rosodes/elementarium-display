
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const FluorineNaturalOccurrenceSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Natural Occurrence</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Abundance in Earth's crust:</strong> 585 ppm</div>
          <div><strong>13th most abundant element in crust</strong></div>
          <div><strong>Natural minerals:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Fluorite (CaF₂) - main source</li>
            <li>Cryolite (Na₃AlF₆) - rare but important</li>
            <li>Fluorapatite Ca₅(PO₄)₃F - in bones and teeth</li>
            <li>Topaz Al₂SiO₄(F,OH)₂ - gemstone</li>
            <li>Mica - contains some fluorine</li>
          </ul>
          <div><strong>Biological occurrence:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Essential trace element for dental health</li>
            <li>Present in bones and teeth as fluorapatite</li>
            <li>Added to drinking water and toothpaste</li>
          </ul>
          <div><strong>Major deposits:</strong> China, Mexico, South Africa</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FluorineNaturalOccurrenceSection;
