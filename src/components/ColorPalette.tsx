/**
 * Cosmic Astrology Brand Color Palette
 * 
 * A reference component showcasing the brand colors for the cosmic astrology theme.
 * This component can be used for development reference and style guide purposes.
 */

export const CosmicColors = {
  // Primary brand colors
  deepSpace: '#0a0a0f',      // Deep Space Black – background base
  electricPurple: '#8b5cf6', // Electric Purple – primary accent / buttons
  magentaPink: '#ec4899',    // Magenta Pink – secondary glow and gradients
  neonBlue: '#06b6d4',       // Neon Blue / Cyan – rocket flame, highlights
  softViolet: '#a855f7',     // Soft Violet – card hovers and gradients
  warmOrange: '#f97316',     // Warm Orange – planet accents (use sparingly)
} as const;

export const CosmicGradients = {
  cosmic: 'linear-gradient(135deg, #0a0a0f 0%, #1e1b4b 50%, #312e81 100%)',
  purpleGlow: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
  magentaGlow: 'radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, transparent 70%)',
} as const;

// Color palette showcase component (for development reference)
export default function ColorPalette() {
  const colors = [
    { name: 'Deep Space Black', value: CosmicColors.deepSpace, usage: 'Background base' },
    { name: 'Electric Purple', value: CosmicColors.electricPurple, usage: 'Primary accent / buttons' },
    { name: 'Magenta Pink', value: CosmicColors.magentaPink, usage: 'Secondary glow and gradients' },
    { name: 'Neon Blue', value: CosmicColors.neonBlue, usage: 'Rocket flame, highlights' },
    { name: 'Soft Violet', value: CosmicColors.softViolet, usage: 'Card hovers and gradients' },
    { name: 'Warm Orange', value: CosmicColors.warmOrange, usage: 'Planet accents (sparingly)' },
  ];

  return (
    <div className="p-8 bg-deep-space min-h-screen">
      <h1 className="text-3xl font-bold text-electric-purple mb-8">
        Cosmic Astrology Color Palette
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {colors.map((color) => (
          <div
            key={color.name}
            className="bg-gray-900 rounded-lg p-6 border border-soft-violet/20 hover:border-soft-violet/40 transition-colors"
          >
            <div
              className="w-full h-20 rounded-lg mb-4 border border-gray-700"
              style={{ backgroundColor: color.value }}
            />
            <h3 className="text-lg font-semibold text-white mb-2">{color.name}</h3>
            <p className="text-gray-400 text-sm mb-2">{color.value}</p>
            <p className="text-gray-300 text-sm">{color.usage}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-magenta-pink mb-6">Gradient Examples</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="h-32 rounded-lg" style={{ background: CosmicGradients.cosmic }}>
            <div className="p-4">
              <h4 className="text-white font-semibold">Cosmic Gradient</h4>
            </div>
          </div>
          <div className="h-32 rounded-lg bg-deep-space relative overflow-hidden">
            <div className="absolute inset-0" style={{ background: CosmicGradients.purpleGlow }} />
            <div className="relative p-4">
              <h4 className="text-white font-semibold">Purple Glow</h4>
            </div>
          </div>
          <div className="h-32 rounded-lg bg-deep-space relative overflow-hidden">
            <div className="absolute inset-0" style={{ background: CosmicGradients.magentaGlow }} />
            <div className="relative p-4">
              <h4 className="text-white font-semibold">Magenta Glow</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}