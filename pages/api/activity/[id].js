await axios.get(`/api/activity/${id}`);
await axios.delete(`/api/activity/${id}`);
await axios.put(`/api/activity/${id}`, {
  slug: { id },
  title: "Spela pingis",
  place: "Pingisbordet",
  date: "9 maj 2022",
  time: "11.00",
  description: "Träning med att spela pingis. En timme",
  name: "Mohammed",
});

import db from "../../../utils/db";

export default async (req, res) => {
  const { id } = req.query;

  try {
    if (req.method === "PUT") {
      await db
        .collection("activities")
        .doc(id)
        .update({
          ...req.body,
          updated: new Date().toISOString(),
        });
    } else if (req.method === "GET") {
      const doc = await db.collection("activities").doc(id).get();
      if (!doc.exists) {
        res.status(404).end();
      } else {
        res.status(200).json(doc.data());
      }
    } else if (req.method === "DELETE") {
      await db.collection("activities").doc(id).delete();
    }
    res.status(200).end();
  } catch (e) {
    res.status(400).end();
  }
};
