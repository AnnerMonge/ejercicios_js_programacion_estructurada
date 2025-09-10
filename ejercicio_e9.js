// Crear una cola
let cola = [];
// Agregar elementos (enqueue)
cola.push("Tarea 1"); // ["Tarea 1"]
cola.push("Tarea 2"); // ["Tarea 1", "Tarea 2"]
cola.push("Tarea 3"); // ["Tarea 1", "Tarea 2", "Tarea 3"]

console.log(cola); // ["Tarea 1", "Tarea 2", "Tarea 3"]

// Eliminar elementos (dequeue)
console.log(cola.shift(),"ha sido eliminada."); // "Tarea 1" (sale el primero)
console.log(cola); // ["Tarea 2", "Tarea 3"]
console.log(cola.shift(),"ha sido eliminada."); // "Tarea 2"
console.log(cola); // ["Tarea 3"]
console.log(cola.shift(),"ha sido eliminada."); // "Tarea 3"
console.log(cola); // []
console.log(cola.shift(),"ha sido eliminada."); // undefined (la cola está vacía)
console.log(cola); // []


// Crear una pila
let pila = [];
// Agregar elementos (push)
pila.push("Plato 1"); // ["Plato 1"]
pila.push("Plato 2"); // ["Plato 1", "Plato 2"]
pila.push("Plato 3"); // ["Plato 1", "Plato 2", "Plato 3"]

console.log(pila); // ["Plato 1", "Plato 2", "Plato 3"]

// Eliminar elementos (pop)
console.log(pila.pop()); // "Plato 3" (sale el último)
console.log(pila); // ["Plato 1", "Plato 2"]
console.log(pila.pop()); // "Plato 2"
console.log(pila); // ["Plato 1"]

//1 Cola Básica para Procesar Tareas
// arreglo para la cola
let colaTareas = [];
// acción para agregar al final de la cola
const agregarAlFinal = (tarea) => {
  colaTareas.push(tarea);
  console.log(`Tarea Agregada "${tarea}.Cola Actual:${colaTareas}" `);   
};

// acción para remover al inicio
const removerdelInicio = () => {
  if (colaTareas.length === 0) {
    console.log("cola vacia.");
    return null ;
  }
  const tareaProcesada= colaTareas.shift();
  console.log(`Tarea Procesada: "${tareaProcesada}. Cola Actual: ${colaTareas}"`);
  return tareaProcesada;
}
// ejemplo de uso
agregarAlFinal("Tarea A");// Cola: ["Tarea A"]
agregarAlFinal("Tarea B");// Cola: ["Tarea A", "Tarea B"]
agregarAlFinal("Tarea C"); // Cola: ["Tarea A", "Tarea B", "Tarea C"]
removerdelInicio(); // Procesa "Tarea A"
removerdelInicio(); // Procesa "Tarea B"
removerdelInicio(); // Procesa "Tarea C"

let colaMensajes = [];
const tamanoMaximo = 5;

// Acción para insertar al final (flecha)
const insertarAlFinal = (mensaje) => {
  colaMensajes.push(mensaje);
  if (colaMensajes.length > tamanoMaximo) {
    const mensajeEliminado = colaMensajes.shift();
    console.log('Límite excedido. Eliminado: ${mensajeEliminado}. Cola actual: ${colaMensajes}');
} else {
    console.log('Mensaje insertado: ${mensaje}. Cola actual: ${colaMensajes}');
  }
};

// Acción para extraer del inicio (flecha)
const extraerDelInicio = () => {
  if (colaMensajes.length === 0) {
    console.log("Cola vacía.");
    return null;
  }
  const mensajeExtraido = colaMensajes.shift();
  console.log('Mensaje extraído: ${mensajeExtraido}. Cola actual: ${colaMensajes}');
  return mensajeExtraido;
};

