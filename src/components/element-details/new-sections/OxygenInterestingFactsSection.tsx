
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const OxygenInterestingFactsSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Interesting Facts</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Most abundant element in Earth's crust</li>
          <li>Essential for nearly all life on Earth</li>
          <li>Makes up about 65% of human body mass</li>
          <li>Liquid oxygen is pale blue in color</li>
          <li>Oxygen is magnetic in its liquid form</li>
          <li>About 89% of seawater's mass is oxygen</li>
          <li>Ozone protects Earth from harmful UV radiation</li>
          <li>Oxygen supports combustion but doesn't burn itself</li>
          <li>Fish extract dissolved oxygen from water</li>
          <li>Oxygen was toxic to early life forms</li>
          <li>Plants produce oxygen through photosynthesis</li>
          <li>Oxygen tanks are used in space and underwater</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default OxygenInterestingFactsSection;
