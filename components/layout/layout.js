import { Fragment } from "react"
import MainHeader from "./main-header"

function Layout({ children }) {
  return (
    <Fragment>
      <MainHeader />
      <main>{children}</main>
    </Fragment>
  )
}
export default Layout

/* there are few things about react that i do not know */
