import Image from 'next/image'

import teams from '../../utils/teams'

function TableRowTeamStandings({standings, team_rank}) {
    console.log(standings);
    const team_data = teams[standings.team];
    return (
        <div className="grid grid-cols-11 bg-white h-10 border-t border-b border-standings-border-gray">
            <div>{team_rank + 1}</div>
            <div className="min-w-321">
                <Image
                    src={`/logos/${team_data.logo}`}
                    height={24}
                    width={24}
                />
                {team_data.name}
            </div>
            <div>{standings.matches_played}</div>
            <div>{standings.wins}</div>
            <div>{standings.draws}</div>
            <div>{standings.losses}</div>
            <div>{standings.goals_for}</div>
            <div>{standings.goals_against}</div>
            <div>{standings.goal_difference}</div>
            <div>{standings.points}</div>
            {/* TODO: Last 5 matches */}
            <div></div>
        </div>
    )
}

export default TableRowTeamStandings
