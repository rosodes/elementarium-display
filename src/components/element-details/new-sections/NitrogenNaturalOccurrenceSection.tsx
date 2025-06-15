
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const NitrogenNaturalOccurrenceSection: React.FC = () => (
  <Card className="my-4 border border-gray-300 dark:border-gray-700">
    <CardHeader className="bg-slate-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Occurrence &amp; Abundance</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs space-y-2">
      <div>
        <strong>Atmospheric abundance:</strong> Nitrogen makes up 78.1% of Earth's atmosphere by volume, making it the most abundant atmospheric gas.
      </div>
      <div>
        <strong>Earth's crust:</strong> Relatively rare in crustal rocks (~19 ppm), but essential in soil and biological systems.
      </div>
      <div>
        <strong>Natural sources:</strong>
        <ul className="list-disc pl-4 space-y-1">
          <li>Atmospheric nitrogen gas (N<sub>2</sub>) - primary reservoir</li>
          <li>Chile saltpeter (sodium nitrate, NaNO<sub>3</sub>) in desert deposits</li>
          <li>Guano deposits (bird and bat excrement rich in nitrogen compounds)</li>
          <li>Organic nitrogen in soils, plants, and animals</li>
          <li>Lightning-produced nitrates in rainfall</li>
        </ul>
      </div>
      <div>
        <strong>Biological nitrogen cycle:</strong>
        <ul className="list-disc pl-4 space-y-1">
          <li>Nitrogen fixation by bacteria (Rhizobium, Azotobacter)</li>
          <li>Nitrification: conversion of ammonia to nitrites and nitrates</li>
          <li>Denitrification: return of nitrogen to atmosphere</li>
          <li>Decomposition: breakdown of organic nitrogen compounds</li>
        </ul>
      </div>
      <div>
        <strong>Cosmic abundance:</strong> Nitrogen is the 7th most abundant element in the universe and is produced in stellar nucleosynthesis.
      </div>
      <div>
        <strong>Major reservoirs:</strong> Atmosphere (98%), lithosphere, biosphere, and hydrosphere. Ocean nitrogen exists mainly as dissolved N<sub>2</sub> and nitrates.
      </div>
      <div className="mt-2 text-[11px] text-gray-500">
        Sources: NASA, USGS, Nature Geoscience, Environmental Chemistry
      </div>
    </CardContent>
  </Card>
);

export default NitrogenNaturalOccurrenceSection;
