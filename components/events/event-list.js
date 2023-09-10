import EventListItem from "./event-list-item"

import classes from "./example.module.css"

function EventList({ events }) {
  return (
    <ul className={classes.list}>
      {events.map((event) => (
        <EventListItem item={event} key={event.id} />
      ))}
    </ul>
  )
}
export default EventList
