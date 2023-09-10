import EventList from "@/components/events/event-list"
import NewsletterRegistration from "@/components/input/newsletter-registration"
// import { getFeaturedEvents } from "@/dummy-data"
import { getFeaturedEvents } from "@/helpers/api-utils"
import Head from "next/head"

const head = (
  <Head>
    <meta
      name="description"
      content="@@@This is the Home Page of my Awesome app!"
    />
    <title>Home Page</title>
  </Head>
)

function HomePage({ events }) {
  // const events = getFeaturedEvents()
  return (
    <div>
      {head}
      <NewsletterRegistration />
      <EventList events={events} />
    </div>
  )
}
export async function getStaticProps() {
  return {
    props: {
      events: await getFeaturedEvents(),
    },
    revalidate: 1800,
  }
}
export default HomePage

/* so may be is app ko complete krne ke liye hmko event submit krne 
ka form banana chahiye */
