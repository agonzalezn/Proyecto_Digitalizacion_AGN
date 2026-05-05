/**
 * @typedef {Object} TeamStats
 * @property {number} puntos - Current points of the team.
 * @property {number} sets - Sets won by the team.
 */

/**
 * @typedef {Object} Scoreboard
 * @property {TeamStats} local - Stats for the local team.
 * @property {TeamStats} visitante - Stats for the visitor team.
 */

/**
 * Global state object that holds the current scoreboard data.
 * Loads the saved state from LocalStorage under the key 'marcadorVoley', or initializes with default values.
 * @type {Scoreboard}
 */
let marcador = JSON.parse(localStorage.getItem('marcadorVoley')) || {
    local: { puntos: 0, sets: 0, timeouts: 2 },
    visitante: { puntos: 0, sets: 0, timeouts: 2 }
};

if (marcador.local.timeouts === undefined) marcador.local.timeouts = 2;
if (marcador.visitante.timeouts === undefined) marcador.visitante.timeouts = 2;

// Referencias al DOM
const elPuntosLocal = document.getElementById('puntosLocal');
const elSetsLocal = document.getElementById('setsLocal');
const elPuntosVisitante = document.getElementById('puntosVisitante');
const elSetsVisitante = document.getElementById('setsVisitante');
const inputsNombres = document.querySelectorAll('.team-name-input'); 

// Cargar nombres
if(localStorage.getItem('nombreLocal')) inputsNombres[0].value = localStorage.getItem('nombreLocal');
if(localStorage.getItem('nombreVisitante')) inputsNombres[1].value = localStorage.getItem('nombreVisitante');

// Escuchar cambios nombres
inputsNombres[0].addEventListener('input', (e) => localStorage.setItem('nombreLocal', e.target.value));
inputsNombres[1].addEventListener('input', (e) => localStorage.setItem('nombreVisitante', e.target.value));

/**
 * Updates the DOM elements with the current values from the `marcador` state variable.
 * Points are formatted to always display two digits (e.g., "09").
 * It also automatically persists the new state in LocalStorage.
 * @function actualizarPantalla
 * @returns {void}
 */
function actualizarPantalla() {
    elPuntosLocal.textContent = marcador.local.puntos < 10 ? '0' + marcador.local.puntos : marcador.local.puntos;
    elPuntosVisitante.textContent = marcador.visitante.puntos < 10 ? '0' + marcador.visitante.puntos : marcador.visitante.puntos;
    
    elSetsLocal.textContent = marcador.local.sets;
    elSetsVisitante.textContent = marcador.visitante.sets;

    actualizarIndicadoresTimeouts('local');
    actualizarIndicadoresTimeouts('visitante');

    localStorage.setItem('marcadorVoley', JSON.stringify(marcador));
}

function actualizarIndicadoresTimeouts(equipo) {
    const container = document.getElementById('timeouts' + capitalize(equipo));
    const btn = document.getElementById('btnTimeout' + capitalize(equipo));
    const timeouts = marcador[equipo].timeouts;
    const dots = container.querySelectorAll('.timeout-dot');
    
    dots.forEach((dot, index) => {
        if (index < timeouts) {
            dot.classList.add('active');
            dot.classList.remove('used');
        } else {
            dot.classList.remove('active');
            dot.classList.add('used');
        }
    });
    
    btn.disabled = timeouts === 0;
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Increments the points for the specified team by 1 and updates the screen.
 * @function sumarPunto
 * @param {'local'|'visitante'} equipo - The identifier for the team scoring the point.
 * @returns {void}
 */
function sumarPunto(equipo) {
    if (equipo === 'local') marcador.local.puntos++;
    else marcador.visitante.puntos++;
    actualizarPantalla();
}

/**
 * Decrements the points for the specified team by 1 if their current points are greater than 0, then updates the screen.
 * @function restarPunto
 * @param {'local'|'visitante'} equipo - The identifier for the team losing a point.
 * @returns {void}
 */
function restarPunto(equipo) {
    if (equipo === 'local' && marcador.local.puntos > 0) marcador.local.puntos--;
    else if (equipo === 'visitante' && marcador.visitante.puntos > 0) marcador.visitante.puntos--;
    actualizarPantalla();
}

/**
 * Consume un tiempo muerto del equipo especificado.
 * Cada equipo tiene derecho a 2 tiempos muertos por set.
 * @function consumirTiempoMuerto
 * @param {'local'|'visitante'} equipo - El identificador del equipo que solicita el tiempo muerto.
 * @returns {void}
 */
function consumirTiempoMuerto(equipo) {
    if (marcador[equipo].timeouts > 0) {
        if(!confirm("¿Confirmar Tiempo Muerto para " + equipo.toUpperCase() + "?")) return;
        marcador[equipo].timeouts--;
        actualizarPantalla();
    }
}

/**
 * Prompts for confirmation and, if accepted, increments the sets won by the specified team.
 * Automatically resets the points for both teams back to 0.
 * @function sumarSet
 * @param {'local'|'visitante'} equipo - The identifier for the team winning the set.
 * @returns {void}
 */
function sumarSet(equipo) {
    if(!confirm("¿Confirmar SET para " + equipo.toUpperCase() + "?")) return;

    if (equipo === 'local') marcador.local.sets++;
    else marcador.visitante.sets++;
    
    marcador.local.puntos = 0;
    marcador.visitante.puntos = 0;
    
    marcador.local.timeouts = 2;
    marcador.visitante.timeouts = 2;
    
    actualizarPantalla();
}

/**
 * Prompts for confirmation and, if accepted, successfully ends the match.
 * It saves the match result in the `voley_historial` array in LocalStorage, resets all scores and names,
 * and clears the temporary match state.
 * @function reiniciarPartido
 * @returns {void}
 */
function reiniciarPartido() {
    if(!confirm("¿Terminar partido y guardar resultado?")) return;
    
    // --- LÓGICA DE HISTORIAL ---
    const historial = JSON.parse(localStorage.getItem('voley_historial')) || [];
    const nuevoPartido = {
        fecha: new Date().toLocaleDateString(),
        local: inputsNombres[0].value,
        visitante: inputsNombres[1].value,
        setsL: marcador.local.sets,
        setsV: marcador.visitante.sets
    };
    historial.unshift(nuevoPartido); // Añadir al principio
    localStorage.setItem('voley_historial', JSON.stringify(historial));
    // ---------------------------

    // Resetear variables
    marcador.local.puntos = 0; marcador.local.sets = 0; marcador.local.timeouts = 2;
    marcador.visitante.puntos = 0; marcador.visitante.sets = 0; marcador.visitante.timeouts = 2;
    
    inputsNombres[0].value = "LOCAL";
    inputsNombres[1].value = "VISITA";

    // Borrar datos temporales, pero mantener historial
    localStorage.removeItem('marcadorVoley');
    localStorage.removeItem('nombreLocal');
    localStorage.removeItem('nombreVisitante');

    actualizarPantalla();
}

// Iniciar
actualizarPantalla();