import { Fragment, useState } from "react"
import { IoSearch } from "react-icons/io5";

const Searchbox = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("")

    function handleSearch(event) {
        event.preventDefault()
        onSearch(searchTerm)
    }

    return (
        <Fragment>

            <form>
                <div className="flex">
                    <div
                        className="relative w-full overflow-hidden rounded-lg border-2 border-[#1C4336] text-[#1C4336] md:min-w-[380px] lg:min-w-[440px]"
                    >
                        <input
                            value={searchTerm}
                            onChange={() => setSearchTerm(event.target.value)}
                            type="search"
                            id="search-dropdown"
                            className="z-20 block w-full bg-white px-4 py-2.5 pr-10 text-[#1C4336] placeholder:text-[#1C4336] focus:outline-none"
                            placeholder="Search Book"
                            required
                        />
                        <div className="absolute right-0 top-0 flex h-full items-center">
                            <button
                                onClick={handleSearch}
                                type="submit"
                                className="mr-1.5 flex items-center space-x-1.5 rounded-md rounded-e-lg bg-[#1C4336] px-4 py-2.5 text-sm text-white"
                            >
                                <IoSearch className="text-lg" />
                                <span>Search</span>
                            </button>
                        </div>
                    </div>
                </div>
            </form>

        </Fragment>
    )
}
export default Searchbox