export const getAllEvents = async () => {
  const response = await fetch(
    "https://nextjs-realtime-default-rtdb.asia-southeast1.firebasedatabase.app/1.json",
  )
  const data = await response.json()
  const events = data.events
  return events
}

export async function getFeaturedEvents() {
  const DUMMY_EVENTS = await getAllEvents()
  return DUMMY_EVENTS.filter((event) => event.isFeatured)
}

export async function getEventById(id) {
  const DUMMY_EVENTS = await getAllEvents()
  return DUMMY_EVENTS.find((event) => event.id === id)
}

export async function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter
  const DUMMY_EVENTS = await getAllEvents()
  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date)
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    )
  })

  return filteredEvents
}
