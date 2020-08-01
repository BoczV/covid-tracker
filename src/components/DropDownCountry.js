import React from "react";
import { MenuItem } from "@material-ui/core";

function DropDownCountry(props) {
  return (
    <div>
      <MenuItem value={props.country.value}>{props.country.name}</MenuItem>
    </div>
  );
}

export default DropDownCountry;
