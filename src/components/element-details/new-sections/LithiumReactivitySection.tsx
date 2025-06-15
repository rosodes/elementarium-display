
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

/** Химическая активность */
const LithiumReactivitySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Chemical Reactivity</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>
            Reacts <strong>slowly with water</strong> (slower than sodium/potassium), liberating hydrogen gas and forming lithium hydroxide: <span className="text-blue-700">2Li + 2H₂O → 2LiOH + H₂↑</span>
          </li>
          <li>
            Burns with a distinctive <span className="text-red-600">crimson flame</span>, forming predominantly lithium oxide (Li₂O).
          </li>
          <li>
            <strong>Oxidizes quickly in air,</strong> forming white coating of oxides and carbonates; must be kept under oil or inert atmosphere.
          </li>
          <li>
            Reacts with halogens (Cl₂, Br₂, etc.) to form white crystalline salts (LiCl, LiBr...).
          </li>
          <li>
            Forms alloys with magnesium, aluminum, and other light metals.
          </li>
          <li>
            Unusually, lithium reacts with nitrogen at room temperature to form lithium nitride (Li₃N)—unique among alkali metals!
          </li>
          <li>
            <strong>Harder</strong> than other alkali metals, can be cut with a knife.
          </li>
        </ul>
        <div className="mt-2 text-xs text-gray-500">
          Sample must not contact water—fire risk!
        </div>
      </CardContent>
    </Card>
  );
};

export default LithiumReactivitySection;
