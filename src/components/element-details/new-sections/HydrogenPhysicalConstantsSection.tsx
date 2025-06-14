
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

/**
 * Таблица физических и атомных констант водорода
 */
const HydrogenPhysicalConstantsSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Physical & Atomic Constants</CardTitle>
      </CardHeader>
      <CardContent className="p-4 overflow-x-auto">
        <table className="min-w-full text-xs border">
          <tbody>
            <tr>
              <td className="p-2 font-bold">Atomic radius (empirical)</td>
              <td className="p-2">25 pm</td>
            </tr>
            <tr>
              <td className="p-2 font-bold">Ionization energy</td>
              <td className="p-2">1312 kJ/mol</td>
            </tr>
            <tr>
              <td className="p-2 font-bold">Thermal conductivity</td>
              <td className="p-2">0.1805 W/(m·K)</td>
            </tr>
            <tr>
              <td className="p-2 font-bold">Specific heat</td>
              <td className="p-2">14300 J/(kg·K)</td>
            </tr>
            <tr>
              <td className="p-2 font-bold">Electronegativity</td>
              <td className="p-2">2.20 (Pauling)</td>
            </tr>
            <tr>
              <td className="p-2 font-bold">Crystal structure</td>
              <td className="p-2">hcp (solid, below 14K)</td>
            </tr>
            <tr>
              <td className="p-2 font-bold">Magnetism</td>
              <td className="p-2">Diamagnetic</td>
            </tr>
            <tr>
              <td className="p-2 font-bold">Density (at STP)</td>
              <td className="p-2">0.0899 g/L</td>
            </tr>
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
};

export default HydrogenPhysicalConstantsSection;
