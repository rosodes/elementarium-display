
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const OxygenNaturalOccurrenceSection: React.FC = () => (
  <Card className="my-4 border border-gray-300 dark:border-gray-700">
    <CardHeader className="bg-slate-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Occurrence &amp; Abundance</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs space-y-2">
      <div>
        <strong>Earth's most abundant element:</strong> Oxygen comprises 46.1% of Earth's crust by weight and 20.9% of atmosphere by volume.
      </div>
      <div>
        <strong>Natural forms and distribution:</strong>
        <ul className="list-disc pl-4 space-y-1">
          <li><strong>Atmosphere:</strong> 20.9% as O<sub>2</sub>, traces of O<sub>3</sub> (ozone) in stratosphere</li>
          <li><strong>Hydrosphere:</strong> ~89% of water mass (H<sub>2</sub>O), dissolved oxygen in aquatic systems</li>
          <li><strong>Lithosphere:</strong> Silicates, oxides, carbonates in rocks and minerals</li>
          <li><strong>Biosphere:</strong> 65% of human body mass, essential in all living organisms</li>
        </ul>
      </div>
      <div>
        <strong>Major mineral forms:</strong>
        <ul className="list-disc pl-4 space-y-1">
          <li>Silicates: quartz (SiO<sub>2</sub>), feldspar, mica, clay minerals</li>
          <li>Oxides: hematite (Fe<sub>2</sub>O<sub>3</sub>), magnetite (Fe<sub>3</sub>O<sub>4</sub>), alumina (Al<sub>2</sub>O<sub>3</sub>)</li>
          <li>Carbonates: limestone (CaCO<sub>3</sub>), dolomite (CaMg(CO<sub>3</sub>)<sub>2</sub>)</li>
          <li>Sulfates: gypsum (CaSO<sub>4</sub>·2H<sub>2</sub>O), barite (BaSO<sub>4</sub>)</li>
        </ul>
      </div>
      <div>
        <strong>Atmospheric oxygen cycle:</strong>
        <ul className="list-disc pl-4 space-y-1">
          <li>Production: photosynthesis by plants, algae, and cyanobacteria</li>
          <li>Consumption: respiration, combustion, weathering, industrial processes</li>
          <li>Ozone layer: UV protection in stratosphere (15-50 km altitude)</li>
          <li>Seasonal variations: slight changes due to plant growth cycles</li>
        </ul>
      </div>
      <div>
        <strong>Cosmic abundance:</strong> Oxygen is the 3rd most abundant element in the universe (after hydrogen and helium), formed in stellar nucleosynthesis.
      </div>
      <div>
        <strong>Water oxygen:</strong> Oceans contain vast oxygen reservoirs both as H<sub>2</sub>O molecules and dissolved O<sub>2</sub> supporting marine life.
      </div>
      <div className="mt-2 text-[11px] text-gray-500">
        Sources: USGS, NASA, Nature Geoscience, Atmospheric Chemistry
      </div>
    </CardContent>
  </Card>
);

export default OxygenNaturalOccurrenceSection;
