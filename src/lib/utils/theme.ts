export const DEFAULT_COLOR: Color = 'gray'
export const WHITE = 'white'
export const TRANSPARENT = 'transparent'

export function makeClassName(componentName: string) {
  return (className: string) => {
    return `windwaves-${componentName}-${className}`
  }
}

const colorValues = [
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
] as const

export type Color = (typeof colorValues)[number]
export type CustomColor = Color | string
export const getIsBaseColor = (color: Color | string) => colorValues.includes(color as Color)

export const BaseColors: { [key: string]: Color } = {
  Slate: 'slate',
  Gray: 'gray',
  Zinc: 'zinc',
  Neutral: 'neutral',
  Stone: 'stone',
  Red: 'red',
  Orange: 'orange',
  Amber: 'amber',
  Yellow: 'yellow',
  Lime: 'lime',
  Green: 'green',
  Emerald: 'emerald',
  Teal: 'teal',
  Cyan: 'cyan',
  Sky: 'sky',
  Blue: 'blue',
  Indigo: 'indigo',
  Violet: 'violet',
  Purple: 'purple',
  Fuchsia: 'fuchsia',
  Pink: 'pink',
  Rose: 'rose',
}

export const themeColorRange: Color[] = [
  BaseColors.Blue,
  BaseColors.Cyan,
  BaseColors.Sky,
  BaseColors.Indigo,
  BaseColors.Violet,
  BaseColors.Purple,
  BaseColors.Fuchsia,
  BaseColors.Slate,
  BaseColors.Gray,
  BaseColors.Zinc,
  BaseColors.Neutral,
  BaseColors.Stone,
  BaseColors.Red,
  BaseColors.Orange,
  BaseColors.Amber,
  BaseColors.Yellow,
  BaseColors.Lime,
  BaseColors.Green,
  BaseColors.Emerald,
  BaseColors.Teal,
  BaseColors.Pink,
  BaseColors.Rose,
]

export const colorPalette = {
  canvasBackground: 50,
  lightBackground: 100,
  background: 500,
  darkBackground: 600,
  darkestBackground: 800,
  lightBorder: 200,
  border: 500,
  darkBorder: 700,
  lightRing: 200,
  ring: 300,
  iconRing: 500,
  lightText: 400,
  text: 500,
  iconText: 600,
  darkText: 700,
  darkestText: 900,
  icon: 500,
}

const getIsArbitraryColor = (color: Color | string) =>
  color.includes('#') || color.includes('--') || color.includes('rgb')

export function getColorClassNames(color: Color | string, shade?: number): ColorClassNames {
  const isBaseColor = getIsBaseColor(color)
  if (color === 'white' || color === 'black' || color === 'transparent' || !shade || !isBaseColor) {
    const unshadedColor = !getIsArbitraryColor(color) ? color : `[${color}]`
    return {
      bgColor: `bg-${unshadedColor}`,
      hoverBgColor: `hover:bg-${unshadedColor}`,
      selectBgColor: `ui-selected:bg-${unshadedColor}`,
      textColor: `text-${unshadedColor}`,
      selectTextColor: `ui-selected:text-${unshadedColor}`,
      hoverTextColor: `hover:text-${unshadedColor}`,
      borderColor: `border-${unshadedColor}`,
      selectBorderColor: `ui-selected:border-${unshadedColor}`,
      hoverBorderColor: `hover:border-${unshadedColor}`,
      ringColor: `ring-${unshadedColor}`,
      strokeColor: `stroke-${unshadedColor}`,
      fillColor: `fill-${unshadedColor}`,
    }
  }
  return {
    bgColor: `bg-${color}-${shade}`,
    selectBgColor: `ui-selected:bg-${color}-${shade}`,
    hoverBgColor: `hover:bg-${color}-${shade}`,
    textColor: `text-${color}-${shade}`,
    selectTextColor: `ui-selected:text-${color}-${shade}`,
    hoverTextColor: `hover:text-${color}-${shade}`,
    borderColor: `border-${color}-${shade}`,
    selectBorderColor: `ui-selected:border-${color}-${shade}`,
    hoverBorderColor: `hover:border-${color}-${shade}`,
    ringColor: `ring-${color}-${shade}`,
    strokeColor: `stroke-${color}-${shade}`,
    fillColor: `fill-${color}-${shade}`,
  }
}
