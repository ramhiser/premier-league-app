import { useRouter } from 'next/router';

function Nav() {

    const pages = ["matches", "news", "standings", "stats", "players"];
    const router = useRouter();
    
    return (
        <nav>
            <div className="flex bg-premier-league-purple justify-center text-sm uppercase text-gray-200 font-sans">
                {/* TODO: Need the hover PL BG color */}
                {/* TODO: Bottom border color = white when active */}
                {pages.map(page => 
                    <div
                    onClick={() => router.push(`?page=${page}`)}
                    key={page} className="cursor-pointer flex items-center justify-center w-40 h-12 align-text-middle hover:text-white hover:bg-red-500">{page}</div>
                )}
            </div>
        </nav>
    )
}

export default Nav
