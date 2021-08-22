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

    let SelectedPage;
    switch(active_page) {
        case "matches":
            SelectedPage = <Matches />
        case "players":
            SelectedPage = <Players />
        case "stats":
            SelectedPage = <Stats />
        case "news":
            SelectedPage = <News />
        default:
            SelectedPage = <Standings />
    }

    return (
        <div className="bg-red-500">
            {SelectedPage}
        </div>
    )
}
