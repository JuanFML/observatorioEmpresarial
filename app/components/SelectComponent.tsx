import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import type { Dispatch, SetStateAction } from "react";

type SelectComponentProps = {
  indicadorGrafica: number;
  setIndicadorGrafica: Dispatch<SetStateAction<number>>;
  indicadores: string[];
};

export const SelectComponent = (props: SelectComponentProps) => {
  const { indicadorGrafica, setIndicadorGrafica, indicadores } = props;
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Indicador</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={indicadorGrafica}
        label="Indicador"
        onChange={(event) => {
          setIndicadorGrafica(event.target.value);
        }}
      >
        {indicadores.map((indicador, index) => (
          <MenuItem value={index} key={index}>
            {indicador}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
