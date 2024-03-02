var nombre="Pepe";
let apellido= "Perez";
const numero = 12;
apellido = 'Gomez';
let numeroDos = 12.36;
let datoBooleano = false;
let pares = [2,4,6,8,10];
let jobs = ['Libros','Deportes','Cine','Videojuegos'];
console.log(pares[2]);
let persona = {
    nombre:'Juan',
    apellido: 'Perez',
    edad: 28,
    jobs:['Libros','Deportes','Cine','Videojuegos'],
    otrosDatos:{
        telefono:1234,
        email:'test@test.com'
    }
};
console.log(persona.nombre);
console.log(persona.jobs[1]);
console.log(persona.otrosDatos.email);

const personas =[
    {nombres:'Persona1', edad: 17, categoria:'a'},
    {nombres:'Persona2', edad: 27, categoria:'b'},
    {nombres:'Persona3', edad: 40, categoria:'c'},
    {nombres:'Persona4', edad: 30, categoria:'a'},
    {nombres:'Persona5', edad: 15, categoria:'b'},
    {nombres:'Persona6', edad: 18, categoria:'c'}
];
console.log('For---------------');
for(let index=0; index< personas.length -1 ; index++ ){
    console.log(personas[index].nombres);
}
console.log('For in---------------');
for (let index in personas){
    console.log(personas[index].edad);
}
console.log('For of---------------');
for (let item of personas){
    console.log(item.categoria);
}
console.log('While----------');
let index=0;
while (index < personas.length){
    console.log(personas[index].nombres);
    index++;
}
console.log('Do While----------');
index = 0;
do{
    console.log(personas[index].nombres);
    index++;
}while(index < personas.length)
console.log ('foreach-------')
personas.forEach((item, index) => {
    console.log(index, item.nombres);
});
let m = '12';
if(m === 12){
    console.log(m, 'ok')
}else if(m <= 12){
    console.log(m, 'menos 1')
}else{
    console.log(m, 'not')
}
/**
 * ! negacion
 * == igual valor 
 * === igual valor + igual tipo 
 * != diferente
 * < menor 
 * > mayor
 * <= menor o igual 
 * >= mayor o igual 
 * && and 
 *|| or 
 */