import { useRouter } from 'next/router';

function Nav() {

    const pages = ["matches", "news", "standings", "stats", "players"];
    const router = useRouter();
    
    return (
        <nav>
            <div className="flex bg-premier-league-purple justify-center py-3 text-sm uppercase text-gray-200 font-sans space-x-12 sm:space-x-24">
                {/* TODO: Need the hover PL BG color */}
                {/* TODO: Hover should fill entire box, not just around letters */}
                {/* TODO: Bottom border color = white when active */}
                {pages.map(page => 
                    <h2
                    onClick={() => router.push(`?page=${page}`)}
                    key={page} className="cursor-pointer hover:text-white hover:bg-red-500">{page}</h2>
                )}
            </div>
        </nav>
    )
}

export default Nav
