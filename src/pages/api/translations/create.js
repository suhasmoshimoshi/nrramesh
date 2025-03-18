import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { translations } = req.body;

    if (!translations) {
      return res
        .status(400)
        .json({ error: "Missing required field: translations" });
    }

    const client = await clientPromise;
    const db = client.db("nrramesh");
    const collection = db.collection("translations");

    // Replace the entire document with the new translations object
    await collection.updateOne(
      { _id: "global-translations" }, // Identifier for the document
      { $set: { _id: "global-translations", ...translations } },
      { upsert: true } // Create if it doesn't exist
    );

    res
      .status(200)
      .json({ message: "Translations created/replaced successfully" });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      error: "Failed to create/replace translations",
      details: e.message,
    });
  }
}
