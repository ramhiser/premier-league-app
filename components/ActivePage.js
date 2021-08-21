import { useRouter } from 'next/router'

import Matches from "./Matches"
import News from "./News"
import Players from "./Players"
import Standings from "./standings/Standings"
import Stats from "./Stats"


export default function ActivePage() {
    // Reads query params via router: ?page=standings
    const router = useRouter()
    const active_page = router.query.page;

    // TODO: Add background color in div here

    // Conditional Rendering. Better way?
    // Source: https://reactjs.org/docs/conditional-rendering.html
    if (active_page == "matches") {
        return <Matches />
    } else if (active_page == "players") {
        return <Players />
    } else if (active_page == "stats") {
        return <Stats />
    } else if (active_page == "news") {
        return <News />
    } else { //if (active_page == "standings") {
        return <Standings />
    }
}
