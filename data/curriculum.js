const CURRICULUM = [
  {
    id: 'fundamentos',
    title: 'Fundamentos',
    description: 'Conceptos básicos de la lógica computacional y resolución de problemas.',
    lessons: [
      {
        id: 'intro-logica',
        title: '¿Qué es la lógica de programación?',
        summary: 'Comprende el pensamiento lógico computacional y su importancia.',
        content: `
          <section>
            <h3>Definición</h3>
            <p>La <strong>lógica de programación</strong> es la técnica de organizar instrucciones de forma coherente para resolver un problema. No depende de un lenguaje específico: es la base para aprender cualquier tecnología.</p>
            <div class="info-box">
              <strong>Algoritmo:</strong> conjunto finito de pasos ordenados que, al ejecutarse, resuelven un problema o realizan una tarea.
            </div>
          </section>
          <section>
            <h3>Características de un buen algoritmo</h3>
            <ul>
              <li><strong>Finito:</strong> debe terminar en algún momento.</li>
              <li><strong>Preciso:</strong> cada paso debe ser claro y sin ambigüedad.</li>
              <li><strong>Efectivo:</strong> debe producir un resultado útil.</li>
              <li><strong>Entrada y salida:</strong> recibe datos y devuelve un resultado.</li>
            </ul>
          </section>
          <section>
            <h3>El proceso de resolución de problemas</h3>
            <ol>
              <li>Analizar y comprender el problema.</li>
              <li>Identificar entradas, procesos y salidas.</li>
              <li>Diseñar el algoritmo (pseudocódigo o diagrama).</li>
              <li>Verificar con casos de prueba.</li>
              <li>Implementar en un lenguaje de programación.</li>
            </ol>
          </section>
        `,
        exercises: [
          {
            type: 'multiple',
            question: '¿Cuál es la definición correcta de algoritmo?',
            options: [
              'Un lenguaje de programación como Java o Python',
              'Un conjunto finito de pasos ordenados para resolver un problema',
              'Una base de datos que almacena información',
              'Un tipo de variable numérica'
            ],
            correct: 1,
            explanation: 'Un algoritmo es la secuencia de pasos lógicos, independiente del lenguaje de programación.'
          },
          {
            type: 'multiple',
            question: '¿Cuál NO es una característica de un algoritmo válido?',
            options: [
              'Debe ser finito',
              'Debe ser preciso',
              'Debe ejecutarse infinitamente',
              'Debe ser efectivo'
            ],
            correct: 2,
            explanation: 'Un algoritmo debe terminar; no puede ejecutarse de forma infinita.'
          }
        ]
      },
      {
        id: 'pseudocodigo',
        title: 'Pseudocódigo',
        summary: 'Aprende a expresar algoritmos en lenguaje cercano al humano.',
        content: `
          <section>
            <h3>¿Qué es el pseudocódigo?</h3>
            <p>El <strong>pseudocódigo</strong> es una representación informal de un algoritmo usando convenciones similares a un lenguaje de programación, pero sin sintaxis estricta. Permite concentrarse en la lógica antes de escribir código real.</p>
          </section>
          <section>
            <h3>Convenciones básicas</h3>
            <ul>
              <li><strong>INICIO / FIN</strong> — delimitan el algoritmo.</li>
              <li><strong>LEER</strong> — obtiene datos de entrada.</li>
              <li><strong>ESCRIBIR</strong> — muestra resultados.</li>
              <li><strong>SI ... ENTONCES ... SINO ... FIN_SI</strong> — decisión.</li>
              <li><strong>MIENTRAS ... HACER ... FIN_MIENTRAS</strong> — repetición.</li>
            </ul>
            <div class="code-block">INICIO
  LEER numero
  SI numero MOD 2 = 0 ENTONCES
    ESCRIBIR "Es par"
  SINO
    ESCRIBIR "Es impar"
  FIN_SI
FIN</div>
          </section>
          <section>
            <h3>Ejemplo: calcular el área de un rectángulo</h3>
            <div class="code-block">INICIO
  LEER base, altura
  area ← base * altura
  ESCRIBIR "El área es:", area
FIN</div>
            <p>El símbolo ← representa una asignación: el valor de la derecha se guarda en la variable de la izquierda.</p>
          </section>
        `,
        exercises: [
          {
            type: 'multiple',
            question: 'En pseudocódigo, ¿qué hace la instrucción LEER?',
            options: [
              'Muestra un resultado en pantalla',
              'Obtiene datos de entrada del usuario',
              'Repite un bloque de código',
              'Termina el programa'
            ],
            correct: 1,
            explanation: 'LEER captura los datos que el algoritmo necesita para procesar.'
          },
          {
            type: 'multiple',
            question: '¿Qué operador representa una asignación en pseudocódigo?',
            options: ['=', '==', '←', '=>'],
            correct: 2,
            explanation: 'La flecha ← indica que se asigna un valor a una variable.'
          }
        ]
      },
      {
        id: 'diagramas-flujo',
        title: 'Diagramas de flujo',
        summary: 'Representa visualmente el flujo de un algoritmo.',
        content: `
          <section>
            <h3>Símbolos fundamentales</h3>
            <ul>
              <li><strong>Óvalo:</strong> inicio y fin del proceso.</li>
              <li><strong>Rectángulo:</strong> proceso o acción (asignación, cálculo).</li>
              <li><strong>Rombo:</strong> decisión (condición verdadera/falsa).</li>
              <li><strong>Paralelogramo:</strong> entrada/salida de datos.</li>
              <li><strong>Flechas:</strong> dirección del flujo.</li>
            </ul>
          </section>
          <section>
            <h3>Ejemplo visual: verificar si un número es positivo</h3>
            <div class="flowchart">
              <div class="flow-node start-end">INICIO</div>
              <div class="flow-arrow"></div>
              <div class="flow-node process">LEER numero</div>
              <div class="flow-arrow"></div>
              <div class="flow-node process">¿numero > 0?</div>
              <div class="flow-arrow"></div>
              <div class="flow-node process">ESCRIBIR "Positivo" / "No positivo"</div>
              <div class="flow-arrow"></div>
              <div class="flow-node start-end">FIN</div>
            </div>
          </section>
          <section>
            <h3>Reglas de diseño</h3>
            <ol>
              <li>Flujo de arriba hacia abajo y de izquierda a derecha.</li>
              <li>Un solo punto de inicio y al menos un punto de fin.</li>
              <li>Las flechas no deben cruzarse innecesariamente.</li>
              <li>Cada rombo tiene exactamente dos salidas: Sí y No.</li>
            </ol>
          </section>
        `,
        exercises: [
          {
            type: 'multiple',
            question: '¿Qué símbolo se usa para representar una decisión en un diagrama de flujo?',
            options: ['Óvalo', 'Rectángulo', 'Rombo', 'Círculo'],
            correct: 2,
            explanation: 'El rombo representa una condición con dos caminos posibles.'
          },
          {
            type: 'multiple',
            question: '¿Qué forma representa el inicio y fin de un algoritmo?',
            options: ['Rectángulo', 'Rombo', 'Óvalo', 'Flecha'],
            correct: 2,
            explanation: 'Los óvalos o terminadores marcan el inicio y el fin del flujo.'
          }
        ]
      }
    ]
  },
  {
    id: 'datos-operadores',
    title: 'Datos y Operadores',
    description: 'Variables, tipos de datos y operadores lógicos y aritméticos.',
    lessons: [
      {
        id: 'variables',
        title: 'Variables y tipos de datos',
        summary: 'Almacena y clasifica la información en tu programa.',
        content: `
          <section>
            <h3>¿Qué es una variable?</h3>
            <p>Una <strong>variable</strong> es un espacio en memoria con un nombre que almacena un valor que puede cambiar durante la ejecución del programa.</p>
            <div class="info-box">
              <strong>Convención:</strong> usa nombres descriptivos como <code>edad</code>, <code>totalVentas</code>, <code>esActivo</code>.
            </div>
          </section>
          <section>
            <h3>Tipos de datos fundamentales</h3>
            <ul>
              <li><strong>Entero (int):</strong> números sin decimales — 42, -7, 0</li>
              <li><strong>Real (float/double):</strong> números con decimales — 3.14, -0.5</li>
              <li><strong>Carácter (char):</strong> un solo símbolo — 'A', '9'</li>
              <li><strong>Cadena (string):</strong> texto — "Hola", "Juan"</li>
              <li><strong>Booleano (bool):</strong> verdadero o falso — true, false</li>
            </ul>
          </section>
          <section>
            <h3>Declaración y asignación</h3>
            <div class="code-block"><span class="cm">// Declarar e inicializar</span>
<span class="kw">entero</span> edad ← 25
<span class="kw">real</span> precio ← 19.99
<span class="kw">cadena</span> nombre ← <span class="str">"María"</span>
<span class="kw">logico</span> activo ← <span class="kw">verdadero</span>

<span class="cm">// Cambiar el valor</span>
edad ← edad + <span class="num">1</span></div>
          </section>
        `,
        exercises: [
          {
            type: 'multiple',
            question: '¿Qué tipo de dato almacena el valor verdadero o falso?',
            options: ['Entero', 'Cadena', 'Booleano', 'Real'],
            correct: 2,
            explanation: 'Los booleanos representan valores lógicos: verdadero (true) o falso (false).'
          },
          {
            type: 'multiple',
            question: '¿Cuál es un nombre de variable válido y descriptivo?',
            options: ['2edad', 'x', 'totalPrecio', 'precio-total'],
            correct: 2,
            explanation: 'totalPrecio es descriptivo y sigue convenciones de nomenclatura.'
          }
        ]
      },
      {
        id: 'operadores',
        title: 'Operadores aritméticos y lógicos',
        summary: 'Realiza cálculos y evalúa condiciones con operadores.',
        content: `
          <section>
            <h3>Operadores aritméticos</h3>
            <table class="trace-table">
              <tr><th>Operador</th><th>Operación</th><th>Ejemplo</th></tr>
              <tr><td>+</td><td>Suma</td><td>5 + 3 = 8</td></tr>
              <tr><td>-</td><td>Resta</td><td>5 - 3 = 2</td></tr>
              <tr><td>*</td><td>Multiplicación</td><td>5 * 3 = 15</td></tr>
              <tr><td>/</td><td>División</td><td>7 / 2 = 3.5</td></tr>
              <tr><td>MOD</td><td>Módulo (resto)</td><td>7 MOD 2 = 1</td></tr>
              <tr><td>^</td><td>Potencia</td><td>2 ^ 3 = 8</td></tr>
            </table>
          </section>
          <section>
            <h3>Operadores relacionales</h3>
            <p>Comparan dos valores y devuelven verdadero o falso:</p>
            <p><code>==</code> igual · <code>!=</code> diferente · <code>&gt;</code> mayor · <code>&lt;</code> menor · <code>&gt;=</code> mayor o igual · <code>&lt;=</code> menor o igual</p>
          </section>
          <section>
            <h3>Operadores lógicos</h3>
            <ul>
              <li><strong>AND (Y):</strong> verdadero solo si ambas condiciones son verdaderas.</li>
              <li><strong>OR (O):</strong> verdadero si al menos una condición es verdadera.</li>
              <li><strong>NOT (NO):</strong> invierte el valor lógico.</li>
            </ul>
            <table class="trace-table">
              <tr><th>A</th><th>B</th><th>A AND B</th><th>A OR B</th></tr>
              <tr><td>V</td><td>V</td><td>V</td><td>V</td></tr>
              <tr><td>V</td><td>F</td><td>F</td><td>V</td></tr>
              <tr><td>F</td><td>V</td><td>F</td><td>V</td></tr>
              <tr><td>F</td><td>F</td><td>F</td><td>F</td></tr>
            </table>
          </section>
        `,
        exercises: [
          {
            type: 'multiple',
            question: '¿Cuál es el resultado de 17 MOD 5?',
            options: ['3', '2', '5', '1'],
            correct: 1,
            explanation: '17 ÷ 5 = 3 con resto 2. El operador MOD devuelve el resto: 2.'
          },
          {
            type: 'multiple',
            question: 'Si A = verdadero y B = falso, ¿cuál es el resultado de A AND B?',
            options: ['Verdadero', 'Falso', 'Error', 'Nulo'],
            correct: 1,
            explanation: 'AND requiere que ambas condiciones sean verdaderas. Como B es falso, el resultado es falso.'
          },
          {
            type: 'multiple',
            question: '¿Qué operador verifica si dos valores son iguales?',
            options: ['=', '==', '!=', '>='],
            correct: 1,
            explanation: '== compara igualdad; = o ← se usan para asignar valores.'
          }
        ]
      }
    ]
  },
  {
    id: 'estructuras-control',
    title: 'Estructuras de Control',
    description: 'Secuencia, selección e iteración para controlar el flujo del programa.',
    lessons: [
      {
        id: 'secuencia',
        title: 'Estructura secuencial',
        summary: 'Las instrucciones se ejecutan una tras otra en orden.',
        content: `
          <section>
            <h3>Secuencia</h3>
            <p>Es la estructura más básica: las instrucciones se ejecutan en el orden en que aparecen, de arriba hacia abajo, sin saltos ni repeticiones.</p>
          </section>
          <section>
            <h3>Ejemplo: convertir kilómetros a metros</h3>
            <div class="code-block">INICIO
  LEER km
  metros ← km * <span class="num">1000</span>
  ESCRIBIR km, <span class="str">" km = "</span>, metros, <span class="str">" metros"</span>
FIN</div>
            <p>Cada línea se ejecuta exactamente una vez, en orden: primero leer, luego calcular, luego mostrar.</p>
          </section>
          <section>
            <h3>Rastreo de variables</h3>
            <p>El <strong>rastreo</strong> (trace) consiste en seguir paso a paso cómo cambian los valores de las variables:</p>
            <table class="trace-table">
              <tr><th>Paso</th><th>Instrucción</th><th>km</th><th>metros</th></tr>
              <tr><td>1</td><td>LEER km</td><td>5</td><td>—</td></tr>
              <tr><td>2</td><td>metros ← km * 1000</td><td>5</td><td>5000</td></tr>
              <tr><td>3</td><td>ESCRIBIR</td><td>5</td><td>5000</td></tr>
            </table>
          </section>
        `,
        exercises: [
          {
            type: 'multiple',
            question: 'Tras ejecutar "a ← 10" y luego "b ← a + 5", ¿cuál es el valor de b?',
            options: ['5', '10', '15', '105'],
            correct: 2,
            explanation: 'a vale 10, entonces b = 10 + 5 = 15.'
          }
        ]
      },
      {
        id: 'seleccion',
        title: 'Estructura de selección',
        summary: 'Toma decisiones con condiciones if-else.',
        content: `
          <section>
            <h3>Selección simple y doble</h3>
            <p>Permite ejecutar diferentes bloques de código según si una condición es verdadera o falsa.</p>
            <div class="code-block"><span class="cm">// Selección doble</span>
<span class="kw">SI</span> nota >= <span class="num">60</span> <span class="kw">ENTONCES</span>
  ESCRIBIR <span class="str">"Aprobado"</span>
<span class="kw">SINO</span>
  ESCRIBIR <span class="str">"Reprobado"</span>
<span class="kw">FIN_SI</span>

<span class="cm">// Selección anidada</span>
<span class="kw">SI</span> nota >= <span class="num">90</span> <span class="kw">ENTONCES</span>
  ESCRIBIR <span class="str">"Excelente"</span>
<span class="kw">SINO SI</span> nota >= <span class="num">70</span> <span class="kw">ENTONCES</span>
  ESCRIBIR <span class="str">"Bueno"</span>
<span class="kw">SINO</span>
  ESCRIBIR <span class="str">"Regular"</span>
<span class="kw">FIN_SI</span></div>
          </section>
          <section>
            <h3>Selección múltiple (switch)</h3>
            <p>Cuando hay varios valores específicos a evaluar, se usa la selección múltiple:</p>
            <div class="code-block"><span class="kw">SEGUN</span> dia
  <span class="kw">CASO</span> <span class="num">1</span>: ESCRIBIR <span class="str">"Lunes"</span>
  <span class="kw">CASO</span> <span class="num">2</span>: ESCRIBIR <span class="str">"Martes"</span>
  <span class="kw">...</span>
  <span class="kw">DEFAULT</span>: ESCRIBIR <span class="str">"Día inválido"</span>
<span class="kw">FIN_SEGUN</span></div>
          </section>
        `,
        exercises: [
          {
            type: 'multiple',
            question: 'Si nota = 75, ¿qué mensaje se muestra con la estructura anidada del ejemplo?',
            options: ['Excelente', 'Bueno', 'Regular', 'Reprobado'],
            correct: 1,
            explanation: '75 no es >= 90, pero sí es >= 70, por lo que se muestra "Bueno".'
          },
          {
            type: 'multiple',
            question: '¿Cuántos caminos de ejecución tiene una selección doble (if-else)?',
            options: ['Uno', 'Dos', 'Tres', 'Infinitos'],
            correct: 1,
            explanation: 'La selección doble tiene exactamente dos caminos: cuando la condición es verdadera y cuando es falsa.'
          }
        ]
      },
      {
        id: 'iteracion',
        title: 'Estructuras de repetición',
        summary: 'Repite bloques de código con while y for.',
        content: `
          <section>
            <h3>¿Por qué repetir?</h3>
            <p>Las estructuras de repetición (ciclos o bucles) permiten ejecutar un bloque de código múltiples veces sin escribirlo repetidamente.</p>
          </section>
          <section>
            <h3>MIENTRAS (while) — evalúa la condición primero</h3>
            <div class="code-block">contador ← <span class="num">1</span>
<span class="kw">MIENTRAS</span> contador <= <span class="num">5</span> <span class="kw">HACER</span>
  ESCRIBIR contador
  contador ← contador + <span class="num">1</span>
<span class="kw">FIN_MIENTRAS</span>
<span class="cm">// Imprime: 1, 2, 3, 4, 5</span></div>
          </section>
          <section>
            <h3>PARA (for) — cuando conoces las repeticiones</h3>
            <div class="code-block"><span class="kw">PARA</span> i ← <span class="num">1</span> <span class="kw">HASTA</span> <span class="num">10</span> <span class="kw">HACER</span>
  ESCRIBIR <span class="str">"Tabla del 5:"</span>, i, <span class="str">" x 5 = "</span>, i * <span class="num">5</span>
<span class="kw">FIN_PARA</span></div>
          </section>
          <section>
            <h3>REPETIR-HASTA (do-while) — evalúa al final</h3>
            <div class="code-block"><span class="kw">REPETIR</span>
  LEER opcion
<span class="kw">HASTA QUE</span> opcion = <span class="num">0</span></div>
            <p>Garantiza al menos una ejecución del bloque antes de evaluar la condición.</p>
          </section>
        `,
        exercises: [
          {
            type: 'multiple',
            question: '¿Cuántas veces se ejecuta el cuerpo del MIENTRAS si contador inicia en 1 y la condición es contador <= 5?',
            options: ['4', '5', '6', 'Infinitas'],
            correct: 1,
            explanation: 'Se ejecuta con contador = 1, 2, 3, 4, 5. Cuando llega a 6, la condición es falsa y termina.'
          },
          {
            type: 'multiple',
            question: '¿Qué estructura garantiza ejecutar el bloque al menos una vez?',
            options: ['MIENTRAS', 'PARA', 'REPETIR-HASTA', 'SI-ENTONCES'],
            correct: 2,
            explanation: 'REPETIR-HASTA evalúa la condición al final, ejecutando el bloque al menos una vez.'
          }
        ]
      }
    ]
  },
  {
    id: 'estructuras-datos',
    title: 'Estructuras de Datos',
    description: 'Arreglos, matrices y colecciones de datos.',
    lessons: [
      {
        id: 'arreglos',
        title: 'Arreglos (vectores)',
        summary: 'Almacena múltiples valores del mismo tipo en una sola estructura.',
        content: `
          <section>
            <h3>Concepto de arreglo</h3>
            <p>Un <strong>arreglo</strong> (vector) es una colección ordenada de elementos del mismo tipo, accesibles mediante un índice numérico que generalmente inicia en 0.</p>
            <div class="code-block">numeros ← [<span class="num">10</span>, <span class="num">20</span>, <span class="num">30</span>, <span class="num">40</span>, <span class="num">50</span>]
<span class="cm">// Índice:     0    1    2    3    4</span>

ESCRIBIR numeros[<span class="num">0</span>]   <span class="cm">// 10</span>
ESCRIBIR numeros[<span class="num">2</span>]   <span class="cm">// 30</span>
numeros[<span class="num">1</span>] ← <span class="num">25</span>     <span class="cm">// Modificar elemento</span></div>
          </section>
          <section>
            <h3>Recorrer un arreglo</h3>
            <div class="code-block">suma ← <span class="num">0</span>
<span class="kw">PARA</span> i ← <span class="num">0</span> <span class="kw">HASTA</span> <span class="num">4</span> <span class="kw">HACER</span>
  suma ← suma + numeros[i]
<span class="kw">FIN_PARA</span>
promedio ← suma / <span class="num">5</span></div>
          </section>
        `,
        exercises: [
          {
            type: 'multiple',
            question: 'En un arreglo de 5 elementos con índice base 0, ¿cuál es el último índice válido?',
            options: ['5', '4', '3', '6'],
            correct: 1,
            explanation: 'Con 5 elementos, los índices van de 0 a 4. El último índice es tamaño - 1.'
          },
          {
            type: 'multiple',
            question: 'Si numeros = [10, 20, 30], ¿qué valor tiene numeros[1]?',
            options: ['10', '20', '30', 'Error'],
            correct: 1,
            explanation: 'El índice 1 corresponde al segundo elemento: 20.'
          }
        ]
      },
      {
        id: 'matrices',
        title: 'Matrices (arreglos bidimensionales)',
        summary: 'Organiza datos en filas y columnas.',
        content: `
          <section>
            <h3>¿Qué es una matriz?</h3>
            <p>Una <strong>matriz</strong> es un arreglo de dos dimensiones (filas y columnas). Se usa para tablas, tableros de juego, imágenes, etc.</p>
            <div class="code-block">tablero ← [
  [<span class="num">1</span>, <span class="num">0</span>, <span class="num">0</span>],
  [<span class="num">0</span>, <span class="num">1</span>, <span class="num">0</span>],
  [<span class="num">0</span>, <span class="num">0</span>, <span class="num">1</span>]
]

<span class="cm">// Acceder: tablero[fila][columna]</span>
ESCRIBIR tablero[<span class="num">0</span>][<span class="num">2</span>]  <span class="cm">// Fila 0, columna 2 → 0</span>
ESCRIBIR tablero[<span class="num">1</span>][<span class="num">1</span>]  <span class="cm">// Fila 1, columna 1 → 1</span></div>
          </section>
          <section>
            <h3>Recorrer una matriz</h3>
            <div class="code-block"><span class="kw">PARA</span> f ← <span class="num">0</span> <span class="kw">HASTA</span> <span class="num">2</span> <span class="kw">HACER</span>
  <span class="kw">PARA</span> c ← <span class="num">0</span> <span class="kw">HASTA</span> <span class="num">2</span> <span class="kw">HACER</span>
    ESCRIBIR tablero[f][c]
  <span class="kw">FIN_PARA</span>
<span class="kw">FIN_PARA</span></div>
            <p>Se usan ciclos anidados: un ciclo externo para filas y uno interno para columnas.</p>
          </section>
        `,
        exercises: [
          {
            type: 'multiple',
            question: '¿Cómo se accede al elemento de la fila 2, columna 1 en una matriz llamada "datos"?',
            options: ['datos[2,1]', 'datos[2][1]', 'datos(2,1)', 'datos.2.1'],
            correct: 1,
            explanation: 'La notación estándar es datos[fila][columna], es decir datos[2][1].'
          }
        ]
      }
    ]
  },
  {
    id: 'modularidad-poo',
    title: 'Modularidad y POO',
    description: 'Funciones, procedimientos y diseño orientado a objetos.',
    lessons: [
      {
        id: 'funciones',
        title: 'Funciones y procedimientos',
        summary: 'Divide tu programa en módulos reutilizables.',
        content: `
          <section>
            <h3>Modularidad</h3>
            <p>Dividir un programa en <strong>módulos</strong> (funciones/procedimientos) facilita su lectura, mantenimiento y reutilización. Cada módulo resuelve una tarea específica.</p>
          </section>
          <section>
            <h3>Función vs Procedimiento</h3>
            <ul>
              <li><strong>Función:</strong> recibe parámetros y <em>devuelve</em> un valor.</li>
              <li><strong>Procedimiento:</strong> ejecuta acciones pero no devuelve valor.</li>
            </ul>
            <div class="code-block"><span class="kw">FUNCION</span> calcularArea(base, altura)
  <span class="kw">RETORNAR</span> base * altura
<span class="kw">FIN_FUNCION</span>

<span class="kw">PROCEDIMIENTO</span> saludar(nombre)
  ESCRIBIR <span class="str">"Hola, "</span>, nombre
<span class="kw">FIN_PROCEDIMIENTO</span>

<span class="cm">// Uso</span>
area ← calcularArea(<span class="num">5</span>, <span class="num">3</span>)   <span class="cm">// area = 15</span>
saludar(<span class="str">"Ana"</span>)</div>
          </section>
          <section>
            <h3>Parámetros y variables locales</h3>
            <p>Las variables declaradas dentro de una función son <strong>locales</strong>: solo existen mientras la función se ejecuta. Los parámetros son los datos que recibe la función.</p>
          </section>
        `,
        exercises: [
          {
            type: 'multiple',
            question: '¿Cuál es la diferencia principal entre función y procedimiento?',
            options: [
              'La función es más rápida',
              'La función devuelve un valor; el procedimiento no',
              'El procedimiento no recibe parámetros',
              'No hay diferencia'
            ],
            correct: 1,
            explanation: 'Una función retorna un resultado; un procedimiento ejecuta acciones sin retornar valor.'
          }
        ]
      },
      {
        id: 'clases-objetos',
        title: 'Clases y objetos',
        summary: 'Fundamentos de la programación orientada a objetos.',
        content: `
          <section>
            <h3>Paradigma orientado a objetos</h3>
            <p>La <strong>POO</strong> modela problemas del mundo real mediante <strong>objetos</strong> que combinan datos (atributos) y comportamiento (métodos).</p>
            <div class="info-box">
              <strong>Clase:</strong> plantilla o molde que define atributos y métodos.<br>
              <strong>Objeto:</strong> instancia concreta de una clase.
            </div>
          </section>
          <section>
            <h3>Ejemplo: clase Estudiante</h3>
            <div class="code-block"><span class="kw">CLASE</span> Estudiante
  <span class="cm">// Atributos</span>
  <span class="kw">cadena</span> nombre
  <span class="kw">entero</span> edad
  <span class="kw">real</span> promedio

  <span class="cm">// Métodos</span>
  <span class="kw">METODO</span> aprobo()
    <span class="kw">RETORNAR</span> promedio >= <span class="num">60</span>
  <span class="kw">FIN_METODO</span>

  <span class="kw">METODO</span> mostrarInfo()
    ESCRIBIR nombre, <span class="str">" - Promedio: "</span>, promedio
  <span class="kw">FIN_METODO</span>
<span class="kw">FIN_CLASE</span>

<span class="cm">// Crear objetos (instancias)</span>
est1 ← <span class="kw">NUEVO</span> Estudiante(<span class="str">"Carlos"</span>, <span class="num">20</span>, <span class="num">85.5</span>)
est1.mostrarInfo()</div>
          </section>
          <section>
            <h3>Encapsulamiento</h3>
            <p>Los atributos se protegen y solo se acceden mediante métodos. Esto mantiene la integridad de los datos y oculta la implementación interna.</p>
          </section>
        `,
        exercises: [
          {
            type: 'multiple',
            question: '¿Qué es un objeto en POO?',
            options: [
              'Una función que no retorna valor',
              'Una instancia concreta de una clase',
              'Un tipo de dato primitivo',
              'Un diagrama de flujo'
            ],
            correct: 1,
            explanation: 'Un objeto es una instancia creada a partir de una clase, con valores reales en sus atributos.'
          },
          {
            type: 'multiple',
            question: '¿Qué combina un objeto?',
            options: [
              'Solo datos',
              'Solo métodos',
              'Atributos (datos) y métodos (comportamiento)',
              'Variables globales'
            ],
            correct: 2,
            explanation: 'Los objetos encapsulan datos (atributos) y las operaciones que pueden realizar (métodos).'
          }
        ]
      },
      {
        id: 'diseno-clases',
        title: 'Diseño de clases',
        summary: 'Identifica clases, atributos y métodos a partir de problemas reales.',
        content: `
          <section>
            <h3>Del problema al diseño</h3>
            <p>Siguiendo el enfoque del libro de referencia, el diseño de clases parte del <strong>análisis del problema real</strong>:</p>
            <ol>
              <li>Identificar los <strong>sustantivos</strong> del problema → candidatos a clases.</li>
              <li>Identificar los <strong>verbos</strong> → candidatos a métodos.</li>
              <li>Definir <strong>atributos</strong> (características de cada clase).</li>
              <li>Establecer <strong>relaciones</strong> entre clases.</li>
            </ol>
          </section>
          <section>
            <h3>Ejemplo: sistema de biblioteca</h3>
            <p><strong>Problema:</strong> gestionar préstamos de libros.</p>
            <ul>
              <li><strong>Clase Libro:</strong> título, autor, ISBN, disponible</li>
              <li><strong>Clase Usuario:</strong> nombre, identificación, librosPrestados</li>
              <li><strong>Clase Préstamo:</strong> fecha, libro, usuario</li>
            </ul>
            <div class="code-block"><span class="cm">// Métodos identificados</span>
Libro.prestar()
Libro.devolver()
Usuario.solicitarPrestamo(libro)
Prestamo.calcularMulta()</div>
          </section>
          <section>
            <h3>Estándares de diseño</h3>
            <ul>
              <li>Una clase = una responsabilidad clara.</li>
              <li>Nombres en singular: <code>Libro</code>, no <code>Libros</code>.</li>
              <li>Métodos con verbos: <code>calcularTotal()</code>, <code>validarEmail()</code>.</li>
              <li>Atributos privados, acceso mediante métodos públicos.</li>
            </ul>
          </section>
        `,
        exercises: [
          {
            type: 'multiple',
            question: 'En el análisis de un problema para diseñar clases, ¿qué representan los sustantivos?',
            options: [
              'Los métodos del sistema',
              'Los candidatos a clases',
              'Las estructuras de repetición',
              'Los operadores lógicos'
            ],
            correct: 1,
            explanation: 'Los sustantivos del enunciado suelen corresponder a entidades del mundo real que se modelan como clases.'
          },
          {
            type: 'multiple',
            question: '¿Cuál es una buena práctica al nombrar clases?',
            options: [
              'Usar nombres en plural: Estudiantes',
              'Usar nombres en singular: Estudiante',
              'Usar abreviaturas: Est',
              'Usar números: Clase1'
            ],
            correct: 1,
            explanation: 'Las clases representan un molde para crear instancias, por eso se nombran en singular.'
          }
        ]
      }
    ]
  }
];
