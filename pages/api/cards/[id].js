import { db } from "../../../utils/db";

export default function Activity({ activity }) {
  return (
    <div>
      <h1>{activity.title}</h1>
      <h2>{activity.description}</h2>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;

  const doc = await db.collection("activities").doc(id).get();

  const activity = {
    id: doc.id,
    ...doc.data(),
  };

  return {
    props: {
      activity: activity,
    },
  };
}
