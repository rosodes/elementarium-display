
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const HeliumReactivitySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Chemical Reactivity</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs space-y-2">
        <ul className="list-disc pl-4 space-y-1">
          <li><b>Completely inert</b>: no stable compounds known in nature or laboratory (except some fleeting ions under extreme conditions)</li>
          <li>Does not react with acids, bases, metals, nonmetals, or organics</li>
          <li>Does not form molecules, exists only as atomic He</li>
          <li>Not attracted by even the most powerful oxidizers (like F₂ or O₂⁺)</li>
          <li>Helium can diffuse through solids and is used as a tracer for leak detection</li>
          <li>Forms weak "van der Waals" "clathrate" or "inclusion" compounds in rare gas hydrates (physically, not chemically bound!)</li>
        </ul>
        <div className="mt-2 text-amber-600 dark:text-amber-200">
          <b>Important:</b> Helium's absolute chemical inertness makes it essential for controlled environments where no reactivity is allowed (e.g., welding, crystal growth, scientific experiments).
        </div>
      </CardContent>
    </Card>
  );
};
export default HeliumReactivitySection;
