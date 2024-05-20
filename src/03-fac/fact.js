function factorial(numero) {
    if (numero === 0) {
      return 1;
    } else if (numero < 0) {
      return NaN;
    } else {
      return numero * factorial(numero - 1);
    }
  }