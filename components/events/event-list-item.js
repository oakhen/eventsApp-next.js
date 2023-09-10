import classes from "./event-item.module.css"
import Button from "../ui/button"
import DateIcon from "../icons/date-icon"
import ArrowRightIcon from "../icons/arrow-right-icon"
import AddressIcon from "../icons/address-icon"
import Image from "next/image"

/* so yaha pe ye keh raha hai classes or style the name is up to me */

function EventListItem({ item }) {
  const { title, date, image, location, id } = item

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  /* numeric */
  /* long */
  const formattedAddress = location.replace(", ", "\n")

  const exploreLink = `/events/${id}`

  return (
    <li className={classes.item}>
      <Image width={1080} height={786} src={"/" + image} alt="" />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />

            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />

            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  )
}
export default EventListItem

/* Nextjs ka Image tag dega aur isme jab hum image ko dalte hai toh
wo kya kya kar ke deta hai 
sabse pehle  toh webp  pe convert karega and image size ko bohot km kar dega .
jitan page dikhai de raha hai utna hi 
multiple instance of optimized image
they are not generated in advanced wo tab generate karega jab hum us page pe pohochenge and fir usko wo cache kar lega
so yaha pe on the fly optimize karne then usko cache karna ye next js 
ka feature hai.
images are lazy loaded means they are only downloaded when they are vizible
*/

/* av itna kuch toh pata hai par av v bohot kuch nai pata */

/* agar mere paas koi image url hai fir uske saath kya karne ka hai. */
