
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const ChlorineNaturalOccurrenceSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Natural Occurrence</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Abundance in Earth's crust:</strong> 145 ppm</div>
          <div><strong>19th most abundant element in crust</strong></div>
          <div><strong>Natural sources:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Seawater (1.9% by weight as Cl⁻)</li>
            <li>Rock salt deposits (halite - NaCl)</li>
            <li>Brine wells and salt lakes</li>
            <li>Evaporite minerals (sylvite KCl, carnallite KMgCl₃·6H₂O)</li>
            <li>Volcanic gases (as HCl)</li>
          </ul>
          <div><strong>Biological occurrence:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Essential electrolyte in animal fluids</li>
            <li>Component of stomach acid (HCl)</li>
            <li>Maintains osmotic balance in cells</li>
            <li>Critical for nerve function</li>
          </ul>
          <div><strong>Never found as free element in nature</strong></div>
          <div><strong>Major sources:</strong> Dead Sea, Great Salt Lake, underground deposits</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChlorineNaturalOccurrenceSection;
