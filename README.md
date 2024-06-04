# Frontend for HashIt App

The HashIt application allows the creation of hashes using the implemented SHA-256 algorithm and also offers the option to use other hashing functions such as MD5, SHA3, SHA-224, and others available through the crypto-js library. It also enables hash comparison by saving the hash value and then comparing it with the current hash. The saved hash value includes information about the used hashing function. If the hashes match, the text fields are highlighted in green. The application also allows copying the hash value for further use. The client contains a watch property for automatically performing the hash when typing and when selecting the hashing function.

This is a client-server application. The client was programmed using the Vue.js 3 framework in TypeScript and the Quasar component framework. The server was programmed using the FastAPI framework in Python.

### Run application with the following commands:

```bash
% cd kb-project
kb-project% npm install -g @quasar/cli
kb-project% npm install
kb-project% quasar dev
```

### Images

<img width="1437" alt="image" src="https://github.com/MatusGursky/kb-project-quasar/assets/93670256/73e26607-ee4f-4821-8ba3-218f950c01a0">

<img width="1440" alt="Snímka obrazovky 2024-06-01 o 23 42 21" src="https://github.com/MatusGursky/kb-project-quasar/assets/93670256/1141df3a-0811-46fe-86d2-1db81973a276">

<img width="1440" alt="image" src="https://github.com/MatusGursky/kb-project-quasar/assets/93670256/b1e8cabd-b9f8-49a9-ab30-8d502f5c00f6">


