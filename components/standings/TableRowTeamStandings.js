import Image from 'next/image'

import teams from '../../utils/teams'

function TableRowTeamStandings({standings, team_rank}) {
    console.log(standings);
    const team_data = teams[standings.team];
    return (
        <tr className="bg-white h-10 border-t border-b border-standings-border-gray">
            <td>{team_rank + 1}</td>
            <td className="align-text-middle">
                <Image
                    src={`/logos/${team_data.logo}`}
                    height={24}
                    width={24}
                />
                {team_data.name}
            </td>
            <td>{standings.matches_played}</td>
            <td>{standings.wins}</td>
            <td>{standings.draws}</td>
            <td>{standings.losses}</td>
            <td>{standings.goals_for}</td>
            <td>{standings.goals_against}</td>
            <td>{standings.goal_difference}</td>
            <td>{standings.points}</td>
            {/* TODO: Last 5 matches */}
            <td></td>
        </tr>
    )
}

export default TableRowTeamStandings
