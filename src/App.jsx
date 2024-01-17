import { Fragment } from "react"
import Navbar from "./Navbar"
import AllBooksContainer from "./AllBooksContainer/AllBooksContainer"
import Footer from "./Footer"

const App = () => {
  return (
    <Fragment>

      <Navbar />

      <AllBooksContainer />

      <Footer />

    </Fragment>
  )
}
export default App