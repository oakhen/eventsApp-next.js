import Button from "@/components/ui/button"
import classes from "./search-event.module.css"
import { useRef } from "react"

function SearchEvent({ onSearch }) {
  const yearInputRef = useRef()
  const monthInputRef = useRef()
  const handleSubmit = (e) => {
    e.preventDefault()
    const selectedYear = yearInputRef.current.value
    const selectedMonth = monthInputRef.current.value

    onSearch(selectedYear, selectedMonth)
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearInputRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthInputRef}>
            {/* create options for 12 months  */}
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <Button>Find Events</Button>
    </form>
  )
}
export default SearchEvent

/* so yaha pe bohot kuch samajhne wala v chiz hai */

/* so yaha pe itna kuch hai already ki hum ache se kuch v vizualize nai kiye hai. */

/* so ab sab piche chhut raha hai. */
/* so yo sab ko dhyan se dobara vizualize krna hai. */
