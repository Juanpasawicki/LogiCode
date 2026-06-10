/**
 * Ejercicios propuestos del libro:
 * Introducción a la Lógica de Programación
 * Jorge O. Herrera M., Julián E. Gutiérrez P., Robinson Pulgarín G.
 */
const BOOK_META = {
  title: 'Introducción a la Lógica de Programación',
  authors: 'Jorge O. Herrera M., Julián E. Gutiérrez P., Robinson Pulgarín G.',
  authorsShort: 'Herrera M., Gutiérrez P., Pulgarín G.',
  year: '2017/2020',
  note: 'Ejercicios extraídos del libro de referencia. Algunas secciones del PDF local están dañadas; los ejercicios del Cap. 2 se incluyen según el contenido del capítulo.'
};

const ATTRIBUTION = {
  appName: 'LogiCode',
  creator: 'Juanpasawicki',
  purpose: 'Proyecto educativo independiente, creado para que todas las personas puedan aprender lógica de programación de forma gratuita y práctica.',
  bookCredit: 'Los ejercicios del libro, la estructura temática y los conceptos de pseudocódigo provienen de la obra Introducción a la Lógica de Programación. Todos los derechos de esa publicación pertenecen a sus autores y editoriales correspondientes.',
  originalContent: 'Las lecciones interactivas, las prácticas por lección y el banco de algoritmos son contenido complementario original de esta aplicación, inspirado en los temas del libro.',
  disclaimer: 'LogiCode no está afiliado, respaldado ni patrocinado por los autores ni por la editorial del libro. Se incluye esta atribución con reconocimiento y agradecimiento a quienes compartieron ese conocimiento.'
};

