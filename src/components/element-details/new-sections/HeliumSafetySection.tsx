
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const HeliumSafetySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Safety & Health</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs space-y-2">
        <ul className="list-disc pl-4 space-y-1">
          <li>
            <b>Non-toxic & chemically inert</b>: Helium does not cause chemical reactions in the body, does not burn or explode.
          </li>
          <li>
            <b>Asphyxiation risk</b>: Asphyxiant! When inhaled in place of air (e.g. via balloons or tanks), helium can displace oxygen in the lungs and cause suffocation — sometimes rapidly and without warning.
          </li>
          <li>
            <b>Voice effects</b>: Temporary voice change after inhalation is not dangerous by itself, but excessive inhalation is extremely dangerous due to risk of hypoxia.
          </li>
          <li>
            <b>Pressurized cylinders:</b> High-pressure tanks can cause injury if handled improperly. Always secure and store upright.
          </li>
          <li>
            <b>Hazards with liquid helium:</b> Boiling point is below -268°C; causes instant and severe frostbite; requires special cryogenic protective equipment.
          </li>
          <li>
            <b>General:</b> Store in well-ventilated areas; do not inhale intentionally; keep away from confined or poorly ventilated spaces.
          </li>
        </ul>
        <div className="mt-2 text-red-700 dark:text-red-300 text-xs">
          <b>Warning:</b> Several fatalities occur worldwide each year from asphyxiation due to careless helium inhalation.
        </div>
      </CardContent>
    </Card>
  );
};
export default HeliumSafetySection;
