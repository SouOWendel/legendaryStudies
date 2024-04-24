# Objetos

Um objeto em JavaScript é uma coleção de dinâmica de chave(s) e valor(es).

Também é definido como um _wrapper_, que, segundo a
[MDN Web Docs](https://developer.mozilla.org/pt-BR/docs/Glossary/Wrapper)
é uma função destinada a chamar uma ou mais funções, às vezes diretamente
por conveniência, e às vezes adaptá-las para fazer uma tarefa ligeiramente
diferente no processo.

Dentro de funções internas da função, há usos de função, tipos de variaveis e
também contextos diferentes que podem ser utilizados, um exemplo a seguir:

```javascript
const vitor = {
	nome: 'Vitor J. Guerra',
	idade: 25,
	descrever: function () {
		console.log(`Meu nome é ${this.nome}`);
	},
};
```

Sobre o contexto de variaveis, é importante entender o uso do `this`, o qual
faz o uso da variavel dentro do contexto que esta inserido. Por isso, no exemplo
não é preciso utilizar `vitor.nome`, mas utilizando o contexto, é possível entender
que pode-se utilizar apenas `this.nome`.

Também é possível dinamizar o acesso as informações de objetos, utilizando a seguinte
notação durante a chamada, ao invés do ponto: `vitor['nome']`.

# Classes

Classes em JavaScript são basicamente modelos usados para criar objetos. Pense nelas como plantas usadas para construir casas. A planta define a estrutura da casa, assim como a classe define a estrutura do objeto.

Veja algumas características das classes em JavaScript:

- **Molde para objetos:** Classes servem como um molde para criar objetos com propriedades (características) e métodos (comportamentos) semelhantes.
- **Propriedades:** Propriedades são como variáveis que definem os atributos de um objeto.
- **Métodos:** Métodos são funções que definem o comportamento do objeto. Eles têm acesso às propriedades do objeto.
- **Sintaxe introduzida no ES6:** Classes foram introduzidas no ECMAScript 2015 (ES6), tornando o JavaScript mais parecido com outras linguagens de programação orientadas a objetos.
  Resumindo, classes ajudam a organizar o seu código JavaScript de forma mais limpa e eficiente, facilitando a criação e manipulação de objetos.

No exemplo anterior, pode-se criar uma classe pessoa de seguinte forma:

```javascript
class Pessoa {
	nome;
	idade;
	descrever() {
		console.log(`Meu nome é ${this.nome}`);
	}
}

const vitor = new Pessoa();
vitor.nome = 'Vitor J. Guerra';
vitor.idade = 25;
```

É notório que a classe se tornou um exemplo de como é a estrutura, no sentido
de informações, de uma pessoa, ou seja, um modelo, por isso é possível criar
diversas pessoas utilizando essa classe, como:

```javascript
const renan = new Pessoa();
renan.nome = 'Renan J. Guerra';
renan.idade = 30;
```

Quando utilizamos a classe para criar uma pessoa, isso é chamado de instanciamento,
também frequentemente chamado apenas de instância, isto é feito como no trecho
`const renan = new Pessoa();`.

A diferença de classe e instância é que classe é uma definição do que é o objeto e
a instância é uma ocorrência deste objeto.

## Classes com Construtor

Ele é resumido em o que é feito quando a classe é chamada. Criar um construtor
adiciona pré-requisitos a uma classe, como adicionar um nome ou uma idade.

Em JavaScript, o construtor é um método especial com um papel fundamental na criação e inicialização de objetos a partir de uma classe. Ele funciona como a base fundamental de um objeto, definindo suas propriedades e configurações iniciais.

Características do construtor:

- **Método especial:** Apenas um método com o nome constructor pode existir em uma classe. Tentar declarar outro método com esse nome resultará em um erro.
- **Execução automática:** O construtor é executado automaticamente quando um novo objeto é criado a partir da classe.
- **Inicialização de propriedades:** O construtor é tipicamente utilizado para inicializar as propriedades do objeto, atribuindo valores iniciais a elas.
- **Palavra-chave `this`:** A palavra-chave this dentro do construtor se refere ao novo objeto que está sendo criado.
- **Chamada do construtor pai:** O construtor pode chamar o construtor da classe pai (superclasse) usando a palavra-chave super.
  Em resumo:

O construtor é a peça fundamental na construção de objetos em JavaScript. Ele define as propriedades iniciais e configurações do objeto, garantindo que cada novo objeto criado a partir da classe tenha a base necessária para funcionar corretamente.

Exemplo de utilização do construtor:

```javascript
class Pessoa {
	constructor(nome, idade) {
		this.nome = nome;
		this.idade = idade;
	}

	apresentar() {
		console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
	}
}

const pessoa1 = new Pessoa('João', 25);
const pessoa2 = new Pessoa('Maria', 30);

pessoa1.apresentar(); // Olá, meu nome é João e tenho 25 anos.
pessoa2.apresentar(); // Olá, meu nome é Maria e tenho 30 anos.
```

# Boas práticas ao criar classes

O uso de letra inicial maiuscula, a chamada capitalização.
