import EventContent from "@/components/event-detail/event-content"
import EventLogistics from "@/components/event-detail/event-logistics"
import EventSummary from "@/components/event-detail/event-summary"
import Comments from "@/components/input/comments"
import Button from "@/components/ui/button"
import ErrorAlert from "@/components/ui/error-alert"
import { getEventById, getFeaturedEvents } from "@/helpers/api-utils"
import Head from "next/head"
import { Fragment } from "react"
function EventsDetailPage({ element }) {
  if (!element) {
    return (
      <Fragment>
        <ErrorAlert>no event found</ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    )
  }
  return (
    <Fragment>
      <Head>
        <title>{element.title}</title>
        <meta name="description" content={element.description} />
      </Head>
      <EventSummary title={element.title} />

      <EventLogistics
        date={element.date}
        address={element.location}
        image={element.image}
        imageAlt={element.title}
      />
      <EventContent>
        <p>{element.description}</p>{" "}
      </EventContent>
      <Comments eventId={element.id} />
    </Fragment>
  )
}
export async function getStaticPaths() {
  const allEventArray = await getFeaturedEvents()
  /* agar 365 events ho toh */
  /* featured events are more likely to be clicked */
  const pathsArray = allEventArray.map((event) => ({
    params: { eventsid: event.id },
  }))
  return {
    paths: pathsArray,
    fallback: "blocking" /* 404 for not listed */,
    /* true means there are more pages than we rerander */
    /* true when we have to pre-rende few and do not want to rerender all the time */
    /* false means we rerender all the time */
    /* false when we have to pre-render all the time */
    /* agar hum yaha pe fallback nai dalege aur wahe pe manual path 
    enter kr ke jaenge toh to error dega */
    /* agar sara event ko pregenerate nai kar rahe hai toh fallback true */
    /* false matlab agar path pre-defined nai hai to 404 do.
     */
    /* true hai toh react pe chod do probs fir v serever hi dega */
    /* blocking means wait for the sever data  */
    /* agar hum yaha pe fallback nai dalege aur wahe pe manual path 
    enter kr ke jaenge toh to error dega */

    /* behave like normal page  */
    /* agar sara event ko pregenerate nai kar rahe hai toh fallback true */
    /* false matlab agar path pre-defined nai hai to 404 do.
     */
    /* true hai toh react pe chod do probs fir v serever hi dega */
    /* blocking means wait for the sever data  */
    /* agar hum yaha pe fallback nai dalege aur wahe pe manual path 
    enter kr ke jaenge toh to error dega */
  }
}
export async function getStaticProps(context) {
  const { params } = context
  console.log("This code re-ran")
  return {
    props: {
      element: await getEventById(params.eventsid),
    },
    revalidate: 30,

    /* kyunki sara event ke liye ek hi page hai toh update time km hoga */
  }
}

/* now yaha pe thoda tricky situation hai */
export default EventsDetailPage
