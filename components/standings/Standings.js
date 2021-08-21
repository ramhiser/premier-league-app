import season_standings from "../utils/season-standings";
import TeamSeasonSummary from "./TeamSeasonSummary";

// import Table from 'react';

function Standings() {
    console.log(season_standings);
    return (
        <div>
            <div>
                {/* TODO: Dropdown to choose season */}
                Season: 2021-2022
            </div>
            <div>
                {/* TODO: Column Headers */}
                Club
            </div>
            <div>
                {season_standings.map((team_standings) => (
                    <TeamSeasonSummary key={team_standings.team} standings={team_standings} />
                ))}
            </div>
        </div>
    )
}

export default Standings
