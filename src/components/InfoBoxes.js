import React from "react";
import InfoBox from "./InfoBox";
import { prettyPrintStat } from "../Util/prettyPrintStat";

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
      <InfoBox
        title="Coronavirus Cases"
        cases={prettyPrintStat(todayCases)}
        total={prettyPrintStat(cases)}
      />
      <InfoBox
        title="Recovered"
        cases={prettyPrintStat(todayRecovered)}
        total={prettyPrintStat(recovered)}
      />
      <InfoBox
        title="Deaths"
        cases={prettyPrintStat(todayDeaths)}
        total={prettyPrintStat(deaths)}
      />
    </div>
  );
}

export default InfoBoxes;
