import Cors from "cors";
import clientPromise from "@/lib/mongodb";

// Initialize the cors middleware
const cors = Cors({
  origin: "*", // Allow all origins (you can restrict this in production)
  methods: ["GET"], // Only allow GET requests for this endpoint
});

// Helper method to wait for the middleware to execute
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default async function handler(req, res) {
  // Run the cors middleware
  await runMiddleware(req, res, cors);

  // Only allow GET requests
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const client = await clientPromise;
    const db = client.db("nrramesh");
    const collection = db.collection("translations");

    // Fetch translations from MongoDB
    const translations = await collection.findOne({
      _id: "global-translations",
    });

    if (!translations) {
      return res.status(404).json({ error: "Translations not found" });
    }

    res.status(200).json(translations);
  } catch (e) {
    console.error(e);
    res.status(500).json({
      error: "Failed to fetch translations",
      details: e.message,
    });
  }
}
