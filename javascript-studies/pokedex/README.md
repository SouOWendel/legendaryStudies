<a href="https://www.linkedin.com/in/wendel-henrique/" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
<a href="https://mail.google.com/mail/u/0/?fs=1&to=souowendel@gmail.com&su=Enquiry&tf=cm" target="_blank"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>

# Sobre o que é?
Um projeto de Pokedex utilizando JavaScript para treino de requisições de API usando o protocolo cliente e servidor. O foco
deste projeto é entender o protocolo HTTP e fazer o uso do mesmo utilizando apenas a linguagem de programação.

# Abordagem de Mobile First
Neste projeto é utilizado o Mobile First, uma abordagem de design e desenvolvimento web que prioriza a experi~encia do
usuário em dispositivos móveis. Em outras palavras, o site é projetado e otimizado para funcionar perfeitamente em smartphones
e tablets antes de ser adaptado para telas maiores. Isso trás alguns pontos para o projeto:
- Aumento do uso de dispositivos móveis: Cada vez mais pessoas acessam a internet através de seus smartphones. Essa tendência
 é irreversível e as empresas precisam estar preparadas para atender essa demanda.
- Melhor experiência do usuário: Ao priorizar o mobile, você garante que seu site seja fácil de navegar, rápido de carregar e
 responsivo em diferentes tamanhos de tela. Isso resulta em uma experiência mais satisfatória para o usuário, aumentando as chances de conversão.
- Melhora no SEO: Os motores de busca, como o Google, dão preferência a sites otimizados para dispositivos móveis. Ao adotar o
 Mobile First, você aumenta suas chances de ranquear melhor nos resultados de pesquisa.
- Adaptação mais fácil para desktops: Ao começar pelo mobile, você cria um layout mais clean e focado no essencial. Essa base
 facilita a adaptação para telas maiores, resultando em um site mais organizado e intuitivo.
- Aumento da credibilidade: Um site otimizado para mobile transmite a imagem de uma empresa moderna e preocupada com a experiência
 do usuário.

# Dependencias e seus objetivos
- [HTTP-SERVER](https://www.npmjs.com/package/http-server): uma dependência para lançar um servidor local, muito útil para testes
e também de simulação de ambiente de desenvolvimento, principalmente por conta de usar um IP local, um celular conectado na mesma
rede tem acesso também a sua aplicação, facilitando a criação de aplicativos adaptados aos dispositivos móveis, que tem foco
em responsividade.

## Opções mais tecnológicas
- ViteJS: Em breve mais detalhes.

# Algumas anotações de JavaScript
## O que é "Window" dentro do navegador?
Em breve...
## O que é "Document" dentro do navegador?
Em breve...
## O que é a função Map?
Em breve...

# Como funciona o protocolo HTTP?
É um protocolo cliente e servidor, por exemplo, o pedido é feito, processado e depois respondido.

A primeira parte importante da requisição de HTTP, é o url, ele deve informar o endereço. Este endereço é composto por um ${ip}/${path}.
Sendo path um caminho de identificação de recurso, já o IP de um site é um nome amigável que é utilizado por um servidor DNS para conversão no formato habitual de IPs (EX.: 127.0.0.1).

No caso desta aplicação, buscamos os recursos com o IP `https://pokeapi.co` utilizando do seguinte recurso `/api/v2/pokemon`.

O Request Method ou Método de Requisição pode ser um entre vários, como: GET, POST, PUT, DELETE, PATCH. Utilizando APIs de outra origem, normalmente há grande utilização de GET para requisitar informações, já que normalmente não se pode alterar dados alheios sem autenticação.

**POST** tem o intuito de inserir ou atualizar dados gerais. **PUT** deve atualizar ou inserir recursos específicos. **DELETE** é utilizado para deletar dados.

## Query String
Sua sintaxe é de interrogação (?) com uma estrutura de chave e valor. Por exemplo: `https://pokeapi.co/api/v2/pokemon?type=grass&name=i`. Neste exemplo a Query String requisita o tipo (type) de grama (grass) e também os nomes (name) que iniciam com I.

Na API do PokeAPI pode-se utilizar do *offset* para delimitar o início e *limit* para limitar a quantidade de resultados, isso pode resultar em um método de páginação. Mais um exemplo é: `https://pokeapi.co/api/v2/pokemon?offset=0&limit=5`.

## Headers, Body, Content-Type e Outros
Os HEADERS são uma configuração das requisições e respostas entre cliente e servidor, chamados respectivamente de *request headers* e *response headers*. Basicamente é um conjunto de permissões e regras que delimitam o conteúdo.

Configurações que são passadas para o request headers podem ser *accept-languages*, *authorization*, entre outras.

Enquanto *Content-Type* se trata do que é realmente devolvido pelo servidor, que pode na maioria das vezes ser um `application/json` ou um formato de imagem.

Chamado de *request body*, utilizado para requisições ou respostas, deve ser utilizado o **Body** para conter dentro o conteúdo no formato que foi passado pelo *Content-Type*.

## Status Code
É uma forma de dizer o que aconteceu com a requisição.
- Respostas de Informação (100 - 199);
- Respostas de Sucesso (200 - 299);
- Respostas de Redirecionamento (300 - 399);
- Respostas de Erro de Cliente (400 - 499);
- Respostas de Erro de Servidor (500 - 599).

Para entender melhor a maioria dos status code, decida entre [gato](https://http.cat/) ou [cachorro](https://http.dog/) em um site que demonstra todos eles de forma ilustrativa e informativa.

## [Fetch API](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API)
"A Fetch API fornece uma interface para buscar recursos (por exemplo, em toda a rede). Parecerá familiar para qualquer pessoa que tenha usado XMLHttpRequest, porém a nova API oferece um conjunto de recursos mais poderoso e flexível."

### [Promises](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise)
O objeto Promise representa a eventual conclusão (ou falha) de uma operação assíncrona e seu valor resultante.

Para saber como as promises funcionam e como você pode usá-las, recomendamos que você leia Usando promises primeiro.

Uma Promise é um proxy para um valor não necessariamente conhecido quando a promise é criada. Ele permite que você associe manipuladores ao valor de sucesso ou motivo de falha de uma ação assíncrona. Isso permite que métodos assíncronos retornem valores como métodos síncronos: em vez de retornar imediatamente o valor final, o método assíncrono retorna uma promise para fornecer o valor em algum momento no futuro.

Uma Promise está em um destes estados:

- **pending**: estado inicial, nem cumprido nem rejeitado.
- **fulfilled**: significa que a operação foi concluída com sucesso.
- **rejected**: significa que a operação falhou.

O estado eventual de uma promise pendente pode ser fulfilled com um valor ou rejected com um motivo (erro). Quando uma dessas opções ocorre, os manipuladores associados enfileirados pelo método then de uma promise são chamados. Se a promise já tiver sido cumprida ou rejeitada quando um manipulador correspondente for anexado, o manipulador será chamado, portanto, não há condição de corrida entre a conclusão de uma operação assíncrona e a anexação de seus manipuladores.

Uma promise é considerada resolvida se for cumprida ou rejeitada, mas não pendente.

**Then**
Em caso de diversos Then um a frente do outro, a resposta de uma requisição irá
seguir para o próximo Then.

*Conversão de um body para Json*
```javascript
fetch(url).then(function (response) {
	return response.json();
}).then(function (jsonBody) {
	console.log(jsonBody);
});
```