interface ResponsiveSize {
  [key: string]: number;
}

type ShortSize = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export const sizes: ResponsiveSize = {
  xxs: 5,
  xs: 15,
  sm: 25,
  md: 35,
  lg: 45,
  xl: 50,
  xxl: 100,
};

/*
  Use:

  const sizeInRems = pxToRem(20); // Returns '1.25rem' for a 20px size
*/

export const pxToRem = (size: ShortSize): string => {
  const remBase = 16; // Assume 1rem = 16px
  const sizeInRem = sizes[size] / remBase; // Convert size to rems
  return `${sizeInRem}rem`; // Return size in rems
};
