
import React, { useEffect, useState } from 'react';
import { Element } from '../data/elementTypes';
import { getCategoryColor, getSeriesColor } from '../data/elements';
import { useLanguage } from '../context/LanguageContext';
import { X, ArrowLeft, ArrowRight, ExternalLink, Info, Thermometer, Atom, Award, Scale, Zap, Box } from 'lucide-react';
import ElementImage from './element-details/ElementImage';
import BasicInfo from './element-details/BasicInfo';
import PhysicalProperties from './element-details/PhysicalProperties';
import AtomicStructure from './element-details/AtomicStructure';
import AdditionalInfo from './element-details/AdditionalInfo';
import { HoverCard, HoverCardTrigger, HoverCardContent } from './ui/hover-card';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from './ui/tooltip';
import { Popover, PopoverTrigger, PopoverContent } from './ui/popover';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { getElement } from '../data/elements';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Separator } from './ui/separator';
import ElectronShellVisualization from './element-details/ElectronShellVisualization';
import ElementProperties from './element-details/ElementProperties';

interface ElementDetailsProps {
  element: Element;
  onClose: () => void;
  onNavigate: (element: Element) => void;
}

const ElementDetails = ({ element, onClose, onNavigate }: ElementDetailsProps) => {
  const { t } = useLanguage();
  const categoryColor = element.category 
    ? getCategoryColor(element.category) 
    : getSeriesColor(element.series);
  
  const [tabValue, setTabValue] = useState("overview");
  
  // Get previous and next elements
  const prevElement = getElement(parseInt(element.atomic) - 1);
  const nextElement = getElement(parseInt(element.atomic) + 1);
  
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && prevElement) {
        onNavigate(prevElement);
      } else if (e.key === 'ArrowRight' && nextElement) {
        onNavigate(nextElement);
      } else if (e.key === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [element.atomic, onClose, onNavigate, prevElement, nextElement]);

  // Enhanced interactive overview for element applications
  const renderApplications = () => {
    const applications = [
      {
        icon: <Box className="h-5 w-5 mb-1" />,
        title: t.elementDetails.industry || 'Industry',
        description: element.name === "Hydrogen" ? "Fuel cells, rocket fuel, fertilizer production" : 
                     element.name === "Helium" ? "Cooling superconducting magnets, party balloons, diving mixtures" :
                     "Various industrial applications"
      },
      {
        icon: <Award className="h-5 w-5 mb-1" />,
        title: t.elementDetails.discovery || 'Discovery',
        description: element.discover === "Ancient" ? 
                    t.elementDetails.knownSinceAncient || "Known since ancient times" : 
                    `${t.elementDetails.discoveredIn || 'Discovered in'} ${element.discover}`
      },
      {
        icon: <Atom className="h-5 w-5 mb-1" />,
        title: t.elementDetails.structure || 'Structure',
        description: `${element.electrons.length} ${t.elementDetails.shells || 'shells'}, ${t.elementDetails.atomicRadius || 'Atomic radius'}: ${element.radius?.calculated || element.radius?.empirical || '?'} pm`
      }
    ];
    
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {applications.map((app, index) => (
          <Card key={index} className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
            <CardHeader className="pb-2 pt-4">
              <div className="flex items-center justify-center">
                {app.icon}
              </div>
              <CardTitle className="text-sm font-medium text-center">{app.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-center text-gray-600 dark:text-gray-300">
                {app.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 flex items-center justify-center z-50 p-2 sm:p-4 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-4xl w-full mx-auto overflow-hidden animate-fade-in">
        {/* Header section with navigation */}
        <div 
          className={`bg-gradient-to-r from-white/20 to-white/5 relative p-3 sm:p-5 flex justify-between items-center`}
          style={{ 
            backgroundColor: categoryColor.split(' ')[0],
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}
        >
          {/* Element number badge */}
          <div className="absolute top-3 left-3 bg-white/30 rounded-full px-2 py-0.5 text-xs font-bold">
            {element.atomic}
          </div>

          {/* Previous element button */}
          {prevElement && (
            <button
              onClick={() => onNavigate(prevElement)}
              className="absolute left-12 bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full p-1.5 sm:p-2 text-gray-800 dark:text-white transition-colors"
              aria-label={`${t.elementDetails.previousElement}: ${prevElement.name}`}
            >
              <ArrowLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          )}
          
          {/* Close button - moved to the top right corner */}
          <button 
            onClick={onClose}
            className="absolute right-3 top-3 bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full p-1.5 sm:p-2 text-gray-800 dark:text-white transition-colors z-10"
            aria-label={t.ui?.close}
          >
            <X className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
          
          <div className="flex items-center mx-auto">
            <ElementImage element={element} categoryColor={categoryColor} />
            <div className="text-center">
              <div className="text-4xl sm:text-6xl font-bold tracking-tight">{element.symbol}</div>
              <h2 className="text-xl sm:text-3xl font-bold mt-1">{element.name}</h2>
              <p className="text-xs sm:text-sm opacity-80 mt-1">
                {t.elementDetails.atomicNumber}: {element.atomic} • {t.elementDetails.atomicWeight}: {element.weight}
              </p>
            </div>
          </div>
          
          {/* Next element button */}
          {nextElement && (
            <button
              onClick={() => onNavigate(nextElement)}
              className="absolute right-12 bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full p-1.5 sm:p-2 text-gray-800 dark:text-white transition-colors"
              aria-label={`${t.elementDetails.nextElement}: ${nextElement.name}`}
            >
              <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          )}
        </div>
        
        <Tabs defaultValue="overview" value={tabValue} onValueChange={setTabValue} className="w-full">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <TabsList className="flex w-full overflow-x-auto bg-transparent justify-start px-4 pt-2 h-auto">
              <TabsTrigger value="overview" className="px-4 py-2 text-sm">
                {t.elementDetails.overview || "Overview"}
              </TabsTrigger>
              <TabsTrigger value="properties" className="px-4 py-2 text-sm">
                {t.elementDetails.properties || "Properties"}
              </TabsTrigger>
              <TabsTrigger value="structure" className="px-4 py-2 text-sm">
                {t.elementDetails.atomicStructure || "Structure"}
              </TabsTrigger>
              <TabsTrigger value="applications" className="px-4 py-2 text-sm">
                {t.elementDetails.applications || "Applications"}
              </TabsTrigger>
            </TabsList>
          </div>
          
          <div className="p-4 sm:p-6 max-h-[70vh] overflow-y-auto dark:text-gray-200 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-850">
            <TabsContent value="overview" className="mt-0">
              {/* Overview tab */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <Card className="overflow-hidden border border-gray-200 dark:border-gray-700">
                  <CardHeader className="bg-gray-50 dark:bg-gray-800 p-4">
                    <CardTitle className="text-lg flex items-center">
                      <Info className="w-5 h-5 mr-2" />
                      {t.elementDetails.basicInfo}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4">
                    <BasicInfo element={element} />
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden border border-gray-200 dark:border-gray-700">
                  <CardHeader className="bg-gray-50 dark:bg-gray-800 p-4">
                    <CardTitle className="text-lg flex items-center">
                      <Thermometer className="w-5 h-5 mr-2" />
                      {t.elementDetails.physicalProperties}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4">
                    <PhysicalProperties element={element} />
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-4">
                <Card className="overflow-hidden border border-gray-200 dark:border-gray-700">
                  <CardHeader className="bg-gray-50 dark:bg-gray-800 p-4">
                    <CardTitle className="text-lg">{t.elementDetails.additionalInfo}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4">
                    <AdditionalInfo element={element} />
                  </CardContent>
                </Card>
              </div>
              
              {renderApplications()}
            </TabsContent>
            
            <TabsContent value="properties" className="mt-0">
              {/* Properties tab */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Scale className="w-5 h-5 mr-2" />
                      {t.elementDetails.physicalProperties}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <ElementProperties element={element} />
                      
                      <div className="mt-4">
                        <h4 className="font-bold text-sm mb-2">
                          {t.elementDetails.meltingBoilingPoint || "Melting & Boiling Points"}
                        </h4>
                        <div className="relative h-10 bg-gray-200 dark:bg-gray-700 rounded-md">
                          {element.melt && (
                            <div 
                              className="absolute h-full bg-blue-500 opacity-70 rounded-l-md flex items-center justify-center text-white text-xs"
                              style={{ 
                                width: `${Math.min(parseInt(element.melt) / 50, 100)}%`
                              }}
                            >
                              {element.melt}K
                            </div>
                          )}
                          {element.boil && (
                            <div 
                              className="absolute top-0 h-2 bg-red-500 rounded-t-sm"
                              style={{ 
                                left: `${Math.min(parseInt(element.boil) / 100, 100)}%`,
                                width: '2px'
                              }}
                            >
                              <span className="absolute top-3 text-xs transform -translate-x-1/2">
                                {element.boil}K
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Zap className="w-5 h-5 mr-2" />
                      {t.elementDetails.electronProperties || "Electronic Properties"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm mb-2">
                      <div className="font-medium">{t.elementDetails.electronConfig}:</div>
                      <div className="break-words">{element.electronstring}</div>
                      
                      {element.electroneg && (
                        <>
                          <div className="font-medium">{t.elementDetails.electronegativity}:</div>
                          <div>{element.electroneg}</div>
                        </>
                      )}
                      
                      {element.valence && (
                        <>
                          <div className="font-medium">{t.elementDetails.valence}:</div>
                          <div>{element.valence}</div>
                        </>
                      )}
                      
                      {element.oxidation && (
                        <>
                          <div className="font-medium">{t.elementDetails.oxidationStates}:</div>
                          <div>{element.oxidation}</div>
                        </>
                      )}
                    </div>
                    
                    {/* Electron affinity visualizer */}
                    {element.affinity && (
                      <div className="mt-4">
                        <h4 className="font-bold text-xs mb-1">{t.elementDetails.electronAffinity || "Electron Affinity"}:</h4>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 h-4 rounded-full">
                          <div 
                            className={`h-full rounded-full ${categoryColor}`}
                            style={{ width: `${Math.min(parseInt(element.affinity) / 4, 100)}%` }}
                          />
                        </div>
                        <div className="text-right text-xs mt-1">{element.affinity} kJ/mol</div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
              
              {/* Abundance data if available */}
              {element.abundance && (
                <Card className="mt-4">
                  <CardHeader>
                    <CardTitle className="text-lg">{t.elementDetails.abundance || "Abundance"}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {element.abundance.universe && (
                        <div className="text-center p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                          <div className="text-xs text-blue-600 dark:text-blue-300 font-medium">
                            {t.elementDetails.universe || "Universe"}
                          </div>
                          <div className="text-sm mt-1">{element.abundance.universe}</div>
                        </div>
                      )}
                      
                      {element.abundance.solar && (
                        <div className="text-center p-2 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg">
                          <div className="text-xs text-yellow-600 dark:text-yellow-300 font-medium">
                            {t.elementDetails.solar || "Solar System"}
                          </div>
                          <div className="text-sm mt-1">{element.abundance.solar}</div>
                        </div>
                      )}
                      
                      {element.abundance.crust && (
                        <div className="text-center p-2 bg-green-50 dark:bg-green-900/30 rounded-lg">
                          <div className="text-xs text-green-600 dark:text-green-300 font-medium">
                            {t.elementDetails.crust || "Earth's Crust"}
                          </div>
                          <div className="text-sm mt-1">{element.abundance.crust}</div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
            
            <TabsContent value="structure" className="mt-0">
              {/* Structure tab */}
              <div className="grid grid-cols-1 gap-4">
                <Card className="overflow-hidden border border-gray-200 dark:border-gray-700">
                  <CardHeader className="bg-gray-50 dark:bg-gray-800 p-4">
                    <CardTitle className="text-lg flex items-center">
                      <Atom className="w-5 h-5 mr-2" />
                      {t.elementDetails.electronShellVisualization}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4">
                    <ElectronShellVisualization element={element} categoryColor={categoryColor} />
                  </CardContent>
                </Card>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">{t.elementDetails.atomicRadii || "Atomic Radii"}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-center my-4">
                        <div className="relative w-60 h-60 flex items-center justify-center">
                          {/* Show different radii if available */}
                          {element.radius?.vanderwaals && (
                            <div className="absolute rounded-full border-2 border-dashed border-yellow-400 dark:border-yellow-600 opacity-30"
                                style={{ 
                                  width: `${parseInt(element.radius.vanderwaals) / 2}px`, 
                                  height: `${parseInt(element.radius.vanderwaals) / 2}px` 
                                }} />
                          )}
                          
                          {element.radius?.covalent && (
                            <div className="absolute rounded-full border-2 border-blue-400 dark:border-blue-600 opacity-50"
                                style={{ 
                                  width: `${Math.max(parseInt(element.radius.covalent), 30)}px`, 
                                  height: `${Math.max(parseInt(element.radius.covalent), 30)}px` 
                                }} />
                          )}
                          
                          {element.radius?.calculated && (
                            <div className="absolute rounded-full border-2 border-green-400 dark:border-green-600"
                                style={{ 
                                  width: `${Math.max(parseInt(element.radius.calculated), 20)}px`, 
                                  height: `${Math.max(parseInt(element.radius.calculated), 20)}px` 
                                }} />
                          )}
                          
                          <div className={`${categoryColor} w-10 h-10 rounded-full flex items-center justify-center z-10`}>
                            {element.symbol}
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-xs mt-4">
                        {element.radius?.calculated && (
                          <>
                            <div className="flex items-center">
                              <div className="w-3 h-3 bg-green-400 dark:bg-green-600 rounded-full mr-2"></div>
                              <span>{t.elementDetails.calculated || "Calculated"}:</span>
                            </div>
                            <div>{element.radius.calculated} pm</div>
                          </>
                        )}
                        
                        {element.radius?.covalent && (
                          <>
                            <div className="flex items-center">
                              <div className="w-3 h-3 bg-blue-400 dark:bg-blue-600 rounded-full mr-2"></div>
                              <span>{t.elementDetails.covalent || "Covalent"}:</span>
                            </div>
                            <div>{element.radius.covalent} pm</div>
                          </>
                        )}
                        
                        {element.radius?.vanderwaals && (
                          <>
                            <div className="flex items-center">
                              <div className="w-3 h-3 bg-yellow-400 dark:bg-yellow-600 rounded-full mr-2"></div>
                              <span>{t.elementDetails.vanDerWaals || "Van der Waals"}:</span>
                            </div>
                            <div>{element.radius.vanderwaals} pm</div>
                          </>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">{t.elementDetails.quantumNumbers || "Quantum Numbers"}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="font-medium">n ({t.elementDetails.principal || "Principal"}):</div>
                        <div>{element.quantum?.n}</div>
                        
                        <div className="font-medium">l ({t.elementDetails.azimuthal || "Azimuthal"}):</div>
                        <div>{element.quantum?.l}</div>
                        
                        <div className="font-medium">m ({t.elementDetails.magnetic || "Magnetic"}):</div>
                        <div>{element.quantum?.m}</div>
                      </div>
                      
                      <div className="mt-6">
                        <h4 className="text-sm font-bold mb-2">{t.elementDetails.orbitalDiagram || "Orbital Diagram"}</h4>
                        <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-md overflow-x-auto whitespace-pre-wrap">
                          <code className="text-xs">
                            {element.expandedconfig.split(' ').map((orbital, i) => (
                              <span key={i} className="mr-1">
                                {orbital.includes('/') ? (
                                  <>
                                    {orbital.split('/')[0]}
                                    <span className="text-blue-600 dark:text-blue-400">
                                      {orbital.split('/')[1]}
                                    </span>
                                  </>
                                ) : orbital}
                              </span>
                            ))}
                          </code>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="applications" className="mt-0">
              {/* Applications tab */}
              <Card>
                <CardHeader>
                  <CardTitle>{t.elementDetails.applications || "Applications & Uses"}</CardTitle>
                  <CardDescription>
                    {t.elementDetails.keyApplications || "Key applications and uses of"} {element.name}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-medium mb-3">{t.elementDetails.industrialUses || "Industrial Uses"}</h3>
                      <ul className="list-disc pl-5 space-y-2 text-sm">
                        {element.name === "Hydrogen" ? (
                          <>
                            <li>Fuel for rockets and potentially for vehicles</li>
                            <li>Ammonia production for fertilizers</li>
                            <li>Oil refining processes</li>
                            <li>Metal production as a reducing agent</li>
                          </>
                        ) : element.name === "Helium" ? (
                          <>
                            <li>Cooling superconducting magnets in MRI machines</li>
                            <li>Pressurizing rocket fuel tanks</li>
                            <li>Leak detection in vacuum systems</li>
                            <li>Mixed with oxygen for deep-sea diving</li>
                          </>
                        ) : element.series === "Noble gas" ? (
                          <>
                            <li>Lighting and signs (produces colored glow when electrified)</li>
                            <li>Controlled atmospheres for manufacturing</li>
                            <li>Cryogenic applications</li>
                          </>
                        ) : element.series === "Alkali metal" ? (
                          <>
                            <li>Catalysts in chemical reactions</li>
                            <li>Heat transfer applications</li>
                            <li>Production of other chemicals</li>
                          </>
                        ) : element.series === "Transition metal" ? (
                          <>
                            <li>Construction and structural materials</li>
                            <li>Electrical conductors and contacts</li>
                            <li>Catalytic converters</li>
                            <li>Alloys for specialized applications</li>
                          </>
                        ) : (
                          <>
                            <li>Various industrial processes</li>
                            <li>Chemical synthesis</li>
                            <li>Material manufacturing</li>
                          </>
                        )}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-3">{t.elementDetails.everydayUses || "Everyday Applications"}</h3>
                      <ul className="list-disc pl-5 space-y-2 text-sm">
                        {element.name === "Hydrogen" ? (
                          <>
                            <li>Water (H₂O) - essential for life</li>
                            <li>Hydrogenated vegetable oils in food products</li>
                            <li>Hydrogen peroxide as a disinfectant</li>
                          </>
                        ) : element.name === "Helium" ? (
                          <>
                            <li>Filling balloons and airships</li>
                            <li>Voice-altering effect when inhaled (high-pitched voice)</li>
                            <li>Weather balloons and scientific research</li>
                          </>
                        ) : element.name === "Oxygen" ? (
                          <>
                            <li>Breathing and life support</li>
                            <li>Medical treatments</li>
                            <li>Combustion and burning processes</li>
                          </>
                        ) : element.name === "Carbon" ? (
                          <>
                            <li>All organic compounds and life forms</li>
                            <li>Graphite in pencils</li>
                            <li>Diamonds in jewelry</li>
                            <li>Carbon fiber in sporting goods and high-tech materials</li>
                          </>
                        ) : element.name === "Gold" || element.name === "Silver" || element.name === "Platinum" ? (
                          <>
                            <li>Jewelry and decorative items</li>
                            <li>Electronic components</li>
                            <li>Investments and currency backing</li>
                            <li>Dental applications</li>
                          </>
                        ) : element.series === "Lanthanide" || element.series === "Actinide" ? (
                          <>
                            <li>Powerful magnets in electronics</li>
                            <li>Phosphors in display technologies</li>
                            <li>Nuclear applications (for some actinides)</li>
                            <li>Medical imaging and treatments</li>
                          </>
                        ) : (
                          <>
                            <li>Materials in consumer products</li>
                            <li>Electronics and technology</li>
                            <li>Various everyday chemicals</li>
                          </>
                        )}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                    <h3 className="font-medium text-blue-800 dark:text-blue-300 mb-2">
                      {t.elementDetails.funFacts || "Interesting Facts"}
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-blue-700 dark:text-blue-200">
                      {element.name === "Hydrogen" ? (
                        <>
                          <li>The most abundant element in the universe</li>
                          <li>Powers the sun through nuclear fusion</li>
                          <li>Lightest of all elements</li>
                        </>
                      ) : element.name === "Helium" ? (
                        <>
                          <li>The only element discovered first in space, not on Earth</li>
                          <li>Named after the Greek god of the Sun, Helios</li>
                          <li>Cannot solidify at normal atmospheric pressure, even near absolute zero</li>
                        </>
                      ) : element.boil && parseInt(element.boil) > 4000 ? (
                        <>
                          <li>Has extremely high boiling point of {element.boil}K</li>
                          <li>One of the most heat-resistant elements known</li>
                        </>
                      ) : element.melt && parseInt(element.melt) < 273 ? (
                        <>
                          <li>Melts below the freezing point of water ({element.melt}K)</li>
                          <li>Can exist in liquid state at room temperature</li>
                        </>
                      ) : element.series === "Noble gas" ? (
                        <>
                          <li>Extremely unreactive due to full electron shells</li>
                          <li>Creates colorful glows when electrified</li>
                        </>
                      ) : (
                        <>
                          <li>Has unique properties among the elements</li>
                          <li>Plays an important role in the periodic table</li>
                          {element.discover !== "Ancient" && (
                            <li>Was discovered relatively recently in {element.discover}</li>
                          )}
                        </>
                      )}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </Tabs>
        
        {/* Footer navigation */}
        <div className="border-t border-gray-200 dark:border-gray-700 p-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            {prevElement && (
              <button
                onClick={() => onNavigate(prevElement)}
                className="flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-sm transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-1" />
                {prevElement.symbol}
              </button>
            )}
          </div>
          
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {element.atomic} / 118
          </div>
          
          <div className="flex items-center space-x-2">
            {nextElement && (
              <button
                onClick={() => onNavigate(nextElement)}
                className="flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-sm transition-colors"
              >
                {nextElement.symbol}
                <ArrowRight className="h-4 w-4 ml-1" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElementDetails;
