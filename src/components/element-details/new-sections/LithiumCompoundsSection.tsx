
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

/** Compounds & Chemistry of Lithium */
const LithiumCompoundsSection: React.FC = () => (
  <Card className="my-4 border border-blue-200 dark:border-blue-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Compounds &amp; Chemistry</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li><b>Lithium compounds are mostly ionic:</b> lithium carbonate (Li₂CO₃), lithium chloride (LiCl), lithium hydroxide (LiOH), lithium bromide (LiBr), lithium fluoride (LiF).</li>
        <li><b>Most important use:</b> Lithium salts, especially Li₂CO₃, in psychiatric medications and batteries.</li>
        <li><b>Other uses:</b> Lithium stearate—a high temperature lubricant; lithium greases; LiAlH₄—powerful reducing agent.</li>
        <li><b>Unique chemistry:</b> Lithium oxide (Li₂O), lithium nitride (Li₃N, the only stable alkali metal nitride at room temperature!), and various organolithium reagents (LiCH₃, BuLi) key for organic synthesis.</li>
        <li>All common lithium compounds contain the Li<sup>+</sup> ion. No stable +2 or higher oxidation states.</li>
      </ul>
      <div className="mt-2 text-xs text-gray-500">
        Sources: CRC Handbook, Royal Society of Chemistry, IUPAC Gold Book.
      </div>
    </CardContent>
  </Card>
);
export default LithiumCompoundsSection;
