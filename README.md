# Colgate Gas Boilerplate

Google Apps Script project setup with

-   TypeScript
-   Vue.js
-   Vuex
-   Vue-Router
-   Vuetify
-   Function call from client side

See https://docs.google.com/presentation/d/16iUrld0GfZj_bcTyOKtP4yAiU4IjP_TDZA6ISNdKw-4/edit?usp=sharing

## Principal Development

-   Compile/Development enviroment: VSCode, GitHub, Git.
-   Runtime enviroment: Browser, GAS.
-   Typescript: Strong type-language.
-   ESLint/Prettier: Code qualitification/Beautify (Airbnb).
-   Webpack + Babel: HTML/CSS/JS/IMG inline + compass.
-   Frontend: (Debuggable/Hot reload)
    -   Vue.js: The Progressive JavaScript Framework.
    -   Vuex: State management.
    -   Vue-Router: Navigation Page/Module.
    -   Vuetify: Materialize UI Design.
-   Backend:
    -   GAS: Backend code.

See: [THE 6 DEADLY SINS OF GOOGLE APPS SCRIPT ADD-ON DEVELOPMENT](https://www.lucidchart.com/techblog/2017/12/07/6-deadly-sins-google-apps-script-add-on/)

## Application Structure

Please follow application structure below during development

### FrontEnd

```console
.
├── store/
│   ├── index.ts
│   ├── actions.ts
│   ├── mutations.ts
│   └── modules/
│       ├── about/
│       │   ├── index.ts
│       │   ├── mutations.ts
│       │   └── actions.ts
│       ├── scanner/
│       │   ├── index.ts
│       │   ├── mutations.ts
│       │   └── actions.ts
│       └── ... <your module>/
│           ├── index.ts
│           ├── mutations.ts
│           └── actions.ts
├── components/
│   ├── common/
│   │   ├── AppObserver.vue
│   │   ├── NoSSR.vue
│   │   └── ... <your component>
│   ├── layout/
│   │   ├── Footer.vue
│   │   ├── AppBar.vue
│   │   ├── NavigationDrawer.vue
│   │   ├── NavigationDrawer/
│   │   │   └── ListMenu.vue
│   │   └── ... <your layout>
│   └── ui/
│       ├── AppButton.vue
│       ├── AppList.vue
│       └── ... <your widget>
├── views/
│   ├── Scanner/
│   │   ├── Barcode.vue
│   │   └── QrCode.vue
│   ├── Home.vue
│   ├── App.vue
│   └── ... <your view>
├── google/
│   ├── gapi.ts
│   └── script.ts
├── router.ts
├── mutation-types.ts
├── action-types.ts
└── settings.json
```

### BackEnd

```console
.
├── Code.ts
├── functions/
│   ├── index.ts
│   ├── doGet.ts
│   ├── doPost.ts
│   └── ... <your function>
└── settings.json
```

See: [Structuring Vue Components](https://vueschool.io/articles/vuejs-tutorials/structuring-vue-components/)
See: [Application Structure](https://vuex.vuejs.org/guide/structure.html)

## Setup

### Install Node Modules

```console
% npm install
```

### Compiles and Minifies for Production

```console
% npm run build
```

### Clasp Setup

```console
% npm -g install @google/clasp
% clasp login
% clasp create --type webapp --rootDir dist
Created new undefined script: https://script.google.com/d/**********/edit
Cloned 1 file.
└─ dist/appsscript.json
%
```

### Push Your Files to GAS Project

```console
% clasp push -f
└─ dist/Code.js
└─ dist/appsscript.json
└─ dist/index.html
Pushed 3 files.
```

### Open Webapp

```console
clasp open --webapp
? Open which deployment?
❯                               @HEAD - **********
Opening web application: **********
```

### Customize Configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## See Also

-   Vue CLI https://cli.vuejs.org/guide/
-   Vuex https://vuex.vuejs.org/
-   Vue-Router https://router.vuejs.org/
-   Vuetify https://vuetifyjs.com/ja/
-   html-webpack-plugin(v3) https://github.com/jantimon/html-webpack-plugin/tree/version-3.x
-   html-webpack-inline-source-plugin https://github.com/DustinJackson/html-webpack-inline-source-plugin/
-   webpack-cdn-plugin https://github.com/shirotech/webpack-cdn-plugin
-   Google Apps Script https://developers.google.com/apps-script/overview
-   Clasp https://github.com/google/clasp
