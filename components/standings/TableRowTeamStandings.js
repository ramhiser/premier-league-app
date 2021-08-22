import Image from 'next/image'

import teams from '../../utils/teams'

function TableRowTeamStandings({standings, team_rank}) {
    console.log(standings);
    const team_data = teams[standings.team];
    return (
        <div className="grid grid-cols-11 text-sm bg-white hover:bg-gray-50 h-10 border-t border-b border-standings-border-gray">
            <div className="pl-2 m-auto text-right">{team_rank + 1}</div>
            <div className="m-auto w-max min-w-321">
                <Image
                    src={`/logos/${team_data.logo}`}
                    height={24}
                    width={24}
                />
                <div className="whitespace-nowrap">
                    {team_data.name}
                </div>
            </div>
            <div className="m-auto">{standings.matches_played}</div>
            <div className="m-auto text-left">{standings.wins}</div>
            <div className="m-auto">{standings.draws}</div>
            <div className="m-auto">{standings.losses}</div>
            <div className="m-auto">{standings.goals_for}</div>
            <div className="m-auto">{standings.goals_against}</div>
            <div className="m-auto">{standings.goal_difference}</div>
            <div className="m-auto">{standings.points}</div>
            {/* TODO: Last 5 matches */}
            <div></div>
        </div>
    )
}

export default TableRowTeamStandings
