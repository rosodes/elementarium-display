
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const HeliumIsotopesSection: React.FC = () => {
  return (
    <Card className="my-4 overflow-hidden border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Isotopes</CardTitle>
      </CardHeader>
      <CardContent className="p-4 overflow-x-auto text-xs">
        <table className="min-w-full">
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
              <td className="py-1 px-2">
                Rare, light isotope; important in cryogenics and for low-temperature physics; potential future fuel for fusion reactors; higher ³He/⁴He ratio in extraterrestrial (solar) samples.
              </td>
            </tr>
            <tr>
              <td className="py-1 px-2">Helium-4</td>
              <td className="py-1 px-2">⁴He</td>
              <td className="py-1 px-2">Stable</td>
              <td className="py-1 px-2">99.999863%</td>
              <td className="py-1 px-2">
                By far the most common isotope, produced by alpha decay of radioactive elements; responsible for alpha particles; forms <b>superfluid</b> state at ultra-low temperature (He-II).
              </td>
            </tr>
            <tr>
              <td className="py-1 px-2">Other</td>
              <td className="py-1 px-2">⁵He–¹⁰He</td>
              <td className="py-1 px-2">Radioactive</td>
              <td className="py-1 px-2">&lt;traces</td>
              <td className="py-1 px-2">Very short-lived, created in nuclear reactions/particle accelerators; not found naturally.</td>
            </tr>
          </tbody>
        </table>
        <div className="mt-2 text-[11px] text-gray-500">
          <b>Significance:</b> The ³He/⁴He ratio is a geochemical tracer for studying volcanic, mantle, and extraterrestrial processes.<br/>
          <b>Alpha particles</b> (nuclei of ⁴He) are emitted by many radioactive elements.
        </div>
      </CardContent>
    </Card>
  );
};
export default HeliumIsotopesSection;
