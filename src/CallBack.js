/* setTimeout(()=>{
    console.log("tendria que ejecutarme antes pero la asincronia esta jugando un papel aqui ");
}, 2034);
console.log("deberia ejecutarme despues del mensaje del callback, pero JS es un lenguaje no bloqueante y me permitira ejecutarme mientras la anterior tarea esta pendiente hasta realisarce");
 */

/* 
este es un ejemplo del siguiente enlace :https://lenguajejs.com/javascript/asincronia/callbacks/

y ahora que lo veo este es uno de los mejores ejemplos de callback, se esta ejecutando, pero no por eso esta bloqueando
otras tareas cono la del for pero la funcion callback pasada como parametro, solo se ejecutara
bajo la condicion de que obtengamos un 6


*/

const doTask = (iterations, callback) => {
    const numbers = [];
  
    for (let i = 0; i < iterations; i++) {
      const number = 1 + Math.floor(Math.random() * 6);
      numbers.push(number);
      if (number === 6) {
        callback({
          error: true,
          message: "Se ha sacado un 6"
        });
        return;
      }
    }
  
    return callback(null, {
      error: false,
      value: numbers
    });
  }


  doTask(3, function(err, result) {
    if (err) {
      console.error("Se ha sacado un ", err.message);
      return;
    }
    console.log("Tiradas correctas: ", result.value);
  });