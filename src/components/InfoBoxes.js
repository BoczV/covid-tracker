import React from "react";
import InfoBox from "./InfoBox";

function InfoBoxes({
  cases,
  todayCases,
  recovered,
  todayRecovered,
  deaths,
  todayDeaths,
}) {
  return (
    <div className="app__stats">
      <InfoBox title="Coronavirus Cases" cases={todayCases} total={cases} />
      <InfoBox title="Recovered" cases={todayRecovered} total={recovered} />
      <InfoBox title="Deaths" cases={todayDeaths} total={deaths} />
    </div>
  );
}

export default InfoBoxes;
