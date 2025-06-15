
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const ArsenicReactivitySection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Chemical Reactivity</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="pl-4 list-disc space-y-1">
        <li>Relatively stable in dry air</li>
        <li>Oxidizes slowly in moist air</li>
        <li>Burns in oxygen to form As₂O₃</li>
        <li>Reacts with halogens when heated</li>
        <li>Dissolves in nitric acid and aqua regia</li>
        <li>Forms alloys with many metals</li>
        <li>Combines with hydrogen to form arsine (AsH₃)</li>
      </ul>
    </CardContent>
  </Card>
);

export default ArsenicReactivitySection;
