import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

const List = () => {
  const [activity, setActivities] = useState([]);
  useEffect(async () => {
    const res = await axios.get("/api/activities");
    setActivities(res.data.activitiesData);
  }, []);

  return (
    <div>
      <h1>Activities</h1>
      {activities.map((activity) => (
        <div key={activity.id}>
          <Link href={`/admin/edit/${activity.id}`}>
            <a>{activity.title}</a>
          </Link>
          <br />
        </div>
      ))}
    </div>
  );
};

export default List;
