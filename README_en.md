# FiberSight Frontend & UI Challenge

<p align="center">
  <img src="documents\preview.png" alt="Preview" width="100%"/>
</p>

- Github Repo: https://github.com/ze-antunes/fibersight_challenge
- Deployment: https://fibersight-challenge.vercel.app
- Figma: https://www.figma.com/design/3XyIwM7j7tB8I4DPELTv1k/Fiber-Dash?node-id=1-2&t=Cz2WLOkZo8FN99rZ-1
- Clickup - Project Management - https://sharing.clickup.com/90151021059/b/h/6-901509774982-2/3897a05f3488584

## 📚 About the Project
This project was developed in response to the challenge proposed by **FiberSight** for the professional internship position in **Design & Frontend**.

The goal was to create an interactive dashboard that displays temperature along a fiber optic cable, integrating a map, graphical visualizations, and a clean, intuitive design.

The project was implemented with **React.js** using **MUI (Material-UI)** to present fiber sensor data in interactive tables, **Recharts** to draw charts, and **React Leaflet** to render interactive maps.

## 🛠️ Technologies Used

- [React.js](https://react.dev/) - Library for building user interfaces.
- [Material-UI (MUI)](https://mui.com/) - Styled components for React.
- [PropTypes](https://www.npmjs.com/package/prop-types) - Runtime props validation for React components.
- [React Leaflet](https://react-leaflet.js.org/) – React wrapper for the Leaflet library, allowing the creation of interactive maps with markers and dynamic layers. Used to visually represent the fiber optic's position on the map.
- [Recharts](https://recharts.org/en-US/) – Charting library built on top of D3.js and React. Used to visualize historical temperature and humidity data in line and area formats, with a simple and responsive API.

## 📂 Project Structure

```
📂 fibersight_challenge
├── 📂 documents
│   ├── 📂 DS                  # Design documentation
│   ├── 📂 QA                  # Quality documentation and processes
│   ├── 📄 fiber_data.xlsx     # Original sensor data file
│   └── 📄 frontend_challenge.pdf
│
├── 📂 public                  # Public assets for the final build
│   ├── *.ico, *.svg, *.png    # Icons and logos
│   └── index.html             # HTML entry point
│
├── 📂 src
│   ├── 📂 assets              # Static files
│   ├── 📂 components          # Reusable components
│   │   ├── HistoryDataTable.jsx
│   │   └── Row.jsx
│   ├── 📂 contexts            # Context API for global state
│   ├── 📂 data                # JSON data converted from Excel
│   │   └── fiber_data.json
│   ├── 📂 pages               # Main application pages (Analytics, History)
│   ├── App.js                # Main app component
│   ├── index.js              # React entry point
│   └── index.css             # Global styles
│
├── .gitignore
├── craco.config.js           # CRACO configuration
├── LICENSE
├── package.json
├── package-lock.json
├── README.md
└── tailwind.config.js
```

## 🚀 Installation and Running

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/ze-antunes/fibersight_challenge.git
cd fibersight_challenge
```

### 2️⃣ Install Dependencies

```sh
npm install --legacy-peer-deps
```

### 3️⃣ Start Development Server

```sh
npm run start
```

The project will open at `http://localhost:3000/`.

## 📜 License

This project is available under the [MIT License](LICENSE).

---
🚀 Developed with React.js + MUI
