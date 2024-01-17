import { Fragment } from "react"
import LWSLogo from "./assets/lws-logo-en.svg"
import { IoNotificationsOutline } from "react-icons/io5";

const Navbar = () => {
    return (
        <Fragment>

            <nav className="py-6 ">
                <div className="container mx-auto flex items-center justify-between gap-x-6 max-w-7xl">

                    {/* Logo */}
                    <a href="/">
                        <img
                            className="max-w-[100px] md:max-w-[165px]"
                            src={LWSLogo}
                            alt="Lws"
                        />
                    </a>
                    {/* Logo end */}

                    {/* Notification */}
                    <div className=" text-xl md:text-2xl lg:text-3xl" >
                        <IoNotificationsOutline />
                    </div>
                </div>
            </nav>
            {/* Notification end */}

        </Fragment>
    )
}
export default Navbar