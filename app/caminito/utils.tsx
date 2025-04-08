export const handleStep1 = (step: number) => {
  switch (step) {
    case 1: {
      return "opacity-100 duration-1000 pointer-events-auto translate-x-0";
    }
    default: {
      return "opacity-0 duration-300 pointer-events-none -translate-x-50";
    }
  }
};

export const handleStep2 = (step: number) => {
  switch (step) {
    case 1: {
      return "opacity-0 duration-300 pointer-events-none  translate-x-0";
    }
    case 2: {
      return "opacity-100 duration-1000 pointer-events-auto translate-x-0";
    }
    default: {
      return "opacity-0 duration-300 pointer-events-none  -translate-x-50";
    }
  }
};

export const handleStep3 = (step: number) => {
  switch (step) {
    case 1: {
      return "opacity-0 duration-300 pointer-events-none  translate-x-0";
    }
    case 2: {
      return "opacity-0 duration-300 pointer-events-none  translate-x-0";
    }
    case 3: {
      return "opacity-100 duration-1000 pointer-events-auto translate-x-0";
    }
    default: {
      return "opacity-0 duration-300 pointer-events-none -translate-x-50";
    }
  }
};

export const handleStep4 = (step: number) => {
  switch (step) {
    case 1: {
      return "opacity-0 duration-300 pointer-events-none  translate-x-0";
    }
    case 2: {
      return "opacity-0 duration-300 pointer-events-none  translate-x-0";
    }
    case 3: {
      return "opacity-0 duration-300 pointer-events-none  translate-x-0";
    }
    case 4: {
      return "opacity-100 duration-1000 pointer-events-auto translate-x-0";
    }
    default: {
      return "opacity-0 duration-300 pointer-events-none -translate-x-50";
    }
  }
};

export const handleStep5 = (step: number) => {
  switch (step) {
    case 1: {
      return "opacity-0 duration-300 pointer-events-none  translate-x-0";
    }
    case 2: {
      return "opacity-0 duration-300 pointer-events-none  translate-x-0";
    }
    case 3: {
      return "opacity-0 duration-300 pointer-events-none  translate-x-0";
    }
    case 5: {
      return "opacity-100 duration-1000 pointer-events-auto translate-x-0";
    }
    default: {
      return "opacity-0 duration-300 pointer-events-none -translate-x-50";
    }
  }
};

export const handleStep6 = (step: number) => {
  switch (step) {
    case 1: {
      return "opacity-0 duration-300 pointer-events-none  translate-x-0";
    }
    case 2: {
      return "opacity-0 duration-300 pointer-events-none  translate-x-0";
    }
    case 3: {
      return "opacity-0 duration-300 pointer-events-none  translate-x-0";
    }
    case 6: {
      return "opacity-100 duration-1000 pointer-events-auto translate-x-0";
    }
    default: {
      return "opacity-0 duration-300 pointer-events-none -translate-x-50";
    }
  }
};
