
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const HeliumNaturalOccurrenceSection: React.FC = () => (
  <Card className="my-4 border border-yellow-200 dark:border-yellow-700">
    <CardHeader className="bg-yellow-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Occurrence &amp; Abundance</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>
          <strong>Cosmic abundance:</strong> Helium is the second most abundant element in the universe after hydrogen—formed from Big Bang nucleosynthesis and in stars through nuclear fusion.
        </li>
        <li>
          <strong>Sun and stars:</strong> Sun’s mass is ~24% helium; stars produce helium by fusing hydrogen.
        </li>
        <li>
          <strong>On Earth:</strong> Helium is rare, at about 5.2 ppm by volume in Earth’s atmosphere because its light atoms escape gravity and drift into space.
        </li>
        <li>
          <strong>Helium reserves:</strong> Major terrestrial helium sources are natural gas deposits where alpha particle decay of radioactive elements in the crust traps helium in underground reservoirs.
        </li>
        <li>
          <strong>Largest producers:</strong> USA (especially Texas, Kansas, Wyoming), Qatar, Algeria, Russia.
        </li>
        <li>
          <strong>No chemical compounds:</strong> Helium is a noble gas—occurs only as a monatomic gas, not in compounds or minerals.
        </li>
      </ul>
      <div className="mt-2 text-[11px] text-gray-500">
        Sources: CRC Handbook, NASA, Royal Society of Chemistry, US Geological Survey
      </div>
    </CardContent>
  </Card>
);

export default HeliumNaturalOccurrenceSection;
