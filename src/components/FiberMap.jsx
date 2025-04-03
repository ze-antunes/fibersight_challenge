import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  Tooltip
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import fiberData from "../data/fiber_data.json";
import { useStateContext } from "../contexts/ContextProvider";

const getColorFromTemperature = (temp) => {
  if (temp < 15) return "#0000FF"; // Azul para frio
  if (temp < 25) return "#00BFFF"; // Azul-claro
  if (temp < 35) return "#FFA500"; // Laranja
  return "#FF0000"; // Vermelho quente
};

const FiberMap = (height) => {
  const [positions, setPositions] = useState([]);
  let { currentMode } = useStateContext();

  useEffect(() => {
    // Usar o último timestamp
    const latestData = fiberData[fiberData.length - 1].positions;
    // console.table(latestData)

    // Gerar coordenadas fictícias com base no metro
    // Ponto inicial arbitrário
    const startLat = 40.6416;
    const startLng = -8.6531;

    const coords = latestData.map((pos, index) => ({
      lat: startLat + index * 0.000002, // Simulação de distância
      lng: startLng + index * 0.00001,
      temperature: pos.temperature
    }));

    setPositions(coords);
  }, []);

  return (
    <MapContainer
      center={[40.6418, -8.652]}
      zoom={18}
      style={{ width: "100%", minHeight: height.height + "px" }}
    >
      <TileLayer
        url={
          currentMode === "Dark"
            ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            : "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        }
      />
      {positions.length > 1 &&
        positions.map((point, index) => {
          if (index === positions.length - 1) return null;

          const nextPoint = positions[index + 1];

          return (
            <Polyline
              key={index}
              positions={[
                [point.lat, point.lng],
                [nextPoint.lat, nextPoint.lng]
              ]}
              pathOptions={{
                color: getColorFromTemperature(point.temperature),
                weight: 5
              }}
            >
              <Tooltip>
                <span>{`Temp: ${point.temperature.toFixed(1)} °C`}</span>
              </Tooltip>
            </Polyline>
          );
        })}
    </MapContainer>
  );
};

export default FiberMap;