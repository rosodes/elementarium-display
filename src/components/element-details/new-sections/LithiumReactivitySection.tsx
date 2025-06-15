
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const LithiumReactivitySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Chemical Reactivity</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Reacts with water, producing LiOH and H₂ (less violently than Na/K)</li>
          <li>Burns with crimson flame to form Li₂O</li>
          <li>Oxidizes in air, must be stored under oil</li>
          <li>Reacts with halogens to form ionic salts</li>
          <li>Forms alloys with several metals</li>
          <li>Does not react with nitrogen at room temperature (unlike Na/K)</li>
          <li>Soft, but harder than other alkali metals</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default LithiumReactivitySection;
