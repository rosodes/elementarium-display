
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

// Rich English-language history/discovery content for Fluorine
const FluorineHistorySection: React.FC = () => (
  <Card className="my-4 border border-green-200 dark:border-green-700">
    <CardHeader className="bg-green-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">History &amp; Discovery</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs space-y-2">
      <div>
        <strong>Discovery:</strong> Fluorine was finally isolated in 1886 by French chemist Henri Moissan after decades of failed attempts and severe injuries to many researchers.
      </div>
      <div>
        <strong>Why so hard to isolate?</strong> Fluorine is incredibly reactive and toxic; it attacks nearly all materials and violently reacts with water and organic matter.
      </div>
      <div>
        <strong>Early investigation:</strong> Carl Wilhelm Scheele described a new acid (hydrofluoric acid, HF) in 1771, but could not obtain elemental fluorine.
      </div>
      <div>
        <strong>The "fluorine martyrs":</strong> Many chemists, including Humphry Davy, Joseph Louis Gay-Lussac, and Paulin Louyet, were poisoned or injured during unsuccessful isolation attempts.
      </div>
      <div>
        <strong>Success:</strong> Henri Moissan used electrolysis of a mixture of potassium fluoride (KF) and dry hydrogen fluoride (HF) in a platinum-iridium apparatus to isolate pure F<sub>2</sub> gas, winning the 1906 Nobel Prize in Chemistry for this achievement.
      </div>
      <div>
        <strong>Etymology:</strong> The name 'fluorine' comes from the mineral 'fluorite' (calcium fluoride, CaF<sub>2</sub>), used as a flux in metallurgy. The word 'fluorescence' also derives from this mineral.
      </div>
      <div className="mt-2 text-[11px] text-gray-500">
        Sources: NobelPrize.org, Nature Chemistry, Science History Institute
      </div>
    </CardContent>
  </Card>
);

export default FluorineHistorySection;
