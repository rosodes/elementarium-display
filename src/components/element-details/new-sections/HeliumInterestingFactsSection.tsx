
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const HeliumInterestingFactsSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Interesting Facts</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Helium is the only element that cannot become solid at standard pressure &ndash; it remains liquid even at absolute zero unless under high pressure (<b>~25 atm</b>).</li>
          <li>Liquid helium below 2.17 K becomes a <b>superfluid</b> (He-II) &mdash; flows without viscosity, can climb walls, and conduct heat instantly.</li>
          <li>Helium's inertness and lightness make it ideal for airships, balloons, and leak detection; it replaced hydrogen for safety.</li>
          <li>Helium can diffuse through solid materials, including glass.</li>
          <li>When inhaled, it temporarily raises the pitch of your voice by speeding up sound waves (not safe &ndash; risk of suffocation!).</li>
          <li>Essential for <b>magnetic resonance imaging (MRI)</b> &mdash; supercooling superconducting magnets.</li>
          <li>Alpha particles are helium nuclei (⁴He²⁺), emitted in nuclear decay.</li>
          <li>Major role in deep-sea diving; breathing mixtures with He prevent nitrogen narcosis.</li>
          <li>Essential for cryogenics. Liquid He is the coldest substance readily available on Earth.</li>
        </ul>
      </CardContent>
    </Card>
  );
};
export default HeliumInterestingFactsSection;
