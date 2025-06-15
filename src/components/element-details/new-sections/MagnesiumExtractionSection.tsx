
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const MagnesiumExtractionSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Extraction & Production</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <div className="space-y-2">
        <div><strong>Main industrial methods:</strong></div>
        <ul className="list-disc pl-4">
          <li>Electrolysis of molten magnesium chloride (from seawater, brines, or magnesite)</li>
          <li>Thermal reduction of magnesium oxide using silicon or ferrosilicon (Pidgeon process)</li>
        </ul>
        <div>
          <strong>Key facts:</strong>
          <ul className="list-disc pl-4">
            <li>Seawater and lake brines are primary raw material sources</li>
            <li>China is the world’s largest producer</li>
            <li>Magnesium is used for lightweight alloys, firestarters, and pyrotechnics</li>
          </ul>
        </div>
        <div>
          <strong>Byproducts:</strong> Production can yield chlorine and other chemicals.
        </div>
      </div>
    </CardContent>
  </Card>
);

export default MagnesiumExtractionSection;
