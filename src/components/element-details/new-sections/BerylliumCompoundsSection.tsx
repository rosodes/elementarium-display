
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

/** Compounds & Chemistry of Beryllium */
const BerylliumCompoundsSection: React.FC = () => (
  <Card className="my-4 border border-blue-200 dark:border-blue-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Compounds &amp; Chemistry</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li><b>Beryllium forms mainly covalent compounds:</b> Due to its small ionic radius and high charge density, many beryllium compounds have significant covalent character, unlike other alkaline earth metals.</li>
        <li>
          <b>Beryllium oxide (BeO):</b> A high-melting, very hard, electrically insulating but thermally excellent ceramic, used in electronics and aerospace.
        </li>
        <li>
          <b>Beryllium chloride (BeCl₂):</b> A covalent, polymeric compound soluble in many organic solvents; hydrolyzes in water.
        </li>
        <li>
          <b>Beryllium fluoride (BeF₂):</b> Used in nuclear reactors, especially in molten salt reactors.
        </li>
        <li>
          <b>Other compounds:</b> BeSO₄ (soluble), Be(NO₃)₂, beryllium hydroxide Be(OH)₂, and complex organoberyllium compounds (used in research).
        </li>
        <li>Beryllium has only the +2 oxidation state in all compounds; stable higher or lower valence chemistry is unknown.</li>
        <li>
          <b>Toxicity note:</b> All soluble beryllium salts and dusts are hazardous.
        </li>
      </ul>
      <div className="mt-2 text-xs text-gray-500">
        Sources: Royal Society of Chemistry, CRC Handbook, IUPAC Gold Book.
      </div>
    </CardContent>
  </Card>
);

export default BerylliumCompoundsSection;
