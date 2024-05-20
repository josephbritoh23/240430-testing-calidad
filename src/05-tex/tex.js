function capitalizarCadena(cadena) {
    if (cadena === '') {
      return '';
    } else {
      return cadena[0].toUpperCase() + cadena.slice(1);
    }
  }