import { Fragment } from "react"
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdOutlineFavoriteBorder } from "react-icons/md";

const Actions = () => {
    return (
        <Fragment>
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
        </Fragment>
    )
}
export default Actions