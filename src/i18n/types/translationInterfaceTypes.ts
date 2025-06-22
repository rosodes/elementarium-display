export interface LegendTranslations {
  title: string;
  description: string;
  categories: {
    hydrogen: {
      label: string;
      description: string;
    };
    alkaliMetal: {
      label: string;
      description: string;
    };
    alkalineEarthMetal: {
      label: string;
      description: string;
    };
    transitionMetal: {
      label: string;
      description: string;
    };
    postTransitionMetal: {
      label: string;
      description: string;
    };
    metalloid: {
      label: string;
      description: string;
    };
    nonmetal: {
      label: string;
      description: string;
    };
    halogen: {
      label: string;
      description: string;
    };
    nobleGas: {
      label: string;
      description: string;
    };
    lanthanide: {
      label: string;
      description: string;
    };
    actinide: {
      label: string;
      description: string;
    };
    unknown: {
      label: string;
      description: string;
    };
  };
  additionalInfo: {
    title: string;
    radioactive: string;
    lanthanides: string;
    actinides: string;
  };
  accessibility: string;
  elementCount: {
    one: string;
    few: string;
    many: string;
  };
}

export interface QuickStatsTranslations {
  title: string;
  subtitle: string;
  sections: {
    mainStats: {
      title: string;
      totalElements: string;
      foundElements: string;
      naturalElements: string;
      syntheticElements: string;
      tableStructure: string;
      descriptions: {
        total: string;
        natural: string;
        synthetic: string;
        structure: string;
      };
    };
    blocks: {
      title: string;
      sBlock: string;
      pBlock: string;
      dBlock: string;
      fBlock: string;
      descriptions: {
        sBlock: string;
        pBlock: string;
        dBlock: string;
        fBlock: string;
      };
    };
    states: {
      title: string;
      solids: string;
      liquids: string;
      gases: string;
      descriptions: {
        solids: string;
        liquids: string;
        gases: string;
      };
    };
    history: {
      title: string;
      ancient: string;
      classical: string;
      modern: string;
      descriptions: {
        ancient: string;
        classical: string;
        modern: string;
      };
    };
    categories: {
      title: string;
      alkaliMetals: string;
      alkalineEarthMetals: string;
      transitionMetals: string;
      postTransitionMetals: string;
      metalloids: string;
      nonmetals: string;
      halogens: string;
      nobleGases: string;
      lanthanides: string;
      actinides: string;
      unknown: string;
    };
  };
  labels: {
    percentage: string;
    ofTotal: string;
    outOf: string;
    elements: string;
    periods: string;
    groups: string;
  };
}

