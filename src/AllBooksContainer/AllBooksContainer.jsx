import { Fragment, useState } from "react"
import Searchbox from "./Searchbox"
import Sort from "./Sort"
import Books from "./Books";
import booksData from "./../../public/booksData.json"

const AllBooksContainer = () => {

    const [books, setBooks] = useState(booksData)

    // search by book name
    function onSearch(searchTerm) {
        // console.log(searchTerm)
        const searchByBookName = books.filter(book => book.bookName.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))

        setBooks(searchByBookName)

    }

    // favourite
    function handleFavourite(bookId) {
        console.log(bookId)
        const bookIndex = books.findIndex(book => book.id === bookId)

        console.log(bookIndex)

        const newBook = [...books]

        console.log(newBook)

        newBook[bookIndex].isFavourite = !newBook[bookIndex].isFavourite

        setBooks(newBook)

    }

    // sorting
    function onSort(sort) {

        if (sort === "nameAsc") {
            const newBooks = [...books]
            const sortedBooks = newBooks.sort((a, b) => a.bookName.localeCompare(b.bookName))
            setBooks(sortedBooks);
        } else if (sort === "nameDesc") {
            const newBooks = [...books]
            const sortedBooks = newBooks.sort((a, b) => b.bookName.localeCompare(a.bookName))
            setBooks(sortedBooks)
        } else if (sort === "yearAsc") {
            const newBooks = [...books]
            const sortedBooks = newBooks.sort((a, b) => new Date(a.publishedDate) - new Date(b.publishedDate))
            setBooks(sortedBooks)
        } else if (sort === "yearDesc") {
            const newBooks = [...books]
            const sortedBooks = newBooks.sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate))
            setBooks(sortedBooks)
        }

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
                        <Sort onSort={onSort} />

                    </div>
                </header>

                <Books booksData={books} handleFavourite={handleFavourite} />
                {/* Books */}


            </main>

        </Fragment>
    )
}
export default AllBooksContainer