import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import fiberData from "../data/fiber_data.json";

function Row({ row }) {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" }, boxShadow: "none" }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="left">{row.id}</TableCell>
        <TableCell component="th" scope="row">
          {new Date(row.timestamp).toLocaleString()} {/* Formata a data */}
        </TableCell>
        <TableCell align="right">{row.totalNodes}</TableCell>
        <TableCell align="right">{row.averageTemp.toFixed(2)}°C</TableCell>
        <TableCell align="right">{row.averageHumidity.toFixed(2)}%</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Detalhes das Leituras
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Sensor</TableCell>
                    <TableCell align="right">Distância (m)</TableCell>
                    <TableCell align="right">Temperatura (°C)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.positions.map((sensor, index) => (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        {sensor.sensorId || `Sensor ${index + 1}`}
                      </TableCell>
                      <TableCell align="right">{sensor.meter}</TableCell>
                      <TableCell align="right">
                        {sensor.temperature.toFixed(2)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    timestamp: PropTypes.string.isRequired,
    totalNodes: PropTypes.number.isRequired,
    averageTemp: PropTypes.number.isRequired,
    averageHumidity: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    positions: PropTypes.arrayOf(
      PropTypes.shape({
        meter: PropTypes.number.isRequired,
        temperature: PropTypes.number.isRequired,
        sensorId: PropTypes.string
      })
    ).isRequired
  }).isRequired
};

export default function HistoryDataTable() {
  const rows = fiberData.map((entry, index) => ({
    timestamp: entry.timestamp,
    id: index + 1,
    totalNodes: entry.positions.length,
    averageTemp:
      entry.positions.reduce((sum, pos) => sum + pos.temperature, 0) /
      entry.positions.length,
    averageHumidity:
      entry.positions.reduce((sum, pos) => sum + (pos.humidity || 0), 0) /
      entry.positions.length,
    positions: entry.positions
  }));

  return (
    <Paper sx={{ boxShadow: "none" }}>
      <TableContainer sx={{ boxShadow: "none" }}>
        <Table sx={{ boxShadow: "none" }} aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell align="left">ID</TableCell>
              <TableCell>Timestamp (instante)</TableCell>
              <TableCell align="right">Total nodes</TableCell>
              <TableCell align="right">Average Temp (°C)</TableCell>
              <TableCell align="right">Average Humidity (%)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <Row key={index} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
