import db from "../../utils/db";

export default async (req, res) => {
  try {
    const cards = await db.collection("activities").get();

    const cardsData = cards.docs.map((card) => ({
      id: card.id,
      ...card.data(),
    }));
    res.status(200).json({ cardsData });
  } catch (e) {
    res.status(400).end();
  }
};
