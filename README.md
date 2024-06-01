# Frontend for HashIt App


Aplikácia HahsIt umožňuje vytváranie hashov pomocou implementovaného algoritmu SHA-256. Taktiež ponúka aj možnosť využiť ostatné hashovacie funkcie ako MD5, SHA3, SHA-224 a pod., ktoré sú dostupné cez knižnicu crypto-js. Okrem toho, umožňuje porovnávanie hashov tým, že si uložíme hodnotu hashu a následne sa porovnáva so súčasným hashom. Uložená hodnota hashu obsahuje aj informáciu o použitej hashovacej funkcii. Ak sa hashe zhodujú, textové polia sa zafarbia zelenou farbou. Taktiež je možné skopírovať hodnotu hashu pre ďalšie použitie.

Je to klient-server aplikácia.
Klient bol naprogramovaný využitím frameworku Vue.js 3 v TypeScirpt a komponentovým frameworkom Quasar.
Klient obsahuje watch property pre automatické vykonanie hashu pri písaní a pri zvolení hashovacej funkcie.
Server bol naprogramovaný využitím frameworku FastAPI v Python.

### Run application with the following commands:

```bash
% cd kb-project
kb-project% npm install -g @quasar/cli
kb-project% npm install
kb-project% quasar dev
```
---

### Images

<img width="1437" alt="image" src="https://github.com/MatusGursky/kb-project-quasar/assets/93670256/73e26607-ee4f-4821-8ba3-218f950c01a0">

<img width="1440" alt="image" src="https://github.com/MatusGursky/kb-project-quasar/assets/93670256/b1e8cabd-b9f8-49a9-ab30-8d502f5c00f6">


