
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const HeliumCommercialUsesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Industrial & Everyday Uses</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>
            <b>Cryogenics:</b> Essential coolant for superconducting magnets in MRI scanners and high-energy physics.
          </li>
          <li>
            <b>Pressurization:</b> Used to pressurize and purge rocket propellant tanks.
          </li>
          <li>
            <b>Balloons, blimps, and airships:</b> Preferred inert lifting gas (non-flammable, safer than H₂).
          </li>
          <li>
            <b>Breathing gas mixtures:</b> "Heliox" for deep-sea diving to prevent nitrogen narcosis and oxygen toxicity.
          </li>
          <li>
            <b>Welding:</b> Provides an inert atmosphere for arc welding (especially for reactive metals like aluminum, titanium).
          </li>
          <li>
            <b>Leak detection:</b> Helium is used as a tracer gas for detecting very small leaks in high-vacuum and pressurized systems, thanks to atomic size.
          </li>
          <li>
            <b>Controlled environments:</b> Used for growing silicon and germanium crystals for electronics, and in conducting countless chemical/physical laboratory experiments.
          </li>
          <li>
            <b>Other:</b> Space industry, semiconductor manufacturing, and even party balloons!
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default HeliumCommercialUsesSection;
