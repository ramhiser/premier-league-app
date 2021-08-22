import season_standings from "../../utils/season-standings";
import DropdownSeasons from "./DropdownSeasons"
import TableSeasonStandings from "./TableSeasonStandings";

// import Table from 'react';

function Standings() {
    return (
        <div className="w-1/2 flex flex-col justify-center">
            <div>
                <DropdownSeasons />
            </div>
            <TableSeasonStandings standings={season_standings} />
        </div>
    )
}

export default Standings
