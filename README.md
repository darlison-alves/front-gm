Principais Libs utilizadas
================
- styled-components
- redux
- react-redux
- react-router-dom
- axios
- font-awesome


Estrutura de Pastas
===========

```
src
└─  Components
├── Pages
├── Redux
├── styles 
```

Na Pasta `src` fica toda a aplicação , dentro há os arquivo `index.js`, arquivo inicial, ele que é executado para iniciar o app, `App.js` que centraliza as configurações inicias e o arquivo `routes.js` que configuras as rotas do app

`Pasta src/Components` Guarda os compoments principais e individuais
`Pasta src/Pages` Guarda os components tidos como pagina, utilizado para agrupar os components de `src/Components`
`Pasta src/Redux` Guarda toda as estrutura do REDUX pasta como `actions`, `reducers`

### Tests

Os Tests ficam na raiz do projeto na para `tests` no mesmo nivel da pasta `src`.

estrutura do diretório de`tests`:

```
tests
├──  redux 
        └── actions.test.js
        └── reducers.test.js
```
