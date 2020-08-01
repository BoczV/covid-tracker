import React, { useState, useEffect } from "react";
import "./Styles/App.css";
import {
  CardContent,
  Card,
  FormControl,
  Select,
  MenuItem,
} from "@material-ui/core";
import Axios from "axios";
import InfoBoxes from "./components/InfoBoxes";
import Map from "./components/Map";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});

  const capitalize = (countryName) => {
    return countryName.charAt(0).toUpperCase() + countryName.slice(1);
  };

  useEffect(() => {
    Axios.get("https://disease.sh/v3/covid-19/all").then((response) => {
      setCountryInfo(response.data);
    });
  }, []);

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

  const changeCountryInfo = (countryCode) => {
    const url =
      countryCode === "worldwide"
        ? `https://disease.sh/v3/covid-19/all`
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    Axios.get(url).then((response) => {
      setCountryInfo(response.data);
    });
  };

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode);

    changeCountryInfo(countryCode);
  };

  return (
    <div className="app">
      <div className="app__left">
        {/* Header with select input*/}
        <div className="app__header">
          <h1>COVID-19 TRACKER</h1>
          <h2>
            {country === "worldwide"
              ? capitalize(country)
              : countryInfo.country}
          </h2>

          <FormControl className="app__dropdown">
            <Select
              variant="outlined"
              onChange={onCountryChange}
              value={country}
            >
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {countries.map((country) => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        {/* Infoboxs */}
        <InfoBoxes
          cases={countryInfo.cases}
          todayCases={countryInfo.todayCases}
          recovered={countryInfo.recovered}
          todayRecovered={countryInfo.todayRecovered}
          deaths={countryInfo.deaths}
          todayDeaths={countryInfo.todayDeaths}
        />

        {/* Map */}
        <Map />
      </div>
      <Card className="app__right">
        <CardContent>
          <h3>Live Cases by Country</h3>
          {/* Table */}
          <h3>Worldwide new cases</h3>
          {/* Graph */}
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
