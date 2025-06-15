
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const NitrogenHistorySection: React.FC = () => (
  <Card className="my-4 border border-gray-300 dark:border-gray-700">
    <CardHeader className="bg-slate-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">History &amp; Discovery</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs space-y-2">
      <div>
        <strong>Discovery:</strong> Nitrogen was discovered in 1772 by Scottish physician Daniel Rutherford, who called it "noxious air" or "phlogisticated air" because it could not support combustion or life.
      </div>
      <div>
        <strong>Independent discoveries:</strong> Carl Wilhelm Scheele, Henry Cavendish, and Joseph Priestley all independently isolated nitrogen around the same time period (1772-1774).
      </div>
      <div>
        <strong>Naming:</strong> The name "nitrogen" was coined by French chemist Jean-Antoine Chaptal in 1790, derived from Greek "nitron" (native soda) and "genes" (forming), referring to its presence in nitrates.
      </div>
      <div>
        <strong>Key milestones:</strong>
        <ul className="list-disc pl-4 space-y-1">
          <li>1772: Daniel Rutherford isolates nitrogen gas</li>
          <li>1790: Chaptal coins the name "nitrogen"</li>
          <li>1884: Lord Rayleigh discovers atmospheric nitrogen is slightly denser than nitrogen from chemical sources</li>
          <li>1908: Fritz Haber develops the Haber-Bosch process for ammonia synthesis</li>
          <li>1909: First commercial ammonia production begins</li>
          <li>1920s: Industrial nitrogen fixation revolutionizes agriculture</li>
        </ul>
      </div>
      <div>
        <strong>Alternative names:</strong> Historically called "azote" (meaning "lifeless") by Lavoisier, and "Stickstoff" (suffocating substance) in German.
      </div>
      <div>
        <strong>Industrial impact:</strong> The development of the Haber-Bosch process in the early 20th century enabled mass production of ammonia and nitrogen fertilizers, supporting the global population growth known as the "Green Revolution."
      </div>
      <div className="mt-2 text-[11px] text-gray-500">
        Sources: Royal Society of Chemistry, CRC Handbook, Science History Institute
      </div>
    </CardContent>
  </Card>
);

export default NitrogenHistorySection;
