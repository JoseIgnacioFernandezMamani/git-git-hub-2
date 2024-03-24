# Funciones CallBack

no son mas que un tipo de funcion que se pasa como parametro a otras funciones

```javascript
const list = ["A", "B", "C"];

//realizando nuestro CallBack llamando a arrow function, este se ejecutara por cada uno de los elementos del array 
//que la funcion forEach vaya iterando.
list.forEach((element, index) =>{
        console.log("el elemento: ", element, "con el indice: ", index);
    });

```

# patron comun de callback sobre objetos iterables 
el orden de los argumentos sobre objetos iterables en algunos metodos comunes como lo son; 
filter(), map(), y forEach() es el siguiente ;(element, index, arrya).
Otros no tan conocidos metodos que usan ese patron en objetos iterables son; 
some(),every() -> verifican que almenos uno o todos los elementos cumplan con la condicion de la funcion callback
find(), findIndex() -> buscan el primer elemento que cumple con la condicion, el primero devuelve
el elemento y el segundo el indice

Existen otros metodos interesantes pero no siguen ese patron como reduce(acumulator, currentValue) pero
me doy cuenta que cuando se trabaja con funciones callback, estas tienen su propio estandar de parametros
para definir el orden y los elementos que entraran en juego, por lo que solo se debe buscar los 
"parametros de una determinada funcion", funciones que usan callback como argumento.


# Ejemplo de una funcion asincrona con callback

setTimeout(callbackFunction(),tiempoDeEjecucionDelCallBack)

```javascript
setTimeout(()=>{
    console.log("tendria que ejecutarme antes pero la asincronia esta jugando un papel aqui ");
}, 2034);
console.log("deberia ejecutarme despues del mensaje del callback, pero JS es un lenguaje no bloqueante y me permitira ejecutarme mientras la anterior tarea esta pendiente hasta realizarse");

```



# Arrow function

Una forma corta de escribir funciones.
