/**
 * Banco de ejercicios de algoritmos — todos los temas
 */

const ALGORITHM_TOPICS = [
  { id: 'secuencia', title: 'Estructura secuencial', description: 'Lee, calcula e imprime — la base de todo', count: 10 },
  { id: 'operadores', title: 'Operadores', description: 'Aritmeticos, relacionales y logicos', count: 8 },
  { id: 'seleccion', title: 'Seleccion Si/SiNo', description: 'Toma decisiones con condiciones', count: 12 },
  { id: 'iteracion', title: 'Ciclos', description: 'Para, Mientras, acumuladores y contadores', count: 14 },
  { id: 'arreglos', title: 'Arreglos y vectores', description: 'Listas de datos con ciclos', count: 8 },
  { id: 'matrices', title: 'Matrices', description: 'Tablas con ciclos anidados', count: 6 },
  { id: 'funciones', title: 'Funciones y modularidad', description: 'Divide el problema en partes', count: 6 },
  { id: 'combinados', title: 'Problemas combinados', description: 'Mezcla varios temas a la vez', count: 8 },
];

const ALGORITHM_BANK = [
  {
    "id": "seq-01",
    "topic": "secuencia",
    "title": "Hola mundo",
    "problem": "Muestra el mensaje Hola mundo en pantalla.",
    "guide": [
      "Salida fija, sin entrada.",
      "Usa imprimir con el texto."
    ],
    "hints": [
      "No necesitas variables.",
      "imprimir con el texto Hola mundo"
    ],
    "skeleton": "Algoritmo Hola\n// Imprime Hola mundo\nFinAlgoritmo",
    "sampleInputs": [],
    "expected": "Hola mundo",
    "difficulty": "basico"
  },
  {
    "id": "seq-02",
    "topic": "secuencia",
    "title": "Suma de dos numeros",
    "problem": "Lee dos enteros y muestra su suma.",
    "guide": [
      "Entrada: a, b. Salida: suma.",
      "Lee ambos, suma, imprime."
    ],
    "hints": [
      "suma = a + b",
      "Prueba 10 y 20"
    ],
    "skeleton": "Algoritmo Suma2\nEntero a, b, suma\nleer(a)\nleer(b)\n// Calcula e imprime suma\nFinAlgoritmo",
    "sampleInputs": [
      "10",
      "20"
    ],
    "expected": "Suma: 30",
    "difficulty": "basico"
  },
  {
    "id": "seq-03",
    "topic": "secuencia",
    "title": "Area del triangulo",
    "problem": "Lee base y altura. Area = (base*altura)/2.",
    "guide": [
      "Usa Real si quieres decimales.",
      "Formula: area = base * altura / 2"
    ],
    "hints": [
      "Pide base y altura con mensajes.",
      "base=10 altura=5 -> area 25"
    ],
    "skeleton": "Algoritmo AreaTriangulo\nReal base, altura, area\nleer(base)\nleer(altura)\n// Calcula area\nFinAlgoritmo",
    "sampleInputs": [
      "10",
      "5"
    ],
    "expected": "Area: 25",
    "difficulty": "basico"
  },
  {
    "id": "seq-04",
    "topic": "secuencia",
    "title": "Conversion pulgadas a cm",
    "problem": "Lee pulgadas, convierte a cm (x2.54).",
    "guide": [
      "Entrada pulgadas, salida cm.",
      "cm = pulgadas * 2.54"
    ],
    "hints": [
      "Usa Real.",
      "10 pulgadas = 25.4 cm"
    ],
    "skeleton": "Algoritmo PulgadasCm\nReal pulgadas, cm\nleer(pulgadas)\n// Convierte e imprime\nFinAlgoritmo",
    "sampleInputs": [
      "10"
    ],
    "expected": "25.4 cm",
    "difficulty": "basico"
  },
  {
    "id": "seq-05",
    "topic": "secuencia",
    "title": "Precio con descuento fijo",
    "problem": "Lee precio, resta 5000 de descuento fijo, muestra total.",
    "guide": [
      "total = precio - 5000",
      "No uses Si aun, solo secuencia."
    ],
    "hints": [
      "precio 50000 -> 45000"
    ],
    "skeleton": "Algoritmo DescFijo\nReal precio, total\nleer(precio)\n// Aplica descuento fijo\nFinAlgoritmo",
    "sampleInputs": [
      "50000"
    ],
    "expected": "Total: 45000",
    "difficulty": "basico"
  },
  {
    "id": "seq-06",
    "topic": "secuencia",
    "title": "Dias a horas",
    "problem": "Lee cantidad de dias, muestra cuantas horas son (x24).",
    "guide": [
      "horas = dias * 24"
    ],
    "hints": [
      "dias 3 -> 72 horas"
    ],
    "skeleton": "Algoritmo DiasHoras\nEntero dias, horas\nleer(dias)\n// Convierte a horas\nFinAlgoritmo",
    "sampleInputs": [
      "3"
    ],
    "expected": "72 horas",
    "difficulty": "basico"
  },
  {
    "id": "seq-07",
    "topic": "secuencia",
    "title": "Perimetro del circulo",
    "problem": "Lee radio, calcula perimetro = 2 * PI * radio.",
    "guide": [
      "PI existe en el simulador.",
      "perimetro = 2 * PI * radio"
    ],
    "hints": [
      "Usa Real.",
      "radio 5 -> ~31.42"
    ],
    "skeleton": "Algoritmo PerimetroCirculo\nReal radio, perimetro\nleer(radio)\n// perimetro = 2 * PI * radio\nFinAlgoritmo",
    "sampleInputs": [
      "5"
    ],
    "expected": "~31.42",
    "difficulty": "basico"
  },
  {
    "id": "seq-08",
    "topic": "secuencia",
    "title": "Salario semanal",
    "problem": "Lee horas trabajadas y valor hora. Paga = horas * valor.",
    "guide": [
      "Dos lecturas, una multiplicacion."
    ],
    "hints": [
      "40 horas a 15000 -> 600000"
    ],
    "skeleton": "Algoritmo Salario\nReal horas, valorHora, pago\nleer(horas)\nleer(valorHora)\n// Calcula pago\nFinAlgoritmo",
    "sampleInputs": [
      "40",
      "15000"
    ],
    "expected": "600000",
    "difficulty": "basico"
  },
  {
    "id": "seq-09",
    "topic": "secuencia",
    "title": "Vuelto simple",
    "problem": "Lee total pagado y precio. Vuelto = pagado - precio.",
    "guide": [
      "Resta simple."
    ],
    "hints": [
      "pagado 50000 precio 37500 -> vuelto 12500"
    ],
    "skeleton": "Algoritmo Vuelto\nReal pagado, precio, vuelto\nleer(pagado)\nleer(precio)\n// Calcula vuelto\nFinAlgoritmo",
    "sampleInputs": [
      "50000",
      "37500"
    ],
    "expected": "Vuelto: 12500",
    "difficulty": "basico"
  },
  {
    "id": "seq-10",
    "topic": "secuencia",
    "title": "Promedio de dos notas",
    "problem": "Lee dos notas y muestra el promedio.",
    "guide": [
      "promedio = (n1+n2)/2"
    ],
    "hints": [
      "4 y 5 -> 4.5"
    ],
    "skeleton": "Algoritmo Promedio2\nReal n1, n2, prom\nleer(n1)\nleer(n2)\n// Promedio\nFinAlgoritmo",
    "sampleInputs": [
      "4",
      "5"
    ],
    "expected": "4.5",
    "difficulty": "basico"
  },
  {
    "id": "op-01",
    "topic": "operadores",
    "title": "Resto de division",
    "problem": "Lee a y b, muestra a MOD b.",
    "guide": [
      "MOD o % da el resto."
    ],
    "hints": [
      "17 mod 5 = 2"
    ],
    "skeleton": "Algoritmo Modulo\nEntero a, b, r\nleer(a)\nleer(b)\n// r = a MOD b\nFinAlgoritmo",
    "sampleInputs": [
      "17",
      "5"
    ],
    "expected": "Resto: 2",
    "difficulty": "basico"
  },
  {
    "id": "op-02",
    "topic": "operadores",
    "title": "Potencia cubica",
    "problem": "Lee n, muestra n^3.",
    "guide": [
      "Usa ^ para potencia."
    ],
    "hints": [
      "3^3=27"
    ],
    "skeleton": "Algoritmo Cubo\nEntero n, cubo\nleer(n)\n// cubo = n ^ 3\nFinAlgoritmo",
    "sampleInputs": [
      "3"
    ],
    "expected": "27",
    "difficulty": "basico"
  },
  {
    "id": "op-03",
    "topic": "operadores",
    "title": "Expresion mixta",
    "problem": "Lee a,b. resultado = (a+b)*2 - a MOD b.",
    "guide": [
      "Parentesis primero, luego *, luego -."
    ],
    "hints": [
      "a=10 b=3 -> 23"
    ],
    "skeleton": "Algoritmo ExpMix\nEntero a, b, resultado\nleer(a)\nleer(b)\n// Aplica formula\nFinAlgoritmo",
    "sampleInputs": [
      "10",
      "3"
    ],
    "expected": "23",
    "difficulty": "basico"
  },
  {
    "id": "op-04",
    "topic": "operadores",
    "title": "Es divisible entre 4?",
    "problem": "Lee n. Si n MOD 4 == 0 dice Si, sino No.",
    "guide": [
      "Combinas MOD con Si."
    ],
    "hints": [
      "8->Si, 7->No"
    ],
    "skeleton": "Algoritmo Div4\nEntero n\nleer(n)\n// Si n MOD 4 == 0 ...\nFinAlgoritmo",
    "sampleInputs": [
      "8"
    ],
    "expected": "Si",
    "difficulty": "basico"
  },
  {
    "id": "op-05",
    "topic": "operadores",
    "title": "AND logico - edad laboral",
    "problem": "Lee edad. Si edad>=18 Y edad<=65 muestra Puede trabajar.",
    "guide": [
      "Operador Y en condicion."
    ],
    "hints": [
      "25->si, 70->no"
    ],
    "skeleton": "Algoritmo RangoEdad\nEntero edad\nleer(edad)\n// Verifica rango con Y\nFinAlgoritmo",
    "sampleInputs": [
      "25"
    ],
    "expected": "Puede trabajar",
    "difficulty": "basico"
  },
  {
    "id": "op-06",
    "topic": "operadores",
    "title": "OR logico - fin de semana",
    "problem": "Lee dia (1-7). Si dia==6 O dia==7 muestra Fin de semana.",
    "guide": [
      "Sabado=6 Domingo=7."
    ],
    "hints": [
      "6 -> fin de semana"
    ],
    "skeleton": "Algoritmo FinSemana\nEntero dia\nleer(dia)\n// Si dia 6 o 7\nFinAlgoritmo",
    "sampleInputs": [
      "6"
    ],
    "expected": "Fin de semana",
    "difficulty": "basico"
  },
  {
    "id": "op-07",
    "topic": "operadores",
    "title": "Comparar igualdad",
    "problem": "Lee a y b. Si son iguales muestra Iguales, sino Diferentes.",
    "guide": [
      "Usa =="
    ],
    "hints": [
      "5 y 5 -> Iguales"
    ],
    "skeleton": "Algoritmo Igualdad\nEntero a, b\nleer(a)\nleer(b)\n// Compara\nFinAlgoritmo",
    "sampleInputs": [
      "5",
      "5"
    ],
    "expected": "Iguales",
    "difficulty": "basico"
  },
  {
    "id": "op-08",
    "topic": "operadores",
    "title": "Incremento y decremento",
    "problem": "Lee x. Muestra x+1 y x-1.",
    "guide": [
      "Secuencia con operadores."
    ],
    "hints": [
      "x=10 -> 11 y 9"
    ],
    "skeleton": "Algoritmo IncDec\nEntero x\nleer(x)\n// Imprime x+1 y x-1\nFinAlgoritmo",
    "sampleInputs": [
      "10"
    ],
    "expected": "11 y 9",
    "difficulty": "basico"
  },
  {
    "id": "sel-01",
    "topic": "seleccion",
    "title": "Positivo o negativo",
    "problem": "Lee n. Si n>=0 Positivo, sino Negativo.",
    "guide": [
      "Un Si simple."
    ],
    "hints": [
      "-3->Negativo"
    ],
    "skeleton": "Algoritmo Signo\nEntero n\nleer(n)\n// Si n >= 0 ...\nFinAlgoritmo",
    "sampleInputs": [
      "-3"
    ],
    "expected": "Negativo",
    "difficulty": "basico"
  },
  {
    "id": "sel-02",
    "topic": "seleccion",
    "title": "Mayor de tres",
    "problem": "Lee a,b,c. Muestra el mayor.",
    "guide": [
      "Si anidados o cascada."
    ],
    "hints": [
      "9,3,7->9"
    ],
    "skeleton": "Algoritmo Mayor3\nEntero a,b,c\nleer(a)\nleer(b)\nleer(c)\n// Encuentra mayor\nFinAlgoritmo",
    "sampleInputs": [
      "9",
      "3",
      "7"
    ],
    "expected": "9",
    "difficulty": "basico"
  },
  {
    "id": "sel-03",
    "topic": "seleccion",
    "title": "Aprobado con 3.0",
    "problem": "Lee nota. Si >=3 Aprobado sino Reprobado.",
    "guide": [
      "Umbral 3.0."
    ],
    "hints": [
      "2.9->Reprobado"
    ],
    "skeleton": "Algoritmo Aprobado\nReal nota\nleer(nota)\n// Si >= 3\nFinAlgoritmo",
    "sampleInputs": [
      "2.9"
    ],
    "expected": "Reprobado",
    "difficulty": "basico"
  },
  {
    "id": "sel-04",
    "topic": "seleccion",
    "title": "Descuento por monto",
    "problem": "Si compra>200000 descuento 15% sino 0%.",
    "guide": [
      "Calcula descuento dentro de cada rama."
    ],
    "hints": [
      "300000->15%"
    ],
    "skeleton": "Algoritmo Desc15\nReal compra, desc, total\nleer(compra)\n// Si > 200000 ...\nFinAlgoritmo",
    "sampleInputs": [
      "300000"
    ],
    "expected": "descuento aplicado",
    "difficulty": "basico"
  },
  {
    "id": "sel-05",
    "topic": "seleccion",
    "title": "Tipo de triangulo",
    "problem": "Lee 3 lados. Equilatero, Isosceles o Escaleno.",
    "guide": [
      "Compara lados con ==."
    ],
    "hints": [
      "2,2,3->Isosceles"
    ],
    "skeleton": "Algoritmo TipoTriangulo\nEntero a,b,c\nleer(a)\nleer(b)\nleer(c)\n// Clasifica\nFinAlgoritmo",
    "sampleInputs": [
      "2",
      "2",
      "3"
    ],
    "expected": "Isosceles",
    "difficulty": "basico"
  },
  {
    "id": "sel-06",
    "topic": "seleccion",
    "title": "Ano bisiesto simple",
    "problem": "Lee ano. Si ano MOD 4 == 0 es bisiesto.",
    "guide": [
      "Version simplificada."
    ],
    "hints": [
      "2024->si"
    ],
    "skeleton": "Algoritmo Bisiesto\nEntero anio\nleer(anio)\n// Si anio MOD 4 == 0\nFinAlgoritmo",
    "sampleInputs": [
      "2024"
    ],
    "expected": "Bisiesto",
    "difficulty": "basico"
  },
  {
    "id": "sel-07",
    "topic": "seleccion",
    "title": "Dia de la semana",
    "problem": "Lee 1-7, muestra nombre del dia.",
    "guide": [
      "Cascada SiNo Si."
    ],
    "hints": [
      "1->Lunes"
    ],
    "skeleton": "Algoritmo DiaSemana\nEntero d\nleer(d)\n// Muestra dia\nFinAlgoritmo",
    "sampleInputs": [
      "1"
    ],
    "expected": "Lunes",
    "difficulty": "basico"
  },
  {
    "id": "sel-08",
    "topic": "seleccion",
    "title": "Calculadora 4 operaciones",
    "problem": "Lee a, op(1-4), b. 1 suma 2 resta 3 mult 4 div.",
    "guide": [
      "Seleccion por op."
    ],
    "hints": [
      "10,1,5->15"
    ],
    "skeleton": "Algoritmo Calc\nReal a,b\nEntero op\nleer(a)\nleer(op)\nleer(b)\n// Segun op\nFinAlgoritmo",
    "sampleInputs": [
      "10",
      "1",
      "5"
    ],
    "expected": "15",
    "difficulty": "basico"
  },
  {
    "id": "sel-09",
    "topic": "seleccion",
    "title": "Tarifa taxi",
    "problem": "Si km<=5 tarifa 5000, sino 5000+(km-5)*800.",
    "guide": [
      "Formula por rama."
    ],
    "hints": [
      "8km->74000"
    ],
    "skeleton": "Algoritmo Taxi\nEntero km\nReal tarifa\nleer(km)\n// Calcula tarifa\nFinAlgoritmo",
    "sampleInputs": [
      "8"
    ],
    "expected": "74000",
    "difficulty": "basico"
  },
  {
    "id": "sel-10",
    "topic": "seleccion",
    "title": "Puede votar",
    "problem": "Si edad>=18 Puede votar sino No puede.",
    "guide": [
      "Decision simple."
    ],
    "hints": [
      "17->no"
    ],
    "skeleton": "Algoritmo Votar\nEntero edad\nleer(edad)\n// Si >= 18\nFinAlgoritmo",
    "sampleInputs": [
      "17"
    ],
    "expected": "No puede",
    "difficulty": "basico"
  },
  {
    "id": "sel-11",
    "topic": "seleccion",
    "title": "Precio mas barato de tres",
    "problem": "Lee 3 precios, muestra el mas barato.",
    "guide": [
      "Similar a mayor de tres."
    ],
    "hints": [
      "100,50,75->50"
    ],
    "skeleton": "Algoritmo MasBarato\nReal p1,p2,p3\nleer(p1)\nleer(p2)\nleer(p3)\n// Menor precio\nFinAlgoritmo",
    "sampleInputs": [
      "100",
      "50",
      "75"
    ],
    "expected": "50",
    "difficulty": "basico"
  },
  {
    "id": "sel-12",
    "topic": "seleccion",
    "title": "Clasificar temperatura",
    "problem": "Lee temp. Si <15 Frio, <25 Templado, sino Caluroso.",
    "guide": [
      "Cascada de rangos."
    ],
    "hints": [
      "20->Templado"
    ],
    "skeleton": "Algoritmo Clima\nReal temp\nleer(temp)\n// Clasifica\nFinAlgoritmo",
    "sampleInputs": [
      "20"
    ],
    "expected": "Templado",
    "difficulty": "basico"
  },
  {
    "id": "ite-01",
    "topic": "iteracion",
    "title": "Contar del 1 al 10",
    "problem": "Muestra numeros 1 al 10 con Para.",
    "guide": [
      "Para i=1 Hasta 10"
    ],
    "hints": [
      "lineas 1..10"
    ],
    "skeleton": "Algoritmo UnoADiez\nEntero i\n// Para del 1 al 10\nFinAlgoritmo",
    "sampleInputs": [],
    "expected": "1 a 10",
    "difficulty": "basico"
  },
  {
    "id": "ite-02",
    "topic": "iteracion",
    "title": "Tabla de multiplicar",
    "problem": "Lee n, muestra tabla del 1 al 10.",
    "guide": [
      "Ciclo Para."
    ],
    "hints": [
      "n=9"
    ],
    "skeleton": "Algoritmo Tabla\nEntero n,i\nleer(n)\n// Tabla 1-10\nFinAlgoritmo",
    "sampleInputs": [
      "9"
    ],
    "expected": "tabla del 9",
    "difficulty": "basico"
  },
  {
    "id": "ite-03",
    "topic": "iteracion",
    "title": "Suma 1 a n",
    "problem": "Lee n, suma 1+2+...+n.",
    "guide": [
      "Acumulador suma=0."
    ],
    "hints": [
      "n=5 suma 15"
    ],
    "skeleton": "Algoritmo SumaN\nEntero n,i,suma\nleer(n)\nsuma=0\n// Ciclo acumula\nFinAlgoritmo",
    "sampleInputs": [
      "5"
    ],
    "expected": "15",
    "difficulty": "basico"
  },
  {
    "id": "ite-04",
    "topic": "iteracion",
    "title": "Factorial",
    "problem": "Lee n (<=10), calcula factorial con ciclo.",
    "guide": [
      "fact=1, Para i=1 Hasta n fact=fact*i"
    ],
    "hints": [
      "n=5->120"
    ],
    "skeleton": "Algoritmo Factorial\nEntero n,i,fact\nleer(n)\nfact=1\n// Multiplica en ciclo\nFinAlgoritmo",
    "sampleInputs": [
      "5"
    ],
    "expected": "120",
    "difficulty": "basico"
  },
  {
    "id": "ite-05",
    "topic": "iteracion",
    "title": "Pares del 2 al 20",
    "problem": "Muestra pares entre 2 y 20.",
    "guide": [
      "Para i=2 Hasta 20 Incremento 2"
    ],
    "hints": [
      "2,4,...,20"
    ],
    "skeleton": "Algoritmo Pares\nEntero i\n// Ciclo de 2 en 2\nFinAlgoritmo",
    "sampleInputs": [],
    "expected": "pares",
    "difficulty": "basico"
  },
  {
    "id": "ite-06",
    "topic": "iteracion",
    "title": "Contar digitos",
    "problem": "Lee n positivo, cuenta cuantos digitos tiene.",
    "guide": [
      "Mientras n>0 dividir o restar"
    ],
    "hints": [
      "12345->5"
    ],
    "skeleton": "Algoritmo ContarDigitos\nEntero n, cont\nleer(n)\ncont=0\n// Mientras n > 0\nFinAlgoritmo",
    "sampleInputs": [
      "12345"
    ],
    "expected": "5",
    "difficulty": "basico"
  },
  {
    "id": "ite-07",
    "topic": "iteracion",
    "title": "Suma de pares hasta n",
    "problem": "Lee n, suma solo pares de 1 a n.",
    "guide": [
      "Si i MOD 2==0 sumar."
    ],
    "hints": [
      "n=6 suma 12"
    ],
    "skeleton": "Algoritmo SumaPares\nEntero n,i,suma\nleer(n)\n// Suma pares\nFinAlgoritmo",
    "sampleInputs": [
      "6"
    ],
    "expected": "12",
    "difficulty": "basico"
  },
  {
    "id": "ite-08",
    "topic": "iteracion",
    "title": "Leer hasta positivo",
    "problem": "Repite leer hasta que sea >0.",
    "guide": [
      "Haga ... MientrasQue n<=0"
    ],
    "hints": [
      "-1,-2,5"
    ],
    "skeleton": "Algoritmo ValidarPos\nEntero n\n// Haga leer hasta n>0\nFinAlgoritmo",
    "sampleInputs": [
      "-1",
      "-2",
      "5"
    ],
    "expected": "n=5",
    "difficulty": "basico"
  },
  {
    "id": "ite-09",
    "topic": "iteracion",
    "title": "Invertir numero",
    "problem": "Lee 1234, muestra 4321.",
    "guide": [
      "inv=0, extrae digitos con MOD"
    ],
    "hints": [
      "1234->4321"
    ],
    "skeleton": "Algoritmo Invertir\nEntero n, inv, dig\nleer(n)\ninv=0\n// Construye invertido\nFinAlgoritmo",
    "sampleInputs": [
      "1234"
    ],
    "expected": "4321",
    "difficulty": "basico"
  },
  {
    "id": "ite-10",
    "topic": "iteracion",
    "title": "Promedio de n notas",
    "problem": "Lee n, luego n notas, promedio.",
    "guide": [
      "Ciclo + acumulador."
    ],
    "hints": [
      "promedio"
    ],
    "skeleton": "Algoritmo PromN\nEntero n,i\nReal nota,suma,prom\nleer(n)\n// Lee n notas\nFinAlgoritmo",
    "sampleInputs": [
      "3",
      "4",
      "5",
      "3"
    ],
    "expected": "4",
    "difficulty": "basico"
  },
  {
    "id": "ite-11",
    "topic": "iteracion",
    "title": "Multiplos de 7",
    "problem": "Lee n, lista multiplos de 7 menores que n.",
    "guide": [
      "Para i=7 Hasta n Incremento 7"
    ],
    "hints": [
      "n=50"
    ],
    "skeleton": "Algoritmo Mult7\nEntero n,i\nleer(n)\n// Multiplos de 7\nFinAlgoritmo",
    "sampleInputs": [
      "50"
    ],
    "expected": "multiplos",
    "difficulty": "basico"
  },
  {
    "id": "ite-12",
    "topic": "iteracion",
    "title": "Serie Fibonacci n terminos",
    "problem": "Lee n, muestra primeros n numeros Fibonacci.",
    "guide": [
      "a=0,b=1, siguiente=a+b"
    ],
    "hints": [
      "n=7"
    ],
    "skeleton": "Algoritmo Fibonacci\nEntero n,i,a,b,sig\nleer(n)\n// Genera serie\nFinAlgoritmo",
    "sampleInputs": [
      "7"
    ],
    "expected": "fibonacci",
    "difficulty": "basico"
  },
  {
    "id": "ite-13",
    "topic": "iteracion",
    "title": "Potencias de 2",
    "problem": "Muestra 2^0 hasta 2^8.",
    "guide": [
      "potencia acumulada x2"
    ],
    "hints": [
      "1,2,4,...256"
    ],
    "skeleton": "Algoritmo Pot2\nEntero i,pot\npot=1\n// Potencias de 2\nFinAlgoritmo",
    "sampleInputs": [],
    "expected": "potencias",
    "difficulty": "basico"
  },
  {
    "id": "ite-14",
    "topic": "iteracion",
    "title": "Collatz hasta 1",
    "problem": "Lee n, aplica 3n+1 o n/2 hasta llegar a 1.",
    "guide": [
      "Si par n/2 si impar 3n+1"
    ],
    "hints": [
      "n=6"
    ],
    "skeleton": "Algoritmo Collatz\nEntero n\nleer(n)\n// Hasta n==1\nFinAlgoritmo",
    "sampleInputs": [
      "6"
    ],
    "expected": "llega a 1",
    "difficulty": "basico"
  },
  {
    "id": "vec-01",
    "topic": "arreglos",
    "title": "Suma de 5 numeros",
    "problem": "Lee 5 numeros en ciclo, muestra suma.",
    "guide": [
      "Para i=1 Hasta 5: leer y acumular."
    ],
    "hints": [
      "suma 30"
    ],
    "skeleton": "Algoritmo Suma5\nEntero i\nReal num,suma\nsuma=0\n// Lee 5 y suma\nFinAlgoritmo",
    "sampleInputs": [
      "2",
      "4",
      "6",
      "8",
      "10"
    ],
    "expected": "30",
    "difficulty": "basico"
  },
  {
    "id": "vec-02",
    "topic": "arreglos",
    "title": "Mayor de n numeros",
    "problem": "Lee n y n valores, muestra el mayor.",
    "guide": [
      "Variable mayor."
    ],
    "hints": [
      "max"
    ],
    "skeleton": "Algoritmo MayorN\nEntero n,i,num,mayor\nleer(n)\n// Lee n valores\nFinAlgoritmo",
    "sampleInputs": [
      "4",
      "3",
      "9",
      "1",
      "7"
    ],
    "expected": "9",
    "difficulty": "basico"
  },
  {
    "id": "vec-03",
    "topic": "arreglos",
    "title": "Contar negativos",
    "problem": "Lee n y n numeros, cuenta cuantos son <0.",
    "guide": [
      "Contador en ciclo."
    ],
    "hints": [
      "cuenta neg"
    ],
    "skeleton": "Algoritmo ContNeg\nEntero n,i,num,neg\nleer(n)\nneg=0\n// Cuenta negativos\nFinAlgoritmo",
    "sampleInputs": [
      "5",
      "-1",
      "3",
      "-4",
      "0",
      "2"
    ],
    "expected": "2",
    "difficulty": "basico"
  },
  {
    "id": "vec-04",
    "topic": "arreglos",
    "title": "Buscar en lista",
    "problem": "Lee n valores, luego x. Dice si x esta.",
    "guide": [
      "Bandera encontro."
    ],
    "hints": [
      "si/no"
    ],
    "skeleton": "Algoritmo Buscar\nEntero n,i,x,num\nleer(n)\n// Lee y busca x\nFinAlgoritmo",
    "sampleInputs": [
      "3",
      "10",
      "20",
      "30",
      "20"
    ],
    "expected": "Si esta",
    "difficulty": "basico"
  },
  {
    "id": "vec-05",
    "topic": "arreglos",
    "title": "FizzBuzz 1 a 30",
    "problem": "Multiplo 3 Fizz, 5 Buzz, ambos FizzBuzz.",
    "guide": [
      "Si en ciclo."
    ],
    "hints": [
      "FizzBuzz"
    ],
    "skeleton": "Algoritmo FizzBuzz\nEntero i\n// Para 1 a 30\nFinAlgoritmo",
    "sampleInputs": [],
    "expected": "FizzBuzz",
    "difficulty": "basico"
  },
  {
    "id": "vec-06",
    "topic": "arreglos",
    "title": "Menor de n numeros",
    "problem": "Lee n valores, muestra el menor.",
    "guide": [
      "Similar a mayor."
    ],
    "hints": [
      "min"
    ],
    "skeleton": "Algoritmo MenorN\nEntero n,i,num,menor\nleer(n)\n// Encuentra menor\nFinAlgoritmo",
    "sampleInputs": [
      "4",
      "8",
      "2",
      "9",
      "1"
    ],
    "expected": "1",
    "difficulty": "basico"
  },
  {
    "id": "vec-07",
    "topic": "arreglos",
    "title": "Contar aprobados",
    "problem": "Lee n notas, cuenta cuantas >= 3.0.",
    "guide": [
      "Contador + condicion."
    ],
    "hints": [
      "aprobados"
    ],
    "skeleton": "Algoritmo ContAprob\nEntero n,i,cnt\nReal nota\nleer(n)\ncnt=0\n// Cuenta >= 3\nFinAlgoritmo",
    "sampleInputs": [
      "4",
      "2.5",
      "4",
      "3",
      "1.5"
    ],
    "expected": "2",
    "difficulty": "basico"
  },
  {
    "id": "vec-08",
    "topic": "arreglos",
    "title": "Segundo mayor",
    "problem": "Lee n numeros, encuentra el segundo mayor.",
    "guide": [
      "mayor y segundoMayor."
    ],
    "hints": [
      "2do max"
    ],
    "skeleton": "Algoritmo SegundoMayor\nEntero n,i,num,mayor,seg\nleer(n)\n// 2do mayor\nFinAlgoritmo",
    "sampleInputs": [
      "4",
      "10",
      "25",
      "25",
      "8"
    ],
    "expected": "10",
    "difficulty": "basico"
  },
  {
    "id": "mat-01",
    "topic": "matrices",
    "title": "Tabla 3x3",
    "problem": "Imprime matriz i*j con ciclos anidados.",
    "guide": [
      "Para i y j anidados."
    ],
    "hints": [
      "9 valores"
    ],
    "skeleton": "Algoritmo Tabla3x3\nEntero i,j\n// Ciclos anidados\nFinAlgoritmo",
    "sampleInputs": [],
    "expected": "3x3",
    "difficulty": "basico"
  },
  {
    "id": "mat-02",
    "topic": "matrices",
    "title": "Suma matriz 2x3",
    "problem": "Lee 6 valores, muestra suma total.",
    "guide": [
      "6 lecturas en ciclo."
    ],
    "hints": [
      "suma 21"
    ],
    "skeleton": "Algoritmo Suma2x3\nEntero i\nReal x,suma\nsuma=0\n// 6 lecturas\nFinAlgoritmo",
    "sampleInputs": [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    "expected": "21",
    "difficulty": "basico"
  },
  {
    "id": "mat-03",
    "topic": "matrices",
    "title": "Piramide numerica",
    "problem": "Filas 1-5: fila i imprime i numeros.",
    "guide": [
      "Ciclo externo filas, interno columnas."
    ],
    "hints": [
      "piramide"
    ],
    "skeleton": "Algoritmo Piramide\nEntero f,c\n// Filas 1 a 5\nFinAlgoritmo",
    "sampleInputs": [],
    "expected": "patron",
    "difficulty": "basico"
  },
  {
    "id": "mat-04",
    "topic": "matrices",
    "title": "Suma por filas 2x4",
    "problem": "Lee 8 nums, suma fila1 y fila2.",
    "guide": [
      "Mitad fila1, mitad fila2."
    ],
    "hints": [
      "f1=10 f2=26"
    ],
    "skeleton": "Algoritmo SumaFilas\nEntero i\nReal x,f1,f2\nf1=0\nf2=0\n// 8 lecturas\nFinAlgoritmo",
    "sampleInputs": [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8"
    ],
    "expected": "f1=10 f2=26",
    "difficulty": "basico"
  },
  {
    "id": "mat-05",
    "topic": "matrices",
    "title": "Patron tablero",
    "problem": "Imprime 4x4 alternando 1 y 0 (i+j par).",
    "guide": [
      "Si (i+j) MOD 2 en ciclos anidados."
    ],
    "hints": [
      "tablero"
    ],
    "skeleton": "Algoritmo Tablero\nEntero i,j\n// 4x4 alternado\nFinAlgoritmo",
    "sampleInputs": [],
    "expected": "tablero",
    "difficulty": "basico"
  },
  {
    "id": "mat-06",
    "topic": "matrices",
    "title": "Suma diagonal 4 nums",
    "problem": "Lee 4 elementos de diagonal, suma.",
    "guide": [
      "4 lecturas."
    ],
    "hints": [
      "suma diag"
    ],
    "skeleton": "Algoritmo Diagonal\nEntero i\nReal x,suma\nsuma=0\n// 4 diagonal\nFinAlgoritmo",
    "sampleInputs": [
      "1",
      "2",
      "3",
      "4"
    ],
    "expected": "10",
    "difficulty": "basico"
  },
  {
    "id": "fun-01",
    "topic": "funciones",
    "title": "Area circulo",
    "problem": "Lee radio. area=PI*r^2.",
    "guide": [
      "Funcion mental calcularArea."
    ],
    "hints": [
      "area"
    ],
    "skeleton": "Algoritmo AreaCirc\nReal radio, area\nleer(radio)\n// area = PI * radio^2\nFinAlgoritmo",
    "sampleInputs": [
      "3"
    ],
    "expected": "~28.27",
    "difficulty": "basico"
  },
  {
    "id": "fun-02",
    "topic": "funciones",
    "title": "Es par modular",
    "problem": "Lee n, determina si es par.",
    "guide": [
      "n MOD 2==0."
    ],
    "hints": [
      "par/impar"
    ],
    "skeleton": "Algoritmo EsParMod\nEntero n\nleer(n)\n// esPar\nFinAlgoritmo",
    "sampleInputs": [
      "4"
    ],
    "expected": "Par",
    "difficulty": "basico"
  },
  {
    "id": "fun-03",
    "topic": "funciones",
    "title": "Maximo de dos",
    "problem": "Lee a,b. Muestra el mayor.",
    "guide": [
      "Funcion max."
    ],
    "hints": [
      "max"
    ],
    "skeleton": "Algoritmo Max2\nEntero a,b,max\nleer(a)\nleer(b)\n// mayor\nFinAlgoritmo",
    "sampleInputs": [
      "7",
      "12"
    ],
    "expected": "12",
    "difficulty": "basico"
  },
  {
    "id": "fun-04",
    "topic": "funciones",
    "title": "Total de compra",
    "problem": "Lee precio y cantidad. total=precio*cantidad.",
    "guide": [
      "Modular calcularTotal."
    ],
    "hints": [
      "total"
    ],
    "skeleton": "Algoritmo Caja\nReal precio,cant,total\nleer(precio)\nleer(cant)\n// total\nFinAlgoritmo",
    "sampleInputs": [
      "1500",
      "4"
    ],
    "expected": "6000",
    "difficulty": "basico"
  },
  {
    "id": "fun-05",
    "topic": "funciones",
    "title": "Validar nota 0-5",
    "problem": "Lee nota. Valida rango.",
    "guide": [
      "Si fuera de rango invalida."
    ],
    "hints": [
      "valida"
    ],
    "skeleton": "Algoritmo ValNota\nReal nota\nleer(nota)\n// validar 0-5\nFinAlgoritmo",
    "sampleInputs": [
      "4.5"
    ],
    "expected": "Valida",
    "difficulty": "basico"
  },
  {
    "id": "fun-06",
    "topic": "funciones",
    "title": "Salario con horas extra",
    "problem": "Lee horas. Si >40, extra=(h-40)*1.5*valor, sino normal.",
    "guide": [
      "Funcion calcularPago."
    ],
    "hints": [
      "pago"
    ],
    "skeleton": "Algoritmo HorasExtra\nReal horas,valor,pago\nleer(horas)\nleer(valor)\n// calcula pago\nFinAlgoritmo",
    "sampleInputs": [
      "45",
      "10000"
    ],
    "expected": "pago",
    "difficulty": "basico"
  },
  {
    "id": "com-01",
    "topic": "combinados",
    "title": "Cajero automatico",
    "problem": "Lee saldo y retiro. Si alcanza resta, sino error.",
    "guide": [
      "Seleccion + secuencia."
    ],
    "hints": [
      "retiro ok"
    ],
    "skeleton": "Algoritmo Cajero\nReal saldo,retiro\nleer(saldo)\nleer(retiro)\n// Si alcanza\nFinAlgoritmo",
    "sampleInputs": [
      "100000",
      "30000"
    ],
    "expected": "saldo 70000",
    "difficulty": "basico"
  },
  {
    "id": "com-02",
    "topic": "combinados",
    "title": "Estadistica basica",
    "problem": "Lee n y n numeros. Promedio, mayor, menor.",
    "guide": [
      "Un ciclo, tres resultados."
    ],
    "hints": [
      "stats"
    ],
    "skeleton": "Algoritmo Stats\nEntero n,i,num,mayor,menor\nReal suma,prom\nleer(n)\n// stats\nFinAlgoritmo",
    "sampleInputs": [
      "3",
      "5",
      "9",
      "2"
    ],
    "expected": "prom 5.33",
    "difficulty": "basico"
  },
  {
    "id": "com-03",
    "topic": "combinados",
    "title": "Numeros perfectos",
    "problem": "Lee n. Muestra perfectos entre 1 y n.",
    "guide": [
      "Ciclo + suma divisores."
    ],
    "hints": [
      "6 28"
    ],
    "skeleton": "Algoritmo Perfectos\nEntero n,num,div,suma\nleer(n)\n// busca perfectos\nFinAlgoritmo",
    "sampleInputs": [
      "30"
    ],
    "expected": "6 28",
    "difficulty": "basico"
  },
  {
    "id": "com-04",
    "topic": "combinados",
    "title": "Tienda con descuento",
    "problem": "Lee n precios, suma. Si total>100000 desc 10%.",
    "guide": [
      "Ciclo + seleccion."
    ],
    "hints": [
      "total desc"
    ],
    "skeleton": "Algoritmo Tienda\nEntero n,i\nReal precio,total,desc\nleer(n)\ntotal=0\n// suma y desc\nFinAlgoritmo",
    "sampleInputs": [
      "3",
      "40000",
      "35000",
      "30000"
    ],
    "expected": "descuento",
    "difficulty": "basico"
  },
  {
    "id": "com-05",
    "topic": "combinados",
    "title": "Login con clave",
    "problem": "Clave 1234. Lee intento, compara.",
    "guide": [
      "Seleccion simple."
    ],
    "hints": [
      "acceso"
    ],
    "skeleton": "Algoritmo Login\nEntero clave,intento\nclave=1234\nleer(intento)\n// compara\nFinAlgoritmo",
    "sampleInputs": [
      "1234"
    ],
    "expected": "Acceso",
    "difficulty": "basico"
  },
  {
    "id": "com-06",
    "topic": "combinados",
    "title": "Calculadora menu",
    "problem": "Lee a, op, b. Suma/resta/mult/div segun op.",
    "guide": [
      "Seleccion + operacion."
    ],
    "hints": [
      "resultado"
    ],
    "skeleton": "Algoritmo MenuCalc\nReal a,b,res\nEntero op\nleer(a)\nleer(op)\nleer(b)\n// opera\nFinAlgoritmo",
    "sampleInputs": [
      "20",
      "2",
      "4"
    ],
    "expected": "5",
    "difficulty": "basico"
  },
  {
    "id": "com-07",
    "topic": "combinados",
    "title": "Banco de notas",
    "problem": "Lee n notas. Promedio y si promedio>=3.5 aprobado.",
    "guide": [
      "Ciclo + decision final."
    ],
    "hints": [
      "aprobado"
    ],
    "skeleton": "Algoritmo BancoNotas\nEntero n,i\nReal nota,suma,prom\nleer(n)\n// promedio y si aprueba\nFinAlgoritmo",
    "sampleInputs": [
      "3",
      "4",
      "3.5",
      "5"
    ],
    "expected": "Aprobado",
    "difficulty": "basico"
  },
  {
    "id": "com-08",
    "topic": "combinados",
    "title": "Inventario minimo",
    "problem": "Lee n productos y stock. Cuenta cuantos tienen stock < 10.",
    "guide": [
      "Ciclo + condicion."
    ],
    "hints": [
      "bajo stock"
    ],
    "skeleton": "Algoritmo Inventario\nEntero n,i,stock,bajo\nleer(n)\nbajo=0\n// cuenta stock<10\nFinAlgoritmo",
    "sampleInputs": [
      "4",
      "15",
      "5",
      "20",
      "8"
    ],
    "expected": "2",
    "difficulty": "basico"
  }
];
