import { gridBreakpoints } from "./layout";

export const breakpoint = {
  min: (name) => {
    return `@media (min-width: ${gridBreakpoints[name]}px)`;
  },

  max: (name) => {
    return `@media (max-width: ${gridBreakpoints[name] - 1}px)`;
  },

  between: (minName, maxName) => {
    return `@media (min-width: ${gridBreakpoints[minName]}px) and (max-width: ${
      gridBreakpoints[maxName] - 1
    }px)`;
  }
};

export default breakpoint;