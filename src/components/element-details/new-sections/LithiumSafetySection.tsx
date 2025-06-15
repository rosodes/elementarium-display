
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

/** Безопасность, опасные свойства и обращение */
const LithiumSafetySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Safety & Precautions</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs space-y-2">
        <div>
          <strong>Physical hazards:</strong>
          <ul className="list-disc pl-4">
            <li>
              Lithium reacts <b>violently with water</b>, producing flammable hydrogen gas; may lead to fire/explosion!
            </li>
            <li>
              Corrosive to skin and eyes; severe burns possible on contact with moist tissues.
            </li>
            <li>
              Generates heat and caustic LiOH on hydrolysis.
            </li>
          </ul>
        </div>
        <div>
          <strong>Handling:</strong> Must be stored under oil, kerosene, or in an inert atmosphere. Avoid moisture at all costs.
        </div>
        <div>
          <strong>Fire response:</strong> <span className="text-red-700">Do NOT use water!</span> Use dry powder, sand, or Class D fire extinguisher.
        </div>
        <div>
          <strong>Health effects:</strong> Low-level ingestion of Li compounds can affect the nervous and renal (kidney) systems; lithium salts are used therapeutically only under strict medical supervision.
        </div>
      </CardContent>
    </Card>
  );
};
export default LithiumSafetySection;
