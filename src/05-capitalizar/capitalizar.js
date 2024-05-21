function capitalizar(texto) {
    return texto.split(' ').map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1)).join(' ');
  }
  
  module.exports = capitalizar;
  
  