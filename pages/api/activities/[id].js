// import db from "../../../utils/db";

// // export default async (req, res) => {
// //     try {
// //       const activities = await db.collection("activities").get();

// //       const data = activities.docs.map((activity) => ({
// //         id: activity.id,
// //         ...activity.data(),
// //       }));
// //       res.status(200).json({ activities });
// //     } catch (e) {
// //       res.status(400).end();
// //     }
// //   };

// const foof = async (req, res) => {
//   await db.collection("activities").get();
//   const {
//     query: { id },
//     method,
//   } = req;

//   switch (method) {
//     case "GET":
//       try {
//         const card = await Card.findById(id);

//         if (!card) {
//           return res.status(400).json({ success: false });
//         }

//         res.status(200).json({ success: true, data: card });
//       } catch (error) {
//         res.status(400).json({ success: false });
//       }
//       break;
//     case "POST":
//       try {
//         const card = await Card.findByIdAndUpdate(id, req.body, {
//           new: true,
//           runValidators: true,
//         });

//         if (!card) {
//           return res.status(400).json({ success: false });
//         }

//         res.status(200).json({ success: true, data: card });
//       } catch (error) {
//         res.status(400).json({ success: false });
//       }
//       break;
//     case "DELETE":
//       try {
//         const deletedCard = await Card.deleteOne({ _id: id });

//         if (!deletedCard) {
//           return res.status(400).json({ success: false });
//         }

//         res.status(200).json({ success: true, data: {} });
//       } catch (error) {
//         res.status(400).json({ success: false });
//       }
//       break;
//     default:
//       res.status(400).json({ success: false });
//       break;
//   }
// };

// export default foof;
