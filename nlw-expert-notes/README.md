# Anotações

Dentro da aplicação, na pasta src, o principal arquivo da aplicação é o main.tsx, que é importado para exibição no
arquivo index.html, localizado na basta base deste projeto em específico.

O que dá vida ao React é o trio: componente, propriedade, estado. É algo de uso frequente durante o desenvolvimento
utilizando o ReactJS.

Uma ótima dica para o uso de API é o uso do [Caniuse](https://caniuse.com/), um site para verificar a compatibilidade
das APIs em diversos navegadores populares.

## Scripts

- dev: utilizado enquanto estiver com a aplicação em desenvolvimento;
- build: gera a versão menos carregada, criando arquivos para a versão em produção no ambiente de produção;
- lint: faz o lint dos arquivos;
- preview: cria uma pre-visualização do projeto em ambiente de produção.

## Dependências

- **React**: utilizado para criar interfaces para mobille, para realidade virtual, para televisão, entre outros. Sendo
  uma dependência core para o desenvolvimento, sempre acompanhado de uma dependência que adapte-o para o uso no ambiente,
  como por exemplo: react-dom, react-TV, react-Vr;

## Bibliotecas

- **Tailwind**: uma biblioteca de classes de utilidade, utilizada para estilização de HTML. É uma API com foco em temas,
  facilita a responsividade e a compatibilidade do CSS em todo o projeto, através da padronização por criação de tema;
- **Radix AI**: uma biblioteca de componentes open-source otimizada para desenvolvimento rápido, facil manutenção e
  também acessibilidade, que simplifica as criações com o uso de importações de componentes;
- **date-fns**: provém de forma mais compreensiva, simples e consistente, ferramentas para manipular datas em JavaScript,
  browser & NodeJS;
- **lucide-react**: um pacote de ícones open-source com mais de 1000 arquivos svg, distribuidos entre icones e simbolos;
- **Sonner**: uma biblioteca para criação de toast, uma espécie de pop-up ou caixa de mensagem para notificação e mensagens.

## Definições

- **Componentes**: dentro do React, de modo simplificado, se tratam de funções que devolvem HTML para o cliente.

## Novos estudos

- [ ] Propriedade `flex` do CSS;
- [ ] Conceito de propriedades do ReactJS (também chamado de props);
- [ ] Estados do ReactJS, códigos como: `useState(boolean)`;
- [ ] Events do JavaScript;
- [ ] Funções de form como onClick e onChange;
- [ ] Estudar localStorage;
- [ ] Estudar conceito de Lifting State Up aplicado para gerenciamento de notas;

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
	// other rules...
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: ['./tsconfig.json', './tsconfig.node.json'],
		tsconfigRootDir: __dirname,
	},
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
