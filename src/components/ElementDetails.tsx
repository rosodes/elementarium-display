
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Element as ElementType, getCategoryColor, getSeriesColor, categories } from '../data/elements';

interface ElementDetailsProps {
  element: ElementType | null;
  isOpen: boolean;
  onClose: () => void;
}

const ElementDetails = ({ element, isOpen, onClose }: ElementDetailsProps) => {
  if (!element) return null;
  
  // Use either category or series for color and category text
  const categoryColor = element.category 
    ? getCategoryColor(element.category) 
    : getSeriesColor(element.series);
    
  const categoryText = element.category
    ? categories[element.category as keyof typeof categories]
    : element.series;

  const renderProperty = (label: string, value: any) => {
    if (value === null || value === undefined || value === "") return null;
    
    return (
      <div className="flex justify-between border-b border-gray-100 py-2">
        <div className="font-medium text-gray-600">{label}</div>
        <div className="text-right">{value}</div>
      </div>
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[600px] animate-scale-in overflow-auto max-h-[90vh]">
        <DialogHeader>
          <div className="flex items-center gap-4">
            <div className={`${categoryColor} h-16 w-16 flex items-center justify-center rounded-lg`}>
              <span className="text-3xl font-bold">{element.symbol}</span>
            </div>
            <div>
              <DialogTitle className="text-2xl">{element.name}</DialogTitle>
              <DialogDescription>
                Element {element.atomic} · {categoryText}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>
        
        <div className="mt-4 space-y-6">
          {element.description && (
            <div className="prose text-sm text-gray-700">
              {element.description}
            </div>
          )}
          
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Basic Properties</h3>
              {renderProperty("Atomic Number", element.atomic)}
              {renderProperty("Symbol", element.symbol)}
              {renderProperty("Atomic Mass", element.weight)}
              {renderProperty("Series", element.series)}
              {renderProperty("Electron Configuration", element.electronstring)}
              {renderProperty("Valence", element.valence)}
              {renderProperty("Oxidation States", element.oxidation)}
            </div>
            
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Physical Properties</h3>
              {renderProperty("Electronegativity", element.electroneg)}
              {renderProperty("Atomic Radius (pm)", element.radius?.calculated)}
              {renderProperty("Covalent Radius (pm)", element.radius?.covalent)}
              {renderProperty("Van der Waals Radius (pm)", element.radius?.vanderwaals)}
              {renderProperty("Electron Affinity (kJ/mol)", element.affinity)}
              {renderProperty("Ionization Energy (kJ/mol)", element.ionize?.["1"])}
              {renderProperty("Density (g/cm³)", element.density?.stp)}
              {renderProperty("Melting Point (K)", element.melt)}
              {renderProperty("Boiling Point (K)", element.boil)}
            </div>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Additional Information</h3>
            {renderProperty("Discovered", element.discover)}
            {renderProperty("Number of Isotopes", element.isotopes)}
            {element.abundance && (
              <>
                <h3 className="text-lg font-medium mt-4">Abundance</h3>
                {renderProperty("Universe (%)", element.abundance.universe)}
                {renderProperty("Solar (%)", element.abundance.solar)}
                {renderProperty("Earth's Crust (%)", element.abundance.crust)}
                {renderProperty("Oceans (%)", element.abundance.ocean)}
                {renderProperty("Human Body (%)", element.abundance.human)}
              </>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ElementDetails;
