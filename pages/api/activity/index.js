import db from "../../../utils/db";

export default async (req, res) => {
  try {
    const { slug } = req.body;
    const activities = await db.collection("activities").get();
    const activitiesData = activities.docs.map((activity) => activity.data());

    if (activitiesData.some((activity) => activity.slug === slug)) {
      res.status(400).end();
    } else {
      const { id } = await db.collection("activities").add({
        ...req.body,
        created: new Date().toISOString(),
      });
      res.status(200).json({ id });
    }
  } catch (e) {
    res.status(400).end();
  }
};
