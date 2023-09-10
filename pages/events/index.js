import EventList from "@/components/events/event-list"

import SearchEvent from "./search-events"
import { useRouter } from "next/router"
import { getAllEvents } from "@/helpers/api-utils"
import Head from "next/head"

function AllEvents({ events }) {
  const router = useRouter()

  const handleSearchEvent = (year, month) => {
    router.push(`/events/${year}/${month}`)
  }

  return (
    <div>
      <Head>
        <title>All Events</title>
        <meta
          name="description"
          content="Find a lot of great event that will help you to evolve"
        />
        <meta name="keywords" content="All Events" />
        <meta name="author" content="All Events" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <SearchEvent onSearch={handleSearchEvent} />

      <EventList events={events} />
    </div>
  )
}

export async function getStaticProps() {
  // const events = await getAllEvents()
  return {
    props: {
      events: await getAllEvents(),
    },
    revalidate: 60,
  }
}
export default AllEvents

/* so ye bohot acha challenge hai mere liye aur sayad hum yaha pe 
bohot kuch samjh sakte hai. */
