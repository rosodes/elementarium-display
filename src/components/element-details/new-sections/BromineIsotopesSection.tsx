
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const BromineIsotopesSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Isotopes</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <div>
        <strong>Natural bromine isotopes:</strong>
        <ul className="pl-4 list-disc">
          <li><b>Br-79</b>: ~50.69%, stable</li>
          <li><b>Br-81</b>: ~49.31%, stable</li>
        </ul>
        <div className="mt-2"><strong>Important artificial isotopes:</strong></div>
        <ul className="pl-4 list-disc">
          <li><b>Br-77</b>: 57.04 hours half-life</li>
          <li><b>Br-82</b>: 35.30 hours half-life</li>
          <li><b>Br-83</b>: 2.40 hours half-life</li>
        </ul>
        <div className="mt-2">Nearly equal abundance creates distinctive mass spectral pattern</div>
      </div>
    </CardContent>
  </Card>
);

export default BromineIsotopesSection;
