
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const NitrogenSafetySection: React.FC = () => (
  <Card className="my-4 border border-gray-300 dark:border-gray-700">
    <CardHeader className="bg-slate-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Safety &amp; Precautions</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs space-y-2">
      <div>
        <strong>Nitrogen gas hazards:</strong>
        <ul className="list-disc pl-4 space-y-1">
          <li><strong>Asphyxiation risk:</strong> Nitrogen displaces oxygen in confined spaces, leading to unconsciousness and death</li>
          <li><strong>Cryogenic hazards:</strong> Liquid nitrogen (-196°C) causes severe frostbite and thermal burns</li>
          <li><strong>Pressure hazards:</strong> High-pressure nitrogen systems require proper safety equipment</li>
          <li><strong>Expansion risk:</strong> Liquid nitrogen expands 696 times when vaporizing, creating pressure buildup</li>
        </ul>
      </div>
      <div>
        <strong>Nitrogen compound hazards:</strong>
        <ul className="list-disc pl-4 space-y-1">
          <li><strong>Ammonia (NH<sub>3</sub>):</strong> Corrosive, causes chemical burns, respiratory irritant</li>
          <li><strong>Nitrogen oxides:</strong> Toxic gases causing respiratory problems and environmental damage</li>
          <li><strong>Nitric acid:</strong> Highly corrosive, causes severe burns, oxidizing agent</li>
          <li><strong>Organic nitrates:</strong> Many are explosive (nitroglycerin, TNT)</li>
        </ul>
      </div>
      <div>
        <strong>Safety protocols:</strong>
        <ul className="list-disc pl-4 space-y-1">
          <li>Oxygen monitoring in nitrogen-rich environments</li>
          <li>Proper ventilation systems for nitrogen handling</li>
          <li>Personal protective equipment (PPE) for cryogenic applications</li>
          <li>Emergency procedures for nitrogen leaks and exposure</li>
          <li>Training for handling compressed gas cylinders</li>
        </ul>
      </div>
      <div>
        <strong>Environmental considerations:</strong>
        <ul className="list-disc pl-4 space-y-1">
          <li>Nitrogen pollution causes eutrophication in water bodies</li>
          <li>NOx emissions contribute to acid rain and smog formation</li>
          <li>Nitrous oxide is a potent greenhouse gas</li>
          <li>Fertilizer runoff creates agricultural pollution</li>
        </ul>
      </div>
      <div>
        <strong>Occupational limits:</strong> OSHA sets exposure limits for various nitrogen compounds; ammonia: 50 ppm TWA, nitric acid: 2 ppm TWA.</div>
      <div className="mt-2 text-[11px] text-gray-500">
        Sources: OSHA, NIOSH, EPA, Material Safety Data Sheets
      </div>
    </CardContent>
  </Card>
);

export default NitrogenSafetySection;
