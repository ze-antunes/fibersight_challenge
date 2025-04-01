import React from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import fiberData from "../data/fiber_data.json";

const getColorFromTemperature = (temp) => {
  if (temp < 15) return "#0000FF"; // Azul para frio
  if (temp < 25) return "#00BFFF"; // Azul-claro
  if (temp < 35) return "#FFA500"; // Laranja
  return "#FF0000"; // Vermelho quente
};

const FiberMap = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    // Usar o último timestamp
    const latestData = fiberData[fiberData.length - 1].positions;

    // Gerar coordenadas fictícias com base no metro
    // Ponto inicial arbitrário
    const startLat = 40.6405;
    const startLng = -8.6538;

    const coords = latestData.map((pos, index) => ({
      lat: startLat + index * 0.0002, // Simulação de distância
      lng: startLng + index * 0.0002,
      temperature: pos.temperature
    }));

    setPositions(coords);
  }, []);

  return (
    <MapContainer
      center={[40.6405, -8.6538]}
      zoom={13}
      style={{ width: "100%", height: "400px" }}
    >
      <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"/>
      {positions.length > 1 &&
        positions.map((point, index) => {
          if (index === positions.length - 1) return null;

          const nextPoint = positions[index + 1];

          return (
            <Polyline
              key={index}
              positions={[
                [point.lat, point.lng],
                [nextPoint.lat, nextPoint.lng],
              ]}
              pathOptions={{ color: getColorFromTemperature(point.temperature), weight: 3 }}
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
