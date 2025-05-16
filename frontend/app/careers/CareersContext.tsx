import { createContext } from 'react';

export const CareersContext = createContext<{
  scrollToSection: (sectionId: string) => void;
  activeSection: string;
}>({
  scrollToSection: () => {},
  activeSection: 'hero'
});