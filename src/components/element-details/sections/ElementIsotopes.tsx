
import React from 'react';
import { Element } from '../../../data/elementTypes';
import { useTranslation } from '../../../hooks/useTranslation';

interface ElementIsotopesProps {
  element: Element;
}

const ElementIsotopes: React.FC<ElementIsotopesProps> = ({ element }) => {
  const { t } = useTranslation();

  return (
    <div className="element-isotopes">
      <h4 className="section-title">Isotopes</h4>
      
      <div className="isotopes-summary">
        <div className="property-item">
          <span className="property-label">Known Isotopes</span>
          <span className="property-value">{element.isotopes}</span>
        </div>
        
        {element.radioactive && (
          <div className="radioactive-warning">
            <span className="radioactive-icon">☢</span>
            <span>Radioactive Element</span>
          </div>
        )}
      </div>
      
      {element.isotopesDetailed && element.isotopesDetailed.length > 0 && (
        <div className="isotopes-detailed">
          <h5>Common Isotopes</h5>
          <div className="isotopes-list">
            {element.isotopesDetailed.map((isotope, index) => (
              <div key={index} className="isotope-item">
                <div className="isotope-symbol">{isotope.symbol}</div>
                <div className="isotope-info">
                  {isotope.abundance && (
                    <div className="isotope-abundance">
                      {isotope.abundance}% abundance
                    </div>
                  )}
                  <div className={`isotope-stability ${isotope.stable ? 'stable' : 'unstable'}`}>
                    {isotope.stable ? 'Stable' : 'Unstable'}
                  </div>
                  {isotope.halfLife && (
                    <div className="isotope-half-life">
                      t½: {isotope.halfLife}
                    </div>
                  )}
                  {isotope.comment && (
                    <div className="isotope-comment">
                      {isotope.comment}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ElementIsotopes;
