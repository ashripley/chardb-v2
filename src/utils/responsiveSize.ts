interface ResponsiveSize {
  [key: string]: number;
}

export const breakpoints: ResponsiveSize = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

/*
  Use:

  const sizeInRems = pxToRem(20); // Returns '1.25rem' for a 20px size
*/

export const pxToRem = (sizeInPx: number): string => {
  const remBase = 16; // Assume 1rem = 16px
  const sizeInRem = sizeInPx / remBase; // Convert size to rems
  return `${sizeInRem}rem`; // Return size in rems
};
