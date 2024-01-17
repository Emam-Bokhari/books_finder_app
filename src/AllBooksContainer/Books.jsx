import { Fragment } from "react"
import star from "./../assets/star.svg"
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import Book from "./../assets/book.png"

const Books = () => {
    return (
        <Fragment>
            <div
                className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
                {/* book item */}
                <div className="space-y-3">
                    {/* thumbnail */}
                    <div
                        className="flex items-center justify-center rounded-md border border-[#324251]/30 bg-white p-4"
                    >
                        <img className="max-w-[144px]" src={Book} alt="book name" />
                    </div>
                    {/* info */}
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold lg:text-xl">JavaScript and Jquery</h4>
                        <p className="text-xs lg:text-sm">By : <span>Jon Duckett</span></p>
                        <div className="flex items-center justify-between">
                            <h4 className="text-lg font-bold lg:text-xl">$62</h4>
                            {/* starts */}
                            <div className="flex items-center space-x-1">
                                <img src={star} />
                                <img src={star} />
                                <img src={star} />
                                <img src={star} />
                                <span className="text-xs lg:text-sm">(4 Star)</span>
                            </div>
                            {/* end */}
                        </div>

                        <div className="flex items-center gap-3 text-xs lg:text-sm">
                            <button
                                className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336] py-1.5 text-white transition-all hover:opacity-80 lg:py-1.5"
                            >
                                <div className="text-lg md:text-xl lg:text-2xl" >
                                    < MdOutlineShoppingCart />
                                </div>

                                Add to Cart
                            </button>
                            <button
                                className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336]/[14%] py-1.5 text-[#1C4336] transition-all hover:bg-[#1C4336]/[24%] lg:py-1.5"
                            >
                                <div className="text-lg md:text-xl lg:text-2xl" >
                                    <MdOutlineFavoriteBorder />
                                </div>

                                Favourite
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </Fragment>
    )
}
export default Books