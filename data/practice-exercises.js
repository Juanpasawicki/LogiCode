/**
 * Ejercicios prácticos por lección — tú resuelves, con guía y pistas.
 * Enlazados al simulador con esqueleto (sin solución completa).
 */
const PRACTICE_BY_LESSON = {
  'intro-logica': [
    {
      id: 'p1',
      title: 'Tu primer algoritmo: saludo personalizado',
      problem: 'Crea un algoritmo que pregunte el nombre del usuario y lo salude con el mensaje "Hola, [nombre]".',
      guide: [
        'Identifica la ENTRADA: el nombre (texto).',
        'Identifica la SALIDA: un saludo en pantalla.',
        'Declara una variable Cadena para guardar el nombre.',
        'Usa imprimir() para pedir el dato, leer() para capturarlo.',
        'Usa imprimir() de nuevo para mostrar el saludo concatenado.'
      ],
      hints: [
        'La estructura básica es: Algoritmo → declarar variables → leer → imprimir resultado → FinAlgoritmo.',
        'Puedes imprimir texto y variable en una sola línea: imprimir("Hola, ", nombre)',
        'Prueba con tu propio nombre en los datos de entrada.'
      ],
      skeleton: `Algoritmo SaludoPersonalizado
Cadena nombre

// 1. Pide el nombre al usuario
// 2. Lee el nombre
// 3. Muestra el saludo

FinAlgoritmo`,
      sampleInputs: ['María'],
      expected: 'Debe mostrar: Hola, María'
    },
    {
      id: 'p2',
      title: 'Algoritmo finito: cuenta regresiva',
      problem: 'Muestra los números del 5 al 1, uno por línea (cuenta regresiva).',
      guide: [
        'Necesitas repetir una acción 5 veces → usa un ciclo Para.',
        'La variable del ciclo irá de 5 Hasta 1 con Decremento 1.',
        'En cada repetición, imprime el valor de la variable.'
      ],
      hints: [
        'Sintaxis: Para i = 5 Hasta 1 Decremento 1',
        'Dentro del ciclo solo necesitas una línea: imprimir(i)',
        'Si no funciona el decremento, prueba empezar en 1 y sumar hasta 5.'
      ],
      skeleton: `Algoritmo CuentaRegresiva
Entero i

// Usa un ciclo Para para ir de 5 a 1
// Imprime cada número

FinAlgoritmo`,
      sampleInputs: [],
      expected: 'Salida:\n5\n4\n3\n2\n1'
    }
  ],

  'pseudocodigo': [
    {
      id: 'p1',
      title: 'Edad el próximo año',
      problem: 'Lee la edad actual de una persona y muestra cuántos años tendrá el próximo año.',
      guide: [
        'Entrada: edad (entero). Salida: edad + 1.',
        'Declara Entero edad y Entero edadFutura (o calcula directo).',
        'Pide el dato, léelo, suma 1, muestra el resultado con un mensaje claro.'
      ],
      hints: [
        'La fórmula es: edadFutura = edad + 1',
        'Siempre pide el dato antes de leer: imprimir("Ingrese su edad:")',
        'Muestra algo como: "El próximo año tendrá: X"'
      ],
      skeleton: `Algoritmo EdadFutura
Entero edad

imprimir("Ingrese su edad:")
leer(edad)

// Calcula y muestra la edad del próximo año

FinAlgoritmo`,
      sampleInputs: ['17'],
      expected: 'Debe indicar que tendrá 18 años'
    },
    {
      id: 'p2',
      title: 'Cambio de monedas',
      problem: 'Lee un monto en pesos (entero) y calcula cuántas monedas de 500, 200 y 100 necesitas para dar el cambio exacto (usa división entera y MOD).',
      guide: [
        'Empieza con las monedas más grandes (500).',
        'cant500 = monto / 500 (división entera)',
        'monto = monto % 500 (lo que sobra)',
        'Repite para 200 y 100 con lo que queda.'
      ],
      hints: [
        'En pseudocódigo, / entre enteros da división entera si ambos son Entero.',
        'Después de cada tipo de moneda, actualiza el monto restante con MOD.',
        'Imprime cuántas de cada moneda usaste.'
      ],
      skeleton: `Algoritmo CambioMonedas
Entero monto, cant500, cant200, cant100

leer(monto)

// Calcula monedas de 500, luego 200, luego 100
// Imprime el resultado de cada una

FinAlgoritmo`,
      sampleInputs: ['870'],
      expected: '500:1, 200:1, 100:1 (u equivalente según tu lógica)'
    }
  ],

  'diagramas-flujo': [
    {
      id: 'p1',
      title: '¿Par o impar?',
      problem: 'Lee un número entero y dime si es par o impar.',
      guide: [
        'Un número es par si el resto de dividirlo entre 2 es 0.',
        'Usa el operador MOD (o %): numero MOD 2',
        'Si el resto es 0 → par, si no → impar.',
        'Dibuja mentalmente: Inicio → Leer → ¿MOD 2 = 0? → Sí/No → Fin.'
      ],
      hints: [
        'Estructura Si: Si (numero % 2 == 0) Entonces ... SiNo ... FinSi',
        'No olvides pedir el número antes de leerlo.',
        'Prueba con 4 (par) y con 7 (impar).'
      ],
      skeleton: `Algoritmo ParImpar
Entero numero

imprimir("Ingrese un número:")
leer(numero)

// Decide si es par o impar y muestra el mensaje

FinAlgoritmo`,
      sampleInputs: ['7'],
      expected: 'Debe decir que 7 es impar'
    },
    {
      id: 'p2',
      title: 'Celsius a Fahrenheit',
      problem: 'Convierte una temperatura de Celsius a Fahrenheit con la fórmula: F = (C × 9/5) + 32',
      guide: [
        'Entrada: grados Celsius (Real). Salida: Fahrenheit.',
        'Declara variables Real para C y F.',
        'Aplica la fórmula en una asignación.',
        'Muestra ambos valores para verificar.'
      ],
      hints: [
        'Usa Real, no Entero, para permitir decimales.',
        'fahrenheit = (celsius * 9 / 5) + 32',
        'Con 0°C deberías obtener 32°F.'
      ],
      skeleton: `Algoritmo CelsiusFahrenheit
Real celsius, fahrenheit

leer(celsius)

// Aplica la fórmula F = (C * 9/5) + 32
// Muestra el resultado

FinAlgoritmo`,
      sampleInputs: ['100'],
      expected: '100°C = 212°F'
    }
  ],

  'variables': [
    {
      id: 'p1',
      title: 'Perímetro y área del cuadrado',
      problem: 'Lee el lado de un cuadrado. Calcula e imprime su perímetro (4×lado) y su área (lado²).',
      guide: [
        'Una sola entrada: lado (Real o Entero).',
        'Dos salidas: perímetro y área.',
        'perimetro = 4 * lado',
        'area = lado ^ 2 (o lado * lado)'
      ],
      hints: [
        'Puedes usar dos variables para los resultados o imprimir directo.',
        'Etiqueta cada resultado: "Perímetro:" y "Área:"',
        'Si lado = 5, perímetro=20 y área=25.'
      ],
      skeleton: `Algoritmo Cuadrado
Real lado, perimetro, area

leer(lado)

// Calcula perímetro y área
// Imprime ambos

FinAlgoritmo`,
      sampleInputs: ['5'],
      expected: 'Perímetro: 20, Área: 25'
    },
    {
      id: 'p2',
      title: 'Intercambiar dos valores',
      problem: 'Lee dos números A y B, intercámbialos y muestra los nuevos valores.',
      guide: [
        'Truco clásico: usa una variable temporal.',
        'temp = A → A = B → B = temp',
        'Imprime A y B después del intercambio.'
      ],
      hints: [
        'Sin variable temp no puedes intercambiar en solo 2 pasos.',
        'Lee ambos valores primero, luego intercambia, luego imprime.',
        'Entrada 3 y 7 → salida 7 y 3.'
      ],
      skeleton: `Algoritmo Intercambio
Entero a, b, temp

leer(a)
leer(b)

// Intercambia a y b usando temp
// Muestra los nuevos valores

FinAlgoritmo`,
      sampleInputs: ['3', '7'],
      expected: 'Debe mostrar a=7 y b=3'
    }
  ],

  'operadores': [
    {
      id: 'p1',
      title: '¿Múltiplo de 5?',
      problem: 'Lee un número y determina si es múltiplo de 5 (sin usar división con decimales).',
      guide: [
        'Un número es múltiplo de 5 si numero MOD 5 == 0.',
        'Usa Si para mostrar "Es múltiplo" o "No es múltiplo".'
      ],
      hints: [
        'Prueba con 25 (sí) y 23 (no).',
        'MOD devuelve el resto de la división entera.',
        'Combina operador relacional == con MOD.'
      ],
      skeleton: `Algoritmo Multiplo5
Entero numero

leer(numero)

// Verifica si es múltiplo de 5

FinAlgoritmo`,
      sampleInputs: ['25'],
      expected: 'Debe decir que 25 es múltiplo de 5'
    },
    {
      id: 'p2',
      title: 'Expresión compuesta',
      problem: 'Lee a, b y c. Calcula: resultado = (a + b) * c - (a MOD b). Muestra el resultado.',
      guide: [
        'Respeta la precedencia: paréntesis primero, luego *, luego -.',
        'Lee los tres valores en orden.',
        'Una sola asignación con la fórmula completa.'
      ],
      hints: [
        'Con a=10, b=3, c=2: (10+3)*2 - (10%3) = 26 - 1 = 25',
        'Si b es 0, MOD falla — asume b ≠ 0.',
        'Usa Real si quieres decimales en el resultado.'
      ],
      skeleton: `Algoritmo Expresion
Entero a, b, c, resultado

leer(a)
leer(b)
leer(c)

// Calcula (a + b) * c - (a MOD b)
// Imprime resultado

FinAlgoritmo`,
      sampleInputs: ['10', '3', '2'],
      expected: 'Resultado: 25'
    }
  ],

  'secuencia': [
    {
      id: 'p1',
      title: 'Velocidad media',
      problem: 'Lee distancia (km) y tiempo (horas). Calcula velocidad = distancia / tiempo.',
      guide: [
        'Tres etapas: entrada (x, t), proceso (v = x/t), salida (v).',
        'Usa Real para permitir decimales.',
        'Valida mentalmente: 100 km en 2 h = 50 km/h.'
      ],
      hints: [
        'Este es el ejemplo clásico del libro — estructura secuencial pura.',
        'Pide cada dato con un mensaje antes de cada leer().',
        'Imprime la velocidad con su unidad.'
      ],
      skeleton: `Algoritmo Velocidad
Real distancia, tiempo, velocidad

// Lee distancia y tiempo
// Calcula velocidad
// Muestra resultado

FinAlgoritmo`,
      sampleInputs: ['100', '2'],
      expected: 'Velocidad: 50 km/h'
    },
    {
      id: 'p2',
      title: 'Precio con IVA',
      problem: 'Lee el precio base de un producto. Calcula y muestra el IVA (19%) y el precio final.',
      guide: [
        'iva = precio * 0.19',
        'final = precio + iva (o precio * 1.19)',
        'Muestra las tres cantidades: base, IVA y total.'
      ],
      hints: [
        'Usa Real para los cálculos.',
        'Con precio 100000 → IVA 19000 → total 119000.',
        'Secuencia: leer → calcular iva → calcular total → imprimir.'
      ],
      skeleton: `Algoritmo PrecioIVA
Real precio, iva, total

leer(precio)

// Calcula IVA al 19% y precio final
// Imprime todo

FinAlgoritmo`,
      sampleInputs: ['100000'],
      expected: 'IVA: 19000, Total: 119000'
    }
  ],

  'seleccion': [
    {
      id: 'p1',
      title: 'Mayor de dos números',
      problem: 'Lee dos números y muestra cuál es el mayor (o si son iguales).',
      guide: [
        'Compara con Si anidado o Si-SiNo encadenado.',
        'Caso 1: a > b → mayor es a',
        'Caso 2: b > a → mayor es b',
        'Caso 3: son iguales → mensaje especial'
      ],
      hints: [
        'Puedes usar Si(a > b) ... SiNo Si(b > a) ... SiNo ...',
        'No olvides el caso de igualdad.',
        'Prueba: 8 y 3 → mayor 8; 5 y 5 → iguales.'
      ],
      skeleton: `Algoritmo MayorDeDos
Entero a, b

leer(a)
leer(b)

// Compara y muestra el mayor (o si son iguales)

FinAlgoritmo`,
      sampleInputs: ['8', '3'],
      expected: 'El mayor es 8'
    },
    {
      id: 'p2',
      title: 'Descuento en tienda',
      problem: 'Si la compra supera $80.000, aplica 10% de descuento. Si no, no hay descuento. Muestra total a pagar.',
      guide: [
        'Entrada: monto de compra.',
        'Si monto > 80000 → descuento = monto * 0.10, total = monto - descuento.',
        'SiNo → total = monto (sin descuento).',
        'Siempre muestra cuánto paga el cliente.'
      ],
      hints: [
        'Usa Si (monto > 80000) Entonces ... SiNo ... FinSi',
        'Prueba con 100000 (descuento) y 50000 (sin descuento).',
        'Muestra si hubo o no descuento.'
      ],
      skeleton: `Algoritmo DescuentoTienda
Real monto, descuento, total

leer(monto)

// Aplica descuento solo si monto > 80000
// Muestra el total a pagar

FinAlgoritmo`,
      sampleInputs: ['100000'],
      expected: 'Total con 10% descuento: 90000'
    },
    {
      id: 'p3',
      title: 'Calificación con letra',
      problem: 'Lee una nota (0-5). Muestra: ≥4.5 "Excelente", ≥3.5 "Aprobado", ≥2.0 "Habilitar", sino "Reprobado".',
      guide: [
        'Usa decisiones anidadas de mayor a menor.',
        'Primero evalúa >= 4.5, luego >= 3.5, etc.',
        'Cada rango excluye los anteriores por el orden del Si anidado.'
      ],
      hints: [
        'Orden importa: evalúa el umbral más alto primero.',
        'nota 4.0 → Aprobado; nota 1.5 → Reprobado.',
        'Puedes usar Si ... SiNo Si ... SiNo ... FinSi'
      ],
      skeleton: `Algoritmo Calificacion
Real nota

leer(nota)

// Clasifica la nota en Excelente / Aprobado / Habilitar / Reprobado

FinAlgoritmo`,
      sampleInputs: ['4.2'],
      expected: 'Mensaje: Aprobado'
    }
  ],

  'iteracion': [
    {
      id: 'p1',
      title: 'Tabla de multiplicar',
      problem: 'Lee un número n y muestra su tabla de multiplicar del 1 al 10.',
      guide: [
        'Usa Para i = 1 Hasta 10.',
        'En cada iteración imprime: i, " x ", n, " = ", i*n',
        'No necesitas acumulador, solo imprimir.'
      ],
      hints: [
        'Para i = 1 Hasta 10 Incremento 1',
        'Con n=5 la primera línea es: 1 x 5 = 5',
        'El ciclo hace el trabajo repetitivo por ti.'
      ],
      skeleton: `Algoritmo TablaMultiplicar
Entero n, i

leer(n)

// Ciclo Para del 1 al 10
// Imprime cada línea de la tabla

FinAlgoritmo`,
      sampleInputs: ['5'],
      expected: '10 líneas: 1x5=5 ... 10x5=50'
    },
    {
      id: 'p2',
      title: 'Suma del 1 al n',
      problem: 'Lee n y calcula la suma 1 + 2 + 3 + ... + n usando un ciclo.',
      guide: [
        'Declara un acumulador: suma = 0',
        'Ciclo Para i = 1 Hasta n: suma = suma + i',
        'Después del ciclo imprime suma.'
      ],
      hints: [
        'El acumulador empieza en 0 y va sumando cada i.',
        'Con n=5 la suma es 15.',
        'Patrón: contador (i) + acumulador (suma).'
      ],
      skeleton: `Algoritmo SumaHastaN
Entero n, i, suma

leer(n)
suma = 0

// Ciclo que suma cada número del 1 al n
// Imprime el resultado

FinAlgoritmo`,
      sampleInputs: ['5'],
      expected: 'Suma: 15'
    },
    {
      id: 'p3',
      title: 'Contar múltiplos de 3',
      problem: 'Cuenta cuántos múltiplos de 3 hay entre 1 y 50 (sin listarlos todos, solo el total).',
      guide: [
        'Usa contador = 0 y Para i = 1 Hasta 50.',
        'Si (i % 3 == 0) entonces contador = contador + 1',
        'Al final imprime contador.'
      ],
      hints: [
        'No imprimas cada múltiplo, solo cuenta.',
        'Respuesta correcta: 16 múltiplos.',
        'Contador + condición dentro del ciclo = patrón muy común.'
      ],
      skeleton: `Algoritmo ContarMultiplos3
Entero i, contador

contador = 0

// Recorre del 1 al 50
// Cuenta los múltiplos de 3
// Imprime el total

FinAlgoritmo`,
      sampleInputs: [],
      expected: 'Total: 16 múltiplos de 3'
    }
  ],

  'arreglos': [
    {
      id: 'p1',
      title: 'Promedio de n números',
      problem: 'Lee cuántos números hay (n), luego lee n números en un ciclo y calcula el promedio.',
      guide: [
        'Primero lee n (cantidad).',
        'suma = 0. Para i = 1 Hasta n: leer numero, suma = suma + numero.',
        'promedio = suma / n. Imprime promedio.',
        'Esto simula un arreglo sin usar índices — igual lógica.'
      ],
      hints: [
        'El ciclo controla cuántas veces lees.',
        'Con n=3 y valores 10, 20, 30 → promedio 20.',
        'Cada leer() dentro del ciclo es como llenar una celda del vector.'
      ],
      skeleton: `Algoritmo PromedioN
Entero n, i
Real numero, suma, promedio

leer(n)
suma = 0

// Lee n números en un ciclo y acumula la suma
// Calcula y muestra el promedio

FinAlgoritmo`,
      sampleInputs: ['3', '10', '20', '30'],
      expected: 'Promedio: 20'
    },
    {
      id: 'p2',
      title: 'Mayor de n números',
      problem: 'Lee n y luego n números. Encuentra y muestra el mayor.',
      guide: [
        'Lee n. Inicializa mayor con un valor muy bajo (o lee el primero antes del ciclo).',
        'En cada lectura: Si numero > mayor Entonces mayor = numero.',
        'Imprime mayor al final.'
      ],
      hints: [
        'Puedes empezar mayor = -999999 o leer el primer número como mayor inicial.',
        'Solo necesitas una variable mayor, no guardar todos los números.',
        'Prueba: n=4, valores 3, 9, 1, 7 → mayor 9.'
      ],
      skeleton: `Algoritmo MayorDeN
Entero n, i, numero, mayor

leer(n)

// Lee n números y guarda el mayor
// Imprime el mayor encontrado

FinAlgoritmo`,
      sampleInputs: ['4', '3', '9', '1', '7'],
      expected: 'Mayor: 9'
    }
  ],

  'matrices': [
    {
      id: 'p1',
      title: 'Tabla de multiplicar (matriz conceptual)',
      problem: 'Imprime una tabla 5×5: fila i, columna j muestra i × j (usa dos ciclos Para anidados).',
      guide: [
        'Ciclo externo: fila i de 1 a 5.',
        'Ciclo interno: columna j de 1 a 5.',
        'Dentro: imprimir(i * j) o imprimir(i, "x", j, "=", i*j).',
        'Esto recorre una matriz fila por fila.'
      ],
      hints: [
        'Para i = 1 Hasta 5 ... Para j = 1 Hasta 5 ... FinPara ... FinPara',
        'La primera fila: 1, 2, 3, 4, 5 (1×1, 1×2, ...)',
        'Ciclos anidados = recorrer matrices.'
      ],
      skeleton: `Algoritmo Tabla5x5
Entero i, j

// Ciclo externo: filas (i)
  // Ciclo interno: columnas (j)
    // Imprime i * j

FinAlgoritmo`,
      sampleInputs: [],
      expected: '25 valores (tabla del 1 al 5 en cada dimensión)'
    },
    {
      id: 'p2',
      title: 'Suma de una "fila"',
      problem: 'Lee 4 números (simula una fila de matriz) y muestra su suma.',
      guide: [
        'Sin matriz real: lee 4 valores en un ciclo Para i = 1 Hasta 4.',
        'Acumula en suma. Imprime suma.',
        'Conceptualmente es la fila 1 de una matriz 1×4.'
      ],
      hints: [
        'Mismo patrón que promedio de n números pero n fijo = 4.',
        'Prueba: 2, 4, 6, 8 → suma 20.',
        'Imagina que cada lectura es matriz[1][i].'
      ],
      skeleton: `Algoritmo SumaFila
Entero i
Real numero, suma

suma = 0

// Lee 4 números (una fila) y suma
// Muestra el total

FinAlgoritmo`,
      sampleInputs: ['2', '4', '6', '8'],
      expected: 'Suma de la fila: 20'
    }
  ],

  'funciones': [
    {
      id: 'p1',
      title: 'Módulo de cálculo de área',
      problem: 'Lee base y altura de un rectángulo. Calcula el área (piensa en ello como función calcularArea). Escribe el cálculo en un bloque comentado como "función".',
      guide: [
        'Aunque el simulador simplifica, piensa: función recibe base y altura, retorna base*altura.',
        'En el algoritmo principal: lee datos, "llama" al cálculo (area = base * altura), imprime.',
        'Comenta un bloque // Funcion calcularArea para practicar la mentalidad modular.'
      ],
      hints: [
        'Separación mental: entrada → proceso (función) → salida.',
        'area = base * altura es tu "función" por ahora.',
        'Con base 6 y altura 4 → área 24.'
      ],
      skeleton: `Algoritmo AreaRectangulo
Real base, altura, area

leer(base)
leer(altura)

// Funcion calcularArea(base, altura)
//   Retornar base * altura
// FinFuncion

// Llama a la lógica de la función:
// area = calcularArea(base, altura)

// Imprime el área

FinAlgoritmo`,
      sampleInputs: ['6', '4'],
      expected: 'Área: 24'
    },
    {
      id: 'p2',
      title: 'Validar nota (procedimiento)',
      problem: 'Lee una nota entre 0 y 5. Si está fuera de rango, muestra error; si no, muestra "Nota válida".',
      guide: [
        'Procedimiento mental validarNota(nota): verifica rango.',
        'Si nota < 0 O nota > 5 → error.',
        'SiNo → válida.',
        'Practica separar la validación del resto del programa.'
      ],
      hints: [
        'Condición: nota >= 0 Y nota <= 5 para ser válida.',
        'Prueba con -1 (error), 3.5 (válida), 6 (error).',
        'Usa operador O para detectar fuera de rango.'
      ],
      skeleton: `Algoritmo ValidarNota
Real nota

leer(nota)

// Procedimiento validarNota:
//   Si está entre 0 y 5 → "Nota válida"
//   SiNo → "Nota inválida"

FinAlgoritmo`,
      sampleInputs: ['3.5'],
      expected: 'Nota válida'
    }
  ],

  'clases-objetos': [
    {
      id: 'p1',
      title: 'Simular un objeto Estudiante',
      problem: 'Lee nombre, edad y promedio de un estudiante. Muestra si aprobó (promedio ≥ 3.5). Usa variables que representen los atributos.',
      guide: [
        'Atributos: nombre (Cadena), edad (Entero), promedio (Real).',
        'Método mental aprobo(): retorna promedio >= 3.5.',
        'Lee los 3 atributos, evalúa aprobo(), imprime resultado con el nombre.'
      ],
      hints: [
        'Piensa en las variables como propiedades del objeto.',
        'imprimir(nombre, " ", mensajeAprobacion)',
        'Promedio 4.0 → aprobó; 2.8 → no aprobó.'
      ],
      skeleton: `Algoritmo Estudiante
Cadena nombre
Entero edad
Real promedio

// Lee los atributos del "objeto"
leer(nombre)
leer(edad)
leer(promedio)

// Método aprobo(): Si promedio >= 3.5
// Muestra si el estudiante aprobó

FinAlgoritmo`,
      sampleInputs: ['Carlos', '20', '4.2'],
      expected: 'Carlos aprobó'
    },
    {
      id: 'p2',
      title: 'Cuenta bancaria simple',
      problem: 'Lee saldo inicial y un monto a retirar. Si hay fondos suficientes, resta y muestra nuevo saldo; si no, muestra "Fondos insuficientes".',
      guide: [
        'Atributos: saldo. Método: retirar(monto).',
        'Si monto <= saldo → saldo = saldo - monto, muestra nuevo saldo.',
        'SiNo → mensaje de error, saldo no cambia.'
      ],
      hints: [
        'Es POO simplificado: datos + comportamiento (retirar).',
        'Saldo 1000, retiro 300 → nuevo saldo 700.',
        'Saldo 100, retiro 500 → fondos insuficientes.'
      ],
      skeleton: `Algoritmo CuentaBancaria
Real saldo, monto

leer(saldo)
leer(monto)

// Método retirar(monto):
//   Verifica fondos y actualiza saldo o muestra error

FinAlgoritmo`,
      sampleInputs: ['1000', '300'],
      expected: 'Nuevo saldo: 700'
    }
  ],

  'diseno-clases': [
    {
      id: 'p1',
      title: 'Diseña la clase Libro',
      problem: 'Antes de codificar: identifica atributos y métodos. Luego lee título, autor y páginas; muestra si es libro largo (>300 páginas).',
      guide: [
        'Paso 1 (diseño): sustantivos → titulo, autor, paginas. Verbos → esLargo(), mostrarInfo().',
        'Paso 2 (algoritmo): lee los 3 atributos.',
        'Paso 3: Si paginas > 300 → "Libro largo", sino → "Libro normal".'
      ],
      hints: [
        'Escribe en comentarios los atributos y métodos que identificaste.',
        'El diseño va antes del código — analiza el problema primero.',
        '350 páginas → largo; 150 → normal.'
      ],
      skeleton: `Algoritmo Libro
Cadena titulo, autor
Entero paginas

// DISEÑO (comenta aquí):
// Atributos: titulo, autor, paginas
// Métodos: esLargo(), mostrarInfo()

leer(titulo)
leer(autor)
leer(paginas)

// Implementa esLargo(): paginas > 300
// Muestra el resultado

FinAlgoritmo`,
      sampleInputs: ['Lógica', 'Herrera', '350'],
      expected: 'Libro largo'
    },
    {
      id: 'p2',
      title: 'Sistema de biblioteca — préstamo',
      problem: 'Lee si un libro está disponible (1=sí, 0=no). Si está disponible, muestra "Préstamo autorizado"; si no, "No disponible".',
      guide: [
        'Clases involucradas: Libro (disponible), Usuario.',
        'Método Libro.prestar(): solo funciona si disponible == 1.',
        'Diseña en comentarios, luego implementa la decisión.'
      ],
      hints: [
        'Un solo atributo disponible basta para este ejercicio.',
        'Entrada 1 → préstamo autorizado.',
        'Piensa qué pasaría después: disponible pasaría a 0.'
      ],
      skeleton: `Algoritmo PrestamoLibro
Entero disponible

// DISEÑO: Clase Libro con atributo disponible
//         Método prestar() verifica disponibilidad

leer(disponible)

// Si disponible, autoriza préstamo
// SiNo, muestra no disponible

FinAlgoritmo`,
      sampleInputs: ['1'],
      expected: 'Préstamo autorizado'
    }
  ]
};
