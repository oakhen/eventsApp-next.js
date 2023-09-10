import { MongoClient } from "mongodb"

export default async function handler(req, res) {
  const uri =
    "mongodb+srv://akki:ond2a4V7FPbJMHFI@cluster0.ohshiiu.mongodb.net/events?retryWrites=true&w=majority"

  const client = await MongoClient.connect(uri)

  const db = client.db()

  if (req.method === "POST") {
    const eventId = req.query.eventid
    const { email, name, text } = JSON.parse(req.body)

    if (
      !email ||
      !name ||
      !text ||
      !email.includes("@") ||
      name.trim() === "" ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input, please try again!" })
      return
    }
    const newComment = { eventId, email, name, text }
    const result = await db.collection("comments").insertOne(newComment)
    console.log(result)
    res.status(200).json({ message: "Success", comment: newComment })
    console.log(email, name, text)
  }
  if (req.method === "GET") {
    const eventId = req.query.eventid
    const comments = await db
      .collection("comments")
      .find({ eventId })
      .sort({ _id: -1 })
      .limit(10)
      .toArray()
    /* so is event id se conneted sara event aega */
    res.status(200).json({ comments })
  }
  client.close()
}

/* better error handling and organizing the code is due here */
