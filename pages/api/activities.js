import db from "../../utils/db";

export default async (req, res) => {
  try {
    const activities = await db.collection("activities").get();

    const activitiesData = activities.docs.map((activity) => ({
      id: activity.id,
      ...activity.data(),
    }));
    res.status(200).json({ activitiesData });
  } catch (e) {
    res.status(400).end();
  }
};

// const messageRef = doc(db, "activities", "roomA", );

//   res.status(200).json({ activitiesData });
// } catch (e) {
//   res.status(400).end();
// }
