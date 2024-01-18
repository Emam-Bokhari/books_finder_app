import { Fragment, useState } from "react"

const Sort = ({ onSort }) => {

    const [sort, setSort] = useState("")

    function handleSort() {
        onSort(sort)
    }

    return (
        <Fragment>
            <div className="flex items-stretch space-x-3">
                {/* sort */}
                <select
                    onClick={handleSort}
                    value={sort}
                    onChange={() => setSort(event.target.value)}
                    className="cursor-pointer rounded-md border px-4 py-2 text-center text-gray-600"
                    name="sortBy"
                    id="sortBy"
                >
                    <option value="">Sort</option>
                    <option value="nameAsc">Name (A-Z)</option>
                    <option value="nameDesc">Name (Z-A)</option>
                    <option value="yearAsc">Publication Year (Oldest)</option>
                    <option value="yearDesc">Publication Year (Newest)</option>
                </select>

            </div>
        </Fragment>
    )
}
export default Sort