const BOOK_EXERCISES = [
  {
    id: 'cap1',
    title: 'Capítulo 1 — Fundamentos',
    page: 73,
    exercises: [
      {
        id: '1-1', number: 1, type: 'teoria',
        title: 'Identificación de variables y tipos',
        description: `Complete la Tabla 1.16. Para cada dato indique identificador y tipo de dato:

• Placa de un vehículo
• Tamaño del motor en centímetros cúbicos
• Número de pasajeros
• Número de baños de una casa
• Área de la casa en metros
• Valor del alquiler
• Valor del descuento de un producto
• ¿Encendió el computador?
• Número de matrícula del estudiante
• Valor de la matrícula del estudiante`
      },
      {
        id: '1-2', number: 2, type: 'teoria',
        title: 'Validez de identificadores',
        description: `Indique si cada identificador es válido y justifique (Tabla 1.17):

medico, @especialidad, generoAspirante, "Valor a pagar", salarioEmpleado1, #CEDULA, Titulo Libro, títuloLibro, Años de Experiencia, esCasado`
      },
      {
        id: '1-3', number: 3, type: 'teoria',
        title: 'Precedencia de operadores',
        description: `Describa el orden de ejecución de:

a) resultado = PI * radio^2
b) resultado = 2 * a + 3 * b - c
c) resultado = 2 * ( a + 3 ) * b - c
d) resultado = a^2 - b * 36^(1/2)
e) resultado = ( a + b ) / ( 2 * c + 1 - a % 3)`
      },
      {
        id: '1-4', number: 4, type: 'teoria',
        title: 'Evaluación de expresiones',
        description: `Resuelva paso a paso:

a) 3 * (3 + 4) * (5 - 2)
b) (3^(2 + 3) - 1) ^ (1.0/2.0)
c) 5.0/2.0 * 3 + 4 ^ 3.0 * 2/(5.0 + 2.0) - 2
d) 10 * (7 + 7) % (9 + 2)/10
e) 3 % 2 - (2 + 2) / 1 * (3 + 1) + 3
f) (5 + 8*2 - 3.0/5.0)/(4*1 - 2.0/3.0 + 8/2)
g) (4 + 8)/(4 /(1 + 1)) - (3 + 2 + 1)/(5^2+4)`
      },
      {
        id: '1-5', number: 5, type: 'teoria',
        title: 'Declaración y asignación',
        description: `Con variables a, b, c, d de tipo Real (valores entre 10 y 20):

a) Declárelas
b) Asigne valores
c) Evalúe: a = 3*b+d%5; d = (4*a/2-3*c)/(4+b%3); c = 3*b^2-5*c/3; etc.`
      },
      {
        id: '1-6', number: 6, type: 'teoria',
        title: 'Expresiones lógicas',
        description: `Con a=5, b=4, c=7, d=3 determine si son verdaderas o falsas las expresiones a) a j) del ejercicio 6 (pág. 76).`
      }
    ]
  },
  {
    id: 'cap2',
    title: 'Capítulo 2 — Estructura secuencial',
    page: 115,
    exercises: [
      {
        id: '2-1', number: 1, type: 'algoritmo',
        title: 'Calcular velocidad',
        description: 'Diseñe un algoritmo que lea distancia (km) y tiempo (horas) y calcule v = x/t.',
        starterCode: 'velocidad',
        sampleInputs: ['100', '2']
      },
      {
        id: '2-2', number: 2, type: 'algoritmo',
        title: 'Suma de dos números',
        description: 'Crear un algoritmo que lea dos números enteros y muestre su suma.',
        starterCode: 'suma',
        sampleInputs: ['15', '27']
      },
      {
        id: '2-3', number: 3, type: 'algoritmo',
        title: 'Área de un rectángulo',
        description: 'Leer base y altura, calcular e imprimir el área del rectángulo.',
        starterCode: `Algoritmo AreaRectangulo
Real base, altura, area
imprimir("Base:")
leer(base)
imprimir("Altura:")
leer(altura)
area = base * altura
imprimir("Área: ", area)
FinAlgoritmo`,
        sampleInputs: ['5', '8']
      },
      {
        id: '2-4', number: 4, type: 'algoritmo',
        title: 'Conversión km a metros',
        description: 'Leer kilómetros y convertir a metros (multiplicar por 1000).',
        starterCode: `Algoritmo KmAMetros
Real km, metros
imprimir("Kilómetros:")
leer(km)
metros = km * 1000
imprimir(km, " km = ", metros, " metros")
FinAlgoritmo`,
        sampleInputs: ['3.5']
      },
      {
        id: '2-5', number: 5, type: 'algoritmo',
        title: 'Promedio de tres notas',
        description: 'Leer tres notas (0.0 a 5.0) y calcular el promedio.',
        starterCode: `Algoritmo Promedio
Real n1, n2, n3, promedio
leer(n1)
leer(n2)
leer(n3)
promedio = (n1 + n2 + n3) / 3
imprimir("Promedio: ", promedio)
FinAlgoritmo`,
        sampleInputs: ['4.5', '3.8', '4.0']
      },
      {
        id: '2-6', number: 6, type: 'teoria',
        title: 'Prueba de escritorio',
        description: 'Realice la prueba de escritorio del algoritmo de velocidad (Ejemplo del libro) con x=50 y t=2.'
      }
    ]
  },
  {
    id: 'cap3',
    title: 'Capítulo 3 — Estructuras de decisión',
    page: 174,
    exercises: [
      { id: '3-1', number: 1, type: 'algoritmo', title: 'Descuento del 5%',
        description: 'Crear un algoritmo que indique el valor del descuento de un artículo (5% solo si el costo supera $150.000).',
        starterCode: 'descuento', sampleInputs: ['200000'] },
      { id: '3-2', number: 2, type: 'algoritmo', title: 'Llave del tanque de agua',
        description: 'Indicar si la llave debe abrirse o cerrarse. El tanque debe estar entre 250 y 450 litros.',
        starterCode: `Algoritmo TanqueAgua
Entero litros
imprimir("Litros actuales:")
leer(litros)
Si (litros < 250) Entonces
  imprimir("Abrir llave")
SiNo
  Si (litros > 450) Entonces
    imprimir("Cerrar llave")
  SiNo
    imprimir("Nivel correcto")
  FinSi
FinSi
FinAlgoritmo`, sampleInputs: ['200'] },
      { id: '3-3', number: 3, type: 'algoritmo', title: 'Número primo (0-20)',
        description: 'Dado un entero entre 0 y 20, diga si es primo. Primos: 2, 3, 5, 7, 11, 13, 17, 19.',
        starterCode: `Algoritmo EsPrimo
Entero n
leer(n)
Si (n == 2 O n == 3 O n == 5 O n == 7 O n == 11 O n == 13 O n == 17 O n == 19) Entonces
  imprimir("Es primo")
SiNo
  imprimir("No es primo")
FinSi
FinAlgoritmo`, sampleInputs: ['7'] },
      { id: '3-4', number: 4, type: 'algoritmo', title: 'Ganó o perdió el curso',
        description: 'Con 5 trabajos (notas 0.0-5.0, igual peso), indicar si ganó (nota > 3.5) o perdió.',
        starterCode: `Algoritmo Curso
Real n1, n2, n3, n4, n5, definitiva
leer(n1)
leer(n2)
leer(n3)
leer(n4)
leer(n5)
definitiva = (n1 + n2 + n3 + n4 + n5) / 5
Si (definitiva > 3.5) Entonces
  imprimir("Ganó el curso: ", definitiva)
SiNo
  imprimir("Perdió el curso: ", definitiva)
FinSi
FinAlgoritmo`, sampleInputs: ['4', '3.8', '4.2', '3.5', '4'] },
      { id: '3-5', number: 5, type: 'algoritmo', title: 'Ecuación cuadrática',
        description: 'Indicar si ax²+bx+c=0 tiene solución (discriminante b²-4ac >= 0 y a ≠ 0).',
        starterCode: `Algoritmo Cuadratica
Real a, b, c, discriminante
leer(a)
leer(b)
leer(c)
discriminante = b^2 - 4*a*c
Si (a != 0 Y discriminante >= 0) Entonces
  imprimir("Tiene solución")
SiNo
  imprimir("No tiene solución")
FinSi
FinAlgoritmo`, sampleInputs: ['1', '-5', '6'] },
      { id: '3-6', number: 6, type: 'algoritmo', title: 'Dentro del intervalo',
        description: 'Indicar si x está dentro de [minimoValor, maximoValor).',
        starterCode: `Algoritmo Intervalo
Entero x, minimo, maximo
leer(x)
leer(minimo)
leer(maximo)
Si (x >= minimo Y x < maximo) Entonces
  imprimir("Dentro del intervalo")
SiNo
  imprimir("Fuera del intervalo")
FinSi
FinAlgoritmo`, sampleInputs: ['5', '3', '7'] },
      { id: '3-7', number: 7, type: 'algoritmo', title: 'Tres intervalos',
        description: 'Indicar si x está dentro de tres intervalos abierto-abierto no interceptados.' },
      { id: '3-8', number: 8, type: 'algoritmo', title: 'Descuento por tipo',
        description: 'Descuento según tipo: Textil 0%, Electrodoméstico 3.7%, Cocina 4.2%, Videojuego 7.8%.' },
      { id: '3-9', number: 9, type: 'algoritmo', title: 'Descuento por rango',
        description: 'Descuento: $0-$100k: 0%; $100k-$225k: 1.5%; $225k-$375k: 3.8%; más de $375k: 10.3%.' }
    ]
  },
  {
    id: 'cap4',
    title: 'Capítulo 4 — Estructuras de repetición',
    page: 316,
    exercises: [
      { id: '4-1', number: 1, type: 'teoria', title: 'Preguntas conceptuales',
        description: `Responda:
a) ¿Cuáles son las estructuras repetitivas condicionadas al comienzo?
b) ¿Cuáles pueden no ejecutarse y por qué?
c) ¿Cuáles se ejecutan al menos una vez?
d) ¿A qué se le llama iteración?
e) Dos situaciones con variable bandera
f) Diferencia entre acumulador y contador
g) ¿Qué pasa si no hay modificador en Mientras?
h) ¿Por qué en Para no está explícito el modificador?
i) ¿Qué ciclo es ideal para validar entrada?
j) Diagrama de flujo para contar ovejas` },
      { id: '4-2', number: 2, type: 'teoria', title: 'Reescribir con otro ciclo',
        description: 'Tome cada ejemplo del capítulo y reescríbalo con una estructura de ciclo diferente.' },
      { id: '4-3', number: 3, type: 'teoria', title: 'Instrucciones Para',
        description: `Represente con Para:
a) x de 4 a 40, incremento 1
b) x de 100 a 20, decremento 1
c) x de 10 a 200, incremento 5` },
      { id: '4-4', number: 4, type: 'algoritmo', title: 'Suma de pares e impares',
        description: 'Dado [M, N], hallar sumatoria de pares e impares del intervalo.' },
      { id: '4-5', number: 5, type: 'algoritmo', title: 'Mayores y menores de edad',
        description: 'Población máx. 500 habitantes. Contar mayores y menores de edad.' },
      { id: '4-6', number: 6, type: 'algoritmo', title: 'Múltiplos de 3',
        description: 'Generar múltiplos de 3 entre 6 y n (n > 6).',
        starterCode: `Algoritmo Multiplos3
Entero n, i
leer(n)
Para i = 6 Hasta n Incremento 3
  Si (i % 3 == 0) Entonces
    imprimir(i)
  FinSi
FinPara
FinAlgoritmo`, sampleInputs: ['21'] },
      { id: '4-7', number: 7, type: 'algoritmo', title: 'Conjetura de Collatz',
        description: 'Solicitar n y aplicar: si par n/2, si impar 3n+1, hasta llegar a 1.' },
      { id: '4-8', number: 8, type: 'algoritmo', title: 'Número invertido',
        description: 'Leer entero positivo y generar el número con cifras invertidas (5432 → 2345).' },
      { id: '4-9', number: 9, type: 'algoritmo', title: 'Factorial por sumas',
        description: 'Dado n ≤ 50, calcular factorial mediante sumas sucesivas.' },
      { id: '4-10', number: 10, type: 'algoritmo', title: 'Control de caja',
        description: 'Registrar ingresos/egresos del restaurante. Alerta si saldo ≤ 15% de la base.' },
      { id: '4-11', number: 11, type: 'algoritmo', title: 'Números perfectos',
        description: 'Leer n e imprimir números perfectos entre 1 y n.' },
      { id: '4-12', number: 12, type: 'algoritmo', title: 'Temporizador',
        description: 'Simular temporizador (máx. 1 hora). Alerta a 5 min del fin.' },
      { id: '4-13', number: 13, type: 'algoritmo', title: 'Abecedario descendente',
        description: 'Generar e imprimir letras del abecedario en patrón descendente (Z..A, Y..A, etc.).' },
      { id: '4-14', number: 14, type: 'algoritmo', title: 'Caminata terapéutica',
        description: 'Registrar tiempos de caminata 3 días/semana por 4 meses. Promedios y min/max.' },
      { id: '4-15', number: 15, type: 'algoritmo', title: 'Múltiplos de 3 descendentes',
        description: 'Imprimir 10 múltiplos de 3 descendentes desde n (ajustar al múltiplo superior si necesario).' },
      { id: '4-16', number: 16, type: 'algoritmo', title: 'Censo de empleados',
        description: 'Censo por sucursales: porcentajes de estudio, mujeres con posgrado, etc.' },
      { id: '4-17', number: 17, type: 'teoria', title: 'Prueba de escritorio',
        description: 'Realice prueba de escritorio de los algoritmos Prueba1, Prueba2 y Prueba3 (pág. 321).' }
    ]
  },
  {
    id: 'cap5',
    title: 'Capítulo 5 — Procedimientos y funciones',
    page: 347,
    exercises: [
      { id: '5-1', number: 1, type: 'algoritmo', title: 'Hola mundo con procedimiento',
        description: 'Diseñe con procedimientos que muestre "Hola mundo".',
        starterCode: `Algoritmo Mensaje
imprimirSaludo()
FinAlgoritmo

Procedimiento imprimirSaludo()
  imprimir("Hola mundo")
FinProcedimiento` },
      { id: '5-2', number: 2, type: 'algoritmo', title: 'Saludo con parámetros',
        description: 'Ingresar dos nombres y saludar cada uno con un procedimiento.',
        starterCode: `Algoritmo Mensaje2
Cadena nombre1, nombre2
imprimir("Primer nombre:")
leer(nombre1)
imprimir("Segundo nombre:")
leer(nombre2)
imprimirSaludo(nombre1)
imprimirSaludo(nombre2)
FinAlgoritmo

Procedimiento imprimirSaludo(Cadena n)
  imprimir("Hola ", n)
FinProcedimiento`, sampleInputs: ['Ana', 'Luis'] },
      { id: '5-3', number: 3, type: 'algoritmo', title: 'Coordenadas del triángulo',
        description: 'Determinar coordenadas si se conocen las longitudes de los tres lados.' },
      { id: '5-4', number: 4, type: 'algoritmo', title: 'Descuento con funciones',
        description: 'Descuento 5% si costo > $150.000, usando funciones y procedimientos.' },
      { id: '5-5', number: 5, type: 'algoritmo', title: 'Tanque con funciones',
        description: 'Llave del tanque (250-450 litros) usando funciones.' },
      { id: '5-6', number: 6, type: 'algoritmo', title: 'Primo con funciones',
        description: 'Número primo (0-20) usando funciones.' },
      { id: '5-7', number: 7, type: 'algoritmo', title: 'Curso con funciones',
        description: 'Ganó/perdió curso con 5 trabajos usando funciones.' },
      { id: '5-8', number: 8, type: 'algoritmo', title: 'Cuadrática con funciones',
        description: 'Solución de ecuación cuadrática usando funciones.' },
      { id: '5-9', number: 9, type: 'algoritmo', title: 'Intervalo con funciones',
        description: 'Número dentro/fuera de [min, max] usando funciones.' },
      { id: '5-10', number: 10, type: 'algoritmo', title: 'Tres intervalos con funciones',
        description: 'Verificar tres intervalos abierto-abierto con funciones.' }
    ]
  },
  {
    id: 'cap6',
    title: 'Capítulo 6 — Vectores y matrices',
    page: 440,
    exercises: [
      { id: '6-1', number: 1, type: 'algoritmo', title: 'Grupo de personas',
        description: `Almacenar nombres, géneros y edades. Determinar:
a) Cuántos son masculino
b) Mujeres mayores de edad
c) Promedio edad masculinos
d) Nombre de la mujer más joven` },
      { id: '6-2', number: 2, type: 'algoritmo', title: 'Ordenar por estatura',
        description: 'Almacenar nombres y estaturas. Mostrar ordenados asc y desc.' },
      { id: '6-3', number: 3, type: 'algoritmo', title: 'Buscar en arreglo',
        description: 'Almacenar n enteros y buscar si un número está y en qué posición.' },
      { id: '6-4', number: 4, type: 'algoritmo', title: 'Pares e impares',
        description: 'Arreglo de n enteros (50-100). Separar pares e impares en otros arreglos.' },
      { id: '6-5', number: 5, type: 'algoritmo', title: 'Notas de programación',
        description: `30 estudiantes, matriz 5 notas. Determinar:
a) Nota definitiva (promedio)
b) Mejor estudiante
c) Repiten (< 2.0)
d) Habilitan (2.0-2.99)
e) Cuántos ganaron` },
      { id: '6-6', number: 6, type: 'algoritmo', title: 'Clínica de sobrepeso',
        description: `3 pesadas por paciente. Determinar:
a) Peso ganado/perdido
b) Pacientes que perdieron entre pesada 1 y 2
c) Cuántos alcanzaron objetivo` },
      { id: '6-7', number: 7, type: 'algoritmo', title: 'Recorrido de matriz',
        description: 'Matriz 5x5. Recorrer desde (5,5) hasta (1,1) por columnas.' },
      { id: '6-8', number: 8, type: 'algoritmo', title: 'Matriz transpuesta',
        description: 'Matriz 4x5 de caracteres. Hallar y mostrar la transpuesta.' },
      { id: '6-9', number: 9, type: 'algoritmo', title: 'Matriz con borde',
        description: 'Matriz 5x5: unos en borde exterior, ceros en el interior.' },
      { id: '6-10', number: 10, type: 'algoritmo', title: 'Multiplicación de matrices',
        description: 'Multiplicar dos matrices (cols de A = filas de B).' }
    ]
  }
];
