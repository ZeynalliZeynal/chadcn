import "@testing-library/jest-dom";

// Mock matchMedia if it's not available in JSDOM
if (!window.matchMedia) {
  window.matchMedia = () => ({
    matches: false,
    addListener: () => {},
    removeListener: () => {},
  });
}
