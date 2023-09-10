import Link from "next/link"

import classes from "./button.module.css"

function Button({ children, link, onclick }) {
  return link ? (
    <Link className={classes.btn} href={link}>
      {children}
    </Link>
  ) : (
    <button className={classes.btn} onClick={onclick}>
      {children}
    </button>
  )
}

/* so button ek aisa componet tha mera jo ki arag link hai to anchor 
tag ki tarah behave karega nai toh button ki tarah behave karega. */
/* ye keh raha hai ki custom style ke liye ye important  */
export default Button
