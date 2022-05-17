import { db } from "../../../utils/db";
import Link from "../../../src/Link";

export default function Home({ activities }) {
  console.log(activities);
  return (
    <ul>
      {activities.map((activity) => {
        return (
          <li key={activity.id}>
            <Link href={"/api/cards/$activity.id"}>
              <a>{activity.title}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export async function getServerSideProps() {
  const snapshots = await db.collection("activities").get();

  const activities = snapshots.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data().values,
    };
  });

  return {
    props: {
      activities: JSON.parse(JSON.stringify(activities)),
    },
  };
}
