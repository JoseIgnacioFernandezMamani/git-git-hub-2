(() => {
/* first excercise */
  
  let numbers = [1, 2, 3, 4, 5];
  
  for(let i=0; i < numbers.length; i++ ){
    numbers[i]*=5;
  }
  numbers.forEach((Element, index) => {
    console.log("el elemento es: ", Element, "con indice de: ", index)
  });
 
  /* Second excercise */
    /* names.sort((a,b)=>{
      return a.localeCompare(b);
    });
    console.log(names);
    ya entendi a los callback y como funciona la funcion flecha, esta cosa no es necesaria
    */
    let names = ["Jhosep", "Daniel", "Rodrigo", "Veronica"];
    console.log(names.sort());


  /* Thrid excercise */

  const data = ['a', 'b', 'z', 'r', 'a', 'c', 'r', 'a'];
  data.sort((a, b)=> a.localeCompare(b));
  let UniqueData = new Set(data);
  console.log(UniqueData);
  
    /* Fourth excercise */
/* letterFrequency funciona como un diccionario de python */
    const largeWord = "abcdabcdABCD";
    const letterFrequency = {};
    for (let i = 0; i < largeWord.length; i++) {
        const letter = largeWord[i];
        letterFrequency[letter] !== undefined
          ? letterFrequency[letter] +=1
          : letterFrequency[letter] = 1;
    }
    
    console.log(letterFrequency);
    
  

})();
