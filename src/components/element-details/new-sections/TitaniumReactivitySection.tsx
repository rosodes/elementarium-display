
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const TitaniumReactivitySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Chemical Reactivity</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Forms protective oxide layer preventing corrosion</li>
          <li>Highly resistant to corrosion in seawater and chlorine</li>
          <li>Does not react with water at room temperature</li>
          <li>Burns brilliantly in pure oxygen when heated</li>
          <li>Combines with halogens at elevated temperatures</li>
          <li>Reacts with nitrogen at high temperatures forming nitrides</li>
          <li>Absorbs hydrogen forming hydrides</li>
          <li>Resistant to most acids except hydrofluoric acid</li>
          <li>Dissolves slowly in hot concentrated sulfuric acid</li>
          <li>Forms carbides with carbon at high temperatures</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default TitaniumReactivitySection;
