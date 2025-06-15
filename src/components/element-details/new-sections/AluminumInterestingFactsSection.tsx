
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const AluminumInterestingFactsSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Interesting Facts</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Most abundant metal in Earth's crust (8.23%)</li>
          <li>Lighter than steel but can be stronger when alloyed</li>
          <li>100% recyclable without loss of properties</li>
          <li>Conducts electricity and heat very well</li>
          <li>Napoleon III served his most honored guests with aluminum utensils</li>
          <li>Washington Monument's cap is made of aluminum</li>
          <li>Reflects 92% of visible light</li>
          <li>Forms protective oxide layer in 1/100th of a second</li>
          <li>Used in space industry due to light weight</li>
          <li>Aluminum foil was once called "tin foil"</li>
          <li>Takes 95% less energy to recycle than to produce new aluminum</li>
          <li>Can be welded, but requires special techniques</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default AluminumInterestingFactsSection;
