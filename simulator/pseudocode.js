/**
 * Simulador de pseudocódigo — sintaxis del libro
 * "Introducción a la Lógica de Programación" (Herrera, Gutiérrez, Pulgarín)
 */
class PseudocodeSimulator {
  constructor() {
    this.reset();
  }

  reset() {
    this.vars = {};
    this.types = {};
    this.output = [];
    this.inputQueue = [];
    this.errors = [];
    this.line = 0;
  }

  run(code, inputs = []) {
    this.reset();
    this.inputQueue = [...inputs];
    const lines = this.preprocess(code);
    try {
      this.executeBlock(lines, 0, lines.length);
    } catch (e) {
      if (!this.errors.length) this.errors.push(e.message);
    }
    return {
      output: this.output.join(''),
      errors: this.errors,
      variables: { ...this.vars }
    };
  }

  preprocess(code) {
    return code
      .replace(/\r\n/g, '\n')
      .split('\n')
      .map(l => l.replace(/\/\/.*$/, '').trim())
      .filter(l => l.length > 0)
      .filter(l => !/^Fin(Algoritmo|Procedimiento|Funcion)$/i.test(l))
      .filter(l => !/^Algoritmo\s+/i.test(l));
  }

  executeBlock(lines, start, end) {
    let i = start;
    while (i < end) {
      this.line = i + 1;
      const line = lines[i];
      const lower = line.toLowerCase();

      if (/^fin(si|para|mientras)$/i.test(line)) {
        return i + 1;
      }

      if (/^entero\s+/i.test(line) || /^real\s+/i.test(line) || /^cadena\s+/i.test(line) ||
          /^logico\s+/i.test(line) || /^caracter\s+/i.test(line)) {
        this.declare(line);
        i++;
        continue;
      }

      if (/^leer\s*\(/i.test(line)) {
        this.doRead(line);
        i++;
        continue;
      }

      if (/^imprimir\s*\(/i.test(line)) {
        this.doPrint(line);
        i++;
        continue;
      }

      if (/^si\s*\(/i.test(line)) {
        i = this.doIf(lines, i, end);
        continue;
      }

      if (/^mientras\s*\(/i.test(line)) {
        i = this.doWhile(lines, i, end, 'mientras');
        continue;
      }

      if (/^para\s+/i.test(line)) {
        i = this.doFor(lines, i, end);
        continue;
      }

      if (/^haga$/i.test(line)) {
        i = this.doHaga(lines, i, end);
        continue;
      }

      if (/^(\w+)\s*=\s*.+$/i.test(line) && !/^si\s*\(/i.test(line)) {
        this.doAssign(line);
        i++;
        continue;
      }

      if (/^(procedimiento|funcion)\s+/i.test(line)) {
        i = this.skipBlock(lines, i, end, /^fin(procedimiento|funcion)$/i);
        continue;
      }

      i++;
    }
    return end;
  }

  skipBlock(lines, start, end, endPattern) {
    let depth = 1;
    let i = start + 1;
    while (i < end && depth > 0) {
      if (endPattern.test(lines[i])) depth--;
      else if (/^(procedimiento|funcion)\s+/i.test(lines[i])) depth++;
      i++;
    }
    return i;
  }

  declare(line) {
    const match = line.match(/^(Entero|Real|Cadena|Logico|Caracter)\s+(.+)$/i);
    if (!match) return;
    const type = match[1].toLowerCase();
    const names = match[2].split(',').map(n => n.trim());
    names.forEach(name => {
      this.types[name] = type;
      if (type === 'logico') this.vars[name] = false;
      else if (type === 'cadena' || type === 'caracter') this.vars[name] = '';
      else this.vars[name] = 0;
    });
  }

  doRead(line) {
    const inner = line.match(/leer\s*\(\s*(.+?)\s*\)/i);
    if (!inner) return;
    const vars = inner[1].split(',').map(v => v.trim());
    vars.forEach(v => {
      if (!this.inputQueue.length) {
        this.errors.push(`Línea ${this.line}: no hay más datos de entrada para "${v}"`);
        return;
      }
      let val = this.inputQueue.shift();
      const type = this.types[v] || 'real';
      if (type === 'entero') val = parseInt(val, 10);
      else if (type === 'real') val = parseFloat(val);
      else if (type === 'logico') val = ['true', 'verdadero', '1', 'si', 'sí'].includes(String(val).toLowerCase());
      this.vars[v] = val;
    });
  }

  doPrint(line) {
    const inner = line.match(/imprimir\s*\(\s*(.+)\s*\)/i);
    if (!inner) return;
    const parts = this.splitArgs(inner[1]);
    let text = '';
    parts.forEach((part, idx) => {
      const val = this.evalExpr(part);
      text += (idx > 0 && typeof val === 'number' && parts[idx - 1] && !String(parts[idx - 1]).includes('"') ? ' ' : '') + String(val);
    });
    this.output.push(text + '\n');
  }

  splitArgs(str) {
    const args = [];
    let current = '';
    let inStr = false;
    let quote = '';
    for (let i = 0; i < str.length; i++) {
      const ch = str[i];
      if ((ch === '"' || ch === "'") && !inStr) {
        inStr = true;
        quote = ch;
        current += ch;
      } else if (ch === quote && inStr) {
        inStr = false;
        current += ch;
      } else if (ch === ',' && !inStr) {
        args.push(current.trim());
        current = '';
      } else {
        current += ch;
      }
    }
    if (current.trim()) args.push(current.trim());
    return args;
  }

  doAssign(line) {
    const idx = line.indexOf('=');
    const left = line.slice(0, idx).trim();
    const right = line.slice(idx + 1).trim();
    this.vars[left] = this.evalExpr(right);
  }

  doIf(lines, start, end) {
    const condLine = lines[start];
    const cond = condLine.match(/si\s*\((.+)\)\s*(entonces)?/i);
    if (!cond) return start + 1;

    let i = start + 1;
    let siNoIdx = -1;
    let finSiIdx = -1;
    let depth = 1;

    for (let j = start + 1; j < end; j++) {
      if (/^si\s*\(/i.test(lines[j]) && j !== start) depth++;
      if (/^sino\s*$/i.test(lines[j]) && depth === 1) siNoIdx = j;
      if (/^finsi$/i.test(lines[j])) {
        depth--;
        if (depth === 0) { finSiIdx = j; break; }
        depth++;
      }
    }

    if (finSiIdx === -1) {
      this.errors.push(`Línea ${this.line}: falta FinSi`);
      return start + 1;
    }

    const condition = this.evalExpr(cond[1]);
    if (condition) {
      this.executeBlock(lines, start + 1, siNoIdx !== -1 ? siNoIdx : finSiIdx);
    } else if (siNoIdx !== -1) {
      this.executeBlock(lines, siNoIdx + 1, finSiIdx);
    }
    return finSiIdx + 1;
  }

  doWhile(lines, start, end, type) {
    const condLine = lines[start];
    const cond = condLine.match(/mientras\s*\((.+)\)/i);
    if (!cond) return start + 1;

    let finIdx = start + 1;
    let depth = 1;
    for (let j = start + 1; j < end; j++) {
      if (/^mientras\s*\(/i.test(lines[j])) depth++;
      if (/^finmientras$/i.test(lines[j])) {
        depth--;
        if (depth === 0) { finIdx = j; break; }
      }
    }

    let iterations = 0;
    while (this.evalExpr(cond[1])) {
      if (++iterations > 10000) {
        this.errors.push(`Línea ${this.line}: ciclo infinito detectado`);
        break;
      }
      this.executeBlock(lines, start + 1, finIdx);
    }
    return finIdx + 1;
  }

  doFor(lines, start, end) {
    const m = lines[start].match(
      /para\s+(\w+)\s*=\s*(.+?)\s+hasta\s+(.+?)(?:\s+incremento\s+(-?\d+(?:\.\d+)?))?(?:\s+decremento\s+(-?\d+(?:\.\d+)?))?/i
    );
    if (!m) {
      this.errors.push(`Línea ${this.line}: sintaxis Para inválida`);
      return start + 1;
    }

    const [, varName, fromExpr, toExpr, incStr, decStr] = m;
    const step = decStr ? -parseFloat(decStr) : parseFloat(incStr || '1');
    let finIdx = start + 1;
    for (let j = start + 1; j < end; j++) {
      if (/^finpara$/i.test(lines[j])) { finIdx = j; break; }
    }

    const from = this.evalExpr(fromExpr);
    const to = this.evalExpr(toExpr);
    this.vars[varName] = from;

    let iterations = 0;
    const forward = step > 0;
    while (forward ? this.vars[varName] <= to : this.vars[varName] >= to) {
      if (++iterations > 10000) {
        this.errors.push(`Línea ${this.line}: ciclo Para infinito`);
        break;
      }
      this.executeBlock(lines, start + 1, finIdx);
      this.vars[varName] = this.vars[varName] + step;
    }
    return finIdx + 1;
  }

  doHaga(lines, start, end) {
    let mientrasIdx = -1;
    for (let j = start + 1; j < end; j++) {
      if (/^mientrasque\s*\(/i.test(lines[j])) { mientrasIdx = j; break; }
    }
    if (mientrasIdx === -1) return start + 1;

    const cond = lines[mientrasIdx].match(/mientrasque\s*\((.+)\)/i);
    let iterations = 0;
    do {
      if (++iterations > 10000) {
        this.errors.push(`Línea ${this.line}: ciclo Haga-MientrasQue infinito`);
        break;
      }
      this.executeBlock(lines, start + 1, mientrasIdx);
    } while (cond && this.evalExpr(cond[1]));
    return mientrasIdx + 1;
  }

  evalExpr(expr) {
    let e = expr.trim();
    if ((e.startsWith('"') && e.endsWith('"')) || (e.startsWith("'") && e.endsWith("'"))) {
      return e.slice(1, -1);
    }
    e = e.replace(/\bmod\b/gi, '%');
    e = e.replace(/\b(y|and)\b/gi, '&&');
    e = e.replace(/\b(o|or)\b/gi, '||');
    e = e.replace(/\bno\b/gi, '!');
    e = e.replace(/\bverdadero\b/gi, 'true');
    e = e.replace(/\bfalso\b/gi, 'false');
    e = e.replace(/\^/g, '**');
    e = e.replace(/([^=!<>])=([^=])/g, '$1==$2');
    e = e.replace(/\bPI\b/gi, String(Math.PI));

    const tokens = [];
    let i = 0;
    while (i < e.length) {
      if (/\s/.test(e[i])) { i++; continue; }
      if (/[0-9.]/.test(e[i]) || (e[i] === '-' && /[0-9]/.test(e[i + 1]))) {
        let num = '';
        while (i < e.length && /[0-9.eE+-]/.test(e[i])) { num += e[i]; i++; }
        tokens.push({ type: 'num', val: parseFloat(num) });
        continue;
      }
      if (/[a-zA-Z_]\w*/.test(e[i])) {
        let id = '';
        while (i < e.length && /[a-zA-Z0-9_]/.test(e[i])) { id += e[i]; i++; }
        if (id === 'true') tokens.push({ type: 'num', val: true });
        else if (id === 'false') tokens.push({ type: 'num', val: false });
        else tokens.push({ type: 'var', val: this.vars[id] ?? 0 });
        continue;
      }
      const two = e.slice(i, i + 2);
      if (['==', '!=', '<=', '>=', '&&', '||', '**'].includes(two)) {
        tokens.push({ type: 'op', val: two }); i += 2; continue;
      }
      if ('+-*/%<>!()'.includes(e[i])) {
        tokens.push({ type: 'op', val: e[i] }); i++; continue;
      }
      throw new Error(`Línea ${this.line}: token inválido cerca de "${e.slice(i, i + 5)}"`);
    }

    return this.parseTokens(tokens);
  }

  parseTokens(tokens) {
    let pos = 0;
    const peek = () => tokens[pos];
    const consume = () => tokens[pos++];

    const parseOr = () => {
      let left = parseAnd();
      while (peek()?.val === '||') { consume(); left = left || parseAnd(); }
      return left;
    };
    const parseAnd = () => {
      let left = parseCompare();
      while (peek()?.val === '&&') { consume(); left = left && parseCompare(); }
      return left;
    };
    const parseCompare = () => {
      let left = parseAdd();
      while (peek() && ['==', '!=', '<', '>', '<=', '>='].includes(peek().val)) {
        const op = consume().val;
        const right = parseAdd();
        left = op === '==' ? left == right : op === '!=' ? left != right :
               op === '<' ? left < right : op === '>' ? left > right :
               op === '<=' ? left <= right : left >= right;
      }
      return left;
    };
    const parseAdd = () => {
      let left = parseMul();
      while (peek() && (peek().val === '+' || peek().val === '-')) {
        const op = consume().val;
        left = op === '+' ? left + parseMul() : left - parseMul();
      }
      return left;
    };
    const parseMul = () => {
      let left = parsePow();
      while (peek() && (peek().val === '*' || peek().val === '/' || peek().val === '%')) {
        const op = consume().val;
        left = op === '*' ? left * parsePow() : op === '/' ? left / parsePow() : left % parsePow();
      }
      return left;
    };
    const parsePow = () => {
      let left = parseUnary();
      if (peek()?.val === '**') { consume(); left = Math.pow(left, parseUnary()); }
      return left;
    };
    const parseUnary = () => {
      if (peek()?.val === '!') { consume(); return !parseUnary(); }
      if (peek()?.val === '-') { consume(); return -parseUnary(); }
      return parsePrimary();
    };
    const parsePrimary = () => {
      const t = consume();
      if (!t) throw new Error(`Línea ${this.line}: expresión incompleta`);
      if (t.type === 'num' || t.type === 'var') return t.val;
      if (t.val === '(') {
        const v = parseOr();
        if (consume()?.val !== ')') throw new Error(`Línea ${this.line}: falta ")"`);
        return v;
      }
      throw new Error(`Línea ${this.line}: token inesperado`);
    };

    const result = parseOr();
    return result;
  }
}

const SIMULATOR_EXAMPLES = {
  hola: `Algoritmo HolaMundo
Cadena nombre
imprimir("¿Cómo te llamas?")
leer(nombre)
imprimir("Hola ", nombre)
FinAlgoritmo`,

  suma: `Algoritmo Suma
Entero a, b, suma
imprimir("Ingrese el primer número:")
leer(a)
imprimir("Ingrese el segundo número:")
leer(b)
suma = a + b
imprimir("La suma es: ", suma)
FinAlgoritmo`,

  par: `Algoritmo EsPar
Entero numero
imprimir("Ingrese un número:")
leer(numero)
Si (numero % 2 == 0) Entonces
  imprimir("Es par")
SiNo
  imprimir("Es impar")
FinSi
FinAlgoritmo`,

  velocidad: `Algoritmo Velocidad
Real v, x, t
imprimir("Ingrese la distancia (km):")
leer(x)
imprimir("Ingrese el tiempo (horas):")
leer(t)
v = x / t
imprimir("La velocidad es: ", v, " km/h")
FinAlgoritmo`,

  tabla: `Algoritmo TablaDel5
Entero i
Para i = 1 Hasta 10 Incremento 1
  imprimir(i, " x 5 = ", i * 5)
FinPara
FinAlgoritmo`,

  descuento: `Algoritmo Descuento
Real costo, descuento, total
imprimir("Costo del artículo:")
leer(costo)
Si (costo > 150000) Entonces
  descuento = costo * 0.05
  total = costo - descuento
  imprimir("Descuento: ", descuento)
  imprimir("Total a pagar: ", total)
SiNo
  imprimir("No aplica descuento")
  total = costo
  imprimir("Total a pagar: ", total)
FinSi
FinAlgoritmo`
};
