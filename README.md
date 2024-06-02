# Frontend for HashIt App


Aplikácia HashIt umožňuje vytváranie hashov pomocou implementovaného algoritmu SHA-256 a ponúka aj možnosť využiť ostatné hashovacie funkcie ako MD5, SHA3, SHA-224 a ďalšie dostupné cez knižnicu crypto-js. Umožňuje tiež porovnávanie hashov tým, že uložíme hodnotu hashu a následne ju porovnávame so súčasným hashom. Uložená hodnota hashu obsahuje aj informáciu o použitej hashovacej funkcii. Ak sa hashe zhodujú, textové polia sa zafarbia zelenou farbou. Aplikácia tiež umožňuje skopírovať hodnotu hashu pre ďalšie použitie.

Je to klient-server aplikácia. Klient bol naprogramovaný využitím frameworku Vue.js 3 v TypeScript a komponentového frameworku Quasar. Klient obsahuje watch property pre automatické vykonanie hashu pri písaní a pri zvolení hashovacej funkcie. Server bol naprogramovaný využitím frameworku FastAPI v Python.

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


