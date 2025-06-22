export interface CleanPeriodicTableTranslations {
  tableTitle: string;
  tableSubtitle: string;
  lanthanides: string;
  actinides: string;
  legendTitle: string;
  radioactive: string;
  group: string;
  period: string;
  ariaLabels: {
    periodicTable: string;
    mainTable: string;
    fBlock: string;
    lanthanides: string;
    actinides: string;
    groupNumbers: string;
    periodNumbers: string;
    group: string;
    period: string;
    radioactiveElement: string;
    atomicNumber: string;
    symbol: string;
    name: string;
    atomicMass: string;
    elementInfo: string;
    unknown: string;
  };
  labels: {
    lanthanidesCount: string;
    actinidesCount: string;
    period6: string;
    period7: string;
    elements: string;
  };
}

export interface QuickStatsTranslations {
  totalElements: string;
  naturalElements: string;
  syntheticElements: string;
  structure: string;
}

export interface MainPageInstructionsTranslations {
  title: string;
  clickElement: {
    title: string;
    description: string;
  };
  useSearch: {
    title: string;
    description: string;
  };
  studyColors: {
    title: string;
    description: string;
  };
  legendToggle: {
    show: string;
    hide: string;
  };
}

export interface CommonTranslations {
  title: string;
  subtitle: string;
  selectLanguage: string;
  search: string;
  toggleTheme: string;
  CleanPeriodicTable: CleanPeriodicTableTranslations;
  QuickStats: QuickStatsTranslations;
  MainPageInstructions: MainPageInstructionsTranslations;
}
