**Funções** em JavaScript são blocos reutilizáveis de código que executam uma tarefa específica. Elas permitem organizar o código, torná-lo mais modular e evitar repetições.

Em outras linguagens, funções que não retornam nada, são chamadas de procedimentos.

```jsx
function quadrado(valor) {
	// Declaração de função.
	return valor ** 2; // Valor ao quadrado.
}

const quadradoDeDez = quadrado(10); // Variável que recebe o retorno da função.
console.log(quadradoDeDez); // Imprime 100.
```

## Como organizar as funções?

- **Agrupamento por Funcionalidade:** Organize as funções por sua **funcionalidade principal**. Crie módulos relacionados a tarefas específicas, como validação de dados, manipulação de DOM, cálculos matemáticos, etc.
- **Separação de Preocupações:** Cada função deve ter um **objetivo único e bem definido**. Evite funções muito grandes ou que realizam tarefas distintas.
- **Tamanho Adequado:** Mantenha as funções com um **tamanho razoável**. Funções muito pequenas podem ser desnecessárias, enquanto funções muito grandes podem ser difíceis de entender e modificar.
- **Nomes Significativos:** Utilize **nomes descritivos** para as funções e parâmetros. Isso facilita a compreensão do que cada função faz e como usá-la.
- **Comentários Relevantes:** Adicione **comentários** para explicar a lógica das funções e o que cada parte do código faz. Isso torna o código mais autoexplicativo e facilita a colaboração.

## Funções imediatamente Invocadas

As Funções Imediatamente Invocáveis (IIFEs), também conhecidas como **Expressões de Função Imediatamente Invocáveis**, são uma técnica poderosa em JavaScript para **encapsular código, criar escopos privados e evitar conflitos de nomes**. Ao combinar a declaração e a execução de uma função em uma única expressão, as IIFEs oferecem diversos benefícios para o desenvolvimento web.

### **O que são IIFEs?**

Uma IIFE é uma função anônima que é **executada automaticamente** no momento em que é declarada. Isso é feito envolvendo a declaração da função em parênteses e, em seguida, adicionando os parênteses de invocação no final.

**Estrutura básica:**

```jsx
// O código é executado imediatamente e, portanto, não precisa de um nome.
(function () {
	// Código da função
})();
```

### **Benefícios das IIFEs:**

- **Encapsulamento:** As IIFEs criam um **escopo privado** para as variáveis e funções declaradas dentro delas. Isso significa que essas variáveis e funções não podem ser acessadas de fora da IIFE, protegendo seu código contra interferências e conflitos de nomes.
- **Proteção contra Conflitos de Nomes:** Como as IIFEs usam escopos privados, elas evitam conflitos de nomes com variáveis globais ou outras funções. Isso torna o código mais robusto e menos propenso a erros.
- **Modularidade:** As IIFEs promovem a **modularidade** no código, permitindo que você organize e agrupe funcionalidades relacionadas em unidades isoladas. Isso facilita a reutilização e o gerenciamento do código.
- **Auto execução:** As IIFEs são **executadas automaticamente**, o que pode ser útil para inicializar variáveis ou executar código logo após a declaração da função.

### **Casos de Uso para IIFEs:**

- **Criar Módulos Privados:** Utilize IIFEs para encapsular módulos de código com variáveis e funções privadas, protegendo seu código contra interferências externas.
- **Evitar Conflitos de Nomes:** Use IIFEs para evitar conflitos de nomes com variáveis globais ou outras funções, especialmente em bibliotecas ou código de terceiros.
- **Inicializar Variáveis:** Empregue IIFEs para inicializar variáveis com valores padrão ou realizar cálculos complexos logo após a declaração da função.
- **Executar Código Automático:** Utilize IIFEs para executar código automaticamente em um determinado momento, como ao carregar a página ou em resposta a um evento específico.
