
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const OxygenSafetySection: React.FC = () => (
  <Card className="my-4 border border-gray-300 dark:border-gray-700">
    <CardHeader className="bg-slate-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Safety &amp; Precautions</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs space-y-2">
      <div>
        <strong>Fire and explosion hazards:</strong>
        <ul className="list-disc pl-4 space-y-1">
          <li><strong>Combustion acceleration:</strong> Oxygen dramatically increases fire intensity and spread rate</li>
          <li><strong>Material compatibility:</strong> Many materials become highly flammable in oxygen-rich environments</li>
          <li><strong>Flash point reduction:</strong> Normally non-flammable materials can ignite in pure oxygen</li>
          <li><strong>Explosion risk:</strong> Oxygen-fuel mixtures can explode with devastating force</li>
        </ul>
      </div>
      <div>
        <strong>Health and medical hazards:</strong>
        <ul className="list-disc pl-4 space-y-1">
          <li><strong>Oxygen toxicity:</strong> &gt;50% O<sub>2</sub> for extended periods damages lungs and eyes</li>
          <li><strong>Central nervous system toxicity:</strong> High-pressure oxygen causes seizures and unconsciousness</li>
          <li><strong>Retinopathy of prematurity:</strong> Excess oxygen damages retinas in premature infants</li>
          <li><strong>Absorption atelectasis:</strong> High oxygen concentrations can collapse alveoli</li>
        </ul>
      </div>
      <div>
        <strong>Handling precautions:</strong>
        <ul className="list-disc pl-4 space-y-1">
          <li>Use oxygen-compatible materials (avoid oil, grease, organic materials)</li>
          <li>Proper grounding and static electricity prevention</li>
          <li>Adequate ventilation to prevent oxygen buildup</li>
          <li>Personal protective equipment for liquid oxygen handling</li>
          <li>Regular equipment inspection and maintenance</li>
        </ul>
      </div>
      <div>
        <strong>Storage and transportation safety:</strong>
        <ul className="list-disc pl-4 space-y-1">
          <li>Secure cylinder storage away from heat and combustible materials</li>
          <li>Proper valve protection and handling procedures</li>
          <li>Emergency procedures for oxygen leaks and exposure</li>
          <li>DOT regulations for oxygen transportation</li>
        </ul>
      </div>
      <div>
        <strong>Environmental considerations:</strong>
        <ul className="list-disc pl-4 space-y-1">
          <li>Ozone layer protection (Montreal Protocol compliance)</li>
          <li>Ground-level ozone pollution monitoring and control</li>
          <li>Aquatic oxygen depletion from industrial discharges</li>
          <li>Ecosystem impacts of altered oxygen levels</li>
        </ul>
      </div>
      <div>
        <strong>Emergency response:</strong> Immediate removal from oxygen-rich atmosphere, treatment for oxygen toxicity, fire suppression with appropriate methods.</div>
      <div className="mt-2 text-[11px] text-gray-500">
        Sources: OSHA, NFPA, Compressed Gas Association, Medical Gas Standards
      </div>
    </CardContent>
  </Card>
);

export default OxygenSafetySection;
