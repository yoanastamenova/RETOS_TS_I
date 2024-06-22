// RETO 1
// Desarrollar una función en TypeScript llamada getRandomSlice que recupere un segmento
// aleatorio de un arreglo dado con una longitud especificada. La función debe aceptar dos parámetros: un arreglo de
// cualquier tipo y un valor numérico que represente la longitud deseada del segmento aleatorio.
// Si la longitud solicitada excede la longitud del arreglo, la función deberá lanzar un error indicando que la longitud
// solicitada es mayor que la longitud del arreglo.
// La función getRandomSlice debe devolver un segmento aleatorio del arreglo de entrada con la
// longitud especificada. Para lograr esto, generará un índice de inicio aleatorio dentro del rango del arreglo. Luego, extraerá
// un segmento del arreglo comenzando desde el índice generado
// aleatoriamente y extendiéndose hasta el índice más la longitud especificada.


// const miArreglo: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // console.log(segmentoAleatorio); // Salida: [3, 4, 5] (o cualquier otro segmento aleatoriode longitud 3)


// const getRandomSlice = (miArreglo: number[], i: number) => {
//     i = Math.random()
//     if (i > miArreglo.length) {
//         console.log("La valor del indice supera el valor maximo posible")
//     }
//     const startIndex = Math.floor(Math.random() * (miArreglo.length - i + 1))
//     return miArreglo.slice(startIndex, startIndex + i);
// }

// const segmentoAleatorio = getRandomSlice(miArreglo, 3);
// console.log(segmentoAleatorio); 

// RETO 2

// interface Role {
//     id: number;
//     name: string;
//     };
//     const UserRoles: { [key: string]: Role }
//     = {
//     ADMIN: { id: 1, name: "admin" },
//     MANAGER: { id: 2, name: "manager" },
//     USER: { id: 3, name: "user" },
//     };

//     const roleName: string = "admin";
//     const getRoleFromRoleName = (roleName: string) => {
//         if(roleName === 'ADMIN') {
//             return UserRoles.ADMIN
//         }
//         else if(roleName === 'MANAGER') {
//             return UserRoles.MANAGER

//         } else if (roleName === "USER") {
//             return UserRoles.USER
//         }
//     }

// Escribe una función llamada validarContraseña que tome una cadena como argumento y verifique si
// cumple con los siguientes criterios para ser considerada una contraseña segura:
// - Debe tener al menos 8 caracteres.
// - Debe contener al menos una letra mayúscula.
// - Debe contener al menos una letra minúscula.
// - Debe contener al menos un número.
// - Debe contener al menos un carácter especial de la siguiente lista: @$!%*?&.
// La función debe devolver true si la contraseña cumple con todos los criterios y false en caso contrario.


// let letra: string[] = ['a','b','c','d','e','f','g','e'];
// let mayúscula: string[] = ['A','B','C','D','E','F','G','H','I']
// let minúscula: string[] = ['a','b','c','d','e','f','g','e','i'];
// let numérico: number[] = [1,2,3,4,5,6,7,8,9];
// let simbolos: any[] = ['@','$','!','%','*','?','&','.']
// let password: any[] = ['a','B','1','C','d','E',1,'@']

// const validarContraseña = (password: string) :boolean => {
//     const expresionRegular = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//     return expresionRegular.test(password);
// }

// //Escribe una función llamada sumarMatrices que tome dos matrices como argumentos y
// devuelva una nueva matriz que sea el resultado de la suma de las dos matrices de entrada.
// Asegúrate de manejar correctamente los casos en los que las matrices no tengan las mismas
// dimensiones para poder realizar la operación de suma. Las matrices se representan como
// arrays bidimensionales de números.

// let arr1: number[] = [1,2,3,4]
// let arr2: number[] = [5,6,7,8]

// let arr3: number[] = arr1.concat(arr2);

// const sumarMatrices = (arr1: number[],arr2: number[]): number[] => {
//     if (arr1.length !== arr2.length || arr1[0].length !== arr2[0].length) {
//         throw new Error("Las matrices deben tener las mismas dimensiones.");
//         }
//         return arr1.map(arr1.concat(arr2));
//         }

// console.log(sumarMatrices(arr1, arr2));

//
// function generarContraseña(longitud: number): string {
// const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
// let contraseña = '';
// for (let i = 0; i < longitud; i++) {
// const indice = Math.floor(Math.random() * caracteres.length);
// contraseña += caracteres.charAt(indice);
// }
// return contraseña;
// }
// console.log(generarContraseña(10));