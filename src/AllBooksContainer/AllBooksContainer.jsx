import { Fragment, useState } from "react"
import Searchbox from "./Searchbox"
import Sort from "./Sort"
import Books from "./Books";
import booksData from "./../../public/booksData.json"

const AllBooksContainer = () => {

    const [books, setBooks] = useState(booksData)

    function onSearch(searchTerm) {
        // console.log(searchTerm)
        const searchByBookName = books.filter(book => book.bookName.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))

        setBooks(searchByBookName)

    }

    return (
        <Fragment>

            <main className="my-10 lg:my-14">

                <header className="mb-8 lg:mb-10 mx-auto max-w-7xl">
                    <div
                        className="mx-auto flex items-end justify-between max-md:max-w-[95%] max-md:flex-col max-md:items-start max-md:space-y-4"
                    >
                        {/* info , title, search */}
                        <div>
                            <h6 className="mb-2 text-base lg:text-xl">Trending on 2021</h6>
                            <h2
                                className="mb-6 font-['Playfair_Display'] text-3xl font-bold lg:text-4xl"
                            >
                                Trending Books of the Year
                            </h2>

                            {/* searchbox */}
                            <Searchbox onSearch={onSearch} />

                        </div>

                        {/* sort */}
                        <Sort />

                    </div>
                </header>

                <Books booksData={books} />
                {/* Books */}


            </main>

        </Fragment>
    )
}
export default AllBooksContainer