
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const MagnesiumReactivitySection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Chemical Reactivity</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Burns with a bright, white flame in air (forms MgO and Mg<sub>3</sub>N<sub>2</sub>)</li>
        <li>Reacts slowly with cold water; more rapidly with hot water or steam</li>
        <li>Dissolves in acids with evolution of hydrogen gas</li>
        <li>Combines with halogens, sulfur, phosphorus when heated</li>
        <li>Stable in dry air due to a thin, protective oxide layer</li>
        <li>Displaces hydrogen from many compounds</li>
      </ul>
    </CardContent>
  </Card>
);

export default MagnesiumReactivitySection;
