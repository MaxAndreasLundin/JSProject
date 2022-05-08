import { useRouter } from "next/router";
import db from "../../utils/db";

const Post = (props) => {
  const { activity } = props;
  const router = useRouter();
  if (router.isFallback) {
    return <div>loading</div>;
  } else {
    if (activity) {
      return (
        <div key={card._id}>
          <ActivityCard
            title={card.title}
            content={card.description}
            place={card.place}
            date={card.date}
            time={card.time}
            name={card.name}
            avatar={card.avatar}
          ></ActivityCard>
        </div>
      );
    } else {
      return <div>not found</div>;
    }
  }
};

export const getStaticPaths = async () => {
  const entries = await db.collection("activities").get();
  const paths = entries.docs.map((entry) => ({
    params: {
      slug: entry.data().slug,
    },
  }));
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { slug } = context.params;
  const res = await db.collection("activities").get();
  const entry = res.docs.map((entry) => entry.data());
  if (entry.length) {
    return {
      props: {
        entry: entry[0],
      },
    };
  } else {
    return {
      props: {},
    };
  }
};

export default Post;
