import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  if (req.method !== "PATCH") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { updates } = req.body;

    if (!updates || typeof updates !== "object") {
      return res.status(400).json({ error: "Invalid or missing updates" });
    }

    const client = await clientPromise;
    const db = client.db("nrramesh");
    const collection = db.collection("translations");

    // Update specific fields using $set
    await collection.updateOne(
      { _id: "global-translations" },
      { $set: updates }
    );

    res.status(200).json({ message: "Translations updated successfully" });
  } catch (e) {
    console.error(e);
    res
      .status(500)
      .json({ error: "Failed to update translations", details: e.message });
  }
}
