
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const AluminumNaturalOccurrenceSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Natural Occurrence</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Third most abundant element in Earth's crust (8.1%)</li>
          <li>Most abundant metal in Earth's crust</li>
          <li>Never found as pure metal in nature due to high reactivity</li>
          <li>Main ore: Bauxite (Al₂O₃·nH₂O)</li>
          <li>Other minerals: Corundum (Al₂O₃), Cryolite (Na₃AlF₆)</li>
          <li>Found in clay minerals and feldspars</li>
          <li>Present in gemstones: Ruby and sapphire (Al₂O₃ with impurities)</li>
          <li>Widely distributed in igneous rocks</li>
          <li>Major bauxite deposits in Australia, Guinea, Brazil, Jamaica</li>
          <li>Recycling provides significant portion of commercial aluminum</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default AluminumNaturalOccurrenceSection;
