
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const OxygenHistorySection: React.FC = () => (
  <Card className="my-4 border border-gray-300 dark:border-gray-700">
    <CardHeader className="bg-slate-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">History &amp; Discovery</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs space-y-2">
      <div>
        <strong>Discovery:</strong> Oxygen was independently discovered by Carl Wilhelm Scheele (1772) and Joseph Priestley (1774), with Priestley publishing first.
      </div>
      <div>
        <strong>Naming and recognition:</strong> Antoine Lavoisier named it "oxygen" in 1777 from Greek "oxys" (acid) + "genes" (producer), incorrectly thinking all acids contained oxygen.
      </div>
      <div>
        <strong>Key discoveries timeline:</strong>
        <ul className="list-disc pl-4 space-y-1">
          <li>1772: Scheele isolates "fire air" by heating mercuric oxide</li>
          <li>1774: Priestley discovers "dephlogisticated air" using focused sunlight</li>
          <li>1777: Lavoisier establishes role in combustion and names oxygen</li>
          <li>1883: Liquid oxygen first produced by Wroblewski and Olszewski</li>
          <li>1895: Ozone discovered in atmosphere by Schönbein</li>
          <li>1901: Oxyacetylene welding developed</li>
        </ul>
      </div>
      <div>
        <strong>Scientific revolution:</strong> Oxygen's discovery overthrew phlogiston theory and established modern understanding of combustion, respiration, and oxidation.
      </div>
      <div>
        <strong>Medical breakthroughs:</strong>
        <ul className="list-disc pl-4 space-y-1">
          <li>1885: First use of oxygen therapy for pneumonia</li>
          <li>1907: Oxygen tents introduced for respiratory treatment</li>
          <li>1960s: Hyperbaric oxygen therapy developed</li>
          <li>Modern era: Essential for intensive care and surgery</li>
        </ul>
      </div>
      <div>
        <strong>Industrial impact:</strong> Oxygen production enabled steelmaking, welding, rocket propulsion, and chemical manufacturing on industrial scales.
      </div>
      <div>
        <strong>Space exploration:</strong> Liquid oxygen became crucial as rocket oxidizer, enabling space travel and satellite launches.
      </div>
      <div className="mt-2 text-[11px] text-gray-500">
        Sources: Science History Institute, Royal Society of Chemistry, NASA History
      </div>
    </CardContent>
  </Card>
);

export default OxygenHistorySection;
