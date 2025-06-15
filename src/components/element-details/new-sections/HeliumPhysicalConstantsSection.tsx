
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const HeliumPhysicalConstantsSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Physical Constants</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs space-y-2">
        <div className="grid grid-cols-2 gap-2">
          <div><b>Symbol:</b> He</div>
          <div><b>Atomic Number:</b> 2</div>
          <div><b>Atomic Weight:</b> 4.002602</div>
          <div><b>Group:</b> 18 (Noble gases)</div>
          <div><b>Period:</b> 1</div>
          <div><b>Block:</b> s</div>
          <div><b>Electron Configuration:</b> 1s²</div>
        </div>
        <div className="mt-3">
          <div><b>Phase at STP:</b> Gas (monatomic)</div>
          <div><b>Melting Point:</b> <span className="font-mono">0.95 K</span> (−272.2°C, at 2.5 MPa only, cannot solidify at 1 atm)</div>
          <div><b>Boiling Point:</b> <span className="font-mono">4.22 K</span> (−268.93°C, lowest of all elements)</div>
          <div><b>Critical Point:</b> 5.20 K, 0.227 MPa</div>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <div><b>Density (gas, 0°C, 1atm):</b> 0.1786 g/L</div>
          <div><b>Density (liq. at boil.):</b> 0.125 g/cm³</div>
          <div><b>Thermal Conductivity:</b> 0.1513 W/(m·K) (at 300 K)</div>
          <div><b>Van der Waals Radius:</b> 140 pm</div>
          <div><b>Atomic Radius:</b> 31 pm (calculated); 32 pm (covalent)</div>
        </div>
        <div className="mt-3">
          <b>Other:</b>
          <ul className="list-disc pl-5">
            <li>Highest first ionization energy (24.6 eV)</li>
            <li>Lowest boiling and melting points among all elements</li>
            <li>No known stable compounds at standard conditions</li>
            <li>Does not become solid at 1 atm, even at absolute zero</li>
            <li>At 2.17 K, the liquid becomes a unique <b>superfluid</b> (He-II)</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};
export default HeliumPhysicalConstantsSection;
