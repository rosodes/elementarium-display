
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const OxygenCompoundsSection: React.FC = () => (
  <Card className="my-4 border border-gray-300 dark:border-gray-700">
    <CardHeader className="bg-slate-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Compounds &amp; Chemistry</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs space-y-2">
      <div>
        <strong>Universal compound former:</strong> Oxygen forms compounds with every element except helium, neon, and argon, making it the most reactive and abundant compound-forming element.
      </div>
      <div>
        <strong>Oxidation states:</strong> Primarily -2, but also -1 (peroxides), 0 (O<sub>2</sub>, O<sub>3</sub>), and positive states in fluorine compounds.
      </div>
      <div>
        <strong>Major compound classes:</strong>
        <ul className="list-disc pl-4 space-y-1">
          <li><strong>Water and hydroxides:</strong> H<sub>2</sub>O, NaOH, Ca(OH)<sub>2</sub> - fundamental to chemistry and biology</li>
          <li><strong>Metal oxides:</strong> Al<sub>2</sub>O<sub>3</sub>, Fe<sub>2</sub>O<sub>3</sub>, CaO - basic and amphoteric oxides</li>
          <li><strong>Non-metal oxides:</strong> CO<sub>2</sub>, SO<sub>2</sub>, NO<sub>2</sub> - often acidic, important in atmosphere</li>
          <li><strong>Peroxides:</strong> H<sub>2</sub>O<sub>2</sub>, Na<sub>2</sub>O<sub>2</sub> - powerful oxidizing agents</li>
          <li><strong>Oxyacids:</strong> H<sub>2</sub>SO<sub>4</sub>, HNO<sub>3</sub>, H<sub>3</sub>PO<sub>4</sub> - essential industrial chemicals</li>
        </ul>
      </div>
      <div>
        <strong>Organic oxygen compounds:</strong>
        <ul className="list-disc pl-4 space-y-1">
          <li>Alcohols (methanol, ethanol), ethers, aldehydes, ketones</li>
          <li>Carboxylic acids and esters</li>
          <li>Carbohydrates (glucose, cellulose, starch)</li>
          <li>Lipids and fatty acids</li>
          <li>Biomolecules (proteins, nucleic acids)</li>
        </ul>
      </div>
      <div>
        <strong>Allotropes:</strong>
        <ul className="list-disc pl-4 space-y-1">
          <li>Dioxygen (O<sub>2</sub>): stable diatomic form, paramagnetic</li>
          <li>Ozone (O<sub>3</sub>): bent triatomic molecule, powerful oxidizer</li>
          <li>Atomic oxygen (O): highly reactive, present in upper atmosphere</li>
        </ul>
      </div>
      <div>
        <strong>Bonding characteristics:</strong> Forms strong bonds with most elements, commonly double bonds (O=O in O<sub>2</sub>), coordinate bonds in metal complexes.
      </div>
      <div>
        <strong>Industrial oxygen chemistry:</strong> Steel production, chemical synthesis, waste treatment, bleaching, and rocket propulsion.
      </div>
      <div className="mt-2 text-[11px] text-gray-500">
        Sources: IUPAC Gold Book, Advanced Inorganic Chemistry, CRC Handbook
      </div>
    </CardContent>
  </Card>
);

export default OxygenCompoundsSection;
