
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const HeliumCompoundsSection: React.FC = () => (
  <Card className="my-4 border border-blue-200 dark:border-blue-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Compounds &amp; Chemistry</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>
          Helium is the most chemically inert element; its outer electron shell is full (1s<sup>2</sup>), making it extremely stable.
        </li>
        <li>
          There are no known stable helium compounds under normal conditions.
        </li>
        <li>
          In laboratory settings, very unstable species like HeNe<sup>+</sup> ions, He@C<sub>60</sub> ('helium inside fullerene'), or van der Waals complexes (like He·NO, He·H<sub>2</sub>) exist only fleetingly.
        </li>
        <li>
          Helium can form weak physical associations (not true chemical bonds) in high-pressure or cryogenic environments.
        </li>
        <li>
          Helium is used industrially for its extreme inertness and inability to react.
        </li>
      </ul>
    </CardContent>
  </Card>
);
export default HeliumCompoundsSection;
