//// importar la función sum del archivo app.js
//const { sum } = require('./app.js');
//
//// comienza tu primera prueba
//test('adds 14 + 9 to equal 23', () => {
//    //dentro de la prueba llamamos a nuestra función sum con 2 números
//    let total = sum(14, 9);
//
//    // esperamos que la suma de esos 2 números sea 23
//    expect(total).toBe(23);
//});
//
//
test("3.5 euro should be 4.2 dollars", function(){
    
    const { fromEuroToDollar } = require('./app.js')
    
   
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("4.2 dollar should be 537.6 yen", function(){
    const { fromDollarToYen } = require('./app')
    expect(fromDollarToYen(4.2)).toBe(537.6);
})

test("537.6 yen should be 5.376", function(){
    const {fromYenToPound} = require('./app')
    expect(fromYenToPound(537.6)).toBe(5.376);
})