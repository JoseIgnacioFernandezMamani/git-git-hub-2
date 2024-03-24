/* 
const getUser = (callback(user)) => {
    callback(userData) en este punto recien se da el valor del argumento para callback
*/
/* 
la funcion flecha no se ejecuta inmediatamente. En cambio, se pasa como una referencia y se 
ejecuta más adelante, en algún momento determinado por el código que la recibe, cuando se ejecuta callback() en ese momento el argumento se vuelve el objeto instanciado
*/
const getUser = (callback) => {
    const userData = {
        name: "Juan"
    };
    callback(userData);
}
getUser((user)=>{
    console.log("nombre de usuario: ",user.name);
});
