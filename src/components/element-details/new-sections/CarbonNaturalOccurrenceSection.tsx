
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const CarbonNaturalOccurrenceSection: React.FC = () => (
  <Card className="my-4 border border-gray-300 dark:border-gray-700">
    <CardHeader className="bg-slate-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Occurrence &amp; Abundance</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs space-y-2">
      <div>
        <strong>Abundance:</strong> Carbon is the 15th most abundant element in Earth's crust (~200 ppm by weight), and the 4th most abundant in the universe by mass (after hydrogen, helium, and oxygen).
      </div>
      <div>
        <strong>Earth:</strong>
        <ul className="list-disc pl-4 space-y-1">
          <li>Occurs as diamond and graphite (allotropes in metamorphic and igneous rocks).</li>
          <li>Found as amorphous carbon in coal, soot, and charcoal.</li>
          <li>Carbonates (calcite, limestone, dolomite) are major carbon reservoirs in sedimentary rocks.</li>
          <li>Present as carbon dioxide (CO<sub>2</sub>, ~0.04%) in the atmosphere.</li>
          <li>Dissolved as bicarbonate and carbonate ions in oceans and lakes.</li>
        </ul>
      </div>
      <div>
        <strong>Biological:</strong> Essential to all life: organic molecules, DNA, proteins, carbohydrates, lipids. The “backbone” of organic chemistry.
      </div>
      <div>
        <strong>Cosmic/astronomical:</strong> Formed in stellar interiors by the triple-alpha process. Found in the Sun, stars, interstellar dust, comets, meteorites, and as simple molecules in space.
      </div>
      <div>
        <strong>Major deposits:</strong> Diamonds: Africa, Russia, Canada, Australia. Graphite: China, India, Brazil, North Korea.
      </div>
      <div className="mt-2 text-[11px] text-gray-500">
        Sources: CRC Handbook, NASA, RSC, USGS
      </div>
    </CardContent>
  </Card>
);

export default CarbonNaturalOccurrenceSection;
