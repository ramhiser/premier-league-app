import season_standings from "../../utils/season-standings";
import TableSeasonStandings from "./TableSeasonStandings";

// import Table from 'react';

function Standings() {
    return (
        <div>
            <div>
                {/* TODO: Dropdown to choose season */}
                Season: 2021-2022
            </div>
            <TableSeasonStandings standings={season_standings} />
        </div>
    )
}

export default Standings
