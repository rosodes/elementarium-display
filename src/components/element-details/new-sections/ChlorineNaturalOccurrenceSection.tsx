
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const ChlorineNaturalOccurrenceSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Natural Occurrence</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Never found as free element in nature due to high reactivity</li>
          <li>Most abundant as chloride ion in seawater (1.9% by mass)</li>
          <li>Major mineral: Halite (rock salt, NaCl)</li>
          <li>Found in evaporite deposits and salt lakes</li>
          <li>Present in many silicate minerals as trace element</li>
          <li>Concentrated in salt domes and salt flats</li>
          <li>Essential for life - major electrolyte in body fluids</li>
          <li>Found in volcanic gases as HCl</li>
          <li>Present in groundwater and brine deposits</li>
          <li>20th most abundant element in Earth's crust</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default ChlorineNaturalOccurrenceSection;
