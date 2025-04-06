# FiberSight Frontend & UI Challenge

<p align="center">
  <img src="documents\preview.png" alt="Preview" width="100%"/>
</p>

- Github Repo: https://github.com/ze-antunes/fibersight_challenge
- Deployment: https://fibersight-challenge.vercel.app
- Figma: https://www.figma.com/design/3XyIwM7j7tB8I4DPELTv1k/Fiber-Dash?node-id=1-2&t=Cz2WLOkZo8FN99rZ-1
- Clickup: Gestão do projeto - https://sharing.clickup.com/90151021059/b/h/6-901509774982-2/3897a05f3488584

## 📚 Sobre o projeto
Este projeto foi desenvolvido como resposta ao desafio proposto pela **FiberSight** para a posição de estágio profissional em **Design & Frontend**.  

O objetivo foi criar uma dashboard interativa que apresenta a temperatura ao longo de uma fibra ótica, integrando mapa, visualizações gráficas e um design clean e intuitivo.

O projeto foi implementado com **React.js** que utiliza **MUI (Material-UI)** para appresentar dados de sensores de fibra ótica em tabelas interativas, **rechart** para desenhar os gráficos e **React Leaflet** para renderizar os mapas interativos.

## 🛠️ Tecnologias Usadas

- [React.js](https://react.dev/) - Biblioteca para a criação de interfaces.
- [Material-UI (MUI)](https://mui.com/) - Componentes estilizados para React.
- [PropTypes](https://www.npmjs.com/package/prop-types) - Validação de props em componentes React.
- [React Leaflet](https://react-leaflet.js.org/) – Wrapper da biblioteca Leaflet para React, permite a criação de mapas interativos com marcadores e camadas dinâmicas. Utilizado para representar visualmente a posição da fibra ótica no mapa.
- [Recharts](https://recharts.org/en-US/) – Biblioteca de gráficos construída sobre D3.js e React. Utilizada para visualizar os dados históricos de temperatura e humidade em formato de linha e área, com uma API simples e responsiva.

## 📂 Estrutura do Projeto

```
📂 fibersight_challenge
├── 📂 documents
│   ├── 📂 DS                  # Documentação do design
│   ├── 📂 QA                  # Documentação de qualidade e processos
│   ├── 📄 fiber_data.xlsx     # Ficheiro original de dados dos sensores
│   └── 📄 frontend_challenge.pdf
│
├── 📂 public                  # Assets públicos para o build final
│   ├── *.ico, *.svg, *.png    # Ícones e logotipos
│   └── index.html             # Ponto de entrada HTML
│
├── 📂 src
│   ├── 📂 assets              # Ficheiros estáticos
│   ├── 📂 components          # Componentes reutilizáveis
│   │   ├── HistoryDataTable.jsx
│   │   └── Row.jsx
│   ├── 📂 contexts            # Context API para estado global
│   ├── 📂 data                # Dados JSON convertidos do Excel
│   │   └── fiber_data.json
│   ├── 📂 pages               # Páginas principais da aplicação (Analytics, History)
│   ├── App.js                # Componente principal da app
│   ├── index.js              # Ponto de entrada do React
│   └── index.css             # Estilos globais
│
├── .gitignore
├── craco.config.js           # Configuração CRACO
├── LICENSE
├── package.json
├── package-lock.json
├── README.md
└── tailwind.config.js
```

## 🚀 Instalação e Execução

### 1️⃣ Clonar o Repositório

```sh
git clone https://github.com/ze-antunes/fibersight_challenge.git
cd fibersight_challenge
```

### 2️⃣ Instalar as Dependências

```sh
npm install --legacy-peer-deps
```

### 3️⃣ Iniciar o Servidor de Desenvolvimento

```sh
npm run start
```

O projeto será aberto em `http://localhost:3000/`.

## 📜 Licença

Este projeto está disponível sob a [MIT License](LICENSE).

---
🚀 Desenvolvido com React.js + MUI