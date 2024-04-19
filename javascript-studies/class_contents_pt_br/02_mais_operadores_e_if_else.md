# Operadores de Comparação (==, !=, ===, !==, <, >, <=, >=)

Esses operadores comparam valores e determinam se eles são, respectivamente, iguais, diferentes, maior que, menor que, maior ou igual, menor ou igual.

# Operadores Lógicos (&&, ||, !)

Estes operadores combinam condições para complexidade e lógica maior.

- `&&` (AND) - Both conditions must be true for the overall expression to be true.
- `||` (OR) - At least one condition must be true for the overall expression to be true.
- `!` (NOT) - Inverts the truth value of a condition.

# Operadores de Atribuição (=, +=, -=, \*=, /=, %=)

Atribui valores a variáveis ou modifica valores existentes com operadores como adição.
Por exemplo: `x += 3; // Equivalente a: x = x + 3`

# Operadores de Incremento/Decremento (++ ou --)

Aumenta ou diminui o valor da variável em 1.
Por exemplo: `let count = 0; count++ // Count se tornará 1 ao invés de 0;`

# Operador Ternário (? :)

Uma maneira mais curta de utlizar o `if...else`, geralmente apenas em uma linha.
Sintaxe: `condição ? verdadeiro : falso;`

# Declaração `if...else`

Essa declaração é fundamental para a estrutura da maioria dos códigos, permitindo executar diferentes
blocos de código baseados em condições. A seguir um exemplo de como fazer isso:

```javascript
if (condition) {
	// Code to be executed if the condition is true
} else {
	// Code to be executed if the condition is false (optional)
}
```

## Expressões consideradas falsas

Geralmente resumido entre verdadeiro ou falso, há alguns nuances a serem ressaltados.

Algumas expressões que possivelmente serão falsas são: `null`, `NaN`, `0`, strings vazias e valores considerados `undefined`.

A seguir um exemplo de como tratar valores considerados `null`:

```javascript
const greeting = (person) => {
	const name = person ? person.name : 'stranger';
	return `Howdy, ${name}`;
};

console.log(greeting({ name: 'Alice' })); // "Howdy, Alice"
console.log(greeting(null)); // "Howdy, stranger"
```
