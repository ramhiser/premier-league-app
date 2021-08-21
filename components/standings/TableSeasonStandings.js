import TableRowTeamStandings from './TableRowTeamStandings'

function TableSeasonStandings({standings}) {
    return (
        <div className="flex flex-col font-sans bg-white min-w-full items-center justify-center align-text-middle">
            <div>
                <div className="flex flex-row text-sm h-10 text-standings-header-gray border-t-2 border-standings-border-gray">
                    <div className="min-w-321 text-left pl-4">Club</div>
                    <div className="min-w-32">MP</div>
                    <div className="min-w-32">W</div>
                    <div className="min-w-32">D</div>
                    <div className="min-w-32">L</div>
                    <div className="min-w-32">GF</div>
                    <div className="min-w-32">GA</div>
                    <div className="min-w-32">GD</div>
                    <div className="min-w-32">Pts</div>
                    <div className="min-w-32">Last 5</div>
                </div>
            </div>
            <div className="flex flex-col">
                {standings.map((team_standings, index) => (
                    <TableRowTeamStandings key={team_standings.team} standings={team_standings} team_rank={index} />
                ))}
            </div>
        </div>
    )
}

export default TableSeasonStandings
