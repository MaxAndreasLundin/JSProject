import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import dashify from "dashify";
import axios from "axios";

const EditActivity = () => {
  const router = useRouter();
  const [content, setContent] = useState({
    title: undefined,
    body: undefined,
  });

  useEffect(async () => {
    const { id } = router.query;
    if (id) {
      const res = await axios.get(`/api/activities/${id}`);
      const { title, date, place, time, description, avatar } = res.data;
      setContent({
        title,
        date,
        place,
        time,
        description,
        avatar,
      });
    }
  }, [router]);

  const onChange = (e) => {
    const { value, name } = e.target;
    setContent((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmit = async (e) => {
    const { id } = router.query;
    const { title, body } = content;
    console.log(id, title, place);
    await axios.put(`/api/activities/${id}`, {
      slug: dashify(title),
      title,
      body,
    });
  };

  const onDelete = async () => {
    const { id } = router.query;
    await axios.delete(`/api/activities/${id}`);
    router.back();
  };

  return (
    <div>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        value={content.title}
        onChange={onChange}
      />
      <label htmlFor="body">Body</label>
      <textarea name="body" value={content.body} onChange={onChange} />
      <button type="button" onClick={onSubmit}>
        Submit
      </button>
      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default EditActivity;

// await axios.get(`/api/activities/${id}`);
// await axios.delete(`/api/activities/${id}`);
// await axios.put(`/api/activities/${id}`, {
//   slug: "foo-bar",
//   title: "Foo Bar",
//   body: "Lorem ipsum",
// });
