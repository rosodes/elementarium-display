
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const NitrogenCompoundsSection: React.FC = () => (
  <Card className="my-4 border border-gray-300 dark:border-gray-700">
    <CardHeader className="bg-slate-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Compounds &amp; Chemistry</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs space-y-2">
      <div>
        <strong>Oxidation states:</strong> Nitrogen exhibits all oxidation states from -3 to +5, showing remarkable chemical versatility.
      </div>
      <div>
        <strong>Major compound classes:</strong>
        <ul className="list-disc pl-4 space-y-1">
          <li><strong>Ammonia and amines:</strong> NH<sub>3</sub>, methylamine, aniline - nitrogen in -3 state</li>
          <li><strong>Nitrides:</strong> Li<sub>3</sub>N, BN, Si<sub>3</sub>N<sub>4</sub> - ionic and covalent nitrides</li>
          <li><strong>Oxides:</strong> N<sub>2</sub>O, NO, NO<sub>2</sub>, N<sub>2</sub>O<sub>4</sub>, N<sub>2</sub>O<sub>5</sub> - various oxidation states</li>
          <li><strong>Oxyacids:</strong> HNO<sub>2</sub> (nitrous), HNO<sub>3</sub> (nitric acid)</li>
          <li><strong>Salts:</strong> Nitrates (KNO<sub>3</sub>), nitrites (NaNO<sub>2</sub>), ammonium salts (NH<sub>4</sub>Cl)</li>
        </ul>
      </div>
      <div>
        <strong>Organic nitrogen compounds:</strong>
        <ul className="list-disc pl-4 space-y-1">
          <li>Amino acids and proteins (building blocks of life)</li>
          <li>Nucleotides and nucleic acids (DNA, RNA)</li>
          <li>Alkaloids (caffeine, nicotine, morphine)</li>
          <li>Explosives (TNT, RDX, nitroglycerin)</li>
          <li>Dyes and pharmaceuticals</li>
        </ul>
      </div>
      <div>
        <strong>Bonding characteristics:</strong> Triple bond in N<sub>2</sub> (941 kJ/mol) is one of strongest known bonds, making N<sub>2</sub> chemically inert under normal conditions.
      </div>
      <div>
        <strong>Industrial nitrogen chemistry:</strong> Haber-Bosch process, Ostwald process (nitric acid), contact process modifications.
      </div>
      <div className="mt-2 text-[11px] text-gray-500">
        Sources: IUPAC Gold Book, CRC Handbook, Advanced Inorganic Chemistry
      </div>
    </CardContent>
  </Card>
);

export default NitrogenCompoundsSection;
