//// esta es mi función que suma dos números
//const sum = (a,b) => {
//    return a + b
//}
//
//// solo un registro en consola para nosotros.
//console.log(sum(7,3))
//
//// exporta la función para usarla en otros archivos 
//// (similar a la palabra clave `export` cuando se usa webpack)
//module.exports = { sum };
//
//// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;

}
module.exports= { fromEuroToDollar };

const fromDollarToYen = function(valueInYen){
    let valueInYen1 = valueInYen * 128;
    return valueInYen1;
}
module.exports = {fromEuroToDollar,fromDollarToYen}

const fromYenToPound = function(valueInPound){
    let valueInPound2 = valueInPound * 0.01 ;
    return valueInPound2;
}
module.exports = {fromEuroToDollar,fromDollarToYen,fromYenToPound}