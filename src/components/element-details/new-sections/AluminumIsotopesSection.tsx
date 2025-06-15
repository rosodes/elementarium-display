
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const AluminumIsotopesSection: React.FC = () => {
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
              <td className="py-1 px-2">Aluminum-27</td>
              <td className="py-1 px-2">²⁷Al</td>
              <td className="py-1 px-2">Stable</td>
              <td className="py-1 px-2">100%</td>
              <td className="py-1 px-2">—</td>
              <td className="py-1 px-2">Only stable isotope</td>
            </tr>
            <tr>
              <td className="py-1 px-2">Aluminum-26</td>
              <td className="py-1 px-2">²⁶Al</td>
              <td className="py-1 px-2">Radioactive</td>
              <td className="py-1 px-2">Trace</td>
              <td className="py-1 px-2">717,000 years</td>
              <td className="py-1 px-2">Cosmogenic, used for dating</td>
            </tr>
            <tr>
              <td className="py-1 px-2">Aluminum-28</td>
              <td className="py-1 px-2">²⁸Al</td>
              <td className="py-1 px-2">Radioactive</td>
              <td className="py-1 px-2">Synthetic</td>
              <td className="py-1 px-2">2.25 minutes</td>
              <td className="py-1 px-2">β⁻ decay to ²⁸Si</td>
            </tr>
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
};

export default AluminumIsotopesSection;
