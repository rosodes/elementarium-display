
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

/**
 * Таблица изотопов водорода (Hydrogen): 1H (протий), 2H (дейтерий), 3H (тритий).
 */
const HydrogenIsotopesSection: React.FC = () => {
  return (
    <Card className="my-4 overflow-hidden border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Isotopes</CardTitle>
      </CardHeader>
      <CardContent className="p-4 overflow-x-auto">
        <table className="min-w-full text-xs">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2 px-2">Isotope</th>
              <th className="text-left py-2 px-2">Symbol</th>
              <th className="text-left py-2 px-2">Type</th>
              <th className="text-left py-2 px-2">Abundance</th>
              <th className="text-left py-2 px-2">Half-life</th>
              <th className="text-left py-2 px-2">Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-1 px-2">Protium</td>
              <td className="py-1 px-2">¹H</td>
              <td className="py-1 px-2">Stable</td>
              <td className="py-1 px-2">99.985%</td>
              <td className="py-1 px-2">—</td>
              <td className="py-1 px-2">Most abundant, 1 proton, 0 neutrons</td>
            </tr>
            <tr>
              <td className="py-1 px-2">Deuterium</td>
              <td className="py-1 px-2">²H (D)</td>
              <td className="py-1 px-2">Stable</td>
              <td className="py-1 px-2">0.015%</td>
              <td className="py-1 px-2">—</td>
              <td className="py-1 px-2">1 proton, 1 neutron; used in heavy water</td>
            </tr>
            <tr>
              <td className="py-1 px-2">Tritium</td>
              <td className="py-1 px-2">³H (T)</td>
              <td className="py-1 px-2">Radioactive</td>
              <td className="py-1 px-2">&lt;10⁻¹⁵%</td>
              <td className="py-1 px-2">12.3 years</td>
              <td className="py-1 px-2">1 proton, 2 neutrons; used in fusion &amp; as tracer</td>
            </tr>
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
};

export default HydrogenIsotopesSection;
