
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const HeliumIsotopesSection: React.FC = () => {
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
              <th className="text-left py-2 px-2">Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-1 px-2">Helium-3</td>
              <td className="py-1 px-2">³He</td>
              <td className="py-1 px-2">Stable</td>
              <td className="py-1 px-2">0.000137%</td>
              <td className="py-1 px-2">Rare, used in nuclear research</td>
            </tr>
            <tr>
              <td className="py-1 px-2">Helium-4</td>
              <td className="py-1 px-2">⁴He</td>
              <td className="py-1 px-2">Stable</td>
              <td className="py-1 px-2">99.999863%</td>
              <td className="py-1 px-2">Most common, alpha particle</td>
            </tr>
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
};

export default HeliumIsotopesSection;
