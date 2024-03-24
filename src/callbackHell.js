
/* toda una pesadilla plantearme este problema callback hell lo mas sencillo posible
    use tu estructura de funciona autoinvocada y la vista en el enlace anteriormente compartida
*/


(() =>{
    setTimeout(()=>{
        console.log("primer tarea");
    },4000);
    (()=> {
        setTimeout(()=>{
            console.log("segunda tarea");
        },2000);
        (()=> {
            setTimeout(()=>{
                console.log("todas las tareas completadas la verdad deberia estar haciendo otras tareas pero estaba bueno practicar me gusto");
            },1000);
        })();
    })();
})();
