import Image from 'next/image'

import teams from '../../utils/teams'

function TableRowTeamStandings({standings}) {
    console.log(standings);
    const team_data = teams[standings.team];
    return (
        <tr>
            <td>
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
        </tr>
    )
}

export default TableRowTeamStandings
