
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Element as ElementType, getCategoryColor, categories } from '../data/elements';

interface ElementDetailsProps {
  element: ElementType | null;
  isOpen: boolean;
  onClose: () => void;
}

const ElementDetails = ({ element, isOpen, onClose }: ElementDetailsProps) => {
  if (!element) return null;
  
  const categoryColor = getCategoryColor(element.category);
  const categoryText = categories[element.category as keyof typeof categories];

  const renderProperty = (label: string, value: any) => {
    if (value === null || value === undefined) return null;
    
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
                Element {element.number} · {categoryText}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>
        
        <div className="mt-4 space-y-6">
          <div className="prose text-sm text-gray-700">
            {element.description}
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Basic Properties</h3>
              {renderProperty("Atomic Number", element.number)}
              {renderProperty("Symbol", element.symbol)}
              {renderProperty("Atomic Mass", element.atomicMass)}
              {renderProperty("Group", element.group)}
              {renderProperty("Period", element.period)}
              {renderProperty("Block", element.block)}
              {renderProperty("Electron Configuration", element.electronConfiguration)}
            </div>
            
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Physical Properties</h3>
              {renderProperty("Electronegativity", element.electronegativity)}
              {renderProperty("Atomic Radius (pm)", element.atomicRadius)}
              {renderProperty("Ionization Energy (eV)", element.ionizationEnergy)}
              {renderProperty("Density (g/cm³)", element.density)}
              {renderProperty("Melting Point (°C)", element.meltingPoint)}
              {renderProperty("Boiling Point (°C)", element.boilingPoint)}
            </div>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Historical Information</h3>
            {renderProperty("Discovered By", element.discoveredBy)}
            {renderProperty("Named After", element.namedAfter)}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ElementDetails;
