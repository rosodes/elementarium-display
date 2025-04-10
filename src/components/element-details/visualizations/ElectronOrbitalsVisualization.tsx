
import React, { useEffect, useRef } from 'react';
import { Element } from '../../../data/elementTypes';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { useLanguage } from '../../../context/LanguageContext';

interface ElectronOrbitalsVisualizationProps {
  element: Element;
  categoryColor: string;
}

const ElectronOrbitalsVisualization = ({ element, categoryColor }: ElectronOrbitalsVisualizationProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { t } = useLanguage();
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw orbital visualization
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const maxRadius = Math.min(centerX, centerY) * 0.9;
    
    // Parse primary color from Tailwind class
    const colorMatch = categoryColor.match(/(bg|text|border)-([a-z]+)-(\d+)/);
    let primaryColor = '#3b82f6'; // Default blue if no match
    
    if (colorMatch) {
      // This is a simplified conversion - in real app we'd have a proper color map
      const colorName = colorMatch[2];
      const intensity = parseInt(colorMatch[3]);
      
      const colorMap: Record<string, Record<number, string>> = {
        blue: { 500: '#3b82f6', 600: '#2563eb' },
        red: { 500: '#ef4444', 600: '#dc2626' },
        green: { 500: '#22c55e', 600: '#16a34a' },
        purple: { 500: '#a855f7', 600: '#9333ea' },
        yellow: { 500: '#eab308', 600: '#ca8a04' },
        gray: { 500: '#6b7280', 600: '#4b5563' },
      };
      
      primaryColor = colorMap[colorName]?.[intensity] || primaryColor;
    }
    
    // Draw nucleus
    ctx.beginPath();
    ctx.arc(centerX, centerY, 20, 0, Math.PI * 2);
    ctx.fillStyle = primaryColor;
    ctx.fill();
    
    // Draw element symbol in nucleus
    ctx.fillStyle = 'white';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(element.symbol, centerX, centerY);
    
    // Draw orbital paths for each electron shell
    element.electrons.forEach((electrons, shellIndex) => {
      const shellRadius = 30 + (shellIndex * 35);
      
      // Draw shell path
      ctx.beginPath();
      ctx.arc(centerX, centerY, shellRadius, 0, Math.PI * 2);
      ctx.strokeStyle = '#d1d5db';
      ctx.lineWidth = 1;
      ctx.stroke();
      
      // Add electrons to the shell - limit to max 8 visible electrons per shell
      const visibleElectrons = Math.min(electrons, 8);
      
      for (let i = 0; i < visibleElectrons; i++) {
        const angle = (i / visibleElectrons) * Math.PI * 2;
        const electronX = centerX + shellRadius * Math.cos(angle);
        const electronY = centerY + shellRadius * Math.sin(angle);
        
        // Draw electron
        ctx.beginPath();
        ctx.arc(electronX, electronY, 6, 0, Math.PI * 2);
        ctx.fillStyle = primaryColor;
        ctx.fill();
      }
      
      // If there are more electrons than we're showing, add an indicator
      if (electrons > 8) {
        const angle = (Math.PI * 0.25);
        const textX = centerX + (shellRadius + 15) * Math.cos(angle);
        const textY = centerY + (shellRadius + 15) * Math.sin(angle);
        
        ctx.fillStyle = '#6b7280';
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(`+${electrons - 8}`, textX, textY);
      }
    });
    
    // Add orbital labels
    ctx.font = '12px sans-serif';
    ctx.fillStyle = '#4b5563';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillText(element.electronstring, centerX + 30, centerY + maxRadius - 20);
    
  }, [element, categoryColor]);
  
  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle className="text-sm">{t.elementDetails.orbitalDiagram}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative w-full" style={{ height: '280px' }}>
          <canvas 
            ref={canvasRef} 
            className="w-full h-full"
          ></canvas>
        </div>
        <div className="mt-2 text-xs text-center text-gray-500">
          {t.elementDetails.electronConfig}: {element.electronstring}
        </div>
      </CardContent>
    </Card>
  );
};

export default ElectronOrbitalsVisualization;
