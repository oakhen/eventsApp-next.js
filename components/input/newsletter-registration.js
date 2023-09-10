import { useRef } from "react"
import classes from "./newsletter-registration.module.css"

function NewsletterRegistration() {
  const emailInput = useRef()
  function registrationHandler(e) {
    e.preventDefault()

    // optional: validate input

    fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({
        email: emailInput.current.value,
      }),
    }).then((response) => response.json().then((data) => console.log(data)))
    emailInput.current.value = ""
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={emailInput}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  )
}

export default NewsletterRegistration
