
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

/**
 * Основные спектральные серии атома водорода (важно для физики и астрономии)
 */
const HydrogenSpectralSeriesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Spectral Series</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>
            <strong>Lyman series</strong> (ultraviolet): electron transitions to n=1 (e.g. 121.6 nm).
          </li>
          <li>
            <strong>Balmer series</strong> (visible): transitions to n=2 (e.g. Hα = 656.3 nm, red line).
          </li>
          <li>
            <strong>Paschen, Brackett, Pfund</strong> (infrared): transitions to n=3,4,5.
          </li>
        </ul>
        <div className="mt-2">
          See:&nbsp;
          <a 
            href="https://en.wikipedia.org/wiki/Balmer_series"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-700"
          >
            Balmer series (Wikipedia)
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default HydrogenSpectralSeriesSection;
