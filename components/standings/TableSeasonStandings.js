import TableRowTeamStandings from './TableRowTeamStandings'

function TableSeasonStandings({standings}) {
    return (
        <div className="font-sans bg-white items-center justify-center align-text-middle">
            <div className="grid grid-cols-11 align-middle text-sm h-10 text-standings-header-gray border-t-2 border-l-2 border-r-2 border-standings-border-gray">
                <div className="col-span-2  m-auto min-w-321 text-left pl-4">Club</div>
                <div className="m-auto">MP</div>
                <div className="m-auto">W</div>
                <div className="m-auto">D</div>
                <div className="m-auto">L</div>
                <div className="m-auto">GF</div>
                <div className="m-auto">GA</div>
                <div className="m-auto">GD</div>
                <div className="m-auto">Pts</div>
                <div className="m-auto">Last 5</div>
            </div>
            <div className="bg-white h-10 border-t border-b border-l-2 border-r-2 border-standings-border-gray">
                {standings.map((team_standings, index) => (
                    <TableRowTeamStandings key={team_standings.team} standings={team_standings} team_rank={index} />
                ))}
            </div>
        </div>
    )
}

export default TableSeasonStandings
