function DropdownSeasons() {
    return (
        <div className="flex flex-col pt-2 bg-standings-season-dropdown h-14 pl-6 font-sans ">
            <div className="text-xs text-gray-500 pl-1">Season</div>
            <div className="float-left">
                {/* #4285F4 */}
                <select className="bg-standings-season-dropdown text-sm text-blue-500 font-bold">
                    <option value="2021">2021-22</option>
                    <option value="2020">2020-21</option>
                    <option value="2019">2019-20</option>
                    <option value="2018">2018-19</option>
                    <option value="2017">2017-18</option>
                    <option value="2016">2016-17</option>
                    <option value="2015">2015-16</option>
                    <option value="2014">2014-15</option>
                </select>
            </div>
        </div>
    )
}

export default DropdownSeasons
