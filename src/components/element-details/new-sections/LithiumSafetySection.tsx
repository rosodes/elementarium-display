
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

/** Safety & Precautions for Lithium */
const LithiumSafetySection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Safety &amp; Precautions</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs space-y-2">
      <div>
        <strong>Physical dangers:</strong>
        <ul className="list-disc pl-4">
          <li>
            Lithium metal reacts violently with water, producing hydrogen gas and heat—risk of fire or explosion.
          </li>
          <li>
            Corrosive—causes severe burns to skin, eyes, and respiratory tissues on contact with moisture.
          </li>
          <li>
            Produces highly caustic lithium hydroxide (LiOH) on hydrolysis.
          </li>
        </ul>
      </div>
      <div>
        <strong>Handling:</strong> Store metallic lithium under oil, kerosene, or inert gas. Avoid all humidity and water contact.
      </div>
      <div>
        <strong>Fire response:</strong> <span className="text-red-700">Never use water on lithium fires!</span> Use dry powder, sand, or Class D extinguishers only.
      </div>
      <div>
        <strong>Health effects:</strong> Lithium salts and solutions should be handled with care—medical use only by prescription and monitoring.
      </div>
      <div className="mt-2 text-xs text-gray-500">
        Sources: CDC NIOSH, Royal Society of Chemistry, chemical safety guidelines.
      </div>
    </CardContent>
  </Card>
);
export default LithiumSafetySection;
