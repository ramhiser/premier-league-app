import { useLocation } from 'react-router-dom';

import Matches from "./Matches"
import News from "./News"
import Players from "./Players"
import Standings from "./Standings"
import Stats from "./Stats"


// A custom hook that builds on useLocation to parse
// the query string for you.
// Source: https://reactrouter.com/web/example/query-parameters
function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function ActivePage() {
    let active_page = "MATCHES";
    // Conditional Rendering. Better way?
    // Source: https://reactjs.org/docs/conditional-rendering.html
    if (active_page == "STANDINGS") {
        return <Standings />
    } else if (active_page == "MATCHES") {
        return <Matches />
    } else if (active_page == "PLAYERS") {
        return <Players />
    } else if (active_page == "STATS") {
        return <Stats />
    } else if (active_page == "NEWS") {
        return <News />
    }
}
