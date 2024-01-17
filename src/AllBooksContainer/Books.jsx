import { Fragment } from "react"
import star from "./../assets/star.svg"
import Actions from "./Actions"

const Books = ({ booksData }) => {
    return (
        <Fragment>
            <div
                className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 "
            >
                {/* book item */}
                {booksData.map((book)=>(
                <div className="space-y-3">
                    {/* thumbnail */}
                    <div
                        className="flex items-center justify-center rounded-md border border-[#324251]/30 bg-white p-4"
                    >
                        <img className="max-w-[144px]" src={book.image} alt="book name" />
                    </div>

                    {/* info */}
                    <div key={book.id} className="space-y-3">
                        <h4 className="text-lg font-bold lg:text-xl">{book.bookName}</h4>
                        <p className="text-xs lg:text-sm">By : <span>{book.author}</span></p>
                        <div className="flex items-center justify-between">
                            <h4 className="text-lg font-bold lg:text-xl">${book.price}</h4>
                            {/* starts */}
                            <div className="flex items-center space-x-1">
                                <img src={star} />
                                <img src={star} />
                                <img src={star} />
                                <img src={star} />
                                <span className="text-xs lg:text-sm">({book.ratings} Star)</span>
                            </div>
                            {/* end */}
                        </div>

                        {/* Add to cart and favourite */}
                        <Actions />

                    </div>
                    
                    
                </div>
                ))}

            </div>
        </Fragment>
    )
}
export default Books