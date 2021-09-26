class fila {
    constructor(){
        this.elementos=[]
    }
    insertar(elemento){
        this.elementos.push(elemento)
    }
    extraer(){
        const primero = this.elementos[0]
        this.elementos.spice(0, 1)
        return primero
    }
    longitud(){
        return this.elementos.length
    }
    ver_proximo(){
        return this.elementos[0]
    }
    ver_elementos(){
        return this.elementos
    }
}

const navegacion = new fila()

navegacion.insertar({url:"abc"})
navegacion.insertar({url:"def"})
navegacion.insertar({url:"ghi"})
console.log(navegacion.ver_elementos())

navegacion.extraer()

console.log(navegacion.ver_elementos())

const longitud=navegacion.longitud()
console.log(proximo)

console.log(navegacion.ver_elementos())
console.log(navegacion)