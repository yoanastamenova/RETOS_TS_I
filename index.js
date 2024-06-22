// Desarrollar una función en TypeScript llamada getRandomSlice que recupere un segmento
// aleatorio de un arreglo dado con una longitud especificada. La función debe aceptar dos parámetros: un arreglo de
// cualquier tipo y un valor numérico que represente la longitud deseada del segmento aleatorio.
// Si la longitud solicitada excede la longitud del arreglo, la función deberá lanzar un error indicando que la longitud
// solicitada es mayor que la longitud del arreglo.
// La función getRandomSlice debe devolver un segmento aleatorio del arreglo de entrada con la
// longitud especificada. Para lograr esto, generará un índice de inicio aleatorio dentro del rango del arreglo. Luego, extraerá
// un segmento del arreglo comenzando desde el índice generado
// aleatoriamente y extendiéndose hasta el índice más la longitud especificada.
var miArreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(segmentoAleatorio); // Salida: [3, 4, 5] (o cualquier otro segmento aleatoriode longitud 3)
var getRandomSlice = function () {
    var nuevo = miArreglo.slice(3);
    return nuevo;
};
