
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const HeliumNaturalOccurrenceSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Natural Occurrence</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs space-y-2">
        <ul className="list-disc pl-4 space-y-1">
          <li><b>Cosmic abundance:</b> Helium is the 2nd most abundant element in the universe (~23% by mass)</li>
          <li><b>Origin:</b> Created in the Big Bang (primordial), inside stars (via thermonuclear fusion), and from radioactive alpha decay of heavy elements (uranium, thorium) on Earth</li>
          <li><b>Earth's atmosphere:</b> Trace only: 5.2 ppm by volume, constantly lost to space due to low gravity and atomic mass</li>
          <li><b>Major terrestrial sources:</b> Found in natural gas fields, especially in the US Great Plains, Russia, Algeria, Qatar, Canada</li>
          <li><b>Concentration in natural gas:</b> Up to 7% in some wells (<b>extracted by cryogenic distillation</b>); not economically recoverable from air</li>
          <li><b>Hydrothermal & volcanic gases:</b> Contain significant helium due to radioactive decay in the crust</li>
          <li><b>Space:</b> Abundant in Sun and all stars (visible in spectra, responsible for solar prominence colors)</li>
        </ul>
        <div className="mt-2 text-xs text-gray-500">
          <b>Fact:</b> Each day, several tons of helium are produced in the Earth's crust but most escapes irreversibly to space.
        </div>
      </CardContent>
    </Card>
  );
};
export default HeliumNaturalOccurrenceSection;
