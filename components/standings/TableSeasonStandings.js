import TableRowTeamStandings from './TableRowTeamStandings'

function TableSeasonStandings({standings}) {
    return (
        <table className="flex flex-col flex-auto font-sans bg-white min-w-full items-center justify-center align-text-middle">
            <thead>
                <tr className="text-sm h-10 text-standings-header-gray border-t-2 border-standings-border-gray">
                    <td></td>
                    <th className="min-w-321 font-normal text-left pl-4">Club</th>
                    <th className="min-w-32 font-normal">MP</th>
                    <th className="min-w-32 font-normal">W</th>
                    <th className="min-w-32 font-normal">D</th>
                    <th className="min-w-32 font-normal">L</th>
                    <th className="min-w-32 font-normal">GF</th>
                    <th className="min-w-32 font-normal">GA</th>
                    <th className="min-w-32 font-normal">GD</th>
                    <th className="min-w-32 font-normal">Pts</th>
                    <th className="min-w-32 font-normal">Last 5</th>
                </tr>
            </thead>
            <tbody className="flex flex-col flex-initial">
                {standings.map((team_standings, index) => (
                    <TableRowTeamStandings key={team_standings.team} standings={team_standings} team_rank={index} />
                ))}
            </tbody>
        </table>
    )
}

export default TableSeasonStandings
