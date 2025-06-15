
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

/** History and Discovery of Lithium */
const LithiumHistorySection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Discovery &amp; History</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs space-y-2">
      <div>
        <strong>Discovery:</strong> 1817 by Johan August Arfvedson (Sweden), who found a new component in the mineral petalite (LiAlSi₄O₁₀) while analyzing ore samples.
      </div>
      <div>
        <strong>Isolation:</strong> William Thomas Brande and Sir Humphry Davy obtained pure metallic lithium in 1821 by electrolysis of lithium oxide.
      </div>
      <div>
        <strong>Name origin:</strong> From Greek <i>lithos</i>, meaning “stone,” because it was first discovered in minerals, unlike sodium and potassium which had been isolated from plant materials.
      </div>
      <div>
        <strong>Industrial use:</strong> For much of the 19th century, lithium was mainly used in psychiatric medicine and luxury glassware. Its vital role in batteries, grease, and nuclear technology developed in the 20th century.
      </div>
      <ul className="list-disc pl-4">
        <li>First used therapeutically as early as the 1850s to treat gout and mental disorders.</li>
        <li>Commercial production of lithium began in the United States around 1923 (electrolysis of lithium chloride).</li>
        <li>Lithium-ion batteries were commercialized in the 1990s, rapidly transforming electronics and transportation.</li>
      </ul>
      <div className="text-xs text-gray-500 mt-1">
        Sources: Royal Society of Chemistry, Science History Institute, CRC Handbook, Nobel Prize Archives.
      </div>
    </CardContent>
  </Card>
);
export default LithiumHistorySection;
