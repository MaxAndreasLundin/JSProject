// import Link from "next/link";
// import db from "../../utils/db";
// import ActivityCard from "../../components/ActivityCard.js";

// const showActivity = (props) => {
//   const { activitiesData } = props;

//   return (
//     <div>
//       <h1>Activities</h1>
//       {activitiesData.map((activity) => {
//         return (
//           <div key={activity._id}>
//             <ActivityCard
//               title={activity.title}
//               content={activity.description}
//               place={activity.place}
//               date={activity.date}
//               time={activity.time}
//               name={activity.name}
//               avatar={activity.avatar}
//             ></ActivityCard>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export const getStaticProps = async () => {
//   const activities = await db.collection("activities").get();
//   const activitiesData = activities.docs.map((activity) => ({
//     id: activity.id,
//     ...activity.data(),
//   }));
//   return {
//     props: { activitiesData },
//     revalidate: 10,
//   };
// };

// export default showActivity;