// Simulación del proceso
insertarAlFinal("Mensaje 1"); // Cola: ["Mensaje 1"]
insertarAlFinal("Mensaje 2"); // Cola: ["Mensaje 1", "Mensaje 2"]
insertarAlFinal("Mensaje 3"); // Cola: ["Mensaje 1", "Mensaje 2", "Mensaje 3"]
insertarAlFinal("Mensaje 4"); // Cola: ["Mensaje 1", "Mensaje 2", "Mensaje 3", "Mensaje 4"]
insertarAlFinal("Mensaje 5"); // Cola: ["Mensaje 1", "Mensaje 2", "Mensaje 3", "Mensaje 4", "Mensaje 5"]
insertarAlFinal("Mensaje 6"); // Límite excedido, elimina "Mensaje 1", Cola: ["Mensaje 2", "Mensaje 3", "Mensaje 4", "Mensaje 5", "Mensaje 6"]

extraerDelInicio(); // Extrae "Mensaje 2", Cola: ["Mensaje 3", "Mensaje 4", "Mensaje 5", "Mensaje 6"]


// Ejercicio 3: Cola para sumular una Línea de Espera (FIFO)

// Arreglo para la cola
let lineaEspera = [];

// Acción para unir al final (flecha)
const unirAlFinal = (persona) => {
  lineaEspera.push(persona);
  console.log('Persona unida: ${persona}. Línea actual: ${lineaEspera}');
};

// Acción para atender del inicio (flecha)
const atenderDelInicio = () => {
  if (lineaEspera.length === 0) {
    console.log("Línea vacía, nadie para atender.");
    return null;
  }
  const personaAtendida = lineaEspera.shift();
  console.log('Persona atendida: ${personaAtendida}. Línea actual: ${lineaEspera}');
  return personaAtendida;
};

// Simulación del proceso
unirAlFinal("Persona X"); // Línea: ["Persona X"]
unirAlFinal("Persona Y"); // Línea: ["Persona X", "Persona Y"]
unirAlFinal("Persona Z"); // Línea: ["Persona X", "Persona Y", "Persona Z"]
atenderDelInicio(); // Atiende "Persona X", Línea: ["Persona Y", "Persona Z"]
atenderDelInicio(); // Atiende "Persona Y", Línea: ["Persona Z"]
atenderDelInicio(); // Atiende "Persona Z", Línea: []
atenderDelInicio(); // Línea vacía


//4 Historial de Navegación Web
// arreglo para la pila
let historialPaginas = [];

// acción para agregar pagina {flecha}
const agregarUltimaPagina = (url) => {
  historialPaginas.push(url);
  console.log(`Página Agregada: "${url}. Historial Actual: ${historialPaginas}"`);
};
// acción para retroceder {flecha}
const retrocederPagina = () => {
  if (historialPaginas.length === 0) {
    console.log("No hay páginas en el historial.");
    return null;
  }
  const pagina = historialPaginas.pop();
  console.log(` Retrocediendo a: "${pagina}. Historial : ${historialPaginas}"`);
  return pagina;
};
// ejemplo de uso
agregarUltimaPagina("inicio.com"); 
agregarUltimaPagina("articulos.com");
agregarUltimaPagina("detalles.com");
retrocederPagina();
retrocederPagina();

// 5 Gestión de Notificaciones Emergentes
// Arreglo para la pila
let pilaNotificaciones = [];

// Acción para mostrar notificación (flecha)
const mostrarNotificacion = (mensaje) => {
  pilaNotificaciones.push(mensaje);
  console.log('Notificación: ${mensaje}. Pila: ${pilaNotificaciones}');
};

// Acción para cerrar notificación (flecha)
const cerrarNotificacion = () => {
  if (pilaNotificaciones.length === 0) {
    console.log("No hay notificaciones.");
    return null;
  }
  const notificacion = pilaNotificaciones.pop();
  console.log('Cerrada: ${notificacion}. Pila: ${pilaNotificaciones}');
  return notificacion;
};

// Simulación del proceso
mostrarNotificacion("Mensaje nuevo"); // Notificación: Mensaje nuevo. Pila: ["Mensaje nuevo"]
mostrarNotificacion("Batería baja"); // Notificación: Batería baja. Pila: ["Mensaje nuevo", "Batería baja"]
mostrarNotificacion("Actualización"); // Notificación: Actualización. Pila: ["Mensaje nuevo", "Batería baja", "Actualización"]
cerrarNotificacion(); // Cerrada: Actualización. Pila: ["Mensaje nuevo", "Batería baja"]
cerrarNotificacion(); // Cerrada: Batería baja. Pila: ["Mensaje nuevo"]







