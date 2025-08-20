// Acceder a objetos
const usuarios = { nombre: "Carlos", edad: 28 };
console.log(usuario.edad); // 28
console.log(usuario.nombre); // "Carlos"


const usuario = { nombre: "Ana", "correo ": "ana@mail.com" };
console.log(usuario["nombre"]); // "Ana"
console.log(usuario["correo-personal"]); // "ana@mail.com"

//Acceso en estructuras anidadas
const empresa = {
  nombre: "TechCorp",
  empleados: [
    {
      nombre: "Ana",
      direccion: { ciudad: "Madrid", codigoPostal: "28001" },
    },
    {
      nombre: "Luis",
      direccion: { ciudad: "Barcelona", codigoPostal: "08001" },
    },
  ],
};
// Ejemplos de acceso
console.log(empresa.empleados[0].nombre);
// "Ana"
console.log(empresa.empleados[1].direccion.ciudad);
// "Barcelona"
console.log(empresa.empleados[0]["direccion"]["codigoPostal"]);
// 28001
// El último también se puede escribir de esta forma:
console.log(empresa.empleados[0].direccion.codigoPostal);

//Analice y codifique el siguiente objeto:
const persona = {
  nombre: "Anner",
  edad: 28,
  direccion: {
    ciudad: "Managua",
    codigoPostal: 28001,
  },
  hobbies: ["leer", "correr", "pintar"],
};

//Cree funciones flecha que reciban ese objeto por parámetro e impriman lo siguiente:
 
// Muestra el nombre de la persona.
const mostrarNombre = (persona) => {
  console.log(`Nombre: ${persona.nombre}`);
};

// Muestra la edad de la persona.
const mostrarEdad = (persona) => {
  console.log(`Edad: ${persona.edad}`);
}

//Muestra la ciudad donde vive.
const mostrarCiudad = (persona) => {
  console.log(`Ciudad: ${persona.direccion.ciudad}`);
};

// Muestra el código postal usando corchetes.
const mostrarCodigoPostal = (persona) => {
  console.log(`Código Postal: ${persona.direccion["codigoPostal"]}`);
};

// Muestra el segundo hobby de la persona.
const mostrarSegundoHobby = (persona) => {
  console.log(`Segundo Hobby: ${persona.hobbies[1]}`);
};


// Analice y codifique el objeto adjuntado en Classroom.
const universidad = {
  nombre: "Universidad Central",
  ubicacion: {
    ciudad: "Sevilla",
    direccion: {
      calle: "Av. Principal",
      numero: 123
    }
  },
  facultades: [
    {
      nombre: "Ingeniería",
      carreras: [
        {
          nombre: "Informática",
          estudiantes: [
            { nombre: "Laura", edad: 20, hobbies: ["programar", "ajedrez"] },
            { nombre: "Javier", edad: 22, hobbies: ["fútbol", "cine"] }
          ]
        },
        {
          nombre: "Civil",
          estudiantes: [
            { nombre: "Sofía", edad: 21, hobbies: ["fotografía", "leer"] }
          ]
        }
      ]
    },
    {
      nombre: "Derecho",
      carreras: [
        {
          nombre: "Derecho Penal",
          estudiantes: [
            { nombre: "Andrés", edad: 23, hobbies: ["debate", "natación"] }
          ]
        }
      ]
    }
  ]
};

// Cree funciones flecha que reciban ese objeto por parámetro e impriman lo siguiente:

// Muestra el nombre de la universidad.
const mostrarNombreUniversidad = (universidad) => {
  console.log(`Nombre de la universidad: ${universidad.nombre}`);
};


//Muestra la calle donde está ubicada.
const mostrarCalleUniversidad = (universidad) => {
  console.log(`Calle: ${universidad.ubicacion.direccion.calle}`);
};

// Muestra el nombre de la primera facultad.
const mostrarPrimeraFacultad = (universidad) => {
  console.log(`Primera facultad: ${universidad.facultades[0].nombre}`);
};

//Muestra el nombre de la primera facultad.
const mostrarPrimeraCarrera = (universidad) => {
  console.log(`Primera carrera de la primera facultad: ${universidad.facultades[0].carreras[0].nombre}`);
};

//Muestra el nombre de la segunda carrera en la primera facultad.
const mostrarSegundaCarrera = (universidad) => {
  console.log(`Segunda carrera de la primera facultad: ${universidad.facultades[0].carreras[1].nombre}`);
};


//Muestra el nombre del primer estudiante de la carrera de Informática.
const mostrarPrimerEstudianteInformática = (universidad) => {
  console.log(`Primer estudiante de Informática: ${universidad.facultades[0].carreras[0].estudiantes[0].nombre}`);
};

//Muestra el segundo hobby de Laura.
const mostrarSegundoHobbyLaura = (universidad) => {
  console.log(`Segundo hobby de Laura: ${universidad.facultades[0].carreras[0].estudiantes[0].hobbies[1]}`);
};

// Muestra la edad de Sofía.
const mostrarEdadSofia = (universidad) => {
  console.log(`Edad de Sofía: ${universidad.facultades[0].carreras[1].estudiantes[0].edad}`);
};

// Muestra el primer hobby del estudiante de Derecho Penal.
const mostrarPrimerHobbyDerechoPenal = (universidad) => {
  console.log(`Primer hobby del estudiante de Derecho Penal: ${universidad.facultades[1].carreras[0].estudiantes[0].hobbies[0]}`);
};

