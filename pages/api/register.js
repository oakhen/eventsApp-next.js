import { MongoClient, ServerApiVersion } from "mongodb"

export default async function handler(req, res) {
  const uri =
    "mongodb+srv://akki:ond2a4V7FPbJMHFI@cluster0.ohshiiu.mongodb.net/events?retryWrites=true&w=majority"

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  })

  await client.connect() //isse connection stabilished hoga

  // Send a ping to confirm a successful connection
  await client.db("admin").command({ ping: 1 })
  console.log("Pinged your deployment. You successfully connected to MongoDB!")

  const db = client.db()

  if (req.method === "POST") {
    const { email } = JSON.parse(req.body)

    if (!email || !email.includes("@")) {
      res.status(422).json({ message: "Invalid email address." })
      return
    }
    await db.collection("emails").insertOne({ email })
    client.close()
    res.status(201).json({ message: `Registration Success! for ${email}` })
  } else {
    res.status(201).json({ message: "Invalid Request" })
  }
}
