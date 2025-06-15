
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SodiumNaturalOccurrenceSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Natural Occurrence</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <div className="space-y-2">
        <div><strong>Earth’s crust abundance:</strong> 2.36% by weight (6th most abundant element).</div>
        <div><strong>Major minerals:</strong>
          <ul className="list-disc pl-4">
            <li>Halite (rock salt, NaCl)</li>
            <li>Trona (Na<sub>3</sub>H(CO<sub>3</sub>)<sub>2</sub>·2H<sub>2</sub>O)</li>
            <li>Albite (NaAlSi<sub>3</sub>O<sub>8</sub>)</li>
            <li>Natron, cryolite</li>
          </ul>
        </div>
        <div><strong>Seawater:</strong> ~10.8 g/L as Na<sup>+</sup> ions (most abundant cation in seawater).</div>
        <div><strong>Biological occurrence:</strong> Essential in all animal tissues, major component of blood plasma, nerve transmission, osmotic regulation.</div>
        <div><strong>Main deposits:</strong> USA, China, India, Germany</div>
      </div>
    </CardContent>
  </Card>
);

export default SodiumNaturalOccurrenceSection;
