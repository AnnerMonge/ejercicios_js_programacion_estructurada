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

// Muestra el nombre de la universidad.

const nombreUniversidad = () => universidad.nombre;
console.log(nombreUniversidad); // "Universidad Central"

// Muestra la calle donde esta ubicada 

const calleUniversidad = () => universidad.ubicacion.direccion.calle;
console.log(calleUniversidad); // "Av. Principal"

// Muestar el nombre de la primera facultad.

const nombrePrimeraFacultad = () => universidad.facultades[0].nombre;
console.log(nombrePrimeraFacultad); // "Ingeniería" 

// muestra el nombre de la segunda carrera de la primera facultad.
const nombreSegundaCarreraPrimeraFacultad = () => universidad.facultades[0].carreras[1].nombre;
console.log(nombreSegundaCarreraPrimeraFacultad); // "Civil"

// muestra el nombre del primer estudiante de la carrera de Informática.
const nombrePrimerEstudianteInformática = () => universidad.facultades[0].carreras[0].estudiantes[0].nombre;
console.log(nombrePrimerEstudianteInformática); // "Laura"

// muestra el segundo hobby de laura.
const segundoHobbyLaura = () => universidad.facultades[0].carreras[0].estudiantes[0].hobbies[1];
console.log(segundoHobbyLaura); // "ajedrez"  

// muestar la edad de Sofía.
const edadSofia = () => universidad.facultades[0].carreras[1].estudiantes[0].edad;
console.log(edadSofia); // 21 

 // muestra el primer hobby del estudiante de Derecho Penal.
const primerHobbyDerechoPenal = () => universidad.facultades[1].carreras[0].estudiantes[0].hobbies[0];
console.log(primerHobbyDerechoPenal); // "debate"

