var nombre = "Pepe";
let apellido = "Gomez";
const numero = 16;
let edad = 25;
let estatura = 1.75;
let estado = true;
let jobs = ['libros','deportes','película'];
let pares = [2,4,6,8,10];
let par = pares[3];
let persona = {
    nombre: 'Pepe',
    apellido: apellido,
    edad: 28,
    jobs: ['libros','deportes','pelicula'],
    otrosDatos:{
        telefono: 12345,
        direccion: 'ejemplo dir 1'
    }
};
console.log(persona.nombre,"",persona["apellido"]);
persona.edad = 30;
console.log(persona.edad);

let personas = [
    { nombre: "persona 1", edad:20, categoria: "a"},
    { nombre: "persona 2", edad:25, categoria: "b"},
    { nombre: "persona 3", edad:17, categoria: "c"},
    { nombre: "persona 4", edad:40, categoria: "a"},
    { nombre: "persona 5", edad:15, categoria: "b"},
    { nombre: "persona 6", edad:30, categoria: "c"},
];
console.log(personas[1].nombre,personas[1]["nombre"]);

for(let index = 0; index < personas.length; index++){
    console.log(personas[index].nombre);
}
console.log('for in----------------------');
for(let index in personas){
    console.log(personas[index].nombre);

}
console.log("for of-------------------------");
for(let item of personas){
    console.log(item.nombre);
}
console.log("while----------------------------");
let i = 0;
while(i<= (personas.length - 1)) {
    console.log(personas[i]);
    i++;


}

console.log("Do while-------------------------");
i = 0;
do{
    console.log(personas[i]);
    i++;
}while (i <= personas.length - 1);

console.log("foreach----------------------------")
personas.forEach(function (item, index){
    console.log(index, item);
});
