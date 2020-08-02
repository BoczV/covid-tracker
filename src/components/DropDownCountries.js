import React from "react";
import { Select, MenuItem } from "@material-ui/core";
import DropDownCountry from "./DropDownCountry";

function DropDownCountries(props) {
  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
  };

  return (
    <div>
      <Select
        variant="outlined"
        onChange={onCountryChange}
        value={props.country}
      >
        <MenuItem value="worldwide">Worldwide</MenuItem>
        {props.countries.map((country) => (
          <DropDownCountry country={country} key={country.id} />
        ))}
      </Select>
    </div>
  );
}

export default DropDownCountries;
