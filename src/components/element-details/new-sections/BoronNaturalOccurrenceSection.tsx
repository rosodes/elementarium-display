
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const BoronNaturalOccurrenceSection: React.FC = () => (
  <Card className="my-4 border border-blue-200 dark:border-blue-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Occurrence &amp; Abundance</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs space-y-2">
      <div>
        <strong>Abundance:</strong> Boron is a rare element in the Earth's crust (~10 ppm by weight) and does not form naturally as a free element. It is more abundant in ocean water (up to 5 mg/L), mainly as borate ions.
      </div>
      <div>
        <strong>Main minerals:</strong> 
        <ul className="list-disc pl-4 space-y-1">
          <li>Borax (Na<sub>2</sub>B<sub>4</sub>O<sub>7</sub>·10H<sub>2</sub>O)</li>
          <li>Kernite (Na<sub>2</sub>B<sub>4</sub>O<sub>7</sub>·4H<sub>2</sub>O)</li>
          <li>Ulexite (NaCaB<sub>5</sub>O<sub>9</sub>·8H<sub>2</sub>O)</li>
          <li>Colemanite (Ca<sub>2</sub>B<sub>6</sub>O<sub>11</sub>·5H<sub>2</sub>O)</li>
        </ul>
        Borate deposits are often found in arid regions.
      </div>
      <div>
        <strong>Major deposits:</strong> USA (California), Turkey (largest reserves in the world), Argentina, Russia, Chile, China.
      </div>
      <div>
        <strong>Biological:</strong> Boron is a trace element present in soils, plants, seawater, and all organisms.
      </div>
      <div>
        <strong>Cosmic:</strong> Produced mainly by spallation (cosmic ray collisions), not in stellar nucleosynthesis—unlike most light elements.
      </div>
    </CardContent>
  </Card>
);

export default BoronNaturalOccurrenceSection;
