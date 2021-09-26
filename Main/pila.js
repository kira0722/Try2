class Pila {
    constructor() {
      this.elementos = [];
    };
    insertar(elemento){
      this.elementos.push(elemento);
    };
    extraer() {
      const ultimo = this.elementos[this.elementos.length - 1];
      this.elementos.pop();
      return ultimo;
    };
    longitud() {
      return this.elementos.length;
    }
    ver_proximo() {
      return this.elementos[this.elementos.length - 1];
    }
    ver_elementos() {
      return this.elementos;
    }
  }
  
  const navegacion = new Pila();
  
  navegacion.insertar({url:'abc'})
  navegacion.insertar({url:'def'})
  navegacion.insertar({url:'ghi'})
  console.log(navegacion.ver_elementos())
  
  navegacion.extraer();
  
  const longitud = navegacion.longitud();
  console.log(longitud)
  
  const proximo = navegacion.ver_proximo()
  console.log(proximo)
  
  console.log(navegacion.ver_elementos())
  
  console.log(navegacion);