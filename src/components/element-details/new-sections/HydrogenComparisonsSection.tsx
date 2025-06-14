
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

/**
 * Сравнение с аналогами (например, щелочные, благородные газы)
 */
const HydrogenComparisonsSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Comparison with Related Elements</CardTitle>
      </CardHeader>
      <CardContent className="p-4 overflow-x-auto">
        <table className="min-w-full text-xs border">
          <thead>
            <tr>
              <th className="p-2">Property</th>
              <th className="p-2">Hydrogen</th>
              <th className="p-2">Helium</th>
              <th className="p-2">Lithium</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">Atomic Number</td>
              <td className="p-2">1</td>
              <td className="p-2">2</td>
              <td className="p-2">3</td>
            </tr>
            <tr>
              <td className="p-2">Stable isotopes</td>
              <td className="p-2">2</td>
              <td className="p-2">2</td>
              <td className="p-2">2</td>
            </tr>
            <tr>
              <td className="p-2">Oxidation states</td>
              <td className="p-2">+1, -1</td>
              <td className="p-2">None</td>
              <td className="p-2">+1</td>
            </tr>
            <tr>
              <td className="p-2">Default state</td>
              <td className="p-2">Diatomic gas</td>
              <td className="p-2">Monatomic gas</td>
              <td className="p-2">Solid metal</td>
            </tr>
            <tr>
              <td className="p-2">Conductivity</td>
              <td className="p-2">Low (gas)</td>
              <td className="p-2">Very low</td>
              <td className="p-2">Metallic</td>
            </tr>
            <tr>
              <td className="p-2">Typical Compounds</td>
              <td className="p-2">H₂O, HCl</td>
              <td className="p-2">None (inert)</td>
              <td className="p-2">LiOH, LiCl</td>
            </tr>
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
};

export default HydrogenComparisonsSection;
