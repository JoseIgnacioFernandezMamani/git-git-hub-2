
let fruits = ["mandarina","naranja","pera","limon"];
const sortFruits = (fruits) => {
  return fruits.sort();
};
console.log(sortFruits(fruits));
/* 
si es par Math.ceil o redondeo superior 4.2 == 5
si es impart Math.floor redondeo inferior 4.99 == 4
*/
let elements = [2,3,4,14,5,23,23,4,32,54,35,34554,36,45,6];
const getElementInTheMiddle = (list) => {
    let index = list.length % 2 ===0
    ? Math.floor(list.length / 2)
    : Math.ceil(list.length / 2);

    return {element: list[index], index: index};
};

let myObject = getElementInTheMiddle(elements);
console.log("el elemeno es: ", myObject.element, "mi indice es: ", myObject.index);

let users = "DANIEL";
const adminLogin = (user) => {
  if (user == "ADMIN") return true;
  if (user == "DEV") return true;
  return false;
};
console.log(adminLogin(users));
