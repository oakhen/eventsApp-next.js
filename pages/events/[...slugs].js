import EventList from "@/components/events/event-list"
import ResultsTitle from "@/components/events/results-title"
import Button from "@/components/ui/button"
import ErrorAlert from "@/components/ui/error-alert"
import Head from "next/head"
import { useRouter } from "next/router"
import { Fragment } from "react"
import useSWR from "swr"

/* useState and useEffect ka use kiya hai aur sara logic yehi pe likha hai */

function FilteredEventsPage() {
  const router = useRouter()
  const params = router.query.slugs

  let Meta = (
    <Head>
      <title>Filtered Events | NextJS Events App</title>
      <meta name="description" content="Find events that fit your schedule" />
    </Head>
  )
  // fetching all events
  const fetcher = (args) => fetch(args).then((res) => res.json())
  const { data, error, isLoading } = useSWR(
    "https://nextjs-realtime-default-rtdb.asia-southeast1.firebasedatabase.app/1.json",
    fetcher,
  )

  if (isLoading) {
    return (
      <Fragment>
        {Meta}
        <p className="center">Loading...</p>
      </Fragment>
    )
  }
  const dateFilter = {
    year: +params[0],
    month: +params[1], //+monthstring,
  }

  /* yaha pe niche rakhna compulsary hai. */
  if (
    isNaN(dateFilter.year) ||
    isNaN(dateFilter.month) ||
    dateFilter.year > 2030 ||
    dateFilter.year < 2020 ||
    dateFilter.month > 12 ||
    dateFilter.month < 1 ||
    error
  ) {
    return (
      <Fragment>
        {Meta}
        <ErrorAlert>Invalid filter. Please adjust your values!</ErrorAlert>

        <div className="center">
          <Button link={"/events"}>Show all events</Button>
        </div>
      </Fragment>
    )
  }

  if (data) {
  }
  const filteredEvents = data.events.filter((event) => {
    const eventDate = new Date(event.date)
    return (
      eventDate.getFullYear() === dateFilter.year &&
      eventDate.getMonth() === dateFilter.month - 1
    )
  })

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        {Meta}
        <ErrorAlert>No events found</ErrorAlert>
        <div className="center">
          <Button link={"/events"}>Show all events</Button>
        </div>
      </Fragment>
    )
  }

  const date = new Date(dateFilter.year, dateFilter.month - 1)

  Meta = (
    <Head>
      <title>Filtered Events</title>
      <meta
        name="description"
        content={`all the events for ${dateFilter.year}/${dateFilter.month}`}
      />
    </Head>
  )
  return (
    <Fragment>
      {Meta}
      <ResultsTitle date={date} />
      <EventList events={filteredEvents} />
    </Fragment>
  )
}

// export async function getServerSideProps(context) {
//   const {
//     params: {
//       slugs: [yearstring, monthstring],
//     },
//   } = context

//   const year = +yearstring
//   const month = +monthstring
//   const dateFilter = { year, month }

//   if (
//     isNaN(year) ||
//     isNaN(month) ||
//     year > 2030 ||
//     year < 2020 ||
//     month > 12 ||
//     month < 1
//   ) {
//     // const filteredEvents = await getFilteredEvents(dateFilter)
//     return {
//       /* alternatively we can also use this code */
//       // notFount:true,
//       // redicert: {
//       //   destination: "/events",
//       // },
//       props: { error: true },
//     }
//   }

//   return {
//     props: {
//       filteredEvents: getFilteredEvents(dateFilter),
//     },
//   }
// }
/* so my this code is ready for server side renderig */

/* everything is working here but for experiment we will use client side 
means react code with default nextjs behaviour */
export default FilteredEventsPage

/* let's over grind these things  */

/* and then dsa and leetcode grind them as well and then get yourself pepared for higher salary */

/* now all i need to do is to grind leetcode */

/* can i learn c and c++ now or is it okay */

/* aise marao mat sab thik karo and over grind things  */
