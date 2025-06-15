
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const NeonCompoundsSection: React.FC = () => (
  <Card className="my-4 border border-blue-200 dark:border-blue-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Compounds &amp; Chemistry</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>
          Neon is a noble gas—extremely chemically inert due to its complete outer electron shell (2s<sup>2</sup> 2p<sup>6</sup>).
        </li>
        <li>
          There are <strong>no known stable neon compounds</strong> under normal conditions—neon does not form molecules, ions, or bonds.
        </li>
        <li>
          Laboratory attempts to create Ne<sup>+</sup>, NeCl<sub>2</sub>, or organoneon compounds have failed or yielded extremely unstable, short-lived species.
        </li>
        <li>
          Matrix isolation experiments have observed rare, weakly bound van der Waals complexes (e.g., Ne·HCl, Ne·HF), but these are <em>not true chemical compounds</em>.
        </li>
        <li>
          Neon can act as an inert environment (host matrix) in low-temperature spectroscopy, stabilizing highly reactive species for scientific analysis.
        </li>
        <li>
          Due to neon's chemical inertness, it has no corrosive, toxic, or reactive properties—hence used in scientific and industrial applications as a "chemically blank" gas.
        </li>
        <li>
          No known biological or industrial neon compounds exist—neon remains exclusively monatomic (Ne) in all environments.
        </li>
      </ul>
    </CardContent>
  </Card>
);

export default NeonCompoundsSection;
