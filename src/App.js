import React, { useState, useEffect } from "react";
import "./Styles/App.css";
import { MenuItem, FormControl, Select } from "@material-ui/core";
import Axios from "axios";

function App() {
  const [countries, setCountries] = useState([]);

  // useEffect(() => {
  //   const url = "https://disease.sh/v3/covid-19/countries";
  //   const getCountriesData = async () => {
  //     await fetch(url)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         const countries = data.map((country) => ({
  //           name: country.country,
  //           value: country.countryInfo.iso2,
  //           id: country.countryInfo._id,
  //         }));
  //         setCountries(countries);
  //       });
  //   };
  //   getCountriesData();
  // }, []);

  useEffect(() => {
    const url = "https://disease.sh/v3/covid-19/countries";
    Axios.get(url).then((res) => {
      const countries = res.data.map((country) => ({
        name: country.country,
        value: country.countryInfo.iso2,
        id: country.countryInfo._id,
      }));
      setCountries(countries);
    });
  }, []);

  return (
    <div className="App">
      {/* Header */}
      <div className="app__header">
        <h1>COVID-19 TRACKER</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" value="abc">
            {countries.map((country) => (
              <MenuItem key={country.id} value={country.value}>
                {country.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      {/* Titlte + Select input */}
      {/* Infoboxs */}
      {/* Infoboxs */}
      {/* Infoboxs */}

      {/* Table */}
      {/* Graph */}

      {/* Map */}
    </div>
  );
}

export default App;
