
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Element } from '../../data/elementTypes';
import { useLanguage } from '../../context/LanguageContext';

interface ElementPageHeadProps {
  element: Element;
  lang?: string;
}

const ElementPageHead = ({ element, lang }: ElementPageHeadProps) => {
  const { t } = useLanguage();

  const canonicalUrl = `${window.location.origin}${lang ? `/${lang}` : ''}/element/${element.atomic}`;
  const elementDescription = `${element.name} (${element.symbol}): ${element.category} - ${element.summary || t.elementDetails?.notAvailable || 'Information not available'}`;

  return (
    <Helmet>
      <title>{`${element.name} (${element.symbol}) - ${t.title}`}</title>
      <meta name="description" content={elementDescription} />
      <meta property="og:title" content={`${element.name} (${element.symbol}) - ${t.title}`} />
      <meta property="og:description" content={elementDescription} />
      <meta property="og:type" content="website" />
      <link rel="canonical" href={canonicalUrl} />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ChemicalSubstance",
          "name": element.name,
          "alternateName": element.symbol,
          "description": element.summary || t.elementDetails?.notAvailable || 'Information not available',
          "url": canonicalUrl,
          "molecularFormula": element.symbol,
          "atomicNumber": element.atomic
        })}
      </script>
    </Helmet>
  );
};

export default ElementPageHead;
