
/**
 * List of radioactive element atomic numbers
 * This includes all elements with no stable isotopes
 */
export const radioactiveElementNumbers = [
  43, 61, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 
  100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 
  114, 115, 116, 117, 118
];

/**
 * Helper function to check if an element is radioactive by atomic number
 */
export const isRadioactive = (atomicNumber: number | string): boolean => {
  const atomic = typeof atomicNumber === 'string' ? parseInt(atomicNumber, 10) : atomicNumber;
  return radioactiveElementNumbers.includes(atomic);
};
