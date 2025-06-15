
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const CarbonCompoundsSection: React.FC = () => (
  <Card className="my-4 border border-gray-300 dark:border-gray-700">
    <CardHeader className="bg-slate-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Compounds &amp; Chemistry</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>
          <b>Organic chemistry:</b> Carbon forms millions of compounds — more than all other elements combined. These include hydrocarbons, alcohols, acids, proteins, carbohydrates, DNA/RNA, plastics, and more.
        </li>
        <li>
          <b>Allotropes:</b> Diamond (extremely hard, insulating), graphite (soft, conducts electricity), graphene (single atom-thick, very strong), fullerenes (C<sub>60</sub>), carbon nanotubes (nanotech).
        </li>
        <li>
          <b>Inorganic carbon compounds:</b> Carbon dioxide (CO<sub>2</sub>), carbon monoxide (CO), carbonic acid (H<sub>2</sub>CO<sub>3</sub>), cyanides, carbides.
        </li>
        <li>
          <b>Carbonates:</b> Calcium carbonate (CaCO<sub>3</sub>, limestone), sodium carbonate (Na<sub>2</sub>CO<sub>3</sub>), important in geology and industry.
        </li>
        <li>
          <b>Carbides:</b> Such as silicon carbide (SiC), tungsten carbide (WC), extremely hard materials, used in cutting tools and abrasives.
        </li>
        <li>
          <b>Combustion:</b> Carbon burns in oxygen to form CO<sub>2</sub> or (with limited oxygen) CO.
        </li>
        <li>
          <b>Important properties:</b> Tetravalency (forms 4 bonds), catenation (forms chains/rings).
        </li>
        <li>
          <b>Aromaticity:</b> Stable ring compounds (benzene, polycyclic aromatics).
        </li>
      </ul>
      <div className="mt-2 text-xs text-gray-500">
        Sources: CRC Handbook, IUPAC Gold Book, Royal Society of Chemistry, Organic Chemistry textbooks.
      </div>
    </CardContent>
  </Card>
);

export default CarbonCompoundsSection;
