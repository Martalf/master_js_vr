var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// decorador
function estampar(logo) {
    return function (target) {
        target.prototype.estampado = function () {
            console.log('Camiseta estampada con el logo: ' + logo);
        };
    };
}
var Camiseta = /** @class */ (function () {
    function Camiseta(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    Camiseta = __decorate([
        estampar('PUMA')
    ], Camiseta);
    return Camiseta;
}());
// Clase Hija
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Sudadera;
}(Camiseta));
var camiseta = new Camiseta('verde', 'manga corta', 'nike', 'L', 17);
camiseta.estampado();
var sudadera_nike = new Sudadera('roja', 'manga larga', 'nike', 'L', 30);
//usando método de clase hija
sudadera_nike.setCapucha(true);
//usando método de clase padre
sudadera_nike.setColor('blanco');
console.log(camiseta, sudadera_nike);
//camiseta.setColor('White');
/*camiseta.color = 'negro';
camiseta.modelo = 'manga corta';
camiseta.marca = 'NIKE';
camiseta.talla = 'L';
camiseta.precio = 15;*/
//var franela = new Camiseta();
//franela.setColor('Grey');
/*franela.color = 'blanco';
franela.modelo = 'manga larga';
franela.marca = 'PUMA';
franela.talla = 'M';
franela.precio = 20;*/
/*

    * * * * * * * * * *  *
    * TIPS DE CLASE      *
    * * * * * * * * * *  *

    Clases

    Es un molde que sirve para generar objetos con características similares.

    Popiedades

    Son las cracterísticas del objeto

    Métodos

    Son funciones que hacen los objetos, es el comportamiento.

    La clase debe llamarse igual que el fichero y se debe usar camelCase en todo momento.

    para definir una propiedad dentto de una clase debes indicar la visibilidad , el nombre y el tipo.

    la visibilidad de una propiedad puede ser public, prtected o private.

    private solo  puede acceder a la propiedades de la misma claee
    protected pueden acceder a las propiedades todos lo métodos que hereden de esa clase
    public pueden acceder a las propiedades libremente.

    para acceder a las propiedades privadas se deben definir metodos intetnos de la clase.

    
    constructor metodo especial para darle un valor inicial a las propiedadesd de nuestra clase

    el constructor no devuelve ningpun dato.

    es el primer método que se ejecuta siempre al momento de crear un objeto para darle un valor a las
    propiedades de una clase.

    export, con eso exportamos la clase para ser importada en el fichero que la necesitemos.

    INTERFACE***

    Es como un contrato donde se define que propiedades y que metodos va usar una clase
    podemos definir interfaces y definirselas a las clases que queramos.

    herencia una clase hija puede heredar las carácterísticas de una clase padre.

    decoradores: patron de diseño que nos permite mediante unos metadatos a una clase hacer una copia
    de esa misma clase y modificarla para que realice una operación dependiendo de los parámetros
    que le pasemos

    los decoradores se declaran colocan encima de la clase y se nombran con el @
*/
