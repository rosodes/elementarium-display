
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const ZincReactivitySection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Chemical Reactivity</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="pl-4 list-disc space-y-1">
        <li>Moderately reactive metal</li>
        <li>Forms protective oxide layer in air</li>
        <li>Reacts with acids to produce hydrogen gas</li>
        <li>Combines with halogens when heated</li>
        <li>Reduces water vapor at high temperatures</li>
        <li>Amphoteric oxide (ZnO) reacts with acids and bases</li>
        <li>Used in galvanization to protect iron</li>
      </ul>
    </CardContent>
  </Card>
);

export default ZincReactivitySection;
