import TableRowTeamStandings from './TableRowTeamStandings'

function TableSeasonStandings({standings}) {
    return (
        <table>
            <thead>
                <tr>
                    <td>#</td>
                    <td>Club</td>
                    <td>MP</td>
                    <td>W</td>
                    <td>D</td>
                    <td>L</td>
                    <td>GF</td>
                    <td>GA</td>
                    <td>GD</td>
                    <td>Pts</td>
                    <td>Last 5</td>
                </tr>
            </thead>
            <tbody>
                {standings.map((team_standings) => (
                    <TableRowTeamStandings key={team_standings.team} standings={team_standings} />
                ))}
            </tbody>
        </table>
    )
}

export default TableSeasonStandings
