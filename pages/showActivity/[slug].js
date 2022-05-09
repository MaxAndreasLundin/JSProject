// import { useRouter } from "next/router";
// import db from "../../utils/db";
// import ActivityCard from "../../components/ActivityCard.js";

// const showActivity = (props) => {
//   const { activity } = props;
//   const router = useRouter();
//   if (router.isFallback) {
//     return <div>loading</div>;
//   } else {
//     if (activity) {
//       return (
//         <div key={activity._id}>
//           <ActivityCard
//             title={activity.title}
//             content={activity.description}
//             place={activity.place}
//             date={activity.date}
//             time={activity.time}
//             name={activity.name}
//             avatar={activity.avatar}
//           ></ActivityCard>
//         </div>
//       );
//     } else {
//       return <div>not found</div>;
//     }
//   }
// };

// export const getStaticPaths = async () => {
//   const activities = await db.collection("activities").get();
//   const paths = activities.docs.map((activity) => ({
//     params: {
//       slug: activity.data().slug,
//     },
//   }));
//   return {
//     paths,
//     fallback: true,
//   };
// };

// export const getStaticProps = async (context) => {
//   const { slug } = context.params;
//   const res = await db.collection("activities").get();
//   const activity = res.docs.map((activity) => activity.data());
//   if (activity.length) {
//     return {
//       props: {
//         activity: activity,
//         //  activity: activity[0],
//       },
//     };
//   } else {
//     return {
//       props: {},
//     };
//   }
// };

// export default showActivity;
