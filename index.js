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
;
var UserRoles = {
    ADMIN: { id: 1, name: "admin" },
    MANAGER: { id: 2, name: "manager" },
    USER: { id: 3, name: "user" },
};
var roleName = "admin";
var getRoleFromRoleName = function (roleName) {
    if (roleName === 'ADMIN') {
        console.log(UserRoles.ADMIN);
    }
    else if (roleName === 'MANAGER') {
        console.log(UserRoles.MANAGER);
    }
    else if (roleName === "USER") {
        console.log(UserRoles.USER);
    }
};
