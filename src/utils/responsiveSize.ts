interface ResponsiveSize {
  [key: string]: number;
}

type ShortSize =
  | 'xxxs'
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl'
  | 'xxxl'
  | 'font';

export const sizes: ResponsiveSize = {
  xxxs: 5,
  xxs: 10,
  xs: 15,
  sm: 25,
  md: 35,
  lg: 45,
  xl: 50,
  xxl: 100,
  xxxl: 125,
  font: 12,
};

/*
  Use:

  const sizeInRems = pxToRem(20); // Returns '1.25rem' for a 20px size
*/

/**
 *
 * @param size
 * @returns Function to handle converting px to rem
 */
export const pxToRem = (size: ShortSize): string => {
  const remBase = 16; // Assume 1rem = 16px
  const sizeInRem = sizes[size] / remBase; // Convert size to rems
  return `${sizeInRem}rem`; // Return size in rems
};
