
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const CarbonHistorySection: React.FC = () => (
  <Card className="my-4 border border-gray-300 dark:border-gray-700">
    <CardHeader className="bg-slate-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">History &amp; Discovery</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs space-y-2">
      <div>
        <strong>Ancient use:</strong> Carbon has been used since prehistoric times in the form of charcoal for cave drawings, metallurgy, fuel, and medicine. The Egyptians and Sumerians produced charcoal around 3750 BCE.
      </div>
      <div>
        <strong>Diamond and graphite:</strong> Natural graphite was described by Romans ("plumbago"). Diamonds were traded in India as early as 4th century BCE and revered worldwide.
      </div>
      <div>
        <strong>Recognition as an element:</strong> Antoine Lavoisier recognized carbon as an element in 1772 based on combustion experiments. He demonstrated that both charcoal and diamond are forms of the same element.
      </div>
      <div>
        <strong>Etymology:</strong> The name "carbon" derives from the Latin "carbo" meaning coal or charcoal.
      </div>
      <div>
        <strong>Scientific milestones:</strong>
        <ul className="list-disc pl-4 space-y-1">
          <li>1796: Smithson Tennant proved diamond is pure carbon by oxidizing it to carbon dioxide.</li>
          <li>1789: Abraham Werner classified graphite as a form of carbon.</li>
          <li>1953: First artificial diamond created in Sweden.</li>
          <li>1985: Discovery of fullerenes (C<sub>60</sub>, "buckyballs"), ushering in the field of nanocarbon science.</li>
          <li>2004: Isolation of graphene in Manchester, UK (Nobel Prize in Physics 2010).</li>
        </ul>
      </div>
      <div>
        <strong>Modern impact:</strong> Carbon is central to organic chemistry, materials science, and all living organisms. Its allotropes (diamond, graphite, graphene, fullerenes, nanotubes) have revolutionized technology and research.
      </div>
      <div className="mt-2 text-[11px] text-gray-500">
        Sources: Royal Society of Chemistry, Nature, CRC Handbook, NobelPrize.org
      </div>
    </CardContent>
  </Card>
);

export default CarbonHistorySection;
