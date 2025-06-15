
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SeleniumReactivitySection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Chemical Reactivity</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="pl-4 list-disc space-y-1">
        <li>Burns in air to form selenium dioxide</li>
        <li>Reacts with hydrogen to form hydrogen selenide</li>
        <li>Dissolves in nitric acid and sulfuric acid</li>
        <li>Forms compounds with most metals</li>
        <li>Reacts with halogens when heated</li>
        <li>Shows photoconductive properties</li>
        <li>Can exist in several allotropic forms</li>
      </ul>
    </CardContent>
  </Card>
);

export default SeleniumReactivitySection;
