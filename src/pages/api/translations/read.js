import clientPromise from "@/lib/mongodb";


export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const client = await clientPromise;
    const db = client.db("nrramesh");
    const collection = db.collection("translations");

    const translations = await collection.findOne({
      _id: "global-translations",
    });

    if (!translations) {
      return res.status(404).json({ error: "Translations not found" });
    }

    res.status(200).json(translations);
  } catch (e) {
    console.error(e);
    res
      .status(500)
      .json({ error: "Failed to fetch translations", details: e.message });
  }
}
