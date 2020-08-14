// tslint:disable:variable-name

export function HEXToRGB(hex): {r: number, g: number, b: number} {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (m, r, g, b) => {
    return r + r + g + g + b + b;
  });

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

export function RGBToHEX(r, g, b): string {
  // tslint:disable-next-line:no-bitwise
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

export function HSLToRGB(h, s, l): {r: number, g: number, b: number} {
  // Must be fractions of 1
  s /= 100;
  l /= 100;

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs((h / 60) % 2 - 1));
  const m = l - c / 2;
  let r = 0;
  let g = 0;
  let b = 0;

  if (0 <= h && h < 60) {
    r = c; g = x; b = 0;
  } else if (60 <= h && h < 120) {
    r = x; g = c; b = 0;
  } else if (120 <= h && h < 180) {
    r = 0; g = c; b = x;
  } else if (180 <= h && h < 240) {
    r = 0; g = x; b = c;
  } else if (240 <= h && h < 300) {
    r = x; g = 0; b = c;
  } else if (300 <= h && h < 360) {
    r = c; g = 0; b = x;
  }
  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  return { r, g, b };
}

export function RGBToHSL(r, g, b): {h: number, s: number, l: number} {
  // Make r, g, and b fractions of 1
  r /= 255;
  g /= 255;
  b /= 255;

  // Find greatest and smallest channel values
  const cmin = Math.min(r, g, b);
  const cmax = Math.max(r, g, b);
  const delta = cmax - cmin;
  let h = 0;
  let s = 0;
  let l = 0;
  // Calculate hue
  // No difference
  if (delta === 0) {
    h = 0;
  }
  // Red is max
  else if (cmax === r) {
    h = ((g - b) / delta) % 6;
 }
  // Green is max
  else if (cmax === g) {
    h = (b - r) / delta + 2;
 }
  // Blue is max
  else {
    h = (r - g) / delta + 4;
 }

  h = Math.round(h * 60);

  // Make negative hues positive behind 360°
  if (h < 0) {
    h += 360;
  }
  // Calculate lightness
  l = (cmax + cmin) / 2;

  // Calculate saturation
  s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  // Multiply l and s by 100
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return { h, s, l };
}

export function enlightenHEX(hex: string): string{
  const rgb = HEXToRGB(hex);
  const hsl = RGBToHSL(rgb.r, rgb.g, rgb.b);
  const rgb_light = HSLToRGB(hsl.h, hsl.s, Math.sqrt(hsl.l) * 10);
  return RGBToHEX(rgb_light.r, rgb_light.g, rgb_light.b);
}

export function darkenHEX(hex: string): string{
  const rgb = HEXToRGB(hex);
  const hsl = RGBToHSL(rgb.r, rgb.g, rgb.b);
  const dark_l = Math.pow(hsl.l, 2) / 100 - 5;
  const rgb_dark = HSLToRGB(hsl.h, hsl.s, dark_l < 0 ? 0 : dark_l);
  return RGBToHEX(rgb_dark.r, rgb_dark.g, rgb_dark.b);
}

export function HEXToHSL(hex: string): {h: number, s: number, l: number}{
  const rgb = HEXToRGB(hex);
  return RGBToHSL(rgb.r, rgb.g, rgb.b);
}
