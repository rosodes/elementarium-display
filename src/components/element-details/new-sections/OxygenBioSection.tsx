
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const OxygenBioSection: React.FC = () => (
  <Card className="my-4 border border-green-200 dark:border-green-700">
    <CardHeader className="bg-green-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Biological Role &amp; Toxicity</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs space-y-2">
      <div>
        <strong>Essential for life:</strong> Oxygen is absolutely essential for most life forms, comprising 65% of human body weight and enabling cellular respiration in aerobic organisms.
      </div>
      <div>
        <strong>Cellular respiration:</strong>
        <ul className="list-disc pl-4 space-y-1">
          <li>ATP production through oxidative phosphorylation</li>
          <li>Electron transport chain in mitochondria</li>
          <li>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub> → 6CO<sub>2</sub> + 6H<sub>2</sub>O + ATP (glucose oxidation)</li>
          <li>Oxygen serves as final electron acceptor</li>
        </ul>
      </div>
      <div>
        <strong>Biological functions:</strong>
        <ul className="list-disc pl-4 space-y-1">
          <li>Component of water (cellular medium)</li>
          <li>Present in proteins, carbohydrates, lipids, nucleic acids</li>
          <li>Enzyme cofactor in many biochemical reactions</li>
          <li>Immune system: oxygen radicals kill pathogens</li>
          <li>Wound healing and tissue repair</li>
        </ul>
      </div>
      <div>
        <strong>Photosynthesis and oxygen production:</strong>
        <ul className="list-disc pl-4 space-y-1">
          <li>6CO<sub>2</sub> + 6H<sub>2</sub>O + light → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub></li>
          <li>Plants, algae, and cyanobacteria produce atmospheric oxygen</li>
          <li>Great Oxidation Event (2.4 billion years ago) transformed Earth's atmosphere</li>
        </ul>
      </div>
      <div>
        <strong>Oxygen toxicity and safety:</strong>
        <ul className="list-disc pl-4 space-y-1">
          <li><strong>Oxygen poisoning:</strong> High concentrations damage lungs and central nervous system</li>
          <li><strong>Reactive oxygen species (ROS):</strong> Can damage cells and DNA (oxidative stress)</li>
          <li><strong>Hypoxia:</strong> Oxygen deficiency causes cell death and organ failure</li>
          <li><strong>Fire hazard:</strong> Pure oxygen accelerates combustion dramatically</li>
        </ul>
      </div>
      <div>
        <strong>Medical applications:</strong>
        <ul className="list-disc pl-4 space-y-1">
          <li>Respiratory therapy and intensive care</li>
          <li>Hyperbaric oxygen therapy for wound healing</li>
          <li>Anesthesia and surgical procedures</li>
          <li>Treatment of carbon monoxide poisoning</li>
        </ul>
      </div>
      <div>
        <strong>Environmental impact:</strong> Ozone depletion, ground-level ozone pollution, and oxygen depletion in aquatic ecosystems from eutrophication.
      </div>
      <div className="mt-2 text-xs text-gray-600 dark:text-gray-300">
        Oxygen is both life-sustaining and potentially toxic - balance is essential for health.
      </div>
    </CardContent>
  </Card>
);

export default OxygenBioSection;
