import EventList from "@/components/events/event-list"
import { getFilteredEvents } from "@/dummy-data"
import { useRouter } from "next/router"

/* so yaha pe plenty of validition lagega jo humko ya kisi ko v advanced me pata hona 
chahiye */

function FilteredEventsPage() {
  const router = useRouter()
  const filteredData = router.query.slugs

  console.log(filteredData)
  return <p>No events found</p>
}
export default FilteredEventsPage

/* ye sara chize advanced me socha hona chahiye ye sab chize se hi  */
/* agar ache se drill kare toh hi iske upar sense grow ho paega */