export interface DetailsTranslations {
  name: string;
  symbol: string;
  atomicNumber: string;
  atomicMass: string;
  group: string;
  period: string;
  block: string;
  category: string;
  electronConfiguration: string;
  description: string;
  properties: string;
  applications: string;
  history: string;
  discovery: string;
  discoverer: string;
  meltingPoint: string;
  boilingPoint: string;
  density: string;
  electronegativity: string;
  ionizationEnergy: string;
  atomicRadius: string;
  oxidationStates: string;
  electronAffinity: string;
  specificHeat: string;
  thermalConductivity: string;
  electricalConductivity: string;
  crystalStructure: string;
  magneticProperties: string;
  abundance: string;
  isotopes: string;
  hazards: string;
  precautions: string;
  uses: string;
  compounds: string;
  biologicalRole: string;
  environmentalImpact: string;
  price: string;
  availability: string;
  production: string;
  sources: string;
  etymology: string;
  pronunciation: string;
  alternativeNames: string;
  chemicalFormula: string;
  molecularWeight: string;
  phase: string;
  radioactive: string;
  halfLife: string;
  decay: string;
  neutrons: string;
  electrons: string;
  protons: string;
  valenceElectrons: string;
  shellConfiguration: string;
  quantumNumbers: string;
  magneticMoment: string;
  nuclearProperties: string;
  spectralLines: string;
  xrayAbsorption: string;
  neutronCrossSection: string;
  speedOfSound: string;
  refractiveIndex: string;
  bulkModulus: string;
  shearModulus: string;
  youngModulus: string;
  poissonRatio: string;
  mohsHardness: string;
  vickersHardness: string;
  brinellHardness: string;
  thermalExpansion: string;
  heatOfVaporization: string;
  heatOfFusion: string;
  vaporPressure: string;
  viscosity: string;
  surfaceTension: string;
  dielectricConstant: string;
  resistivity: string;
  superconducting: string;
  bandGap: string;
  workFunction: string;
  cosmicAbundance: string;
  solarAbundance: string;
  meteoriteAbundance: string;
  crustAbundance: string;
  oceanAbundance: string;
  humanAbundance: string;
  reserveEstimates: string;
  recyclingRate: string;
  substitute: string;
  criticalityAssessment: string;
  marketPrice: string;
  tradingInfo: string;
  geopoliticalFactors: string;
  environmentalConcerns: string;
  wasteManagement: string;
  sustainabilityIndex: string;
  carbonFootprint: string;
  energyRequirement: string;
  waterUsage: string;
  landUse: string;
  emissions: string;
  toxicity: string;
  bioaccumulation: string;
  persistence: string;
  mobility: string;
  treatmentMethods: string;
  disposalMethods: string;
  emergencyProcedures: string;
  firstAid: string;
  storageConditions: string;
  transportationRules: string;
  regulatoryStatus: string;
  safetyDataSheet: string;
  riskAssessment: string;
  exposureLimits: string;
  protectiveEquipment: string;
  handlingProcedures: string;
  spillCleanup: string;
  fireExtinguishing: string;
  incompatibleMaterials: string;
  stabilityConditions: string;
  decompositionProducts: string;
  polymerizationHazard: string;
  reactiveMaterials: string;
  routesOfExposure: string;
  acuteToxicity: string;
  chronicToxicity: string;
  carcinogenicity: string;
  mutagenicity: string;
  reproductiveToxicity: string;
  teratogenicity: string;
  neurotoxicity: string;
  immunotoxicity: string;
  endocrineDisruption: string;
  biomarkers: string;
  metabolicPathways: string;
  excretionRoutes: string;
  pharmacokinetics: string;
  therapeuticUses: string;
  medicalApplications: string;
  diagnosticUses: string;
  contraindicationWarnings: string;
  drugInteractions: string;
  dosageGuidelines: string;
  administrationRoutes: string;
  monitoringParameters: string;
  adverseEffects: string;
  contraindications: string;
  pregnancyCategory: string;
  breastfeedingConsiderations: string;
  pediatricConsiderations: string;
  geriatricConsiderations: string;
  renalConsiderations: string;
  hepaticConsiderations: string;
  qualityControl: string;
  analyticalMethods: string;
  purityRequirements: string;
  impurityLimits: string;
  stabilityTesting: string;
  shelfLife: string;
  packagingRequirements: string;
  labelingRequirements: string;
  batchRecords: string;
  validationProtocols: string;
  changeControl: string;
  deviation: string;
  corrective: string;
  preventive: string;
  riskManagement: string;
  supplierQualification: string;
  materialReviewBoard: string;
  auditTrail: string;
  documentation: string;
  trainingRequirements: string;
  competencyAssessment: string;
  continuousImprovement: string;
}

export interface CategoriesTranslations {
  alkaliMetal: string;
  alkalineEarthMetal: string;
  lanthanide: string;
  actinide: string;
  transitionMetal: string;
  postTransitionMetal: string;
  metalloid: string;
  reactiveNonmetal: string;
  nobleGas: string;
  unknown: string;
  hydrogen: string;
  halogen: string;
  nonmetal: string;
}

export interface UITranslations {
  close: string;
  back: string;
  more: string;
  view: string;
  loading: string;
  radioactive: string;
  themeToggle: string;
  language: string;
  search: string;
  filter: string;
  reset: string;
  noResults: string;
  period: string;
  group: string;
  periodNumbersLabel: string;
  groupNumbersLabel: string;
  searchPlaceholder: string;
  searchResults: string;
  searchNoResults: string;
  clearSearch: string;
  searchShortcut: string;
  accessibilityLabel: string;
  elementTable: string;
  focusMode: string;
  usageDistribution: string;
  simulatedData: string;
  note: string;
  elementRemoved: string;
  elementBookmarked: string;
  linkCopied: string;
  linkCopiedToClipboard: string;
  naturalElements: string;
  syntheticElements: string;
  hotkeySearch: string;
  hotkeyHome: string;
  hotkeyClose: string;
  skipToContent: string;
  backToHome: string;
  previousElement: string;
  nextElement: string;
  elements: Record<string, string>;
}
