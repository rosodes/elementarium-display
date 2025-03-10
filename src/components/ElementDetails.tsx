
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Element } from "@/data/elements";
import { getSeriesColor } from "@/data/elements";

interface ElementDetailsProps {
  element: Element | null;
  isOpen: boolean;
  onClose: () => void;
}

const ElementDetails = ({ element, isOpen, onClose }: ElementDetailsProps) => {
  if (!element) return null;

  const seriesColor = getSeriesColor(element.series);
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <div className="flex items-center gap-4">
            <div className={`${seriesColor} w-16 h-16 flex items-center justify-center rounded-lg shadow-md`}>
              <span className="text-3xl font-bold">{element.symbol}</span>
            </div>
            <div>
              <DialogTitle className="text-2xl">{element.name}</DialogTitle>
              <DialogDescription>
                Atomic Number: {element.atomic} | Atomic Weight: {element.weight}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
          <div className="space-y-3">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Series</h3>
              <p className="text-base">{element.series}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-500">Electron Configuration</h3>
              <p className="text-base">{element.electronstring}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-500">Melting Point</h3>
              <p className="text-base">{element.melt ? `${element.melt} K` : 'Unknown'}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-500">Boiling Point</h3>
              <p className="text-base">{element.boil ? `${element.boil} K` : 'Unknown'}</p>
            </div>
          </div>
          
          <div className="space-y-3">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Valence</h3>
              <p className="text-base">{element.valence}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-500">Oxidation States</h3>
              <p className="text-base">{element.oxidation}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-500">Electronegativity</h3>
              <p className="text-base">{element.electroneg || 'Unknown'}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-500">Discovered</h3>
              <p className="text-base">{element.discover}</p>
            </div>
          </div>
        </div>
        
        {element.description && (
          <div className="mt-4">
            <h3 className="text-sm font-medium text-gray-500">Description</h3>
            <p className="text-base mt-1">{element.description}</p>
          </div>
        )}
        
        <div className="mt-4">
          <h3 className="text-sm font-medium text-gray-500">Electron Distribution</h3>
          <div className="flex flex-wrap gap-2 mt-1">
            {element.electrons.map((count, index) => (
              <div key={index} className="bg-gray-100 px-2 py-1 rounded text-sm">
                {`Shell ${index + 1}: ${count}e⁻`}
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ElementDetails;
