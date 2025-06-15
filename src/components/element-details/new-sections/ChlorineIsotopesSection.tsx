
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const ChlorineIsotopesSection: React.FC = () => {
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
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-1 px-2">Chlorine-35</td>
              <td className="py-1 px-2">³⁵Cl</td>
              <td className="py-1 px-2">Stable</td>
              <td className="py-1 px-2">75.76%</td>
              <td className="py-1 px-2">Stable</td>
            </tr>
            <tr>
              <td className="py-1 px-2">Chlorine-37</td>
              <td className="py-1 px-2">³⁷Cl</td>
              <td className="py-1 px-2">Stable</td>
              <td className="py-1 px-2">24.24%</td>
              <td className="py-1 px-2">Stable</td>
            </tr>
            <tr>
              <td className="py-1 px-2">Chlorine-36</td>
              <td className="py-1 px-2">³⁶Cl</td>
              <td className="py-1 px-2">Radioactive</td>
              <td className="py-1 px-2">Trace</td>
              <td className="py-1 px-2">301,000 years</td>
            </tr>
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
};

export default ChlorineIsotopesSection;
